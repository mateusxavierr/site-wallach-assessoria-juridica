"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { PrimaryButtonSubmit } from "@/components/ui/PrimaryButton";
import { contatoInteresseOptions, siteConfig } from "@/lib/content/site";
import { Loader2 } from "lucide-react";

const schema = z.object({
  nome: z.string().min(3, "Informe seu nome completo"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().optional(),
  area: z.string().optional(),
  mensagem: z.string().min(20, "Descreva sua situação em pelo menos 20 caracteres"),
});

const web3key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export function ContatoForm() {
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const form = e.currentTarget;
    const data = {
      nome: String(new FormData(form).get("nome") ?? "").trim(),
      email: String(new FormData(form).get("email") ?? "").trim(),
      telefone: String(new FormData(form).get("telefone") ?? "").trim() || undefined,
      area: String(new FormData(form).get("area") ?? "").trim() || undefined,
      mensagem: String(new FormData(form).get("mensagem") ?? "").trim(),
    };

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setPending(false);
      toast.error(parsed.error.issues[0]?.message ?? "Dados inválidos");
      return;
    }

    const b = parsed.data;
    const bodyText = `Telefone: ${b.telefone ?? "—"}\nÁrea: ${b.area ?? "—"}\n\n${b.mensagem}`;

    if (web3key) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3key,
            name: b.nome,
            email: b.email,
            message: bodyText,
            subject: "Contato — site Wallach",
            from_name: b.nome,
          }),
        });
        const json = (await res.json()) as { success?: boolean; message?: string };
        if (!res.ok || !json.success) {
          throw new Error(json.message ?? "Falha ao enviar");
        }
        toast.success("Mensagem enviada. Retornaremos em breve.");
        form.reset();
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Não foi possível enviar. Tente o telefone.");
      } finally {
        setPending(false);
      }
      return;
    }

    // Sem API: abre o cliente de e-mail (100% estático)
    const subject = encodeURIComponent("Contato pelo site — Wallach");
    const body = encodeURIComponent(
      `Nome: ${b.nome}\nE-mail: ${b.email}\nTelefone: ${b.telefone ?? "—"}\nÁrea: ${b.area ?? "—"}\n\nMensagem:\n${b.mensagem}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    toast.info("Abrindo seu e-mail. Se nada abrir, copie: " + siteConfig.email);
    setPending(false);
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-5">
      <div>
        <label
          className="block text-[10px] font-label font-bold uppercase tracking-widest text-slate-500 mb-2"
          htmlFor="nome"
        >
          Nome completo *
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          autoComplete="name"
          placeholder="Seu nome completo"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 hover:border-slate-400 hover:bg-white focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15 focus:bg-white outline-none transition-all duration-200 font-body text-slate-700 placeholder:text-slate-400"
        />
      </div>
      <div>
        <label
          className="block text-[10px] font-label font-bold uppercase tracking-widest text-slate-500 mb-2"
          htmlFor="email"
        >
          E-mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="seu@email.com"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 hover:border-slate-400 hover:bg-white focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15 focus:bg-white outline-none transition-all duration-200 font-body text-slate-700 placeholder:text-slate-400"
        />
      </div>
      <div>
        <label
          className="block text-[10px] font-label font-bold uppercase tracking-widest text-slate-500 mb-2"
          htmlFor="telefone"
        >
          Telefone
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          autoComplete="tel"
          placeholder="(81) 99999-9999"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 hover:border-slate-400 hover:bg-white focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15 focus:bg-white outline-none transition-all duration-200 font-body text-slate-700 placeholder:text-slate-400"
        />
      </div>
      <div>
        <label
          className="block text-[10px] font-label font-bold uppercase tracking-widest text-slate-500 mb-2"
          htmlFor="area"
        >
          Área de interesse
        </label>
        <div className="relative">
          <select
            id="area"
            name="area"
            defaultValue=""
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 hover:border-slate-400 hover:bg-white focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15 focus:bg-white outline-none transition-all duration-200 font-body text-slate-700 appearance-none cursor-pointer pr-10"
          >
            {contatoInteresseOptions.map((opt) => (
              <option
                key={String(opt.value) || "default"}
                value={opt.value}
                disabled={"disabled" in opt && opt.disabled}
              >
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <label
          className="block text-[10px] font-label font-bold uppercase tracking-widest text-slate-500 mb-2"
          htmlFor="mensagem"
        >
          Mensagem *
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          placeholder="Descreva brevemente sua situação jurídica..."
          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 hover:border-slate-400 hover:bg-white focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15 focus:bg-white outline-none transition-all duration-200 font-body text-slate-700 placeholder:text-slate-400 resize-y"
        />
      </div>
      <PrimaryButtonSubmit disabled={pending} withArrow={!pending} type="submit">
        {pending ? (
          <span className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" strokeWidth={1.5} />
            Enviando...
          </span>
        ) : (
          "Enviar Mensagem"
        )}
      </PrimaryButtonSubmit>
      <p className="font-label text-xs text-slate-400 mt-3">
        Responderemos em até 24 horas úteis · Sigilo garantido
      </p>
    </form>
  );
}
