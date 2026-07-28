import { Users } from "lucide-react";

const FamilyCard = ({ title, family, aos, delay }) => {
  return (
    <div
      data-aos={aos}
      data-aos-delay={delay}
      className="
      rounded-3xl
      border
      border-[#C99708]/30
      bg-[#444444]/90
      p-8
      shadow-xl
      backdrop-blur-sm"
    >
      <div className="flex items-center justify-center gap-3">

        <div className="rounded-full bg-[#C99708] p-3">
          <Users
            size={22}
            className="text-white"
          />
        </div>

        <h3
          className="
          font-playfair
          font-bold
          text-[#D4A017]

          xs:text-xl
          text-2xl"
        >
          {title}
        </h3>
      </div>

      <div className="mt-8 space-y-4">

        {family.map((item, index) => (
          <div
            key={index}
            className="
            rounded-xl
            border
            border-[#C99708]/20
            bg-[#3A3A3A]
            px-5
            py-3
            text-center"
          >
            <p
              className="
              font-playfair
              text-white

              xs:text-sm
              text-base"
            >
              {item}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default FamilyCard;