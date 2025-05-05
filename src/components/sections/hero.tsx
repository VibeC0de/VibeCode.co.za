"use client";

import React from "react";
import { OrbButton } from "@/components/ui/custom/orb-button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-16 md:pt-20 pb-16 overflow-hidden">
      {/* Background sphere effect */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] orb-gradient-sphere -z-10 translate-x-1/2 -translate-y-1/4"
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      <div className="orb-container">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                Billing stability.
              </motion.span>
              <motion.span
                className="text-orbBlue block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Pricing agility.
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Orb is a usage-based subscription management platform that enables flexible pricing, seamless billing, and faster growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <OrbButton variant="primary" href="/">
                  Contact sales
                </OrbButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <OrbButton variant="secondary" href="https://demo.withorb.com/">
                  Explore demo
                </OrbButton>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-sm font-medium text-gray-500">Trusted By</p>
              <motion.div
                className="grid grid-cols-3 md:grid-cols-9 gap-8 items-center justify-items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {[
                  { src: "https://ext.same-assets.com/1462919619/2154558032.svg", alt: "Pinecone logo" },
                  { src: "https://ext.same-assets.com/1462919619/1436847801.svg", alt: "Neo4j logo" },
                  { src: "https://ext.same-assets.com/1462919619/414192898.svg", alt: "Meter logo" },
                  { src: "https://ext.same-assets.com/1462919619/4058321007.svg", alt: "Stytch logo" },
                  { src: "https://ext.same-assets.com/1462919619/2502586472.svg", alt: "Perplexity logo" },
                  { src: "https://ext.same-assets.com/1462919619/1042729347.svg", alt: "Fal logo" },
                  { src: "https://ext.same-assets.com/1462919619/3145215470.svg", alt: "Tinybird logo" },
                  { src: "https://ext.same-assets.com/1462919619/861707653.svg", alt: "Braintrust logo" },
                  { src: "https://ext.same-assets.com/1462919619/1549626332.svg", alt: "Ngrok logo" },
                ].map((logo) => (
                  <motion.div
                    key={logo.src}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-6 w-auto grayscale hover:grayscale-0 transition-all"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
