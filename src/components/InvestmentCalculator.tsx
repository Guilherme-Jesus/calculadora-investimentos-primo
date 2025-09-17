"use client";

import {
  anualizeSelicRate,
  calculateInvestmentResults,
  formatCurrency,
  formatMonths,
  INVESTMENT_CONFIG,
  SLIDER_CONFIG,
} from "@/lib/calculator";
import { InvestmentInputs } from "@/types/investment";
import { MarketData } from "@/types/market-data";
import { CircleQuestionMark } from "lucide-react";
import { useMemo, useState } from "react";
import { InvestmentCard } from "./InvestmentCard";
import { InvestmentControl } from "./InvestmentControl";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

interface InvestmentCalculatorProps {
  liveMarketData: MarketData | null;
}

export function InvestmentCalculator({
  liveMarketData,
}: InvestmentCalculatorProps) {
  const [inputs, setInputs] = useState<InvestmentInputs>({
    initialAmount: SLIDER_CONFIG.initial.default,
    monthlyAmount: SLIDER_CONFIG.monthly.default,
    months: SLIDER_CONFIG.period.default,
  });

  const [useLiveRate, setUseLiveRate] = useState(false);

  const liveSelicAnnualRate = useMemo(() => {
    if (!liveMarketData) return null;
    return anualizeSelicRate(liveMarketData.selicRate);
  }, [liveMarketData]);

  // A taxa Selic usada no cálculo agora é dinâmica
  const activeSelicRate =
    useLiveRate && liveSelicAnnualRate
      ? liveSelicAnnualRate
      : INVESTMENT_CONFIG.SELIC_RATE;

  const results = useMemo(
    () => calculateInvestmentResults(inputs, activeSelicRate),
    [inputs, activeSelicRate]
  );

  const updateInput = (field: keyof InvestmentInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="w-full mx-auto px-6 sm:px-8 lg:px-30 py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-14">
        {/* Controles de Investimento */}
        <div className="space-y-6 sm:space-y-24 lg:flex-1">
          <h2 className="sr-only">Controles de investimento</h2>

          <InvestmentControl
            title="Quanto gostaria de investir?"
            value={inputs.initialAmount}
            onValueChange={(value) => updateInput("initialAmount", value)}
            min={SLIDER_CONFIG.initial.min}
            max={SLIDER_CONFIG.initial.max}
            step={SLIDER_CONFIG.initial.step}
            formatValue={formatCurrency}
            ariaLabel="Valor do investimento inicial"
          />

          <InvestmentControl
            title="Por mês, quanto investiria?"
            value={inputs.monthlyAmount}
            onValueChange={(value) => updateInput("monthlyAmount", value)}
            min={SLIDER_CONFIG.monthly.min}
            max={SLIDER_CONFIG.monthly.max}
            step={SLIDER_CONFIG.monthly.step}
            formatValue={formatCurrency}
            ariaLabel="Valor do investimento mensal"
          />

          <InvestmentControl
            title="Quanto tempo deixaria seu dinheiro investido?"
            value={inputs.months}
            onValueChange={(value) => updateInput("months", value)}
            min={SLIDER_CONFIG.period.min}
            max={SLIDER_CONFIG.period.max}
            step={SLIDER_CONFIG.period.step}
            formatValue={formatMonths}
            ariaLabel="Período de investimento em meses"
          />
        </div>

        {/* Resultados */}
        <section className="space-y-6 sm:space-y-8 lg:flex-1">
          <div className="flex justify-between items-center">
            <h2 className="font-inter text-xl sm:text-2xl font-semibold text-[#21211F]">
              Em {inputs.months} meses você teria:
            </h2>
            <div className="flex items-center space-x-2">
              <Label htmlFor="useLiveRateSwitch">Usar Selic Real</Label>
              <Switch
                id="useLiveRateSwitch"
                checked={useLiveRate}
                onCheckedChange={setUseLiveRate}
                disabled={!liveSelicAnnualRate}
                aria-label="Usar Selic Real"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <InvestmentCard
              title="Taxa Selic"
              value={results.selicResult}
              logoAlt="Logo Selic"
            />
            <InvestmentCard
              title="Fundo Arca"
              value={results.arcaResult}
              logo="/images/logos/logo-arca.png"
              logoAlt="Logo Arca"
            />
          </div>

          {/* Barra de Progresso */}
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#33E5B0] rounded-full transition-all duration-300"
              style={{ width: "100%" }}
            />
          </div>

          {/* Informações do Footer */}
          <footer className="space-y-3 sm:space-y-6">
            <h2 className="sr-only">Informações sobre taxas e rentabilidade</h2>

            <div className="font-raleway text-sm sm:text-base text-[#595855] space-y-6">
              <div>
                <span className="font-semibold uppercase tracking-[0.32rem]">
                  taxa selic:
                </span>
                {/* Exibe a taxa Selic que está sendo usada (real ou fixa) */}
                <span className="font-open-sans font-extrabold text-lg sm:text-xl text-[#21211F]">
                  {(activeSelicRate * 100).toFixed(2)}% a.a.
                </span>
                {useLiveRate && liveSelicAnnualRate && (
                  <span className="text-xs ml-2">(Taxa Real)</span>
                )}
              </div>
              <div>
                <span className="font-semibold uppercase tracking-[0.32rem]">
                  rentabilidade do arca:
                </span>
                <span className="font-open-sans font-extrabold text-lg sm:text-xl text-[#21211F]">
                  18% a.a.
                </span>
              </div>
            </div>

            <div className="flex flex-col font-inter text-xs sm:text-sm text-[#595855] space-y-4">
              <div className="inline-flex items-start gap-4">
                <CircleQuestionMark size={25} className="text-[#595855]" />
                <span>
                  Valores utilizados no simulador de investimentos (referentes à
                  data de última atualização - esses valores podem alterar de
                  acordo com o mercado).
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
  );
}
