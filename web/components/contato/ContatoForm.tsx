"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";
import { enviarContato, type ContatoState } from "@/app/contato/actions";
import { PrimaryButtonSubmit } from "@/components/ui/PrimaryButton";
import { contatoInteresseOptions } from "@/lib/content/site";
import { Loader2 } from "lucide-react";

const initial: ContatoState = { ok: false };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
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
  );
}

export function ContatoForm() {
  const [state, formAction] = useFormState(enviarContato, initial);

  useEffect(() => {
    if (state.ok && state.message) {
      toast.success(state.message);
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <form action={formAction} className="max-w-xl space-y-5">
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
      <SubmitButton />
      <p className="font-label text-xs text-slate-400 mt-3">
        Responderemos em até 24 horas úteis · Sigilo garantido
      </p>
    </form>
  );
}
