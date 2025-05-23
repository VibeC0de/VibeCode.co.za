"use client";

import React from "react";
import { motion } from "framer-motion";

export function Features() {
  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 bg-orbLightGray">
      <div className="orb-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <motion.div
            className="p-8 bg-white rounded-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={featureVariants}
          >
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <motion.div
                  className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, backgroundColor: "#e6f4ff" }}
                >
                  <img
                    src="https://ext.same-assets.com/1462919619/3633319638.png"
                    alt="Feature icon"
                    className="w-5 h-5"
                  />
                </motion.div>
                <h3 className="text-xl font-medium mb-2">
                  <span className="block">Set flexible</span>
                  <span className="text-orbBlue">pricing</span>
                </h3>
              </div>
              <p className="text-gray-600 text-sm flex-grow">
                Orb is flexible and nimble, so teams can experiment with pricing
                and fine-tune monetization at their own pace, while keeping
                costs under control.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="p-8 bg-white rounded-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={featureVariants}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <motion.div
                  className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, backgroundColor: "#e6f4ff" }}
                >
                  <img
                    src="https://ext.same-assets.com/1462919619/3633319638.png"
                    alt="Feature icon"
                    className="w-5 h-5"
                  />
                </motion.div>
                <h3 className="text-xl font-medium mb-2">
                  <span className="block">Make billing</span>
                  <span className="text-orbBlue">seamless</span>
                </h3>
              </div>
              <p className="text-gray-600 text-sm flex-grow">
                Orb combines usage tracking, subscription management, invoicing
                and financial reporting so teams can bill confidently.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="p-8 bg-white rounded-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={featureVariants}
            transition={{ delay: 0.4 }}
          >
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <motion.div
                  className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, backgroundColor: "#e6f4ff" }}
                >
                  <img
                    src="https://ext.same-assets.com/1462919619/3633319638.png"
                    alt="Feature icon"
                    className="w-5 h-5"
                  />
                </motion.div>
                <h3 className="text-xl font-medium mb-2">
                  <span className="block">Grow faster</span>
                  <span className="text-orbBlue">than ever</span>
                </h3>
              </div>
              <p className="text-gray-600 text-sm flex-grow">
                With seamless invoicing and financial reporting, Orb adapts
                billing to the speed of any business. So old, static systems
                won't slow down new growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
