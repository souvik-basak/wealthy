"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FeatureCard from "@/components/ui/featureCard";
import Tag from "@/components/ui/tag";
import dataAnalytics from "../assets/images/data-analytics.png";
import receipt from "../assets/images/receipt.png";
import budgetPlanning from "../assets/images/budget-planning.png";
import bankAccount from "../assets/images/bank-account.png";
import insight from "../assets/images/insight.png";

import savings from "../assets/images/savings-2789112_640.jpg";
import analytics from "../assets/images/analytics-2618277_640.jpg";
import shopping from "../assets/images/shopping-2614155_640.jpg";
import creditCard from "../assets/images/credit-cards-1583534_640.jpg";
import chatBot from "../assets/images/chatbot-4071274_640.jpg";
import Image from "next/image";

const featureList = [
  {
    text: "Advanced Analytics",
    para: "Get detailed insights into your spending patterns with AI-powered analytics.",
    image: dataAnalytics,
    hoverImage: analytics,
  },
  {
    text: "Budget Planning",
    para: "Create and manage budgets to keep track of your expenses.",
    image: budgetPlanning,
    hoverImage: savings,
  },
  {
    text: "Smart Receipt Scanner",
    para: "Extract data from your receipts and categorize them automatically.",
    image: receipt,
    hoverImage: shopping,
  },
  {
    text: "Multi-Account Support",
    para: "Manage multiple accounts from different banks in one place.",
    image: bankAccount,
    hoverImage: creditCard,
  },
  {
    text: "Automated Insights",
    para: "Get real-time financial insights and AI recommendations.",
    image: insight,
    hoverImage: chatBot,
  },
];

const features = [
  "Real-Time Insights",
  "Smart Budgeting",
  "AI-Powered Analytics",
  "Receipt Scanning",
  "Expense Tracking",
  "Automated Reports",
  "Investment Monitoring",
];

export default function Features() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <section className="py-24 px-4 md:px-6 lg:px-8">
      <div className="container">
        <div className="flex justify-center items-center">
          <Tag text="Features" />
        </div>
        <h2 className="text-6xl font-semibold text-center mt-6 max-w-2xl mx-auto">
          Where efficiency meets{" "}
          <span className="text-lime-600">intelligence</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:mx-28">
          {/* Feature Cards */}
          {featureList.map((feature, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Hover Image - Appears above the hovered card */}
              {hoveredFeature === index && (
                <motion.div
                  initial={{ opacity: 0, y: 100, x: -10 }}
                  animate={{ opacity: 1, y: -10, x: -10 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-[-110px] left-1/2 transform -translate-x-1/2 z-10"
                >
                  <Image
                    src={feature.hoverImage}
                    className="h-auto w-auto rounded-md shadow-lg bg-white"
                    alt="Feature Hover Image"
                  />
                </motion.div>
              )}

              <FeatureCard
                text={feature.text}
                para={feature.para}
                image={feature.image}
              />
            </div>
          ))}

          {/* High-Level Encryption Card */}
          <div className="bg-slate-100 border border-black/10 p-6 rounded-3xl group">
            <div className="h-34 aspect-video relative overflow-hidden rounded-lg flex items-center justify-center ">
              <p className="text-3xl font-semibold flex flex-col justify-center text-center text-black/50 lg:pl-4 group-hover:text-black/30 transition-all duration-500">
                High-level encryption for{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                  <span>sensitive</span>
                  {/* <video
                    src="/public/assets/gif-incredible.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100"
                  ></video> */}
                </span>{" "}
                financial data
              </p>
            </div>
            <h3 className="text-2xl font-medium mt-6 md:mt-2">
              Secure Data Protection
            </h3>
            <p className="text-black/50 mt-2 text-lg">
              Two-factor authentication for added security
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black/10 border border-lime-600 inline-flex px-1.5 py-1.5 md:px-5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
            >
              <span className="bg-lime-600 text-neutral-800 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                &#10038;
              </span>
              <span className="text-lime-900 font-medium md:text-lg">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
