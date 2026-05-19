"use client";

import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function VideoSection() {
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
    <section
      className="relative w-full bg-[#e8e6e1] py-12 md:py-16 lg:py-20"
      aria-labelledby="video-section-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <h2
          id="video-section-heading"
          className="mb-8 text-center font-sans text-3xl font-bold uppercase  text-neutral-900 sm:mb-10 sm:text-4xl md:text-5xl"
        >
          CITYOPIA
        </h2>

        <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-[#c9c5bf] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] ring-1 ring-black/10 md:rounded-3xl">
          <div className="relative aspect-video w-full">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-contain"
              src="/video.mp4"
              playsInline
              preload="metadata"
              controls={isPlaying}
              onEnded={handleEnded}
            />

            {!isPlaying && (
              <>
                <div
                  className="pointer-events-none absolute inset-0 bg-black/15"
                  aria-hidden
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center p-6">
                  <button
                    type="button"
                    onClick={handlePlay}
                    className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-normal text-neutral-900 shadow-lg transition duration-200 ease-out hover:scale-105 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800 sm:px-8 sm:py-3.5 sm:text-base"
                    aria-label="Play video"
                  >
                    <FaPlay
                      className="size-3.5 shrink-0 text-red-600 sm:size-4"
                      aria-hidden
                    />
                    Play video
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
