"use client";
import { Anounsmentbar } from "../homepage/Anounsmentbar";
import Navbar  from "../homepage/Navbar";
import HeroSection from "../homepage/HeroSection";
import SectionCard from "../homepage/SectionCard";
import SectionGrid from "../homepage/SectionGrid";
import AboutSection from "../homepage/AboutSection";
import HeroBanner from "../homepage/Herobanner";
import Footer from "../homepage/Footer";


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SectionCard />
      <AboutSection />
      <SectionGrid />
      <HeroBanner />
      <Footer />
    </div>
  );
}
export default Home;
