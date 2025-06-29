import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import CoursesSection from "../components/CoursesSection";
import TrainersSection from "../components/TrainersSection";
import BatchesSection from "../components/BatchesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";
import TradingViewTicker from "../components/TradingViewTicker";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="scroll-container h-screen overflow-y-scroll pt-16 pb-16">
        <HeroSection />
        <CoursesSection />
        <TrainersSection />
        <BatchesSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <TradingViewTicker />
    </div>
  );
};

export default Index;
