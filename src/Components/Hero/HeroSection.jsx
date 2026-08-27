import CountDown from "./CountDown";
import { CalendarDays } from "lucide-react";
import Couple from "../../assets/Img/Cover-TP14.png";
import Oranment1 from "../Hooks/Oranment1";

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden">

     

       <div className="relative z-10 mx-auto flex max-w-md flex-col items-center px-5 py-28">  
        <Oranment1/>

        {/* Title */}

        <h2
          className="
          font-playfair
          font-bold
          text-yellow-200

          xs:text-2xl
          xe:text-3xl
          text-3xl
          sm:text-4xl
          md:text-5xl"
        >
          The Wedding Of
        </h2>

        {/* Bride */}


              <img
                src={Couple}
                alt="Couple"
                className="  mt-3 xs:w-44
                 xe:w-60
              w-60
                 sm:w-60
              md:w-64
                 lg:w-64 object-contain"
              />
        <h1
          className="
          mt-3
          font-great
          text-[#D4A017]

          xs:text-4xl
          xe:text-5xl
          text-5xl
          sm:text-6xl
          md:text-7xl"
        >
          Ate & Deliya
        </h1>

        {/* Countdown */}
        <CountDown/>
      

        {/* Button */}

        <button
          className="
          mt-10
          flex
          items-center
          gap-2
          rounded-full
          border-2
          border-white
          bg-[#C99708]
          px-7
          py-3
          text-xl
          font-semibold
          text-white
          transition-all
          duration-300
         font-playfair
          hover:scale-105
          hover:bg-[#b88a05]"
        >
          <CalendarDays size={18} />

         Minggu 30 Agustus 2026
        </button>
      </div>
    </section>
  );
};

export default HeroSection;