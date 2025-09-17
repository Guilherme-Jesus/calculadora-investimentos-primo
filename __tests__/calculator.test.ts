import {
  calculateInvestmentResults,
  formatCurrency,
  INVESTMENT_CONFIG,
} from '@/lib/calculator'

describe('Calculadora de Investimentos', () => {
  describe('calculateInvestmentResults', () => {
    const selicRate = INVESTMENT_CONFIG.SELIC_RATE // 9.25%

    it('deve calcular corretamente com aporte inicial e mensal', () => {
      const inputs = { initialAmount: 1000, monthlyAmount: 100, months: 12 }
      const results = calculateInvestmentResults(inputs, selicRate)

      expect(results.selicResult).toBeCloseTo(2351.81)
      expect(results.arcaResult).toBeCloseTo(2494.04)
    })

    it('deve calcular corretamente apenas com aporte inicial', () => {
      const inputs = { initialAmount: 1000, monthlyAmount: 0, months: 12 }
      const results = calculateInvestmentResults(inputs, selicRate)

      expect(results.selicResult).toBeCloseTo(1092.5)
      expect(results.arcaResult).toBeCloseTo(1180.0)
    })

    it('deve calcular corretamente apenas com aporte mensal', () => {
      const inputs = { initialAmount: 0, monthlyAmount: 100, months: 12 }
      const results = calculateInvestmentResults(inputs, selicRate)

      expect(results.selicResult).toBeCloseTo(1259.31)
      expect(results.arcaResult).toBeCloseTo(1314.04)
    })
  })

  describe('formatCurrency', () => {
    it('deve formatar valores monetários corretamente', () => {
      expect(formatCurrency(1500)).toBe('R$ 1.500,00')
      expect(formatCurrency(99.9)).toBe('R$ 99,90')
    })
  })
})
