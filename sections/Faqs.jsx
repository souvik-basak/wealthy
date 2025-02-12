"use client"
import Tag from "@/components/ui/tag";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
  {
    question: "What is Wealthy?",
    answer:
      "Wealthy is an AI-powered finance management platform that helps you track, analyze, and optimize your spending with real-time insights and smart budgeting tools.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Yes! Wealthy uses bank-level encryption and secure authentication methods to protect your data. We do not store sensitive banking credentials.",
  },
  {
    question: "Can I use Wealthy without linking my bank account?",
    answer:
      "Yes! You can manually input transactions and use the budgeting and analytics features without linking a bank account.",
  },
  {
    question: "How does the AI-powered analytics work?",
    answer:
      "Wealthy’s AI analyzes your spending patterns, detects trends, and provides personalized recommendations to optimize your budget and savings.",
  },
  {
    question: "What is the Smart Receipt Scanner?",
    answer:
      "Our Smart Receipt Scanner lets you upload receipts, and AI will automatically extract and categorize the expenses for better tracking.",
  },
  {
    question: "Can I set spending limits and budgets?",
    answer:
      "Yes! You can create custom budgets for different spending categories. Wealthy will track your progress and notify you when you're approaching your limit.",
  },
  {
    question: "Does Wealthy support multiple currencies?",
    answer:
      "Yes! You can track expenses in different currencies, making it ideal for travelers or users with international accounts.",
  },
  {
    question: "How does Wealthy handle collaboration?",
    answer:
      "You can invite family members or financial advisors to view and manage shared budgets, making financial planning easier together.",
  },
  {
    question: "Can I export my financial data?",
    answer:
      "Yes! You can generate detailed financial reports and export them as CSV or PDF files for further analysis.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState()
  return (
    <section className="py-20">
      <div className="container px-4 md:pl-14">
        <div className="flex justify-center">
          <Tag text="Faqs" />
        </div>
        <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
          Questions? We&apos;ve get{" "}
          <span className="text-lime-600">answer</span>
        </h2>
        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              className="rounded-2xl bg-black/10 border-white/10 p-6"
            >
              <div className="flex justify-between items-center" onClick={()=>setSelectedIndex(faqIndex)}>
                <h3 className="font-medium">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={twMerge("feather feather-plus text-lime-600 flex-shrink-0 transition-all duration-300", selectedIndex === faqIndex && "rotate-45")}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <AnimatePresence>
              {selectedIndex === faqIndex &&(
              <motion.div
              initial={{
                height: 0,
                marginTop: 0,
              }} animate={{
                height: "auto",
                marginTop: 24,
              }} exit={{
                height: 0,
                marginTop: 0,
              }}
                className={twMerge(
                  "overflow-hidden",
                )}
              >
                <p className="text-black/50">{faq.answer}</p>
              </motion.div>
              )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
