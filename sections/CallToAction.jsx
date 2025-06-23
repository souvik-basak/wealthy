"use client";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function CallToAction() {
  const animation = useRef (null);
  const [scope, animate] = useAnimate();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );
  }, []);

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHovered]);
  return (
    <section className="py-12 overflow-x-clip">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          ref={scope}
          onMouseEnter={() => setIsHovered()}
          onMouseLeave={() => setIsHovered()}
          className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-16 transition-all duration-500 cursor-default text-8xl"
            >
              <span className="text-lime-600 hover:text-black">&#10038;</span>
              <span className="hover:text-lime-600 transform scale-y-[2]">
                Try it for free
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
