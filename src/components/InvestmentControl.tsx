"use client";

import { Slider } from "@/components/ui/slider";

interface InvestmentControlProps {
  title: string;
  value: number;
  onValueChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  formatValue: (value: number) => string;
  ariaLabel: string;
}

export function InvestmentControl({
  title,
  value,
  onValueChange,
  min,
  max,
  step,
  formatValue,
  ariaLabel,
}: InvestmentControlProps) {
  return (
    <div className="flex flex-col gap-6 p-1">
      <h3 className="font-raleway text-xl font-semibold text-[#21211F]">
        {title}
      </h3>
      <div className="flex flex-col gap-8 items-center justify-center w-full">
        <Slider
          value={[value]}
          onValueChange={([newValue]) => onValueChange(newValue)}
          max={max}
          min={min}
          step={step}
          className="w-full"
          aria-label={ariaLabel}
        />
        <div
          className="font-inter text-2xl sm:text-3xl font-bold text-[#21211F]"
          aria-live="polite"
        >
          {formatValue(value)}
        </div>
      </div>
    </div>
  );
}
