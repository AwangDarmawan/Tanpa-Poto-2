import { FaInstagram } from "react-icons/fa";
import Wanita from "../../assets/Img/Wanita.png"


const WanitaCard = () => {
  return (
    <div className="mt-14 flex flex-col items-center">

      <img
        src={Wanita}
        alt="Wanita"
        className="
        xs:w-44
                 xe:w-60
              w-60
                 sm:w-60
              md:w-64
                 lg:w-64 object-contain"
      />

      <h2
        className="
        mt-6
        font-great
        text-[#D4A017]

        xs:text-3xl
        text-5xl"
      >
        Deliya Listanti
      </h2>

      <button
        className="
        mt-4
        flex
        items-center
        gap-2
        rounded-full
        bg-[#C99708]
        px-5
        py-2
        text-sm
        font-semibold
        text-white"
      >
        <FaInstagram size={18} />
        Deliya Listanti
      </button>

      <p
        className="
        mt-5
        text-center

        font-playfair
        font-semibold
        text-white

        xs:text-sm
        text-base"
      >
        Putri dari
        <br />
        Bapak Dodi Sobandi Dan Ibu Ela
      </p>

    </div>
  );
};

export default WanitaCard;