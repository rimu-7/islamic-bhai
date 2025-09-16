import { PremiumCarousel } from "../components/Carousel";
import IslamicTopicsGrid from "../components/IslamicTopicsGrid";
import Time from "../components/prayer-time/Time";

export default function Home() {
  return (
    <div className="relative">
      {/* Main Content */}
      <div>
        <PremiumCarousel />
        <Time />
        <IslamicTopicsGrid />
      </div>
    </div>
  );
}
