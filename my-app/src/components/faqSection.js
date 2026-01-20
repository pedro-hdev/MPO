"use client"

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FaqSection({
  title = "FAQ",
  subtitle = "Dúvidas comuns antes de entrar.",
  items = [],
}) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-white text-4xl font-extrabold">{title}</h2>
          <p className="text-white/60 mt-2">{subtitle}</p>
        </div>

        {/* Lista */}
        <div className="space-y-4">
          {items.map((item, idx) => (
            <FaqItem key={idx} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        rounded-2xl
        border border-white/10
        bg-linear-to-b from-[#1B1F24] to-[#14181D]
        shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_18px_50px_rgba(0,0,0,0.45)]
        overflow-hidden
      "
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="
          w-full flex items-center justify-between
          px-6 py-5
          text-left
          text-white font-semibold
          hover:bg-white/5 transition
        "
      >
        <span className="pr-4">{question}</span>
        <FaChevronDown
          className={`shrink-0 text-white/70 transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Conteúdo */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-white/70 leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
