"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";

export default function Template({ children }: { children: React.ReactNode }) {
  return <motion.div key="page-transition" {...pageTransition}>{children}</motion.div>;
}
