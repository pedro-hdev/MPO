import BotaoWhatsapp from "@/components/botaoWhatapp";

import { FaSquareXmark } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";

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
    gap-0 lg:gap-4
    px-4 lg:px-2
    text-center lg:text-left
  "
        >
          {/* ===== COLUNA TEXTO ===== */}
          <div className="w-full lg:w-auto pb-10 lg:pb-8 ">
            {/*logo*/}
            <div className="flex gap-2 items-center justify-center lg:justify-start">
              <div className="flex flex-col items-end">
                <h1 className="text-white text-xl sm:text-xl lg:text-xl tracking-wide">
                  <span className="font-bold">Delta </span>
                  <span className="font-light">Ads</span>
                </h1>
                <p className="text-(--textcinza) -mt-2 2text-[12px] sm:text-[13px] lg:text-[13px]">
                  Tráfego Pago
                </p>
              </div>
              <img className="w-8 mr-3" src="/delta-logo.png" alt="" />
            </div>

            {/*hero*/}
            <div className="pt-2">
              <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl lg:text-4xl">
                Aprenda a anunciar Delivery do jeito certo e gerar pedidos com
                previsibilidade
              </h1>

              <p className="text-(--textcinza) pt-5 text-sm sm:text-base lg:text-base">
                Campanhas bem estruturadas (Meta Ads){" "}
                <span className="font-bold text-white">
                  {" "}
                  + ofertas irresistíveis + cardápio web que converte
                </span>{" "}
                para restaurantes, pizzarias, hamburguerias e gestores de
                tráfego <span className="font-bold text-white">7 dias.</span>
              </p>
              <p className="text-(--textcinza) pt-5 text-sm sm:text-base lg:text-base">
                <span className="font-bold text-white">
                  Por apenas R$ 97,00{" "}
                </span>{" "}
                (acesso imediato)
              </p>

              {/* no mobile deixa a lista alinhada à esquerda pra leitura; no desktop continua igual */}
              <ul className="list-disc text-(--textcinza)  py-5 space-y-2 text-sm sm:text-base lg:text-base text-left lg:text-left">
                <li className="flex items-center gap-2">
                  <FaCheckSquare className=" text-emerald-500" /> Estrutura de
                  campanhas pronta (passo a passo).
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckSquare className=" text-emerald-500" /> Modelos de
                  ofertas que aumentam conversão e ticket.
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckSquare className=" text-emerald-500" />
                  Cardápio web de conversão (como montar e o que escrever).
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckSquare className=" text-emerald-500" />
                  Rotina de otimização para manter o custo por pedido saudável.
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
        <div className="m-auto max-w-6xl flex flex-col justify-center items-center py-10 px-4 lg:px-0">
          {/* Título menor: */}
          <h2 className="text-white font-bold text-xl sm:text-2xl lg:text-2xl text-center">
            Pra quem é?
          </h2>

          {/* Cards: */}
          <div className="flex flex-col lg:flex-row gap-5 py-10 w-full items-center justify-center lg:items-stretch">
            {/* Card 1 */}
            <div
              className="
          rounded-2xl p-4 bg-linear-to-b from-[#1B1F24] to-[#14181D] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.55)]
        "
            >
              <p className="text-white text-xl sm:text-xl font-bold  pt-5">
                Esse curso é pra você que…
              </p>
              <ul className="list-disc text-(--textcinza)  py-5 space-y-2 text-sm sm:text-base lg:text-base text-left lg:text-left">
                <li className="flex items-center gap-2">
                  <FaCheckSquare className=" text-emerald-500" /> É dono de
                  delivery e quer mais pedidos com margem
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckSquare className=" text-emerald-500" />É gestor de
                  tráfego e quer um método replicável pra restaurantes
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckSquare className=" text-emerald-500" />
                  Está cansado de “impulsionar” e não saber o que está fazendo
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckSquare className=" text-emerald-500" />
                  Quer parar de testar no escuro e seguir um processo simples e
                  prático
                </li>
              </ul>
            </div>

            {/* Card 2*/}
            <div
              className="
          rounded-2xl p-4 bg-linear-to-b from-[#1B1F24] to-[#14181D] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.55)]
        "
            >
              <p className="text-white text-xl sm:text-xl font-bold  pt-5">
                E não é pra você se…
              </p>
              <ul className="list-disc text-(--textcinza)  py-5 space-y-2 text-sm sm:text-base lg:text-base text-left lg:text-left">
                <li className="flex items-center gap-2">
                  <FaSquareXmark className="text-red-500" />
                  Você quer “hack milagroso” sem executar
                </li>
                <li className="flex items-center gap-2">
                   <FaSquareXmark className="text-red-500" />
                  Você não quer mexer em oferta/cardápio e acha que “só anúncio
                  resolve”
                </li>
                <li className="flex items-center gap-2">
                  <FaSquareXmark className="text-red-500" />
                  Você nem consegue atender pedidos hoje (operação travada)
                </li>
              </ul>
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
              <li className="flex justify-center items-center">
                <img src="/indice1.png" className="w-20"></img>
                Menos desperdício com estrutura simples e testes controlados.
              </li>
              <li className="flex justify-center items-center">
                <img src="/indicee2.png" className="w-20"></img>
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
