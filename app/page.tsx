import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import WhoIsFor from "@/components/WhoIsFor";
import Vision from "@/components/Vision";
import FounderStory from "@/components/FounderStory";
import FAQ from "@/components/FAQ";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <WhoIsFor />
        <Vision />
        <FounderStory />
        <FAQ />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
