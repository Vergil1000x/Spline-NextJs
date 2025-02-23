"use client";
import { motion } from "framer-motion";

export default function Text() {
  const text = ["輝", "け", "、", "未", "来"];

  return (
    <div className="z-10 flex flex-col gap-7">
      {text.map((el, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: i * 0.2, // Delay for each word based on index
          }}
          className="animate-pulse"
        >
          {el}
        </motion.div>
      ))}
    </div>
  );
}
