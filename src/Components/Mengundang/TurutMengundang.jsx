import Oranment2 from "../Hooks/Ornament2";
import DataFamily from "./DataFamily";
import FamilyCard from "./FamilyCard";

const TurutMengundang = () => {
  return (
     <section className="relative overflow-hidden">

      

      <div className="relative z-10 mx-auto flex max-w-md flex-col items-center px-5 py-28">
        <Oranment2/>


        <div
          className="text-center"
          data-aos="fade-up"
        >
          <h2
            className="
            font-great
            text-[#D4A017]

            xs:text-5xl
            text-6xl"
          >
            Turut Mengundang
          </h2>

          <p
            className="
            mx-auto
            mt-5
            max-w-3xl

            font-playfair
            leading-8
            text-gray-200"
          >
            Dengan penuh rasa syukur dan kebahagiaan, keluarga besar kedua
            mempelai turut mengundang Bapak/Ibu/Saudara/i untuk menghadiri
            acara pernikahan kami serta memberikan doa dan restu.
          </p>
        </div>

        <div
          className="
          mt-16
          grid
          gap-8

          lg:grid-cols-1"
        >
          <FamilyCard
            title={DataFamily.groom.title}
            family={DataFamily.groom.family}
            aos="fade-right"
            delay={0}
          />

          <FamilyCard
            title={DataFamily.bride.title}
            family={DataFamily.bride.family}
            aos="fade-left"
            delay={200}
          />
        </div>

      </div>

    </section>
  );
};

export default TurutMengundang;