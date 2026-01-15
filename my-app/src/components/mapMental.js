export default function MapMental() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* ===== DESKTOP/TABLET (md+) ===== */}
        <div className="relative mx-auto hidden h-95 w-full max-w-245 md:block">
          {/* Linhas (conexões) */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 980 380"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <g
              stroke="var(--primary)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            >
              {/* do centro para esquerda (duas) */}
              <path d="M 390 175 L 250 175 L 250 115 L 165 115" />
              <path d="M 390 205 L 250 205 L 250 265 L 165 265" />

              {/* do centro para direita (duas) */}
              <path d="M 590 175 L 730 175 L 730 115 L 815 115" />
              <path d="M 590 205 L 730 205 L 730 265 L 815 265" />

              {/* do centro para topo */}
              <path d="M 490 135 L 490 75" />

              {/* do centro para baixo */}
              <path d="M 490 245 L 490 305" />
            </g>
          </svg>

          {/* Caixa central */}
          <div className="absolute left-1/2 top-1/2 w-105 -translate-x-1/2 -translate-y-1/2">
            <Card>
              <h2 className="text-center text-3xl font-extrabold leading-tight">
                Gestão Estratégica <br />
                de <span className="text-(--primary)">Ifood</span>
              </h2>
            </Card>
          </div>

          {/* Topo */}
          <div className="absolute left-1/2 top-4.5 w-95 -translate-x-1/2">
            <Card small>
              <p className="text-center text-base font-semibold">
                Suporte técnico especializado <br />
                para{" "}
                <span className="text-(--primary)">
                  cancelamento e problemas
                </span>
              </p>
            </Card>
          </div>

          {/* Baixo */}
          <div className="absolute left-1/2 bottom-4.5 w-110 -translate-x-1/2">
            <Card small>
              <p className="text-center text-base font-semibold">
                Acompanhamento e ações <br />
                na aba de{" "}
                <span className="text-(--primary)">feed e marketing</span>
              </p>
            </Card>
          </div>

          {/* Esquerda cima */}
          <div className="absolute left-5 top-20.5 w-75">
            <Card small>
              <p className="text-center text-base font-semibold">
                Análise de lojas <br />
                por{" "}
                <span className="text-(--primary)">posicionamento</span>
              </p>
            </Card>
          </div>

          {/* Esquerda baixo */}
          <div className="absolute left-5 bottom-20.5 w-65">
            <Card small>
              <p className="text-center text-base font-semibold">
                Ajuste de{" "}
                <span className="text-(--primary)">cardápio</span>
              </p>
            </Card>
          </div>

          {/* Direita cima */}
          <div className="absolute right-5 top-20.5 w-65">
            <Card small>
              <p className="text-center text-base font-semibold">
                Ajuste de <br />
                <span className="text-(--primary)">posicionamento</span>
              </p>
            </Card>
          </div>

          {/* Direita baixo */}
          <div className="absolute right-5 bottom-20.5 w-[320px]">
            <Card small>
              <p className="text-center text-base font-semibold">
                Relatório dos índices <br />
                de <span className="text-(--primary)">desempenho</span>
              </p>
            </Card>
          </div>
        </div>

        {/* ===== MOBILE (até md) ===== */}

        <div className="md:hidden">
          <div
            className="
      relative grid gap-4
      pl-8
      before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2
      before:w-0.75 before:rounded-full
      before:bg-(--primary)
      before:opacity-80
    "
          >
            {/* Card central (topo) */}
            <div className="relative">
              {/* bolinha na linha */}
              <span className="absolute -left-6.5 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-(--primary) shadow-[0_0_0_4px_rgba(0,0,0,0.06)]" />
              <Card>
                <h2 className="text-center text-2xl font-extrabold leading-tight">
                  Gestão Estratégica de{" "}
                  <span className="text-(--primary)">Ifood</span>
                </h2>
              </Card>
            </div>

            {[
              [
                "Suporte técnico especializado para",
                "cancelamento e problemas",
              ],
              ["Análise de lojas por", "posicionamento"],
              ["Ajuste de", "cardápio"],
              ["Ajuste de", "posicionamento"],
              ["Relatório dos índices de", "desempenho"],
              ["Acompanhamento e ações na aba de", "feed e marketing"],
            ].map(([a, b]) => (
              <div className="relative" key={a + b}>
                {/* bolinha na linha */}
                <span className="absolute -left-6.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-white border-2 border-(--primary)" />
                <Card small>
                  <p className="text-center font-semibold">
                    {a} <span className="text-(--primary)">{b}</span>
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ children, small = false }) {
  return (
    <div
      className={[
        "rounded-2xl bg-white",
        "border-2 border-(--primary)",
        "shadow-[0_12px_28px_rgba(0,0,0,0.18)]",
        small ? "px-5 py-4" : "px-7 py-6",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
