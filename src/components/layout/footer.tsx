import React from "react";
import Link from "next/link";
import { OrbButton } from "@/components/ui/custom/orb-button";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-orbGray-200 dark:bg-orbGray-900 dark:border-orbGray-800">
      <div className="orb-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          <div>
            <h4 className="text-base font-semibold mb-5 text-orbGray-900 dark:text-white">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-orbGray-600 hover:text-orbBlue-600 transition-colors text-sm dark:text-orbGray-400 dark:hover:text-white"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-orbGray-600 hover:text-orbBlue-600 transition-colors text-sm dark:text-orbGray-400 dark:hover:text-white"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-orbGray-600 hover:text-orbBlue-600 transition-colors text-sm dark:text-orbGray-400 dark:hover:text-white"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-orbGray-600 hover:text-orbBlue-600 transition-colors text-sm dark:text-orbGray-400 dark:hover:text-white"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-orbGray-600 hover:text-orbBlue-600 transition-colors text-sm dark:text-orbGray-400 dark:hover:text-white"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-orbGray-600 hover:text-orbBlue-600 transition-colors text-sm dark:text-orbGray-400 dark:hover:text-white"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-5 text-orbGray-900 dark:text-white">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-orbGray-600 hover:text-orbBlue-600 transition-colors text-sm dark:text-orbGray-400 dark:hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-orbGray-600 hover:text-orbBlue-600 transition-colors text-sm dark:text-orbGray-400 dark:hover:text-white"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-orbGray-600 hover:text-orbBlue-600 transition-colors text-sm dark:text-orbGray-400 dark:hover:text-white"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-orbGray-600 hover:text-orbBlue-600 transition-colors text-sm dark:text-orbGray-400 dark:hover:text-white"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-orbGray-600 hover:text-orbBlue-600 transition-colors text-sm dark:text-orbGray-400 dark:hover:text-white"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-orbGray-600 hover:text-orbBlue-600 transition-colors text-sm dark:text-orbGray-400 dark:hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-5 text-orbGray-900 dark:text-white">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-orbGray-600 hover:text-orbBlue-600 transition-colors text-sm dark:text-orbGray-400 dark:hover:text-white"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-orbGray-600 hover:text-orbBlue-600 transition-colors text-sm dark:text-orbGray-400 dark:hover:text-white"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-orbGray-600 hover:text-orbBlue-600 transition-colors text-sm dark:text-orbGray-400 dark:hover:text-white"
                >
                  E-Commerce
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <OrbButton
                variant="primary"
                size="sm"
                href="/"
                className="w-full justify-center"
              >
                Get Started
              </OrbButton>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-5 text-orbGray-900 dark:text-white">
              Connect with us
            </h4>
            <div className="flex space-x-5 mb-6">
              <a
                href="https://www.linkedin.com/company/orbhq/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orbGray-600 hover:text-orbBlue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orbGray-100 hover:bg-orbBlue-100 transition-colors">
                  <img
                    src="https://ext.same-assets.com/1462919619/2018733539.svg"
                    alt="LinkedIn"
                    className="w-4 h-4"
                  />
                </div>
              </a>
              <a
                href="https://twitter.com/useorb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orbGray-600 hover:text-orbBlue-600 transition-colors"
                aria-label="Twitter"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orbGray-100 hover:bg-orbBlue-100 transition-colors">
                  <img
                    src="https://ext.same-assets.com/1462919619/2067545548.svg"
                    alt="Twitter"
                    className="w-4 h-4"
                  />
                </div>
              </a>
              <a
                href="https://www.youtube.com/channel/UCuKymyFL3HwsKjvPKGIwmlA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orbGray-600 hover:text-orbBlue-600 transition-colors"
                aria-label="YouTube"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orbGray-100 hover:bg-orbBlue-100 transition-colors">
                  <img
                    src="https://ext.same-assets.com/1462919619/4252861238.svg"
                    alt="YouTube"
                    className="w-4 h-4"
                  />
                </div>
              </a>
            </div>

            <div className="text-sm text-orbGray-600 dark:text-orbGray-400">
              <p className="mb-2">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 border border-orbGray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orbBlue-600 focus:border-transparent text-sm flex-grow dark:bg-orbGray-800 dark:border-orbGray-700 dark:text-white dark:placeholder-orbGray-500"
                />
                <button className="bg-orbBlue-600 text-white px-3 py-2 rounded-r-md hover:bg-orbBlue-700 transition-colors text-sm dark:bg-orbBlue-700 dark:hover:bg-orbBlue-800">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-orbGray-200 dark:border-orbGray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Link href="/" className="hover-scale">
                <img
                  src="/vibecode-logo.svg"
                  alt="VibeCode Logo"
                  className="h-6 w-auto dark:invert"
                />
              </Link>
              <span className="text-sm text-orbGray-500 dark:text-orbGray-400">
                © {new Date().getFullYear()} VibeCode.co.za. All rights
                reserved.
              </span>
            </div>

            <div className="flex gap-6 text-sm text-orbGray-500 dark:text-orbGray-400">
              <Link
                href="/"
                className="hover:text-orbBlue-600 transition-colors dark:hover:text-white"
              >
                Terms of Service
              </Link>
              <Link
                href="/"
                className="hover:text-orbBlue-600 transition-colors dark:hover:text-white"
              >
                Website Terms of Use
              </Link>
              <Link
                href="/"
                className="hover:text-orbBlue-600 transition-colors dark:hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
