import { X } from "lucide-react";

// ✅ Use default export
export default function Modal({ selected, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6">
      <div className="bg-green-50 border-2 rounded-2xl border-green-600 shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <X size={24} />
        </button>

        <h2 className="text-5xl font-arabic mb-5 text-center">
          {selected.name}
        </h2>

        <h3 className="text-4xl font-semibold  tracking-wide text-center mb-4">
          {selected.transliteration}
        </h3>

        <p className=" font-medium text-2xl mb-4 text-center">
          {selected.bn}
        </p>

        {/* Optional description */}
        {selected.desc && (
          <p className="text-gray-700 text-xl leading-relaxed text-center">
            {selected.desc}
          </p>
        )}
      </div>
    </div>
  );
}
