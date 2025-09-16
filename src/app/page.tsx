"use client";
import { Slider } from "@/components/ui/slider";
import { CircleQuestionMark } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [initialInvestment, setInitialInvestment] = useState([100]);
  const [monthlyInvestment, setMonthlyInvestment] = useState([100]);
  const [investmentPeriod, setInvestmentPeriod] = useState([24]);

  // Cálculos dos resultados
  const totalInvested =
    initialInvestment[0] + monthlyInvestment[0] * investmentPeriod[0];
  const selicResult = totalInvested * 1.22;
  const arcaResult = totalInvested * 1.42;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header semântico */}
      <header className="bg-white border-b border-gray-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-30 py-4">
          <nav className="flex justify-start" aria-label="Navegação principal">
            <Image
              src="/images/logos/logo-grupo-primo.png"
              alt="Grupo Primo"
              width={176}
              height={32}
              className="h-6 w-auto"
              priority
            />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="bg-black text-white py-12 sm:py-16 lg:py-20"
        aria-labelledby="hero-title"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-30">
          <div className="text-left max-w-3xl font-inter">
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-balance"
            >
              Simulador de investimento
            </h1>
            <p className="text-lg sm:text-2xl text-[#BFBDB6] font-normal text-pretty">
              Descubra o quanto você pode economizar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full mx-auto px-6 sm:px-8 lg:px-30 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-14">
          {/* Investment Controls Section */}
          <div
            aria-labelledby="controls-title"
            className="space-y-6 sm:space-y-24 lg:flex-1"
          >
            <h2 id="controls-title" className="sr-only">
              Controles de investimento
            </h2>

            {/* Initial Investment Control */}
            <div className="flex flex-col gap-6 p-1">
              <h3 className="font-raleway text-lg sm:text-xl font-semibold text-[#21211F]">
                Quanto gostaria de investir?
              </h3>
              <div className="flex flex-col gap-8 items-center justify-center w-full">
                <Slider
                  value={initialInvestment}
                  onValueChange={setInitialInvestment}
                  max={10000}
                  min={100}
                  step={100}
                  className="w-full"
                  aria-label="Valor do investimento inicial"
                />
                <div
                  className="font-inter text-2xl sm:text-3xl font-bold text-[#21211F]"
                  aria-live="polite"
                >
                  R${" "}
                  {initialInvestment[0].toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </div>
              </div>
            </div>

            {/* Monthly Investment Control */}
            <div className="flex flex-col gap-6 p-1">
              <h3 className="font-raleway text-lg sm:text-xl font-semibold text-[#21211F]">
                Por mês, quanto investiria?
              </h3>
              <div className="flex flex-col gap-8 items-center justify-center w-full">
                <Slider
                  value={monthlyInvestment}
                  onValueChange={setMonthlyInvestment}
                  max={5000}
                  min={100}
                  step={50}
                  className="w-full"
                  aria-label="Valor do investimento mensal"
                />
                <div
                  className="font-inter text-2xl sm:text-3xl font-bold text-[#21211F]"
                  aria-live="polite"
                >
                  R${" "}
                  {monthlyInvestment[0].toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </div>
              </div>
            </div>

            {/* Investment Period Control */}
            <div className="flex flex-col gap-6 p-1">
              <h3 className="font-raleway text-lg sm:text-xl font-semibold text-[#21211F]">
                Quanto tempo deixaria seu dinheiro investido?
              </h3>
              <div className="flex flex-col gap-8 items-center justify-center w-full">
                <Slider
                  value={investmentPeriod}
                  onValueChange={setInvestmentPeriod}
                  max={60}
                  min={6}
                  step={6}
                  className="w-full"
                  aria-label="Período de investimento em meses"
                />
                <div
                  className="font-inter text-2xl sm:text-3xl font-bold text-[#21211F]"
                  aria-live="polite"
                >
                  {investmentPeriod[0]} meses
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <section
            aria-labelledby="results-title"
            className="space-y-6 sm:space-y-8 lg:flex-1"
          >
            <h2
              id="results-title"
              className="font-inter text-xl sm:text-2xl font-semibold text-[#21211F]"
            >
              Em {investmentPeriod[0]} meses você teria:
            </h2>

            <div className="flex flex-col gap-4">
              {/* Selic Result Card */}
              <article className="bg-[#F9F9F9] border-1 border-[#E5E5E5] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 text-center">
                  <div className="font-inter text-sm sm:text-base text-[#595855] font-semibold uppercase tracking-[0.3rem]">
                    Taxa Selic
                  </div>
                  <div
                    className="font-inter text-4xl sm:text-5xl lg:text-6xl text-[#21211F] font-semibold leading-none"
                    aria-live="polite"
                  >
                    R${" "}
                    {selicResult.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </div>
                </div>
              </article>

              {/* Arca Fund Result Card */}
              <article className="bg-[#F9F9F9] border-1 border-[#E5E5E5] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 text-center">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/images/logos/logo-arca.png"
                      alt="Logo Arca"
                      width={80}
                      height={80}
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className="font-inter text-sm sm:text-base text-[#595855] font-semibold uppercase tracking-[0.3rem]">
                    Fundo Arca
                  </div>
                  <div
                    className="font-inter text-4xl sm:text-5xl lg:text-6xl text-[#21211F] font-semibold leading-none"
                    aria-live="polite"
                  >
                    R${" "}
                    {arcaResult.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </div>
                </div>
              </article>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#33E5B0] rounded-full transition-all duration-300"
                style={{ width: "100%" }}
              />
            </div>

            {/* Footer Information */}
            <footer
              className="space-y-3 sm:space-y-6"
              aria-labelledby="footer-info"
            >
              <h2 id="footer-info" className="sr-only">
                Informações sobre taxas e rentabilidade
              </h2>

              <div className="font-raleway text-sm sm:text-base text-[#595855] space-y-6">
                <div className="flex gap-1">
                  <span className="font-semibold uppercase tracking-[0.3rem]">
                    taxa selic:
                  </span>
                  <span className="font-open-sans font-extrabold sm:text-sm text-[#21211F]">
                    9,25%
                  </span>
                </div>
                <div>
                  <span className="font-semibold uppercase tracking-[0.3rem]">
                    rentabilidade do arca:
                  </span>
                  <span className="font-open-sans font-extrabold sm:text-sm text-[#21211F]">
                    18% a.a.
                  </span>
                </div>
              </div>

              <div className="flex flex-col font-inter text-xs sm:text-sm text-[#595855] space-y-4">
                <div className="inline-flex items-start gap-4">
                  <CircleQuestionMark size={25} className="text-[#595855]" />
                  <span>
                    Valores utilizados no simulador de investimentos (referentes
                    à data de última atualização - esses valores podem alterar
                    de acordo com o mercado).
                  </span>
                </div>
                <div className="inline-flex items-start ml-6">
                  <span className="text-xs sm:text-sm text-[#595855]">
                    - Data da última atualização: 10/01/2024
                  </span>
                </div>
              </div>
            </footer>
          </section>
        </div>
      </main>
    </div>
  );
}
