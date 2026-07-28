// import GroomCard from "./PriaCard";
// import BrideCard from "./BrideCard";
import Oranment1 from "../Hooks/Oranment1";
import PriaCard from "./PriaCard";
import WanitaCard from "./WanitaCard";

const PasanganSection = () => {
  return (
    <section id="pasangan" className="relative overflow-hidden">

      

      <div className="relative z-10 mx-auto flex max-w-md flex-col items-center px-5 py-28">
        <Oranment1/>

        {/* Salam */}

        <h2 className="font-playfair text-center font-semibold text-white
        xs:text-sm
        xe:text-base
        text-lg
        md:text-xl">

          Assalamu'alaikum Warahmatullahi Wabarakatuh

        </h2>

        <p
          className="
          mt-6
          max-w-3xl
          text-center

          font-playfair
          leading-relaxed
          text-white

          xs:text-sm
          xe:text-base
          text-lg"
        >
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang
          pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan
          kami.
        </p>

        <PriaCard/>

        <div className="my-12">

          <h2
            className="
            font-great
            text-[#D4A017]

            xs:text-4xl
            text-5xl
            md:text-6xl"
          >
            &
          </h2>

        </div>

        <WanitaCard />

      </div>
    </section>
  );
};

export default PasanganSection;