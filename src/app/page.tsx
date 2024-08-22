import WavyBackground from "../components/wavy-background";
import Heros from "@/components/heros";
import Navbar from "@/components/nabvar";
import Skills from "@/components/skills";
import Experiences from "@/components/experiences";
import Contacts from "@/components/contacts";
import { FlipWordsDemo } from "@/components/flips";
import { ImagesSliderDemo } from "@/components/jannabi/jannabi";
import { FocusCardsDemo } from "@/components/jannabi/songs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent relative">
      <Navbar />
      <div>
        <WavyBackground>
          <Heros />
        </WavyBackground>

        <Skills />
        <Experiences />

        <div className="relative -mt-12">
          <WavyBackground>
            <Contacts />
          </WavyBackground>
          <FlipWordsDemo />
          <ImagesSliderDemo />
          <FocusCardsDemo />
        </div>
      </div>
    </main>
  );
}
