import { AboutSection } from "@/components/about";
import { AssistantOrb } from "@/components/assistant-orb";
import { CapabilitiesSection } from "@/components/capabilities";
import { ContactSection } from "@/components/contact";
import { ExperienceSection } from "@/components/experience";
import { FitnessSection } from "@/components/fitness";
import { Hero } from "@/components/hero";
import { IdentitySegmentsSection } from "@/components/identity-segments";
import { LegacyHighlightsSection } from "@/components/legacy-highlights";
import { NowFocusSection } from "@/components/now-focus";
import { ProjectsSection } from "@/components/projects";
import { SiteNav } from "@/components/site-nav";
import { ThinkingSection } from "@/components/thinking";

export default function HomePage() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <IdentitySegmentsSection />
      <AboutSection />
      <CapabilitiesSection />
      <ExperienceSection />
      <LegacyHighlightsSection />
      <ProjectsSection />
      <ThinkingSection />
      <NowFocusSection />
      <FitnessSection />
      <ContactSection />
      <AssistantOrb />
    </main>
  );
}
