import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Enhanced color system
        orbBlue: {
          50: "#eef4ff",
          100: "#d9e5ff",
          200: "#bcd0ff",
          300: "#8eb0ff",
          400: "#5c85f9",
          500: "#3a66f0",
          600: "#1c54b0", // Original orbBlue
          700: "#1a3d8f",
          800: "#193573",
          900: "#1a305f",
          950: "#101c3a",
        },
        orbCyan: {
          50: "#f0faff",
          100: "#e0f5fe",
          200: "#bae9fd",
          300: "#7dd9fc",
          400: "#50b6da", // Original orbCyan
          500: "#2aa3c9",
          600: "#1a85ab",
          700: "#196a8b",
          800: "#1b5872",
          900: "#1c4a61",
          950: "#0f3042",
        },
        orbGreen: {
          50: "#f8ffe0",
          100: "#f1ffc0",
          200: "#e5ff88",
          300: "#d2f427", // Original orbGreen
          400: "#c1e316",
          500: "#a0c00c",
          600: "#7d9708",
          700: "#5d700c",
          800: "#4b5a0f",
          900: "#3f4c11",
          950: "#1f2705",
        },
        orbGray: {
          50: "#f9fafb",
          100: "#f3f3f3", // Original orbLightGray
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#c0cedb", // Original orbDarkGray
          500: "#96a7c0", // Original orbMidGray
          600: "#6b7280",
          700: "#4b5563",
          800: "#374151",
          900: "#1f2937",
          950: "#111827",
        },
        orbAccent: {
          orange: "#e26026", // Original orbOrange
          lightGreen: "#d7ec96", // Original orbLightGreen
          pink: "#d2a4af", // Original orbPink
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
      fontFamily: {
        "dm-mono": ["DM Mono", "monospace"],
        inter: ["Inter", "sans-serif"],
        relative: ["Relative", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
