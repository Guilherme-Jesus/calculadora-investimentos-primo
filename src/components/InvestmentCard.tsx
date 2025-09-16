import Image from "next/image";

interface InvestmentCardProps {
  title: string;
  value: number;
  logo?: string;
  logoAlt: string;
}

export function InvestmentCard({
  title,
  value,
  logo,
  logoAlt,
}: InvestmentCardProps) {
  return (
    <article className="bg-[#F9F9F9] border-1 border-[#E5E5E5] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 text-center">
        {logo && (
          <div className="flex items-center justify-center">
            <Image
              src={logo}
              alt={logoAlt}
              width={80}
              height={80}
              className="w-auto h-auto"
            />
          </div>
        )}
        <div className="font-inter text-sm sm:text-base text-[#595855] font-semibold uppercase tracking-[0.3rem]">
          {title}
        </div>
        <div
          className="font-inter text-4xl sm:text-5xl lg:text-6xl text-[#21211F] font-semibold leading-none"
          aria-live="polite"
        >
          R${" "}
          {value.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
      </div>
    </article>
  );
}
