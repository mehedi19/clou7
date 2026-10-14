import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { CaseStudy } from "@/components/CaseStudy";
import { Contact } from "@/components/Contact";
import { DevPortal } from "@/components/DevPortal";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { Insights } from "@/components/Insights";
import { Journey } from "@/components/Journey";
import { Platform } from "@/components/Platform";
import { Solutions } from "@/components/Solutions";
import { TrustedBy } from "@/components/TrustedBy";
import { WhyBangladesh } from "@/components/WhyBangladesh";
import { WhyChoose } from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustedBy />
        <About />
        <Capabilities />
        <Industries />
        <WhyBangladesh />
        <Platform />
        <WhyChoose />
        <Journey />
        <Solutions />
        <CaseStudy />
        <Insights />
        <DevPortal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
