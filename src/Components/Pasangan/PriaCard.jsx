import { FaInstagram } from "react-icons/fa";
import Pria from "../../assets/Img/Pria.png"


const PriaCard = () => {
  return (
    <div className="mt-14 flex flex-col items-center">

      <img
        src={Pria}
        alt="Pria"
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
        Dilan Pratama
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
        Dilan Pratama
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
        Putra Pertama dari
        <br />
        Bapak Lorem Dan Ibu Ipsum
      </p>

    </div>
  );
};

export default PriaCard;