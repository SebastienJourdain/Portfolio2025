"use client";

import { useState, useEffect } from "react";

export default function TypingText({
  text,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
  className = "",
  textColors = ["#000000"],
  variableSpeed,
  hideCursorOnComplete = false,
}) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const currentText = text[currentIndex];

    const getTypingSpeed = () => {
      if (variableSpeed) {
        return (
          Math.random() * (variableSpeed.max - variableSpeed.min) +
          variableSpeed.min
        );
      }
      return typingSpeed;
    };

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, getTypingSpeed());
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentText.length) {
      if (hideCursorOnComplete && currentIndex === text.length - 1) {
        setIsComplete(true);
      } else {
        setIsPaused(true);
      }
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed / 2);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentIndex((currentIndex + 1) % text.length);
    }
  }, [
    charIndex,
    currentIndex,
    isDeleting,
    isPaused,
    text,
    typingSpeed,
    pauseDuration,
    textColors,
    variableSpeed,
    hideCursorOnComplete,
  ]);

  const currentColor = textColors[currentIndex % textColors.length];

  return (
    <span className={className}>
      <span style={{ color: currentColor }}>{displayText}</span>
      {showCursor && !isComplete && (
        <span 
          className="inline-block animate-pulse align-middle" 
          style={{ 
            color: currentColor,
            lineHeight: 'inherit',
            verticalAlign: 'baseline'
          }}
        >
          {cursorCharacter}
        </span>
      )}
    </span>
  );
}