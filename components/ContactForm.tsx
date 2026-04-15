"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    void data;
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitted(true);
    reset();
  };

  return (
    <form
      className="space-y-4 rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact form"
    >
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm outline-none ring-cyan-500/60 focus:ring-2 dark:border-slate-700 dark:bg-slate-900"
          {...register("name", { required: "Name is required", minLength: 2 })}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm outline-none ring-cyan-500/60 focus:ring-2 dark:border-slate-700 dark:bg-slate-900"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
          })}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm outline-none ring-cyan-500/60 focus:ring-2 dark:border-slate-700 dark:bg-slate-900"
          {...register("message", { required: "Message is required", minLength: 10 })}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {isSubmitted && (
        <p className="text-sm text-emerald-600 dark:text-emerald-400">
          Thanks! Your message has been submitted successfully.
        </p>
      )}
    </form>
  );
}
