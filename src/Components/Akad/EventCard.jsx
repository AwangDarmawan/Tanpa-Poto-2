import { CalendarDays, Clock3, MapPin } from "lucide-react";
import GoogleMapsButton from "./GoogleMapButton";


const EventCard = ({ title, date, time, address }) => {
  return (
    <div className="flex flex-col items-center text-center">

      <h2
        className="
        font-great
        text-[#D4A017]

        xs:text-4xl
        xe:text-5xl
        text-5xl
        md:text-6xl"
      >
        {title}
      </h2>

      <div className="mt-5 flex items-center gap-2 text-white">
        <CalendarDays size={18}  className=" text-[#D4A017]" />

        <p className="font-playfair font-semibold xs:text-sm text-base">
          {date}
        </p>
      </div>

      <div className="mt-2 flex items-center gap-2 text-white">
        <Clock3 size={18}  className=" text-[#D4A017]"/>

        <p className="font-playfair font-semibold xs:text-sm text-base">
          {time}
        </p>
      </div>

     
        <div className="mt-2 flex items-center gap-2 text-white">

        <MapPin
          size={18}
          className=" text-[#D4A017]"
        />

        <p
          className="
        

          font-playfair
          leading-relaxed
          text-white

          xs:text-sm
          text-base"
        >
          {address}
        </p>

      </div>

      <GoogleMapsButton />

    </div>
  );
};

export default EventCard;