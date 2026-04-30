"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  }, []);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    setIsPlaying(true);
    v.play().catch(() => setIsPlaying(false));
  };

  const handleEnded = () => {
    const v = videoRef.current;
    if (v) v.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <section className="relative flex flex-1 w-full items-center justify-center overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/video.mp4"
        playsInline
        preload="metadata"
        controls={isPlaying}
        onEnded={handleEnded}
      />

      <div className="pointer-events-none absolute top-5 left-1/2 z-50 -translate-x-1/2 sm:top-7">
        <Image
          src="/logo.png"
          alt="Cityopia Motivational Lifestyle"
          width={220}
          height={220}
          priority
          className="h-20 w-auto sm:h-24 md:h-28"
        />
      </div>

      {!isPlaying && (
        <>
          <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

          <button
            type="button"
            onClick={handlePlay}
            className="relative z-10 inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-normal text-neutral-900 shadow-lg transition duration-200 ease-out hover:scale-105 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-8 sm:py-3.5 sm:text-base"
            aria-label="Play video"
          >
            <FaPlay className="size-3.5 shrink-0 text-red-600 sm:size-4" aria-hidden />
            Play video
          </button>
        </>
      )}
    </section>
  );
}
