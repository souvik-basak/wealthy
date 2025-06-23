"use client";
import Tag from "@/components/ui/tag";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `Finance tools are complex and time-consuming. We built this platform to simplify it-giving you real-time insights, effortless tracking, and smarter budgeting all in one place.`;
const words = text.split(" ");

export default function Introduction() {
  const scrollTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (value) => {
      setCurrentWord(Math.floor(value));
    });
  }, [wordIndex]);
  return (
    <section className="py-12 lg:px-16 cursor-default">
      <div className="container">
        <div className="sticky top-20 md:top-28 lg:top-40 mx-12">
          <div className="flex items-center justify-center mb-10">
            <Tag text="Introducing Wealthy" color="lime-600" />
          </div>
          <div className="text-4xl text-center font-semibold md:text-6xl lg:text-6xl">
            <span>Simplify finance, master your future.</span>{" "}
            <span className="">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    "transition-all duration-1000 text-black/15",
                    wordIndex < currentWord && "text-black"
                  )}
                >{`${word} `}</span>
              ))}
            </span>
            <span className="text-lime-600 block">
              That&apos;s why we built Wealthy.
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
