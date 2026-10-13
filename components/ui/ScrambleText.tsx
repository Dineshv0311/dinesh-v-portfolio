"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

interface ScrambleTextProps {
  text: string;
  duration?: number;
  characters?: string;
  className?: string;
  scrambledClassName?: string;
  autoStart?: boolean;
  triggerKey?: any;
  onComplete?: () => void;
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  duration = 1.2,
  characters = "░▒▓█▀▄╔╗╚╝║═╦╩╬░▒▓╟╢╤╧┼",
  className = "",
  scrambledClassName = "",
  autoStart = true,
  triggerKey,
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState("");
  const isCompleteRef = useRef(false);

  const startScramble = useCallback(() => {
    isCompleteRef.current = false;
    let frame = 0;
    const totalFrames = Math.max(15, Math.floor(duration * 60));
    const charsLength = characters.length;
    const textLength = text.length;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const revealedCount = Math.floor(progress * textLength);

      let result = "";
      for (let i = 0; i < textLength; i++) {
        if (i < revealedCount) {
          result += text[i];
        } else {
          result += characters[Math.floor(Math.random() * charsLength)];
        }
      }

      setDisplayText(result);

      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplayText(text);
        isCompleteRef.current = true;
        if (onComplete) onComplete();
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [text, duration, characters, onComplete]);

  useEffect(() => {
    if (autoStart) {
      const cleanup = startScramble();
      return cleanup;
    }
  }, [autoStart, startScramble, triggerKey]);

  return (
    <span className={`inline-block whitespace-pre-wrap font-mono ${className}`}>
      {displayText || text}
    </span>
  );
};
