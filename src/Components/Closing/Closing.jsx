

import Couple from "../../assets/Img/Cover-TP14.png";
import Oranment1 from "../Hooks/Oranment1";

function Closing() {
  return (
    <>
     <section className="relative overflow-hidden">

      <div className="relative z-10 mx-auto flex max-w-md flex-col items-center px-5 py-28"> 
        <Oranment1/> 

  {/* Content */}
 
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

    <p
      className="
        mx-auto
        max-w-md
        text-sm
        sm:text-base
        leading-7
        sm:leading-8
        font-serif
        italic
        text-[#FFF8EE]
      "
    >
      Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
      Bapak/Ibu/Saudara(i) berkenan hadir untuk memberikan doa restu
      kepada kedua mempelai.
    </p>

    <div
      className="
        mx-auto
        mt-6
        h-px
        w-20
        bg-gradient-to-r
        from-transparent
        via-[#E8D2A7]
        to-transparent
      "
    />

  </div>
    
</section>

    </>
  )
}

export default Closing
