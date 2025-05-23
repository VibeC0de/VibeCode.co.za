import React from "react";
import { OrbButton } from "@/components/ui/custom/orb-button";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-orbBlue text-white">
      {/* Background sphere */}
      <div className="absolute bottom-0 right-0 w-72 h-72 opacity-20 translate-x-1/4 translate-y-1/4">
        <img
          src="https://cdn.prod.website-files.com/64d69beadfe5074323543ebd/64e43e51e4ad113bb64d79d9_Textured-Sphere-1_Mid-Blue2%204%402x.webp"
          alt=""
          className="w-full h-full"
        />
      </div>

      <div className="orb-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            <span className="block mb-1">Ready for billing</span>
            <span className="text-orbGreen">without barriers?</span>
          </h2>

          <p className="text-blue-100 md:text-lg mb-10 max-w-2xl mx-auto">
            Leave legacy billing systems behind. Get a subscription management
            platform that makes billing work for all.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <OrbButton variant="green" href="/">
              CONTACT SALES
            </OrbButton>
            <OrbButton
              variant="secondary"
              href="https://demo.withorb.com/"
              className="bg-transparent hover:bg-blue-800 text-white border-white"
            >
              EXPLORE DEMO
            </OrbButton>
          </div>
        </div>
      </div>
    </section>
  );
}
