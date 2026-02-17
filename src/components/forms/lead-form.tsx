"use client";

import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Введите имя"),
  company: z.string().min(2, "Введите компанию"),
  email: z.string().email("Некорректный email"),
  phone: z.string().optional(),
  interest: z.string().min(1, "Выберите интерес"),
  message: z.string().min(10, "Опишите задачу"),
  consent: z.boolean().refine((v) => v, "Нужно согласие на обработку ПДн")
});

type FormValues = z.infer<typeof schema>;

type LeadFormProps = { defaultInterest?: string; defaultMessage?: string };

export function LeadForm({ defaultInterest = "ИИ-агенты", defaultMessage = "" }: LeadFormProps) {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { interest: defaultInterest, message: defaultMessage, consent: false }
  });

  const onSubmit = async (values: FormValues) => {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });

    if (!res.ok) {
      toast.error("Не удалось отправить заявку");
      return;
    }

    toast.success("Заявка отправлена");
    reset();
    setSent(true);
  };

  if (sent) {
    return <div className="glass rounded-2xl p-8 text-center text-lg">Заявка отправлена. В течение рабочего дня вернёмся с планом и SLA запуска.</div>;
  }

  return (
    <form className="glass grid gap-4 rounded-2xl p-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Имя" error={errors.name?.message}><input {...register("name")} className="w-full rounded-lg border border-white/20 bg-white/5 p-3" /></Field>
        <Field label="Компания" error={errors.company?.message}><input {...register("company")} className="w-full rounded-lg border border-white/20 bg-white/5 p-3" /></Field>
        <Field label="Email" error={errors.email?.message}><input {...register("email")} className="w-full rounded-lg border border-white/20 bg-white/5 p-3" /></Field>
        <Field label="Телефон (опционально)" error={errors.phone?.message}><input {...register("phone")} className="w-full rounded-lg border border-white/20 bg-white/5 p-3" /></Field>
      </div>
      <Field label="Интерес" error={errors.interest?.message}>
        <select {...register("interest")} className="w-full rounded-lg border border-white/20 bg-white/5 p-3">
          <option>ИИ-агенты</option><option>Видеоаналитика и наблюдение</option><option>Геоаналитика</option><option>Антифрод</option><option>Платформа Data & AI</option>
        </select>
      </Field>
      <Field label="Сообщение" error={errors.message?.message}><textarea {...register("message")} rows={4} className="w-full rounded-lg border border-white/20 bg-white/5 p-3" /></Field>
      <label className="flex items-center gap-2 text-sm text-muted">
        <input type="checkbox" {...register("consent")} />
        Согласен(а) на обработку персональных данных
      </label>
      {errors.consent ? <p className="text-sm text-red-400">{errors.consent.message}</p> : null}
      <Button type="submit" className="w-fit" >{isSubmitting ? "Отправка..." : "Оставить заявку"}</Button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-muted">{label}</span>
      {children}
      {error ? <span className="text-red-400">{error}</span> : null}
    </label>
  );
}
