import Footer from "./Cx/Footer";
import Hero from "./Cx/Hero";
import OpeningTransition from "./Cx/OpeningTransition";
import VideoSection from "./Cx/VideoSection";

export default function Home() {
  return (
    <OpeningTransition>
      <Hero />
      <VideoSection />
      <Footer />
    </OpeningTransition>
  );
}
