
const AyatSection = () => {
  return (
    
      <section id="ayat" className=" bg-[#C99708] relative  overflow-hidden">
 
       <div className="relative z-10 mx-auto flex max-w-md flex-col items-center px-5 py-16">  
        
        
      {/* <div className=" mx-auto flex max-w-md flex-col items-center text-center"> */}
         

        {/* Judul */}
       

        <h2
  className="
    font-[Amiri]
    text-center
    text-black
    xs:text-2xl
    xe:text-3xl
    text-4xl
    md:text-5xl
  "
  dir="rtl"
>
بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
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
        <p
          className="
          
            font-playfair
            font-bold
            text-black

            xs:text-lg
            xe:text-xl
          text-lg
            md:text-3xl
            text-center
            mt-4
          "
        >
          QS. Ar-Rum Ayat 21
        </p>

      </div>
      
    
    </section>
  );
};

export default AyatSection;