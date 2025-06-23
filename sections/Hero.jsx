"use client";
import { Button } from "@/components/ui/button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import cursorYouImage from "@/assets/images/cursor-you.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Pointer from "./pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleGetStarted = () => {
    if (email.trim()) {
      router.push(`/sign-up?email=${encodeURIComponent(email)}`);
    } else {
      router.push(`/sign-up`);
    }
  };

  return (
    <section
      className="py-12 overflow-x-clip items-center"
      style={{
        cursor: `url(${cursorYouImage.src}), auto`,
      }}
    >
      <div className="container relative">
        {/* <motion.div
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="absolute -left-32 top-16 hidden lg:block"
        >
          <Image
            src={designExample1Image}
            alt="Design Example 1"
            draggable="false"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <Pointer name="Maria" />
        </motion.div>
        <motion.div
          drag
          initial={{ opacity: 0, x: 100, y: 100 }}
          className="absolute -right-64 -top-10 hidden lg:block"
        >
          <Image
            src={designExample2Image}
            alt="Design Example 2"
            draggable="false"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="absolute right-80 -top-4 hidden lg:block"
        >
          <Pointer name="Bryan" color="red" />
        </motion.div> */}
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M+ Transaction Processed
          </div>
        </div>
        <h1 className="text-4xl font-medium text-center mt-6 md:text-7xl lg:text-8xl mx-2 md:mx-4 lg:mx-8 xl:mx-16 2xl:mx-32">
          Track, Analyze, and Optimize Your Expenses with AI.
        </h1>
        <p className="text-center text-neutral-500 text-xl mt-8 max-w-2xl mx-auto">
          Manage your finances with AI-powered insights, seamless transactions,
          and real-time budgeting—all in one secure, intuitive dashboard.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleGetStarted();
          }}
          className="flex border border-black/15 justify-center rounded-full p-2 mt-8 md:mx-auto mx-2 max-w-lg"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent px-4 outline-none w-full md:flex-1"
          />
          <Button
            type="submit"
            className="rounded-full px-4 font-medium items-center whitespace-nowrap"
          >
            Get Started
          </Button>
        </form>
      </div>
    </section>
  );
}
