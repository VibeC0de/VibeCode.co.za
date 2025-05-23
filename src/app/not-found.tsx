"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OrbButton } from "@/components/ui/custom/orb-button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main>
      <Header />
      <div className="bg-white dark:bg-orbGray-900 min-h-[70vh] flex items-center">
        <div className="orb-container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative mb-8 mx-auto w-40 h-40">
    23 │                 <div className="absolute inset-0 bg-orbBlue-100 dark:bg-orbBlue-900/30 rounded-full animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-bold text-orbBlue-600 dark:text-orbBlue-400">
                    404
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-semibold mb-6 text-orbGray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Page Not Found
            </motion.h1>

            <motion.p
              className="text-xl text-orbGray-600 dark:text-orbGray-300 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The page you're looking for doesn't exist or has been moved.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <OrbButton variant="primary" href="/">
                Back to Home
              </OrbButton>
              <OrbButton variant="secondary" href="/contact">
                Contact Support
              </OrbButton>
            </motion.div>

            <motion.div
              className="mt-16 text-orbGray-500 dark:text-orbGray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p>
                Need immediate assistance?{" "}
                <Link
                  href="/contact"
                  className="text-orbBlue-600 hover:text-orbBlue-700 dark:text-orbBlue-400 dark:hover:text-orbBlue-300"
                >
                  Contact our support team
                </Link>
                .
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
