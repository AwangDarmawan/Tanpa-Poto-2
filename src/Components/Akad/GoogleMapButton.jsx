import { MapPinned } from "lucide-react";

const GoogleMapsButton = () => {
  return (
    <button
      className="
      mt-6
      flex
      items-center
      gap-2

      rounded-full

      bg-[#C99708]

      px-6
      py-2

      font-semibold
      text-white

      transition-all
      duration-300

      hover:scale-105
      hover:bg-[#B48805]"
    >
      <MapPinned size={18} />

      Google Maps
    </button>
  );
};

export default GoogleMapsButton;