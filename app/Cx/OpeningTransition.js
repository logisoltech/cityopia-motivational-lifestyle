"use client";

import { useEffect, useState } from "react";

const LOGO_IN_MS = 300;
const LOGO_OUT_MS = 2500;
const LOGO_FADE_MS = 800;
const PAUSE_AFTER_LOGO_MS = 2000;
const ZOOM_DURATION_MS = 2500;
const REVEAL_FADE_MS = 2000;

const LOGO_FADE_END_MS = LOGO_OUT_MS + LOGO_FADE_MS;
const ZOOM_START_MS = LOGO_FADE_END_MS + PAUSE_AFTER_LOGO_MS;
const TRANSITION_END_MS = ZOOM_START_MS + ZOOM_DURATION_MS;

function OpeningLogo({ zoomStarted }) {
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const logoInTimer = setTimeout(() => setLogoVisible(true), LOGO_IN_MS);
    const logoOutTimer = setTimeout(() => setLogoVisible(false), LOGO_OUT_MS);

    return () => {
      clearTimeout(logoInTimer);
      clearTimeout(logoOutTimer);
    };
  }, []);

  return (
    <img
      src="/logo.png"
      alt="Motivational Lifestyle"
      className="max-w-[140px] transition-opacity duration-700"
      style={{ opacity: logoVisible && !zoomStarted ? 1 : 0 }}
    />
  );
}

export default function OpeningTransition({ children }) {
  const [zoomStarted, setZoomStarted] = useState(false);
  const [transitioned, setTransitioned] = useState(false);
  const [overlayMounted, setOverlayMounted] = useState(true);

  useEffect(() => {
    const zoomTimer = setTimeout(() => setZoomStarted(true), ZOOM_START_MS);
    const fadeTimer = setTimeout(() => setTransitioned(true), TRANSITION_END_MS);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  useEffect(() => {
    if (!overlayMounted) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [overlayMounted]);

  useEffect(() => {
    if (!transitioned) return;

    const unmountTimer = setTimeout(
      () => setOverlayMounted(false),
      REVEAL_FADE_MS
    );

    return () => clearTimeout(unmountTimer);
  }, [transitioned]);

  return (
    <div className="relative w-full">
      {children}

      {overlayMounted && (
        <div
          className="fixed inset-0 z-[100] h-[100dvh] max-h-[100dvh] w-full overflow-hidden"
          aria-hidden={transitioned}
        >
          <div
            className={`absolute inset-0 overflow-hidden bg-cover bg-center bg-no-repeat transition-opacity duration-[2000ms] ease-in-out ${zoomStarted ? "animate-slow-zoom" : ""}`}
            style={{
              backgroundImage: "url('/1.png')",
              opacity: transitioned ? 0 : 1,
            }}
          />

          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
            <OpeningLogo zoomStarted={zoomStarted} />
          </div>
        </div>
      )}
    </div>
  );
}
