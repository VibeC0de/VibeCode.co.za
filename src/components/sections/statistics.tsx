import React from "react";
import { OrbButton } from "@/components/ui/custom/orb-button";

export function Statistics() {
  return (
    <section className="py-24 bg-orbLightGray">
      <div className="orb-container">
        <h2 className="text-2xl md:text-3xl font-medium mb-16 text-center">
          Built for scale and efficiency
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Stat 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="mb-4">
              <p className="text-sm text-gray-500">For engineering teams</p>
            </div>
            <div className="flex items-end gap-3 mb-4">
              <div className="text-4xl md:text-5xl font-medium text-orbBlue">80%</div>
            </div>
            <p className="text-gray-600 mb-4">
              Reduction in eng time to build billing for new products
            </p>
            <div>
              <a
                href="https://www.withorb.com/case-studies/vercel"
                className="inline-flex items-center text-sm text-orbBlue font-medium hover:text-blue-700 gap-2"
              >
                Read the case study
                <img
                  src="https://ext.same-assets.com/1462919619/867521642.svg"
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </a>
            </div>
            <div className="mt-4">
              <img
                src="https://ext.same-assets.com/1462919619/982663487.svg"
                alt="Vercel logo"
                className="h-6"
              />
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="mb-4">
              <p className="text-sm text-gray-500">For OPS Teams</p>
            </div>
            <div className="flex items-end gap-3 mb-4">
              <div className="text-4xl md:text-5xl font-medium text-orbBlue">75%</div>
            </div>
            <p className="text-gray-600 mb-4">
              Reduction in time spent on billing by the ops team
            </p>
            <div>
              <a
                href="https://www.withorb.com/case-studies/stytch"
                className="inline-flex items-center text-sm text-orbBlue font-medium hover:text-blue-700 gap-2"
              >
                Read the case study
                <img
                  src="https://ext.same-assets.com/1462919619/867521642.svg"
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </a>
            </div>
            <div className="mt-4">
              <img
                src="https://ext.same-assets.com/1462919619/2916283077.svg"
                alt="Stytch logo"
                className="h-6"
              />
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="mb-4">
              <p className="text-sm text-gray-500">For ops teams</p>
            </div>
            <div className="flex items-end gap-3 mb-4">
              <div className="text-4xl md:text-5xl font-medium text-orbBlue">1.5M</div>
            </div>
            <p className="text-gray-600 mb-4">
              Invoices processed per month
            </p>
            <div>
              <a
                href="https://www.withorb.com/case-studies/supabase"
                className="inline-flex items-center text-sm text-orbBlue font-medium hover:text-blue-700 gap-2"
              >
                Learn more
                <img
                  src="https://ext.same-assets.com/1462919619/867521642.svg"
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </a>
            </div>
            <div className="mt-4">
              <img
                src="https://ext.same-assets.com/1462919619/937222670.svg"
                alt="Supabase logo"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
