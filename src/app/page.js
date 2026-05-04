"use client";
import { Anounsmentbar } from "../homepage/Anounsmentbar";
import Navbar  from "../homepage/Navbar";
import HeroSection from "../homepage/HeroSection";
import SectionCard from "../homepage/SectionCard";
import SectionGrid from "../homepage/SectionGrid";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SectionCard />
      <SectionGrid />
    </div>
  );
}
