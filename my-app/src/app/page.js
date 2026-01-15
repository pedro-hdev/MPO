import BotaoWhatsapp from "@/components/botaoWhatapp";
import { PiSealCheckBold } from "react-icons/pi";
import { GoChecklist } from "react-icons/go";
import { AiOutlineRise } from "react-icons/ai";
import MapMental from "@/components/mapMental";
import FaixaInfinita from "@/components/faixaInfinita";

export default function Home() {
  return (
    <div>
      {/*banner*/}
      <section className="bg-[#020205] bg-cover bg-center">
        <div
          className="
    m-auto max-w-7xl flex justify-center items-end pt-10
    flex-col lg:flex-row
    gap-8 lg:gap-10
    px-4 lg:px-2
    text-center lg:text-left
  "
        >
          {/* ===== COLUNA TEXTO ===== */}
          <div className="w-full lg:w-auto pb-10 lg:pb-16 ">
            {/*logo*/}
            <div className="flex items-center justify-center lg:justify-start">
              <img
                className="w-6 mr-3"
                src="/delta_nexus_icon_transparent-cortado.png"
                alt=""
              />
              <h1 className="text-white text-2xl sm:text-2xl lg:text-2xl">
                <span className="font-bold">Delta </span>
                <span className="font-light">Ads</span>
              </h1>
            </div>

            <p className="text-(--textcinza) text-[12px] sm:text-[13px] lg:text-[13px]">
              Análise, Estratégia e Resultado
            </p>

            {/*hero*/}
            <div className="pt-2">
              <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl lg:text-4xl">
                Tráfego para Delivery: pare de queimar dinheiro no Meta Ads e
                gere pedidos com o <span className="text-(--primary)">MPO</span>
              </h1>

              <p className="text-(--textcinza) pt-5 text-sm sm:text-base lg:text-base">
                Um sistema direto para delivery com foco em conversão — sem
                promessas milagrosas, com execução.{" "}
                <span className="font-bold text-white">
                  Campanha simples, criativo que dá fome e cardápio que
                  converte.
                </span>{" "}
                + plano de aplicação em{" "}
                <span className="font-bold text-white">7 dias.</span>
              </p>

              {/* no mobile deixa a lista alinhada à esquerda pra leitura; no desktop continua igual */}
              <ul className="list-disc text-(--textcinza) pl-4 py-5 space-y-2 text-sm sm:text-base lg:text-base text-left lg:text-left">
                <li>
                  Estrutura mínima de campanha completa pronta para aplicar.
                </li>
                <li>
                  Roteiros de criativos e anúncios para testar sem achismo.
                </li>
                <li>
                  Modelo de cardápio + descrições persuasivas que fecham o
                  pedido.
                </li>
              </ul>

              {/* no mobile centraliza o botão, no desktop mantém como estava */}
              <div className="flex justify-center lg:justify-start">
                <BotaoWhatsapp />
              </div>
            </div>
          </div>

          {/* ===== COLUNA IMAGEM ===== */}
          {/* mobile centraliza; desktop mantém seu comportamento */}
          <div className="w-full lg:w-auto flex justify-center lg:block items-end">
            <img src="/brunolongometa2.png" className="w-500" alt="" />
          </div>
        </div>
      </section>
      <FaixaInfinita />
      <section
        className="relative overflow-hidden bg-[#020205]
         before:content-[''] before:absolute before:inset-0 before:pointer-events-none
         before:bg-[radial-gradient(900px_circle_at_20%_0%,var(--primary)_0%,transparent_60%),radial-gradient(900px_circle_at_80%_100%,var(--primary)_0%,transparent_60%)]
         before:opacity-20"
      >
        <div className="m-auto max-w-4xl flex flex-col justify-center items-center py-10 px-4 lg:px-0">
          {/* Título menor: */}
          <h2 className="text-white font-bold text-xl sm:text-2xl lg:text-2xl text-center">
            <span className="text-(--primary) font-medium">Como</span>{" "}
            Trabalhamos ?
          </h2>

          {/* Título principal*/}
          <h1 className="text-white font-bold pt-2 text-2xl sm:text-3xl lg:text-4xl text-center">
            Maquina de Pedidos{" "}
            <span className="text-(--primary) font-medium">Online</span>
          </h1>

          {/* Cards: */}
          <div className="flex flex-col lg:flex-row gap-5 py-10 w-full items-center justify-center lg:items-stretch">
            {/* Card 1 */}
            <div
              className="
          py-8 px-4 rounded flex flex-col justify-center items-center
          w-full max-w-sm
          lg:w-64 lg:max-w-none
          bg-white
        "
            >
              <PiSealCheckBold className="text-7xl sm:text-8xl text-(--primary)" />
              <p className="text-(--pretopremi) text-xl sm:text-2xl font-bold text-center pt-5">
                Método validado em mais de{" "}
                <span className="text-(--primary) font-medium">
                  40 estabelecimentos
                </span>
              </p>
            </div>

            {/* Card 2 (escuro com degradê) */}
            <div
              className="
          py-8 px-10 rounded flex flex-col justify-center items-center
          w-full max-w-sm
          lg:w-64 lg:max-w-none
          bg-linear-to-b from-[#1B1F24] to-[#14181D]
          border border-white/10
          shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.55)]
        "
            >
              <GoChecklist className="text-7xl sm:text-8xl text-(--primary)" />
              <p className="text-white text-xl sm:text-2xl font-bold text-center pt-5">
                Foco no{" "}
                <span className="text-(--primary) font-medium">
                  aumento de faturamento
                </span>
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="
          pb-8 px-10 rounded flex flex-col justify-center items-center
          w-full max-w-sm
          lg:w-64 lg:max-w-none
          bg-white
          max-lg:pt-10
        "
            >
              <AiOutlineRise className="text-7xl sm:text-8xl text-(--primary)" />
              <p className="text-(--pretopremi) text-xl sm:text-2xl font-bold text-center pt-5 ">
                Resultados{" "}
                <span className="text-(--primary) font-medium">Reais</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-white font-bold text-xl sm:text-2xl lg:text-2xl text-center">
            <span className="text-(--primary) font-medium">O que é </span>{" "}
            Maquina de Pedidos Online ?
          </h2>
          <MapMental />
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[#020205]
         before:content-[''] before:absolute before:inset-0 before:pointer-events-none
         before:bg-[radial-gradient(900px_circle_at_20%_0%,var(--primary)_0%,transparent_60%),radial-gradient(900px_circle_at_80%_100%,var(--primary)_0%,transparent_60%)]
         before:opacity-20"
      >
        <div className="m-auto max-w-6xl py-10 px-4 lg:px-0">
          {/* ===== TÍTULO DA SEÇÃO ===== */}
          <h2 className="text-white font-bold text-xl sm:text-2xl lg:text-2xl text-center">
            <span className="text-(--primary) font-medium">Nossas</span>{" "}
            Entregas
          </h2>

          {/* ===== SUBTÍTULO / DESCRIÇÃO ===== */}
          <p className="text-(--textcinza) pt-1 text-center text-sm sm:text-base">
            Aulas + templates + checklists. Você sai com estrutura pronta.
          </p>

          {/* ===== GRID DE CARDS (RESPONSIVO) ===== */}
          {/* Mobile: 1 coluna | md: 2 colunas | lg: 3 colunas (mesmo do desktop) */}
          <div className="pt-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* ===== CARD 1 ===== */}
            <div className="rounded-2xl p-4 bg-linear-to-b from-[#1B1F24] to-[#14181D] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.55)]">
              <h2 className="text-white font-bold text-lg">
                Checklists completos
              </h2>
              <p className="text-(--textcinza) pt-1">
                Mentalidade, campanhas, criativos e cardápio — para executar com
                consistência.
              </p>
            </div>

            {/* ===== CARD 2 ===== */}
            <div className="rounded-2xl p-4 bg-linear-to-b from-[#1B1F24] to-[#14181D] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.55)]">
              <h2 className="text-white font-bold text-lg">
                Estrutura padrão de campanha
              </h2>
              <p className="text-(--textcinza) pt-1">
                Modelo de organização + estrutura mínima para vendas vs.
                catálogo.
              </p>
            </div>

            {/* ===== CARD 3 ===== */}
            <div className="rounded-2xl p-4 bg-linear-to-b from-[#1B1F24] to-[#14181D] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.55)]">
              <h2 className="text-white font-bold text-lg">Roteiros prontos</h2>
              <p className="text-(--textcinza) pt-1">
                Modelos de criativos e anúncios com variações para testes
                claros.
              </p>
            </div>

            {/* ===== CARD 4 ===== */}
            <div className="rounded-2xl p-4 bg-linear-to-b from-[#1B1F24] to-[#14181D] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.55)]">
              <h2 className="text-white font-bold text-lg">
                Cardápio que converte
              </h2>
              <p className="text-(--textcinza) pt-1">
                Estrutura validada + modelo de descrições persuasivas.
              </p>
            </div>

            {/* ===== CARD 5 ===== */}
            <div className="rounded-2xl p-4 bg-linear-to-b from-[#1B1F24] to-[#14181D] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.55)]">
              <h2 className="text-white font-bold text-lg">
                Plano prático de 7 dias
              </h2>
              <p className="text-(--textcinza) pt-1">
                Passo a passo para implementar, medir, ajustar e manter.
              </p>
            </div>

            {/* ===== CARD 6 ===== */}
            <div className="rounded-2xl p-4 bg-linear-to-b from-[#1B1F24] to-[#14181D] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.55)]">
              <h2 className="text-white font-bold text-lg">
                Cardápio digital + integração
              </h2>
              <p className="text-(--textcinza) pt-1">
                Web cardápio e integração com Meta para melhorar fluxo e
                mensuração.
              </p>
            </div>
          </div>
        </div>
        {/* ===== TÍTULO DA SEÇÃO ===== */}
        <h2 className="text-white pt-10 font-bold text-xl sm:text-2xl lg:text-2xl text-center">
          O que você vai
          <span className="text-(--primary) font-medium"> aprender ?</span>{" "}
        </h2>

        {/* ===== SUBTÍTULO / DESCRIÇÃO ===== */}
        <p className="text-(--textcinza) pt-1 text-center text-sm sm:text-base">
          Conteúdo direto ao ponto, com foco em execução e rotina de melhoria.
        </p>

        <div
          className="
    m-auto max-w-6xl pt-10 gap-2
    flex flex-col-reverse lg:flex-row
    px-4 lg:px-0
  "
        >
          {/* ===== COLUNA ESQUERDA (DESKTOP): IMAGEM | MOBILE: VAI PRA BAIXO ===== */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <img
              src="/HomeDeFerroBruno.png"
              alt=""
              className="w-70 sm:w-90 md:w-105 lg:w-3xl max-w-full"
            />
          </div>

          {/* ===== COLUNA DIREITA (DESKTOP): CARDS | MOBILE: FICA EM CIMA ===== */}
          <div className="w-full lg:w-auto flex flex-col gap-3 justify-center">
            {/* ===== CARD A: FUNDAMENTOS ===== */}
            <div className="rounded-2xl p-4 bg-linear-to-b from-[#1B1F24] to-[#14181D] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.55)]">
              <h2 className="text-white font-bold text-lg">
                Fundamentos que fazem o delivery vender mais
              </h2>
              <ul className="list-disc text-(--textcinza) pl-4 py-1 space-y-2 text-sm sm:text-base lg:text-base">
                <li>
                  Mentalidade orientada a pedidos (delivery é outro jogo).
                </li>
                <li>Erros clássicos que queimam orçamento.</li>
                <li>
                  As 3 estratégias do Trinity e como elas se conectam pra gerar
                  lucro.
                </li>
              </ul>
            </div>

            {/* ===== CARD B: CAMPANHAS + CRIATIVOS ===== */}
            <div className="rounded-2xl p-4 bg-linear-to-b from-[#1B1F24] to-[#14181D] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.55)]">
              <h2 className="text-white font-bold text-lg">
                Máquina de vendas: campanhas + criativos
              </h2>
              <ul className="list-disc text-(--textcinza) pl-4 py-1 space-y-2 text-sm sm:text-base lg:text-base">
                <li>
                  Campanhas que vendem sem complexidade: vendas vs catálogo,
                  estrutura mínima, segmentação local, rotina de
                  orçamento/teste/escala.
                </li>
                <li>
                  Criativos que geram desejo: tipos que “dão fome”, roteiro em 3
                  partes, testes e uso de IA pra acelerar imagem/vídeo.
                </li>
              </ul>
            </div>

            {/* ===== CARD C: CONVERSÃO + EXECUÇÃO ===== */}
            <div className="rounded-2xl p-4 bg-linear-to-b from-[#1B1F24] to-[#14181D] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.55)]">
              <h2 className="text-white font-bold text-lg">
                Conversão e execução: cardápio + plano + integração
              </h2>
              <ul className="list-disc text-(--textcinza) pl-4 py-1 space-y-2 text-sm sm:text-base lg:text-base">
                <li>
                  Cardápio de conversão: estrutura, descrições persuasivas,
                  anúncio direto no produto.
                </li>
                <li>
                  Plano de ação em 7 dias: passo a passo pra aplicar e
                  manter/otimizar.
                </li>
                <li>
                  Cardápio digital web + integração com Meta: compra e
                  mensuração mais fáceis + IA pra padronizar imagens.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[#020205]
         before:content-[''] before:absolute before:inset-0 before:pointer-events-none
         before:bg-[radial-gradient(900px_circle_at_20%_0%,var(--primary)_0%,transparent_60%),radial-gradient(900px_circle_at_80%_100%,var(--primary)_0%,transparent_60%)]
         before:opacity-20"
      >
        {/* ===== TÍTULO DA SEÇÃO ===== */}
        <h2 className="text-white pt-10 font-bold text-xl sm:text-2xl lg:text-2xl text-center">
          Benefícios do
          <span className="text-(--primary) font-medium"> MPO </span>{" "}
        </h2>

        {/* ===== SUBTÍTULO / DESCRIÇÃO ===== */}
        <p className="text-(--textcinza) pt-1 text-center text-sm sm:text-base">
          O que muda quando você para de “rodar anúncio” e passa a rodar um
          sistema.
        </p>
        <div className="m-auto max-w-6xl flex pt-10 justify-center items-center">
          {/* ===== DIFENCIAL ===== */}
          <div className="rounded-2xl p-6 bg-linear-to-b from-[#1B1F24] to-[#14181D] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.55)]">
            <ul className="list-decimal text-(--textcinza) pl-4 py-1 space-y-2 text-sm sm:text-base lg:text-xl">
              <li className="flex justify-center items-center"><img src="/indice1.png" className="w-20"></img>
                Menos desperdício com estrutura simples e testes controlados.
              </li>
              <li className="flex justify-center items-center"><img src="/indicee2.png" className="w-20"></img>
                Mais clareza do que funciona (você não troca tudo ao mesmo
                tempo).
              </li>
              <li>
                Criativos replicáveis com roteiro — menos dependência de
                “inspiração”.
              </li>
              <li>Cardápio vira “fechador” de pedido, não um gargalo.</li>
              <li>Rotina de otimização orientada a pedido, não a curtida.</li>
              <li>
                Para prestadores: método + entregáveis para posicionar serviço
                com clareza.
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <img
              src="/pedroLuva2.png"
              alt=""
              className="w-70 sm:w-90 md:w-105 lg:w-3xl max-w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
