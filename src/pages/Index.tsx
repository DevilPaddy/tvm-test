import React from "react";
import PageLayout from "@/components/common/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutPreview from "@/components/home/AboutPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

const Index: React.FC = () => {
  return (
    <PageLayout>
      <HeroSection />
      <ServicesSection />
      <AboutPreview />
      <TestimonialsSection />
      <CtaSection />
    </PageLayout>
  );
};

export default Index;