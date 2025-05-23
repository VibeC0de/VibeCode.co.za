import React from "react";
import { OrbButton } from "@/components/ui/custom/orb-button";

export function Unified() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background sphere effect */}
      <div
        className="absolute right-0 bottom-0 w-[600px] h-[600px] orb-gradient-sphere -z-10 translate-x-1/3 translate-y-1/3"
        aria-hidden="true"
      />

      <div className="orb-container">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <img
              src="https://ext.same-assets.com/1462919619/3633319638.png"
              alt="Why Orb?"
              className="w-5 h-5"
            />
            <p className="text-sm font-medium">Why Orb?</p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 max-w-3xl">
            <span className="block">Unified billing & data</span>
            <span className="text-orbBlue block">
              the new approach to revenue
            </span>
          </h2>

          <p className="text-gray-600 md:text-lg max-w-2xl">
            We're redefining how modern software companies approach pricing and
            billing. By detaching usage data from pricing metrics, we enable the
            power to try new things. So there's freedom to move faster, be
            smarter, and ensure billing works for everyone.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="aspect-[16/9] bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://cdn.prod.website-files.com/64d69beadfe5074323543ebd/6705c3d9c73d3416843bc0fb_unified%20frame%20light.png"
              alt="Orb unified platform"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Light blue sphere overlay */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
            <img
              src="https://cdn.prod.website-files.com/64d69beadfe5074323543ebd/64e400a76043d1ebeb6c1f7a_Textured-Sphere-1_Mid-Blue2%203%402x.webp"
              alt="Blue sphere"
              className="w-64 h-64 opacity-70 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
