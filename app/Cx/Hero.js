import Image from "next/image";

const BODY =
  "HUMANS SURVIVE BASED ON FOOD AND SHELTER. A BUILDING IS THE MOST ADVANCED PRODUCT IN SOCIETY PROTECTING US FROM NATURE. WHEN WALKING DOWN A STREET PEOPLE DECIDE ON THEIR BUILDINGS LIKE A SHOPPING AISLE.";

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

      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pb-14 pt-20 sm:px-10 md:pt-24 lg:ml-auto lg:max-w-[min(36rem,52%)] lg:items-start lg:px-14 lg:pr-16 xl:max-w-[min(40rem,48%)] xl:pr-20">
        <div className="mb-0 flex items-center gap-3 sm:gap-4">
          <a
            href="https://motivational-lifestyle.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block shrink-0 transition-opacity hover:opacity-90"
          >
            <Image
              src="/logo.png"
              alt="Motivational Lifestyle"
              width={280}
              height={280}
              priority
              className="h-20 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] sm:h-24 md:h-28 lg:h-32"
            />
          </a>
          <Image
            src="/cityopia.png"
            alt="Cityopia"
            width={320}
            height={120}
            priority
            className="h-10 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] sm:h-12 md:h-14 lg:h-16"
          />
        </div>

        <h1 className="mb-5 max-w-xl font-sans text-2xl font-bold uppercase leading-[1.15] tracking-[0.04em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-3xl md:text-4xl lg:text-[2.25rem] xl:text-5xl xl:leading-[1.1]">
          MD1 Tool,
          <br /> MD1 Diet,
          <br /> MD1 Material
        </h1>
        <p className="max-w-xl font-sans text-xs font-normal uppercase leading-relaxed tracking-[0.06em] text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)] sm:text-sm md:text-[0.9375rem] md:leading-relaxed">
          {BODY}
        </p>
      </div>
    </section>
  );
}
