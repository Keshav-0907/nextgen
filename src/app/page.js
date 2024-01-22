import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Countdown from "./components/Countdown";
import WhatYouGet from "./components/WhatYouGet";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Speakrs from "./components/Speakrs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown/>
      <WhatYouGet/>
      <Speakrs/>
      <Faqs/>
      <Footer/>
    </main>
  );
}
