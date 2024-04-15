"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React, { useEffect } from "react";

export interface IRedoAnimTextProps {
  delay: number;
}

export default function RedoAnimText({ delay }: IRedoAnimTextProps) {
  const textIndex = useMotionValue(0);
  const texts = [
    "Philippe Layani is a Berlin- and Vienna-based digital UX designer who   blends creativity, technology, and strategy to develop exceptional,  tailor-made interactive experiences that connect brands with theiraudiences.",
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 300, {
      type: "tween",
      delay: delay,
      duration: 8,
      ease: "easeIn",
      // repeat: Infinity,
      // repeatType: "reverse",
      // repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <motion.span className="inline text-6xl">{displayText}</motion.span>;
}
