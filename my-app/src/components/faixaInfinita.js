import { FaStar } from "react-icons/fa";

export default function FaixaInfinita() {
  const item = (
    <div className="flex items-center gap-3 px-6">
      <span className="font-semibold text-white">
        Bruno Wendell - Gestor de Tráfego - MPO
      </span>
      <FaStar className="text-white/90 text-sm" />
    </div>
  );

  return (
    <div className="w-full overflow-hidden bg-[#0a0fbf] border-y border-white/10 py-2">
      {/* CSS local da animação */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="flex whitespace-nowrap">
        <div
          className="flex"
          style={{ animation: "marquee 36s linear infinite" }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`a-${i}`}>{item}</div>
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`b-${i}`}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}