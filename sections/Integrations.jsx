"use client";

import { motion } from "framer-motion";
import FeatureCard from "@/components/ui/featureCard";
import adduser from "../assets/images/adduser.png";
import finance from "../assets/images/finance.png";
import goal from "../assets/images/goal.png";
import sponsor from "../assets/images/sponsor-investment.png";
import barcode from "../assets/images/barcode.png";
import automation from "../assets/images/automation.png";
import Tag from "@/components/ui/tag";

const featureList = [
  { image: adduser, text: "1. Create Your Account" },
  { image: finance, text: "2. Track Your Spending" },
  { image: goal, text: "3. Set Budgets and Goals" },
  { image: sponsor, text: "4. Analyze Your Patterns" },
  { image: barcode, text: "5. Use Smart Receipt Scanner" },
  { image: automation, text: "6. Get Automated Reports" },
];

export default function Integrations() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:ml-20">
            <Tag text="How it works" />
            <h2 className="text-6xl font-semibold mt-6">
              How wealthy <span className="text-lime-600">works</span>?
            </h2>
            <p className="text-xl text-black/50 mr-10 mt-4">
              Wealthy is a powerful financial management tool that helps you
              track your spending, set budgets and goals, analyze your spending
              patterns, use smart receipt scanner, and get automated reports.
            </p>
          </div>

          <div
            className="relative h-[400px] lg:h-[800px] overflow-hidden flex justify-center"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)",
            }}
          >
            <motion.div
              className="absolute flex flex-col gap-6 items-center"
              animate={{ y: ["0%", "-100%"] }}
              transition={{
                duration: 180, // Slowed down duration
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {Array(10)
                .fill([...featureList])
                .flat()
                .map((feature, index) => (
                  <FeatureCard
                    key={index}
                    image={feature.image}
                    text={feature.text}
                  />
                ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
