import ConfirmationMessage from "@/components/ConfirmationMessage";
import IslamicTopicsGrid from "@/components/IslamicGrid";
import { PremiumCarousel } from "@/components/PremiumCarousel";
import SocialMedia from "@/components/SocialMedia";
import Time from "@/components/time/time";

export default function Home() {
  return (
    <div className="relative">
      {/* Main Content */}
      <div>
        <PremiumCarousel />
        <Time />
        <IslamicTopicsGrid />
        <SocialMedia />
        <ConfirmationMessage />
      </div>
    </div>
  );
}
