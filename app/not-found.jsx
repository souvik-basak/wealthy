"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground text-center pb-96 md:pb-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative">
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-primary"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          404 {<span className="text-red-600 font-normal">Not Found</span>}
        </motion.h1>
        {/* Floating Coin Animation */}
        <motion.div
          className="relative lg:w-1/2"
          // animate={{ y: [0, -20, 0] }}
          // transition={{
          //   duration: 3,
          //   repeat: Infinity,
          //   ease: "easeInOut",
          // }}
        >
          <img
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt="Floating Coin"
            className="w-auto flex justify-center items-center object-cover overflow-hidden"
          />
        </motion.div>

        {/* Page Title */}

        {/* Description */}
        <motion.p
          className="text-xl mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Uh-oh! Looks like you've lost your way to wealthy!
        </motion.p>
      </div>
      {/* Button with Hover Animation */}
      <Link href="/">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Return to Wealthy
          </Button>
        </motion.button>
      </Link>

      {/* Sparkles Animation */}
      {/* <motion.div
        className="absolute top-20 left-16 w-8 h-8 bg-yellow-400 rounded-full"
        animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          delay: 1,
        }}
      /> */}
    </motion.div>
  );
}
