import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProblemSolution from "@/components/ProblemSolution";
import Benefits from "@/components/Benefits";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <Benefits />
      <BeforeAfter />
      <Testimonials />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
