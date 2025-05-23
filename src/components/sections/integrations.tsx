import React from "react";
import { OrbButton } from "@/components/ui/custom/orb-button";

export function Integrations() {
  return (
    <section className="py-24">
      <div className="orb-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            We integrate with the tools you already use
          </h2>
          <p className="text-gray-600 md:text-lg">
            Orb's billing and invoicing seamlessly connect with any current
            stack. Plug into Quickbooks, NetSuite, Stripe, Bill.com, Salesforce,
            and more right away.
          </p>
          <div className="mt-8">
            <OrbButton
              variant="secondary"
              href="https://www.withorb.com/features/invoicing"
              className="inline-flex items-center gap-2"
            >
              Learn more
              <img
                src="https://ext.same-assets.com/1462919619/867521642.svg"
                alt="Arrow"
                className="w-4 h-4"
              />
            </OrbButton>
          </div>
        </div>

        {/* Integration logos */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-20">
          <div className="flex items-center justify-center">
            <img
              src="https://ext.same-assets.com/1462919619/4051414178.svg"
              alt="QuickBooks Online logo"
              className="h-8 w-auto grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://ext.same-assets.com/1462919619/2326027291.svg"
              alt="Salesforce logo"
              className="h-8 w-auto grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://ext.same-assets.com/1462919619/2893898700.svg"
              alt="Sphere logo"
              className="h-8 w-auto grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://ext.same-assets.com/1462919619/3538453393.png"
              alt="Anrok logo"
              className="h-8 w-auto grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://ext.same-assets.com/1462919619/3702795433.svg"
              alt="Avalara logo"
              className="h-8 w-auto grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://ext.same-assets.com/1462919619/3119541351.svg"
              alt="Clazar logo"
              className="h-8 w-auto grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="p-8 bg-white rounded-lg shadow-sm border border-gray-100">
            <p className="text-gray-700 italic mb-6">
              "Pricing and billing are no longer blockers to our engineering
              velocity and our entire organization is on the same page when it
              comes to usage metrics and billing."
            </p>
            <div className="flex items-center">
              <div>
                <p className="font-medium">DAN CARTER</p>
                <p className="text-sm text-gray-500">Director of Engineering</p>
              </div>
            </div>
            <div className="mt-4">
              <img
                src="https://ext.same-assets.com/1462919619/982663487.svg"
                alt="Vercel logo"
                className="h-5"
              />
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-8 bg-white rounded-lg shadow-sm border border-gray-100">
            <p className="text-gray-700 italic mb-6">
              "Orb helps us stay ahead by empowering us to evolve our billing
              structure while retaining accuracy, visibility, and a trusted
              source of truth."
            </p>
            <div className="flex items-center">
              <div>
                <p className="font-medium">IFAT VILLARET</p>
                <p className="text-sm text-gray-500">Director of Finance</p>
              </div>
            </div>
            <div className="mt-4">
              <img
                src="https://ext.same-assets.com/1462919619/1594739209.svg"
                alt="Pinecone logo"
                className="h-5"
              />
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="p-8 bg-white rounded-lg shadow-sm border border-gray-100">
            <p className="text-gray-700 italic mb-6">
              "Orb made our launch possible by making pricing changes easy and
              stress-free up until the last minute."
            </p>
            <div className="flex items-center">
              <div>
                <p className="font-medium">JEREMY PRESS</p>
                <p className="text-sm text-gray-500">Engineering Manager</p>
              </div>
            </div>
            <div className="mt-4">
              <img
                src="https://ext.same-assets.com/1462919619/1693120408.svg"
                alt="Company logo"
                className="h-5"
              />
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="p-8 bg-white rounded-lg shadow-sm border border-gray-100">
            <p className="text-gray-700 italic mb-6">
              "Orb is the source of truth for our usage information and, as a
              result, it's a core building block of our financial processes and
              systems."
            </p>
            <div className="flex items-center">
              <div>
                <p className="font-medium">CHARLES HORNER</p>
                <p className="text-sm text-gray-500">Head of Finance</p>
              </div>
            </div>
            <div className="mt-4">
              <img
                src="https://ext.same-assets.com/1462919619/360395976.svg"
                alt="Company logo"
                className="h-5"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-medium mb-4">We're a trusted partner</h3>
          <p className="text-gray-600 mb-8">
            Orb is a partner and thought leader for industry-leading SaaS
            companies—guiding them through new pricing evolutions and
            mission-critical revenue initiatives. These companies are just a few
            examples of how switching to Orb can help evolve your billing and
            empower your business.
          </p>
          <OrbButton
            variant="secondary"
            href="https://www.withorb.com/case-studies"
            className="inline-flex items-center gap-2"
          >
            Read our case studies
            <img
              src="https://ext.same-assets.com/1462919619/867521642.svg"
              alt="Arrow"
              className="w-4 h-4"
            />
          </OrbButton>
        </div>
      </div>
    </section>
  );
}
