const AyatSection = () => {
  return (
    <section id="ayat" className="bg-[#C99708] px-5 py-14">
        
      <div className=" mx-auto flex max-w-md flex-col items-center text-center">
         <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 220"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#866404"
            d="M0,180L90,200C180,220,360,220,540,190C720,160,900,100,1080,90C1260,80,1350,110,1440,120L1440,320L0,320Z"
          />
          <path
            fill="#C99708"
            d="M0,215L120,180C240,145,480,145,720,170C960,195,1200,245,1440,200L1440,320L0,320Z"
          />
        </svg>
      </div> 

        {/* Judul */}
        <h2
          className="
            font-playfair
            font-bold
            text-black

            xs:text-lg
            xe:text-xl
            text-2xl
            md:text-3xl
          "
        >
          QS. Ar-Rum Ayat 21
        </h2>

        {/* Ayat Arab */}
        <p
          dir="rtl"
          className="
            mt-6
            max-w-4xl
            leading-[2.5]

            font-[Amiri]
            text-black

            xs:text-xl
            xe:text-2xl
            text-3xl
            md:text-4xl
          "
        >
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِّنْ أَنْفُسِكُمْ أَزْوَاجًا
          لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ
          إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
        </p>

        {/* Terjemahan */}
        <p
          className="
            mt-8
            max-w-4xl

            font-playfair
            leading-relaxed
            text-black

            xs:text-sm
            xe:text-base
            text-lg
            md:text-xl
          "
        >
          Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
        </p>

      </div>
      
           {/* Gelombang Bawah */}
      <div className="absolute bottom-0 left-0 w-full rotate-180">
  <svg
    viewBox="0 0 1440 220"
    className="w-full"
    preserveAspectRatio="none"
  >
    <path
      fill="#3a3a3a"
      d="M0,180L90,200C180,220,360,220,540,190C720,160,900,100,1080,90C1260,80,1350,110,1440,120L1440,320L0,320Z"
    />
    <path
      fill="#3a3a3a"
      d="M0,215L120,180C240,145,480,145,720,170C960,195,1200,245,1440,200L1440,320L0,320Z"
    />
  </svg>
</div>
    </section>
  );
};

export default AyatSection;