"use server";

import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  nome: z.string().min(3, "Informe seu nome completo"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().optional(),
  area: z.string().optional(),
  mensagem: z.string().min(20, "Descreva sua situação em pelo menos 20 caracteres"),
});

export type ContatoState = { ok: boolean; error?: string; message?: string };

export async function enviarContato(
  _prevState: ContatoState,
  formData: FormData
): Promise<ContatoState> {
  const raw = {
    nome: String(formData.get("nome") ?? ""),
    email: String(formData.get("email") ?? ""),
    telefone: String(formData.get("telefone") ?? "") || undefined,
    area: String(formData.get("area") ?? "") || undefined,
    mensagem: String(formData.get("mensagem") ?? ""),
  };

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      error: parsed.error.issues[0]?.message ?? "Dados inválidos",
    };
  }

  const data = parsed.data;
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("RESEND_API_KEY ausente");
    return {
      ok: false,
      error: "Configuração de e-mail indisponível. Tente o telefone.",
    };
  }

  const resend = new Resend(key);

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM ?? "Site Wallach <onboarding@resend.dev>",
      to: process.env.RESEND_TO ?? "contato@wallach.adv.br",
      subject: `Nova mensagem de ${data.nome} — ${data.area || "Site Wallach"}`,
      html: `
      <h2>Nova mensagem pelo site</h2>
      <p><strong>Nome:</strong> ${escapeHtml(data.nome)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Telefone:</strong> ${escapeHtml(data.telefone || "Não informado")}</p>
      <p><strong>Área:</strong> ${escapeHtml(data.area || "Não informada")}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${escapeHtml(data.mensagem).replace(/\n/g, "<br/>")}</p>
    `,
      replyTo: data.email,
    });

    if (error) {
      return { ok: false, error: error.message || "Falha ao enviar" };
    }
  } catch {
    return { ok: false, error: "Falha ao enviar. Tente novamente." };
  }

  return { ok: true, message: "Mensagem enviada com sucesso." };
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
