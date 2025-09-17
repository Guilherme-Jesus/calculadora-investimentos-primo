import { InvestmentControl } from '@/components/InvestmentControl'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { useState } from 'react'

// Componente wrapper que gerencia o estado para simular o comportamento real
function TestWrapper() {
  const [value, setValue] = useState(24)

  return (
    <InvestmentControl
      title="Teste de Período"
      value={value}
      onValueChange={setValue}
      min={6}
      max={60}
      step={6}
      formatValue={(val: number) => `${val} meses`}
      ariaLabel="Controle de período de teste"
    />
  )
}

describe('<InvestmentControl /> - Teste de Integração', () => {
  it('deve renderizar o título e o valor formatado corretamente', () => {
    render(<TestWrapper />)

    // Verifica se o título está na tela
    expect(
      screen.getByRole('heading', { name: 'Teste de Período' })
    ).toBeInTheDocument()

    // Verifica se o valor inicial (24) está formatado e visível
    expect(screen.getByText('24 meses')).toBeInTheDocument()
  })

  it('deve atualizar o valor exibido quando o slider é movido', () => {
    render(<TestWrapper />)

    // Verifica valor inicial
    expect(screen.getByText('24 meses')).toBeInTheDocument()

    // Encontra o slider
    const slider = screen.getByRole('slider')

    // Simula movimento para a direita (aumenta valor)
    fireEvent.keyDown(slider, { key: 'ArrowRight' })

    // Verifica se o valor mudou para 30 (24 + 6 step)
    expect(screen.getByText('30 meses')).toBeInTheDocument()

    // Move mais uma vez
    fireEvent.keyDown(slider, { key: 'ArrowRight' })

    // Verifica se o valor mudou para 36 (30 + 6 step)
    expect(screen.getByText('36 meses')).toBeInTheDocument()
  })

  it('deve diminuir o valor quando move para a esquerda', () => {
    render(<TestWrapper />)

    // Verifica valor inicial
    expect(screen.getByText('24 meses')).toBeInTheDocument()

    const slider = screen.getByRole('slider')

    // Simula movimento para a esquerda (diminui valor)
    fireEvent.keyDown(slider, { key: 'ArrowLeft' })

    // Verifica se o valor mudou para 18 (24 - 6 step)
    expect(screen.getByText('18 meses')).toBeInTheDocument()

    // Move mais uma vez
    fireEvent.keyDown(slider, { key: 'ArrowLeft' })

    // Verifica se o valor mudou para 12 (18 - 6 step)
    expect(screen.getByText('12 meses')).toBeInTheDocument()
  })
})
