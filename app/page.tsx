import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import ProjectSection from "@/components/project-section";
import SkillSection from "@/components/skill-section";
import TypewriterHero from "@/components/typewriter-hero";
import { Spotlight } from "@/components/ui/spotlight-new";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (
    <div className="overflow-hidden relative">
      <StarsBackground />
      <Spotlight />
      <TypewriterHero />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}
