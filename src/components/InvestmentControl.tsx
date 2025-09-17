'use client'

import { Slider } from '@/components/ui/slider'

interface InvestmentControlProps {
  title: string
  value: number
  onValueChange: (value: number) => void
  min: number
  max: number
  step: number
  formatValue: (value: number) => string
}

export function InvestmentControl({
  title,
  value,
  onValueChange,
  min,
  max,
  step,
  formatValue,
}: InvestmentControlProps) {
  return (
    <div className="flex flex-col gap-6 p-1">
      <h3 className="font-raleway text-xl sm:text-2xl font-semibold text-[#21211F]">
        {title}
      </h3>
      <div className="flex flex-col gap-6 items-center justify-center w-full">
        <Slider
          value={[value]}
          onValueChange={([newValue]) => onValueChange(newValue)}
          max={max}
          min={min}
          step={step}
          className="w-full"
        />
        <div className="font-inter text-xl sm:text-3xl font-bold text-[#21211F]">
          {formatValue(value)}
        </div>
      </div>
    </div>
  )
}
