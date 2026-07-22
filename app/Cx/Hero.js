import Image from "next/image";

const HEADLINE =
  "THE FIRST FUTURISTIC CITY THAT PROVIDES EVERYTHING YOU NEED";

const BODY =
  "— 1 TOOL AND 1 FOOD DIET — FOR SELF-SUFFICIENCY, HEALTH, EDUCATION, SAFETY AND FUN WITH THE HEALTHIEST, TASTIEST MOSTLY PROTEIN FOODS AND HI-TECH AI-INDUCED PRODUCTS FOR YOUR EVERY NEED.";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-1 flex-col overflow-hidden bg-black">
      <Image
        src="/bg.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute left-5 top-5 z-50 sm:left-8 sm:top-8">
        <a
          href="https://motivational-lifestyle.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-opacity hover:opacity-90"
        >
          <Image
            src="/logo.png"
            alt="Motivational Lifestyle"
            width={280}
            height={280}
            priority
            className="h-24 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] sm:h-28 md:h-32 lg:h-36"
          />
        </a>
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pb-14 pt-28 sm:px-10 md:pt-32 lg:ml-auto lg:max-w-[min(36rem,52%)] lg:items-start lg:px-14 lg:pr-16 xl:max-w-[min(40rem,48%)] xl:pr-20">
        <h1 className="mb-5 max-w-xl font-sans text-2xl font-bold uppercase leading-[1.15] tracking-[0.04em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-3xl md:text-4xl lg:text-[2.25rem] xl:text-5xl xl:leading-[1.1]">
          {HEADLINE}
        </h1>
        <p className="max-w-xl font-sans text-xs font-normal uppercase leading-relaxed tracking-[0.06em] text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)] sm:text-sm md:text-[0.9375rem] md:leading-relaxed">
          {BODY}
        </p>
      </div>
    </section>
  );
}
