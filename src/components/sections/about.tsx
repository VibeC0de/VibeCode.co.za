import React from "react";

export function About() {
  return (
    <section className="py-24">
      <div className="orb-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-sm font-mono uppercase text-gray-500 mb-2">ABOUT ORB</p>
            <h2 className="text-4xl md:text-5xl font-medium">
              <span className="block">Billing, managed.</span>
              <span className="text-orbBlue block">Growth, encouraged.</span>
            </h2>
          </div>

          <div className="md:text-lg text-gray-600 space-y-6 max-w-3xl mx-auto">
            <p>
              Orb is for businesses who want to solve billing at the speed of their product. With Orb, teams can evolve their pricing to meet the needs of their customer base as well as their growth plans.
            </p>
            <p>
              Orb's unique model allows billing on seats, consumption, and everything in between. So teams can experiment with different value metrics and even provide custom discounts and add-ons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
