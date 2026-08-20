import Hero from "@/components/Hero";
import StudioIntro from "@/components/StudioIntro";
import FeaturedGame from "@/components/FeaturedGame";
import CommunitySection from "@/components/CommunitySection";

export default function Home() {
  return (
    <>
      <Hero />
      <StudioIntro
        id="about-vgs"
        label="01 / About VGS"
        heading={["HELLO,", "WE'RE VGS."]}
        body={[
          "VGS is an independent game studio based in Vancouver.",
          "We're a small multidisciplinary team creating playful, social, and experimental game experiences.",
        ]}
      />
      <FeaturedGame />
      <CommunitySection />
    </>
  );
}
