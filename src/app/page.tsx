"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { EnhancedHero } from "../components/sections/enhanced-hero";
import { Features } from "../components/sections/features";
import { About } from "../components/sections/about";
import { Unified } from "../components/sections/unified";
import { ProductFeatures } from "../components/sections/product-features";
import { Statistics } from "../components/sections/statistics";
import { Integrations } from "../components/sections/integrations";
import { CTA } from "../components/sections/cta";
import { ContactDialog } from "../components/sections/contact-dialog";

export default function Home() {
  return (
    <main>
      <Header />
      <EnhancedHero />
      <Features />
      <About />
      <Unified />
      <ProductFeatures />
      <Statistics />
      <Integrations />
      <CTA />
      <Footer />
    </main>
  );
}
