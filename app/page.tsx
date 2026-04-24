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

import { motion } from "framer-motion";

function SectionDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="h-px bg-lime/30 origin-left w-full"
    />
  );
}

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <MapDemo />
      <SectionDivider />
      <WalkVibes />
      <SectionDivider />
      <Safety />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
