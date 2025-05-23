import React from "react";
import { OrbButton } from "@/components/ui/custom/orb-button";

export function ProductFeatures() {
  return (
    <section className="py-24">
      <div className="orb-container">
        {/* SQL Feature */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 mb-32">
          <div className="flex-1 order-2 md:order-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-[#1E293B] p-4 text-white font-mono text-sm">
                <p className="text-green-400">
                  -- Define custom metrics with SQL
                </p>
                <div className="mt-2 text-blue-300">SELECT</div>
                <div className="ml-4 text-gray-100">customer_id,</div>
                <div className="ml-4 text-gray-100">
                  SUM(tokens) as total_tokens,
                </div>
                <div className="ml-4 text-gray-100">
                  COUNT(*) as query_count
                </div>
                <div className="text-blue-300">FROM events</div>
                <div className="text-blue-300">WHERE</div>
                <div className="ml-4 text-gray-100">
                  event_type = 'query' AND
                </div>
                <div className="ml-4 text-gray-100">
                  timestamp BETWEEN '2023-04-01' AND '2023-04-30'
                </div>
                <div className="text-blue-300">GROUP BY</div>
                <div className="ml-4 text-gray-100">customer_id</div>
              </div>
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2 flex flex-col justify-center">
            <h3 className="text-xl mb-6 inline-block font-mono bg-orbGreen px-3 py-1 rounded-md">
              Custom SQL
            </h3>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Define any billing metric and visualize usage with the full power
              of SQL.
            </h2>
          </div>
        </div>

        {/* Usage Tracking Feature */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Connect product usage to billing with zero loss
            </h2>

            <p className="text-gray-600 md:text-lg mb-8">
              Orb ingests and processes all raw event data, so teams can get
              precise, error-free billing, as well as future-proof pricing.
            </p>

            <div>
              <OrbButton
                variant="secondary"
                href="https://www.withorb.com/features/usage-tracking"
                className="inline-flex items-center gap-2"
              >
                Learn more about Usage Tracking
                <img
                  src="https://ext.same-assets.com/1462919619/867521642.svg"
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </OrbButton>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative">
              <img
                src="https://ext.same-assets.com/1462919619/1403617727.svg"
                alt="Usage tracking visualization"
                className="w-full"
              />
              <div className="absolute top-1/4 right-0 -translate-y-1/2 translate-x-1/4">
                <img
                  src="https://cdn.prod.website-files.com/64d69beadfe5074323543ebd/64e400a76043d1ebeb6c1f7a_Textured-Sphere-1_Mid-Blue2%203%402x.webp"
                  alt="Blue sphere"
                  className="w-40 h-40 opacity-60 animate-float"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Models Feature */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 mt-32">
          <div className="flex-1 order-2 md:order-1">
            <div className="relative">
              <div className="bg-gray-100 p-6 rounded-xl">
                <h4 className="text-sm text-gray-500 mb-2">
                  Versions and Migrations
                </h4>
                <p className="font-medium">
                  The first-ever feature for managing legacy pricing and rolling
                  out bulk price changes with granular control.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Ship pricing as fast as you ship your product
            </h2>

            <p className="text-gray-600 md:text-lg mb-8">
              Launch and test new pricing without having to add team members or
              fulfill rigid system requirements. Orb supports all models: usage,
              subscription and hybrid.
            </p>

            <div>
              <OrbButton
                variant="secondary"
                href="https://www.withorb.com/features/pricing-models"
                className="inline-flex items-center gap-2"
              >
                Learn more about Pricing Models
                <img
                  src="https://ext.same-assets.com/1462919619/867521642.svg"
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </OrbButton>
            </div>
          </div>
        </div>

        {/* Team Feature */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 mt-32">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Grows to meet every team's needs
            </h2>

            <p className="text-gray-600 md:text-lg mb-8">
              With Orb, every team can leverage their data, query it seamlessly
              and add-on billing, invoicing, and reporting—all while remaining
              compliant.
            </p>

            <div>
              <OrbButton
                variant="secondary"
                href="https://www.withorb.com/features/reporting"
                className="inline-flex items-center gap-2"
              >
                Read more about Reporting
                <img
                  src="https://ext.same-assets.com/1462919619/867521642.svg"
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </OrbButton>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/64d69beadfe5074323543ebd/66fc7c20f606861e28b75a7d_frame%20mobile.png"
                alt="Orb reporting"
                className="w-full"
              />
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Get accurate and efficient revenue recognition, on top of the same
              underlying data that drives your billing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
