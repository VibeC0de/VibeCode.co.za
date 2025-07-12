# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (runs on 0.0.0.0 with turbopack)
- **Build**: `npm run build`
- **Start production**: `npm run start`
- **Lint and typecheck**: `npm run lint` (runs Biome linting with auto-fix and TypeScript check)
- **Format code**: `npm run format` (runs Biome formatter)

## Architecture Overview

This is a Next.js 15 application with App Router, built as a business website for VibeCode.co.za web development services.

### Technology Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS with custom "orb" color system
- **UI Components**: Shadcn/ui components with custom "orb" variants
- **Animations**: Framer Motion
- **Icons**: Tabler Icons and Lucide React
- **Theme**: Custom theme provider with light/dark/system modes
- **Linting**: Biome (replaces ESLint/Prettier)
- **Type Checking**: TypeScript with strict mode
- **Deployment**: Netlify with custom build configuration

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata and theme provider
│   ├── page.tsx           # Home page with all sections
│   └── globals.css        # Global styles and CSS variables
├── components/
│   ├── layout/            # Header and footer components
│   ├── sections/          # Page sections (hero, features, about, etc.)
│   └── ui/                # Reusable UI components
│       └── custom/        # Custom "orb" themed components
├── contexts/              # React contexts (theme management)
└── lib/                   # Utilities (cn function for className merging)
```

### Custom Design System

The project uses a custom "orb" color palette defined in `tailwind.config.ts`:
- **orbBlue**: Primary brand color (600: #1c54b0)
- **orbCyan**: Secondary accent (400: #50b6da)  
- **orbGreen**: Success/CTA color (300: #d2f427)
- **orbGray**: Neutral colors with various shades
- **orbAccent**: Additional accent colors (orange, lightGreen, pink)

### Component Conventions

- Components use the custom `OrbButton`, `OrbCard`, `OrbBadge` variants instead of default shadcn components
- All components are client-side (`"use client"`) where needed
- Import aliases use `@/` prefix for src directory
- Class names merged using `cn()` utility function
- Custom animations defined in Tailwind config (float, pulse-slow)

### Theme System

- Custom theme provider in `src/contexts/theme-context.tsx`
- Supports light, dark, and system themes
- Storage key: "orb-theme"
- CSS variables defined in globals.css for theme switching

### Development Notes

- Uses Biome instead of ESLint/Prettier for faster linting
- TypeScript strict mode enabled
- Remote image patterns configured for external assets
- Netlify deployment with custom build command using Bun
- Path aliases configured: `@/*` maps to `./src/*`

### Content Structure

The homepage consists of multiple sections rendered in order:
1. Header (navigation)
2. EnhancedHero (main hero section)
3. Features
4. About
5. Unified
6. ProductFeatures
7. Statistics
8. Integrations
9. CTA (call-to-action)
10. Footer

When making changes, follow the existing patterns for component structure, naming conventions, and the custom "orb" design system.