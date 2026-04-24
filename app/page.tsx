"use client";

import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import MapDemo from "@/components/sections/MapDemo";
import WalkVibes from "@/components/sections/WalkVibes";
import Safety from "@/components/sections/Safety";
import Testimonials from "@/components/sections/Testimonials";
import DownloadCTA from "@/components/sections/DownloadCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <HowItWorks />
      <MapDemo />
      <WalkVibes />
      <Safety />
      <Testimonials />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
