"use client";

import { useEffect, useRef } from "react";

type AmbientResearchFieldProps = {
  labels: string[];
};

export function AmbientResearchField({
  labels,
}: AmbientResearchFieldProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const flushPointer = () => {
    const shell = shellRef.current;

    if (!shell) {
      frameRef.current = null;
      return;
    }

    shell.style.setProperty("--pointer-x", pointerRef.current.x.toFixed(3));
    shell.style.setProperty("--pointer-y", pointerRef.current.y.toFixed(3));
    frameRef.current = null;
  };

  const schedulePointerFlush = () => {
    if (frameRef.current !== null) {
      return;
    }

    frameRef.current = requestAnimationFrame(flushPointer);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    pointerRef.current = {
      x: Math.min(Math.max(x, 0), 1),
      y: Math.min(Math.max(y, 0), 1),
    };

    schedulePointerFlush();
  };

  const handlePointerLeave = () => {
    pointerRef.current = { x: 0.5, y: 0.5 };
    schedulePointerFlush();
  };

  return (
    <div
      className="field"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="field-shell" ref={shellRef}>
        <div className="field-glow field-glow-top" aria-hidden="true" />
        <div className="field-glow field-glow-bottom" aria-hidden="true" />
        <div className="field-ring field-ring-outer" aria-hidden="true" />
        <div className="field-ring field-ring-inner" aria-hidden="true" />

        <div className="field-core" aria-hidden="true">
          <span className="field-core-dot" />
          <span className="field-core-dot" />
          <span className="field-core-dot" />
        </div>

        <div className="field-copy">
          <p>Live research surface</p>
          <strong>Models, agents, interfaces</strong>
        </div>

        <div className="field-pills" aria-label="Current topics">
          {labels.map((label, index) => (
            <span
              className="field-pill"
              key={label}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
