import Hero from "@/components/Hero";
import HarmonsIntro from "@/components/HarmonsIntro";
import EventsMarquee from "@/components/EventsMarquee";
import FoodGallery from "@/components/FoodGallery";
import FinalShowcaseSection from "@/components/FinalShowcaseSection";
import BottomPitchSection from "@/components/BottomPitchSection";
import MomentumScroller from "@/components/MomentumScroller";
import BeerBrandSliders from "@/components/BeerBrandSliders";


import BigFoodBeerSection from "@/components/BigFoodBeerSection";
import TopCategories from "@/components/TopCategories";
import BottleGlassMeet from "@/components/BottleGlassMeet";
import GuestFeedback from "@/components/GuestFeedback";
import Footer from "@/components/Footer";
import ChefsSpecial from "@/components/ChefsSpecial";
export default function HomePage() {
  return (
    <>
      <Hero />
      <EventsMarquee />
      <FoodGallery />
      <HarmonsIntro />
    
      <BigFoodBeerSection />
      <FinalShowcaseSection />
      <BottomPitchSection />
      <TopCategories />
      <BottleGlassMeet />
      <MomentumScroller />
      <BeerBrandSliders />
      <GuestFeedback />
      <ChefsSpecial />
      <Footer />
      
    </>
  );
}
