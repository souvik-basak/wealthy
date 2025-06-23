"use client"
import gorilla from "../assets/images/gorilla-4.svg";
import xicor from "../assets/images/xicor.svg";
import elastanAlpinus from "../assets/images/elastan-alpinus.svg";
import britannicAssurance from "../assets/images/britannic-assurance.svg";
import bandai from "../assets/images/bandai.svg";
import trasko from "../assets/images/trasko.svg";
import legend from "../assets/images/legend.svg";
import hotbit1 from "../assets/images/hotbit-1.svg";
import tokuyama from "../assets/images/tokuyama.svg";
import celebstudent from "../assets/images/celebstudent.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const logos = [
  { name: "gorilla", image: gorilla },
  { name: "Xicor", image: xicor },
  { name: "Elastan Alpinus", image: elastanAlpinus },
  { name: "Britannic Assurance", image: britannicAssurance },
  { name: "Bandai", image: bandai },
  { name: "Trasko", image: trasko },
  { name: "Legend", image: legend },
  { name: "Hotbit", image: hotbit1 },
  { name: "Tokuyama", image: tokuyama },
  { name: "Celebstudent", image: celebstudent },
];

export default function LogoTicker() {
  return (
    <section className="py-12 overflow-x-clip cursor-default">
      <div className="container">
        <h3 className="text-center text-black/60 text-xl mx-4">
          Already chosen by these market leaders
        </h3>
        <div
          className="overflow-hidden flex"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
          }}
        >
          <motion.div
            animate={{ x: "-50%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, index) => (
              <React.Fragment key={index}>
                {logos.map((logo) => (
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    key={logo.name}
                    width={120}
                    height={80}
                  />
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
