import { InvestmentInputs, InvestmentResults } from "@/types/investment";

export const INVESTMENT_CONFIG = {
  SELIC_RATE: 0.0925, // 9,25% ao ano (valor mockado do teste)
  ARCA_RATE: 0.18, // 18% ao ano
  WORKING_DAYS_PER_YEAR: 252,
  WORKING_DAYS_PER_MONTH: 252 / 12, // ~21 dias úteis por mês
} as const;

/* Configurações dos sliders */
export const SLIDER_CONFIG = {
  initial: {
    min: 100,
    max: 10000,
    step: 100,
    default: 100,
  },
  monthly: {
    min: 100,
    max: 5000,
    step: 50,
    default: 100,
  },
  period: {
    min: 6,
    max: 60,
    step: 6,
    default: 24,
  },
} as const;

/* Funções de formatação */
export const formatCurrency = (value: number) =>
  `R$ ${value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;

export const formatMonths = (value: number) => `${value} meses`;

export function anualizeSelicRate(dailyRate: number): number {
  const dailyRateAsDecimal = dailyRate / 100;
  return (
    Math.pow(1 + dailyRateAsDecimal, INVESTMENT_CONFIG.WORKING_DAYS_PER_YEAR) -
    1
  );
}

/* Calcula o rendimento de um investimento usando a fórmula: M = P . (1 + i) ^ t/252 */
function calculateReturn(
  principal: number,
  rate: number,
  workingDays: number
): number {
  return (
    principal *
    Math.pow(1 + rate, workingDays / INVESTMENT_CONFIG.WORKING_DAYS_PER_YEAR)
  );
}

export function calculateInvestmentResults(
  inputs: InvestmentInputs,
  selicRate: number
): InvestmentResults {
  const { initialAmount, monthlyAmount, months } = inputs;

  /* Dias úteis totais */
  const totalWorkingDays = months * INVESTMENT_CONFIG.WORKING_DAYS_PER_MONTH;

  /* Rendimento do investimento inicial */
  const initialSelicAmount = calculateReturn(
    initialAmount,
    selicRate,
    totalWorkingDays
  );
  const initialArcaAmount = calculateReturn(
    initialAmount,
    INVESTMENT_CONFIG.ARCA_RATE,
    totalWorkingDays
  );

  /* Rendimento dos investimentos mensais */
  let monthlySelicAmount = 0;
  let monthlyArcaAmount = 0;

  for (let month = 1; month <= months; month++) {
    const remainingWorkingDays =
      (months - month + 1) * INVESTMENT_CONFIG.WORKING_DAYS_PER_MONTH;
    monthlySelicAmount += calculateReturn(
      monthlyAmount,
      selicRate,
      remainingWorkingDays
    );
    monthlyArcaAmount += calculateReturn(
      monthlyAmount,
      INVESTMENT_CONFIG.ARCA_RATE,
      remainingWorkingDays
    );
  }

  /* Resultados finais */
  const selicResult = initialSelicAmount + monthlySelicAmount;
  const arcaResult = initialArcaAmount + monthlyArcaAmount;

  return {
    selicResult,
    arcaResult,
  };
}
