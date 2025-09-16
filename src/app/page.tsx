import { InvestmentCalculator } from "@/components/InvestmentCalculator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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

      {/* Calculadora */}
      <InvestmentCalculator />
    </div>
  );
}
