import React, { useState } from "react";
import { Mail } from "lucide-react";


import Couple from "../../assets/Img/Cover-TP14.png";
import { useParams } from "react-router-dom";



const CoverSection = ({ onOpen }) => {
  const [close, setClose] = useState(false);
   const { nama } = useParams();

 const handleOpen = () => {
  // localStorage.setItem("playMusic", "true");

  setClose(true);

  setTimeout(() => {
    onOpen();
  }, 1000);
};

  return (
    // <section
    //   className="relative min-h-screen overflow-hidden "
    // >
      <section
      className={`
    fixed
    inset-0
z-[999]
bg-white/10
backdrop-blur-md
  
    transition-all
    duration-1000
    pb-10
    ${
      close
        ? "-translate-y-full opacity-0"
        : "translate-y-0 opacity-100"
    }
  `}
>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">
      
        <div className="flex w-full max-w-md flex-col items-center text-center">

          {/* Couple */}
          <div className="relative">

            {/* Lingkaran */}
            {/* <div className="flex
              
                items-center justify-center rounded-full border-[3px]"> */}

              <img
                src={Couple}
                alt="Couple"
                className="   xs:w-44
                 xe:w-60
              w-60
                 sm:w-60
              md:w-64
                 lg:w-64 object-contain"
              />
            {/* </div> */}

            {/* Daun kiri */}
            {/* <img
              src={DaunKiri}
              alt=""
              className="absolute
              bottom-0
              right-1/2
              w-28
              translate-x-2
              xs:w-20
              xe:w-24
              sm:w-32
              md:w-36
              lg:w-40"
            /> */}

            {/* Daun kanan */}
            {/* <img
              src={DaunKanan}
              alt=""
              className="absolute
              bottom-0
              left-1/2
              w-28
              -translate-x-2
              xs:w-20
              xe:w-24
              sm:w-32
              md:w-36
              lg:w-40"
            />
          </div> */}
          </div>

          {/* Text */}
          <div className="mt-10">

            <p
              className="
              font-serif
              text-yellow-200
              xs:text-xl
              xe:text-xl
              text-3xl
              sm:text-4xl"
            >
              The Wedding Of
            </p>

            <h1
              className="
              mt-2
              font-playfair italic
              text-yellow-500
              xs:text-[34px]
              xe:text-[30px]
              text-xl
              sm:text-4xl"
            >
              Milea & Dilan
            </h1>

            <p
              className="
              mt-8
              font-serif
              text-xl
              font-semibold
              text-yellow-300
              xs:text-lg
              xe:text-xl"
            >
              Kepada Yth:
            </p>

            <h2
              className="
              mt-2
              font-serif
              text-3xl
              font-bold
              text-yellow-500
              xs:text-xl
              xe:text-[20px] italic"
            >
               {nama}
            </h2>
          </div>

          {/* Button */}
          <button
             onClick={handleOpen}
            className="
            mt-10
            flex
            items-center
            gap-3
            rounded-full
            bg-yellow-500
            px-8
            py-4
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
            hover:bg-yellow-600
            xs:px-6
            xs:py-3
            font-serif z-30"
          >
            
              <Mail
                size={25}
                className="text-white"
              />
            

            Buka Undangan
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoverSection;