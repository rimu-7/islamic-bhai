export const Modal = ({ selected, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6">
      <div className="bg-white border-2 border-green-600 rounded shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <X size={24} />
        </button>

        <h2 className="text-5xl font-arabic text-green-900 mb-5 text-center">
          {selected.name}
        </h2>

        <h3 className="text-xl font-semibold text-green-700 tracking-wide text-center mb-4">
          {selected.transliteration}
        </h3>

        <p className="text-green-800 font-medium text-lg mb-4 text-center">
          {selected.bn.meaning}
        </p>

        <p className="text-gray-700 text-sm leading-relaxed text-center">
          {selected.bn.desc}
        </p>
      </div>
    </div>
  );
};