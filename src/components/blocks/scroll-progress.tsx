"use client";

import { useEffect, useState } from "react";

/**
 * A hairline showing how far down a long page you are. This one runs past
 * 20 000px on a phone, so knowing there is an end to it is worth two pixels.
 *
 * Lime rather than steel: it is chrome, and steel belongs to money. It sits
 * above the header and is hidden from assistive technology, which gets the
 * document structure instead.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5"
    >
      <div
        className="h-full origin-left bg-lime"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
