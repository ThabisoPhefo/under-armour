import type { MetaFunction } from "@remix-run/node";
import { HeroSection } from "~/components/hero-section";
import { CategoriesSection } from "~/components/categories-section";
import { ProjectRockSection } from "~/components/project-rock-section";
import { PromotionsSection } from "~/components/promotions-section";
import { InstagramSection } from '~/components/instagram-section';
import { useIsMobile } from '~/utils/responsive-utils';

export const meta: MetaFunction = () => {
  return [
    { title: "Under Armour - Latest Gear" },
    { name: "description", content: "Check out Under Armour's latest gear collection" },
  ];
};

export default function Index() {
  const isMobile = useIsMobile();

  return (
    <main className="min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <ProjectRockSection />
      <PromotionsSection />
      <InstagramSection />
    </main>
  );
}
