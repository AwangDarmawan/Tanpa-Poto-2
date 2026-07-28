import Oranment1 from "../Hooks/Oranment1";
import DataGift from "./DataGift";
import GiftCard from "./GiftCard";

const GiftSection = () => {
  return (
    <section id="gift" className="relative overflow-hidden">

      <div className="relative z-10 mx-auto flex max-w-md flex-col items-center px-5 py-28">  
        <Oranment1/>

        <div
          className="text-center"
          data-aos="fade-up"
        >
          <h2 className="font-great text-5xl text-[#D4A017] md:text-6xl">
            Wedding Gift
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-playfair leading-8 text-white">
            Doa restu Anda merupakan hadiah terindah bagi kami.
            Namun apabila ingin memberikan tanda kasih,
            dapat melalui informasi rekening berikut.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-1">

          {DataGift.map((gift, index) => (
            <GiftCard
              key={gift.id}
              {...gift}
              delay={index * 200}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default GiftSection;