import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhenTherapyHelps from "@/components/WhenTherapyHelps";
import Benefits from "@/components/Benefits";
import Approach from "@/components/Approach";
import About from "@/components/About";
import Instagram from "@/components/Instagram";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhenTherapyHelps />
        <Benefits />
        <Approach />
        <About />
        <Instagram />
        <FAQ />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
