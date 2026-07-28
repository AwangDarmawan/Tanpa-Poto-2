const StoryCard = ({ year, title, description, last, aos,
  delay, }) => {
  return (
    <div   data-aos={aos}
  data-aos-delay={delay}
  data-aos-duration="1200" 
  className="relative flex w-full">

      {/* Timeline */}
      <div className="mr-6 flex flex-col items-center">
        <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#C99708] text-lg font-bold text-white shadow-lg">
          {year}
        </div>

        {!last && (
          <div className="mt-2 h-full w-[2px] bg-[#C99708]/60"></div>
        )}
      </div>

      {/* Card */}
      <div className="mb-12 flex-1 rounded-xl border border-[#C99708]/30 bg-[#454545]/80 p-6 shadow-lg backdrop-blur-sm">
        <h3 className="font-great text-4xl text-[#D4A017]">
          {title}
        </h3>

        <p className="mt-3 font-playfair leading-8 text-gray-200">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StoryCard;