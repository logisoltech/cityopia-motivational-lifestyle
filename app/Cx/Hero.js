"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BODY =
  "HUMANS SURVIVE BASED ON FOOD AND SHELTER. A BUILDING IS THE MOST ADVANCED PRODUCT IN SOCIETY PROTECTING US FROM NATURE. WHEN WALKING DOWN A STREET PEOPLE DECIDE ON THEIR BUILDINGS LIKE A SHOPPING AISLE.";

const CONTACT_TEXT =
  "M.D. MOTIVATIONAL ENTERPRISES LLC – LOCATION   56 ST. NY. NY. 10019";

const BUTTON_CLASS =
  "cursor-pointer rounded-md bg-linear-to-b from-[#f5e6a8] via-[#d4af37] to-[#b8860b] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.06em] text-black shadow-[0_4px_14px_rgba(0,0,0,0.45)] transition duration-200 hover:from-[#fff1b8] hover:via-[#e0c04a] hover:to-[#c9971a] hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5e6a8] sm:px-5 sm:py-3 sm:text-sm";

export default function Hero() {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    if (!contactOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setContactOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [contactOpen]);

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

        <div className="mt-6 flex max-w-xl flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
          <button type="button" className={BUTTON_CLASS}>
            Invest/Donate
          </button>
          <button type="button" className={BUTTON_CLASS}>
            MD Crypto
          </button>
          <button
            type="button"
            className={BUTTON_CLASS}
            onClick={() => setContactOpen(true)}
          >
            Contact
          </button>
          <button type="button" className={BUTTON_CLASS}>
            Financing Available
          </button>
        </div>
      </div>

      {contactOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          onClick={() => setContactOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-xl bg-neutral-950 px-6 py-8 shadow-2xl ring-1 ring-[#d4af37]/40 sm:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setContactOpen(false)}
              className="absolute top-3 right-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
              aria-label="Close contact"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <p
              id="contact-modal-title"
              className="pr-8 text-center font-sans text-sm font-semibold uppercase leading-relaxed tracking-[0.06em] text-white sm:text-base"
            >
              {CONTACT_TEXT}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
