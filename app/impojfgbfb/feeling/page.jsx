import ImportantSection from "../../../components/ImportantSection";
import { ShowPopup } from "../../../components/ShowPopup";
import FeelingsGrid from "./FeelingsGrid";

export default function FeelingsPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <ShowPopup/>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side (Feelings grid, takes 2/3 space) */}
        <div className="lg:col-span-2">
          <FeelingsGrid />
        </div>

        {/* Right side (ImportantSection, takes 1/3 space) */}
        <div>
          <ImportantSection />
        </div>
      </div>
    </div>
  );
}