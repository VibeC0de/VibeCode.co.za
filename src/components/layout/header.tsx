import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { OrbButton } from "@/components/ui/custom/orb-button";
import { ThemeToggle } from "@/components/ui/custom/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const ProductsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 orb-nav-link focus-ring rounded-md px-1">
        <span>Services</span>
        <ChevronDown className="h-4 w-4 opacity-70" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 p-3 rounded-xl shadow-lg border border-orbGray-200 dark:bg-orbGray-900 dark:border-orbGray-700">
        <DropdownMenuItem asChild>
          <Link
            href="/"
            className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-orbGray-50 dark:hover:bg-orbGray-800 transition-colors"
          >
            <div className="bg-orbBlue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 10L12 14L16 10"
                  stroke="#1c54b0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-orbGray-900 dark:text-white">
                Web Development
              </div>
              <div className="text-sm text-orbGray-600 dark:text-orbGray-400">
                Custom websites built with modern technologies
              </div>
            </div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/"
            className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-orbGray-50 dark:hover:bg-orbGray-800 transition-colors"
          >
            <div className="bg-orbCyan-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"
                  stroke="#1a85ab"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-orbGray-900 dark:text-white">
                UI/UX Design
              </div>
              <div className="text-sm text-orbGray-600 dark:text-orbGray-400">
                Beautiful interfaces that enhance user experience
              </div>
            </div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/"
            className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-orbGray-50 dark:hover:bg-orbGray-800 transition-colors"
          >
            <div className="bg-orbGreen-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01"
                  stroke="#7d9708"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-orbGray-900 dark:text-white">
                E-Commerce
              </div>
              <div className="text-sm text-orbGray-600 dark:text-orbGray-400">
                Online stores with secure payment processing
              </div>
            </div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/"
            className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-orbGray-50 dark:hover:bg-orbGray-800 transition-colors"
          >
            <div className="bg-amber-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
                  stroke="#b45309"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-orbGray-900 dark:text-white">
                SEO
              </div>
              <div className="text-sm text-orbGray-600 dark:text-orbGray-400">
                Optimize your site for better search engine rankings
              </div>
            </div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/"
            className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-orbGray-50 dark:hover:bg-orbGray-800 transition-colors"
          >
            <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H9C10.1046 11 11 10.1046 11 9V5C11 3.89543 10.1046 3 9 3Z"
                  stroke="#7e22ce"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 13H5C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V15C11 13.8954 10.1046 13 9 13Z"
                  stroke="#7e22ce"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 3H15C13.8954 3 13 3.89543 13 5V9C13 10.1046 13.8954 11 15 11H19C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3Z"
                  stroke="#7e22ce"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 17.5C13 15.6 14.6 14 16.5 14C18.4 14 20 15.6 20 17.5C20 19.4 18.4 21 16.5 21C14.6 21 13 19.4 13 17.5Z"
                  stroke="#7e22ce"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-orbGray-900 dark:text-white">
                Web Hosting
              </div>
              <div className="text-sm text-orbGray-600 dark:text-orbGray-400">
                Fast, secure hosting for your website
              </div>
            </div>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const SolutionsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 orb-nav-link focus-ring rounded-md px-1">
        <span>Technologies</span>
        <ChevronDown className="h-4 w-4 opacity-70" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-3 rounded-xl shadow-lg border border-orbGray-200 dark:bg-orbGray-900 dark:border-orbGray-700">
        <div className="mb-2 px-2 pt-1 pb-2 text-xs uppercase text-orbGray-500 dark:text-orbGray-400 font-semibold tracking-wider">
          Frontend
        </div>
        <DropdownMenuItem asChild>
          <Link
            href="/"
            className="p-2.5 rounded-lg hover:bg-orbGray-50 dark:hover:bg-orbGray-800 transition-colors flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-orbBlue-500" />
            <span className="font-medium text-orbGray-900 dark:text-white">
              React
            </span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/"
            className="p-2.5 rounded-lg hover:bg-orbGray-50 dark:hover:bg-orbGray-800 transition-colors flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-orbCyan-500" />
            <span className="font-medium text-orbGray-900 dark:text-white">
              Next.js
            </span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/"
            className="p-2.5 rounded-lg hover:bg-orbGray-50 dark:hover:bg-orbGray-800 transition-colors flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-orbGreen-400" />
            <span className="font-medium text-orbGray-900 dark:text-white">
              Tailwind CSS
            </span>
          </Link>
        </DropdownMenuItem>

        <div className="my-2 px-2 pt-1 pb-2 text-xs uppercase text-orbGray-500 dark:text-orbGray-400 font-semibold tracking-wider">
          Backend
        </div>
        <DropdownMenuItem asChild>
          <Link
            href="/"
            className="p-2.5 rounded-lg hover:bg-orbGray-50 dark:hover:bg-orbGray-800 transition-colors flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="font-medium text-orbGray-900 dark:text-white">
              Node.js
            </span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/"
            className="p-2.5 rounded-lg hover:bg-orbGray-50 dark:hover:bg-orbGray-800 transition-colors flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="font-medium text-orbGray-900 dark:text-white">
              GraphQL
            </span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const ResourcesDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 orb-nav-link focus-ring rounded-md px-1">
        <span>Resources</span>
        <ChevronDown className="h-4 w-4 opacity-70" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-3 rounded-xl shadow-lg border border-orbGray-200 dark:bg-orbGray-900 dark:border-orbGray-700">
        <DropdownMenuItem asChild>
          <Link
            href="/"
            className="p-2.5 rounded-lg hover:bg-orbGray-50 dark:hover:bg-orbGray-800 transition-colors flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-orbBlue-600"
            >
              <path
                d="M12 11V17M12 8V8.01M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-medium text-orbGray-900 dark:text-white">
              Blog
            </span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/"
            className="p-2.5 rounded-lg hover:bg-orbGray-50 dark:hover:bg-orbGray-800 transition-colors flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-orbBlue-600"
            >
              <path
                d="M9 6L20 6M9 12H20M9 18H20M5 6V6.01M5 12V12.01M5 18V18.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-medium text-orbGray-900 dark:text-white">
              Portfolio
            </span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/"
            className="p-2.5 rounded-lg hover:bg-orbGray-50 dark:hover:bg-orbGray-800 transition-colors flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-orbBlue-600"
            >
              <path
                d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-medium text-orbGray-900 dark:text-white">
              Case Studies
            </span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/"
            className="p-2.5 rounded-lg hover:bg-orbGray-50 dark:hover:bg-orbGray-800 transition-colors flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-orbBlue-600"
            >
              <path
                d="M19 20H5V19C5 15.134 8.13401 12 12 12C15.866 12 19 15.134 19 19V20ZM12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-medium text-orbGray-900 dark:text-white">
              About Us
            </span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-orbGray-200 shadow-sm backdrop-blur-sm bg-white/95 dark:bg-orbGray-900 dark:border-orbGray-800 dark:bg-orbGray-900/95">
      <div className="flex h-16 items-center px-4 md:px-6 max-w-screen-2xl mx-auto">
        <div className="relative flex gap-2 items-center">
          <Link href="/" className="flex items-center hover-scale">
            <img
              src="/vibecode-logo.svg"
              alt="VibeCode Logo"
              className="h-8 w-auto dark:invert"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8 ml-10">
          <ProductsDropdown />
          <SolutionsDropdown />
          <Link href="/" className="orb-nav-link">
            Docs
          </Link>
          <ResourcesDropdown />
        </div>

        <div className="hidden md:flex items-center ml-auto space-x-5">
          <Link href="/" className="orb-nav-link">
            Pricing
          </Link>
          <Link href="/" className="orb-nav-link">
            Our Work
          </Link>
          <Link href="/" className="orb-nav-link">
            Contact
          </Link>
          <ThemeToggle />
          <OrbButton
            variant="primary"
            size="sm"
            href="/"
            className="shadow-md hover:shadow-lg"
          >
            Contact Us
          </OrbButton>
          <Link
            href="/"
            className="text-sm font-medium text-orbGray-700 hover:text-orbBlue-600 transition-colors dark:text-orbGray-300 dark:hover:text-white"
          >
            Log in
          </Link>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-md hover:bg-orbGray-100 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orbGray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] border-l border-orbGray-200 shadow-xl"
            >
              <div className="flex flex-col space-y-6 py-6">
                <div className="px-4 py-2">
                  <h3 className="mb-3 text-lg font-semibold text-orbGray-900">
                    Products
                  </h3>
                  <div className="space-y-1">
                    <Link
                      href="/"
                      className="block py-2 px-2 rounded-md hover:bg-orbGray-100 transition-colors"
                    >
                      Usage Tracking
                    </Link>
                    <Link
                      href="/"
                      className="block py-2 px-2 rounded-md hover:bg-orbGray-100 transition-colors"
                    >
                      Pricing Models
                    </Link>
                    <Link
                      href="/"
                      className="block py-2 px-2 rounded-md hover:bg-orbGray-100 transition-colors"
                    >
                      Invoicing
                    </Link>
                    <Link
                      href="/"
                      className="block py-2 px-2 rounded-md hover:bg-orbGray-100 transition-colors"
                    >
                      Reporting
                    </Link>
                    <Link
                      href="/"
                      className="block py-2 px-2 rounded-md hover:bg-orbGray-100 transition-colors"
                    >
                      Simulations
                    </Link>
                  </div>
                </div>
                <div className="px-4 py-2">
                  <h3 className="mb-3 text-lg font-semibold text-orbGray-900">
                    Solutions
                  </h3>
                  <div className="space-y-1">
                    <Link
                      href="/"
                      className="block py-2 px-2 rounded-md hover:bg-orbGray-100 transition-colors"
                    >
                      Product
                    </Link>
                    <Link
                      href="/"
                      className="block py-2 px-2 rounded-md hover:bg-orbGray-100 transition-colors"
                    >
                      Finance
                    </Link>
                    <Link
                      href="/"
                      className="block py-2 px-2 rounded-md hover:bg-orbGray-100 transition-colors"
                    >
                      Engineering
                    </Link>
                    <Link
                      href="/"
                      className="block py-2 px-2 rounded-md hover:bg-orbGray-100 transition-colors"
                    >
                      Price Changes
                    </Link>
                    <Link
                      href="/"
                      className="block py-2 px-2 rounded-md hover:bg-orbGray-100 transition-colors"
                    >
                      AI
                    </Link>
                  </div>
                </div>
                <div className="px-4 py-2">
                  <h3 className="mb-3 text-lg font-semibold text-orbGray-900">
                    Resources
                  </h3>
                  <div className="space-y-1">
                    <Link
                      href="/"
                      className="block py-2 px-2 rounded-md hover:bg-orbGray-100 transition-colors"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/"
                      className="block py-2 px-2 rounded-md hover:bg-orbGray-100 transition-colors"
                    >
                      Changelog
                    </Link>
                    <Link
                      href="/"
                      className="block py-2 px-2 rounded-md hover:bg-orbGray-100 transition-colors"
                    >
                      Case Studies
                    </Link>
                    <Link
                      href="/"
                      className="block py-2 px-2 rounded-md hover:bg-orbGray-100 transition-colors"
                    >
                      Press & News
                    </Link>
                  </div>
                </div>
                <div className="px-4 py-2">
                  <div className="space-y-1">
                    <Link
                      href="/"
                      className="block py-2 px-2 rounded-md hover:bg-orbGray-100 transition-colors"
                    >
                      Docs
                    </Link>
                    <Link
                      href="/"
                      className="block py-2 px-2 rounded-md hover:bg-orbGray-100 transition-colors"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="/"
                      className="block py-2 px-2 rounded-md hover:bg-orbGray-100 transition-colors"
                    >
                      Careers
                    </Link>
                    <Link
                      href="/"
                      className="block py-2 px-2 rounded-md hover:bg-orbGray-100 transition-colors"
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
                <div className="px-4 pt-4 flex flex-col space-y-4 border-t border-orbGray-200 dark:border-orbGray-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-orbGray-700 dark:text-orbGray-300">
                      Theme
                    </span>
                    <ThemeToggle />
                  </div>
                  <OrbButton
                    variant="primary"
                    href="/"
                    className="w-full justify-center"
                  >
                    Contact Us
                  </OrbButton>
                  <Link
                    href="/"
                    className="py-2 text-center font-medium text-orbGray-700 hover:text-orbBlue-600 transition-colors dark:text-orbGray-300 dark:hover:text-white"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
