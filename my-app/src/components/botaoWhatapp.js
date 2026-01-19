import { FaWhatsapp } from "react-icons/fa";

export default function BotaoWhatsapp() {
  return (
    <a
      href="#"
      className="relative inline-flex items-center justify-center gap-1
                 rounded px-4 py-2
                 text-base font-semibold uppercase tracking-wide text-white
                 bg-linear-to-b from-sky-300 via-sky-500 to-blue-700
                 ring-1 ring-white/25
                 shadow-[0_0_18px_rgba(56,189,248,0.55),0_10px_22px_rgba(0,0,0,0.45)]
                 transition hover:brightness-110
                 hover:shadow-[0_0_28px_rgba(56,189,248,0.75),0_12px_26px_rgba(0,0,0,0.5)]
                 active:scale-[0.99]
                 before:content-[''] before:absolute before:inset-0 before:rounded-md
                 before:bg-linear-to-b before:from-white/25 before:to-transparent before:opacity-70
                 before:pointer-events-none
                 after:content-[''] after:absolute after:-inset-2.5 after:rounded-lg
                 after:bg-sky-400/20 after:blur-2xl after:-z-10"
    >
      QUERO ACESSO POR R$ 97,00
    </a>
  );
}
