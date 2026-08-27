
import { CalendarDays, Clock3, MapPin } from "lucide-react";
// import GoogleMapsButton from "./GoogleMapButton";

const EventCard = ({
  title,
  date,
  time,
  locationTitle,
  address,
}) => {
  return (
    <div
      className="
        mx-auto
        flex
        w-full
        max-w-[850px]
        flex-col
        items-center
        px-4
        text-center

        xs:max-w-[340px]
        xs:px-2

        xe:max-w-[380px]
        xe:px-3

        sm:max-w-[600px]
        sm:px-4

        md:max-w-[700px]

        lg:max-w-[800px]

        xl:max-w-[850px]
      "
    >
      {/* ========================================
          JUDUL ACARA
      ======================================== */}
      <h2
        className="
          font-great
          text-[#D4A017]

          text-5xl

          xs:text-4xl

          xe:text-5xl

          sm:text-5xl

          md:text-6xl
        "
      >
        {title}
      </h2>

      {/* ========================================
          TANGGAL
      ======================================== */}
      <div
        className="
          mt-5
          flex
          w-full
          items-center
          justify-center
          gap-2
          text-white

          xs:mt-4
        "
      >
        <CalendarDays
          size={18}
          className="
            shrink-0
            text-[#D4A017]

            xs:h-[16px]
            xs:w-[16px]
          "
        />

        <p
          className="
            font-playfair
            font-semibold
            text-base

            xs:text-xs
            xe:text-sm
            sm:text-base
          "
        >
          {date}
        </p>
      </div>

      {/* ========================================
          WAKTU
      ======================================== */}
      <div
        className="
          mt-2
          flex
          w-full
          items-center
          justify-center
          gap-2
          text-white
        "
      >
        <Clock3
          size={18}
          className="
            shrink-0
            text-[#D4A017]

            xs:h-[16px]
            xs:w-[16px]
          "
        />

        <p
          className="
            font-playfair
            font-semibold
            text-base

            xs:text-xs
            xe:text-sm
            sm:text-base
          "
        >
          {time}
        </p>
      </div>

      {/* ========================================
          LOKASI
      ======================================== */}
      <div
        className="
          mt-4
          flex
          w-full
          flex-col
          items-center
          text-white

          xs:mt-3
        "
      >
        {/* NAMA TEMPAT */}
        <div
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
          "
        >
          <MapPin
            size={18}
            className="
              shrink-0
              text-[#D4A017]

              xs:h-[16px]
              xs:w-[16px]
            "
          />

          <p
            className="
              font-playfair
              font-semibold
              leading-relaxed
              text-white

              text-base

              xs:text-sm
              xe:text-sm

              sm:text-base
            "
          >
            {locationTitle}
          </p>
        </div>

        {/* ALAMAT */}
        <p
          className="
            mt-1
            w-full
            text-center
            font-playfair
            font-medium
            leading-relaxed
            text-white/90

            text-sm

            xs:max-w-[310px]
            xs:text-[11px]
            xs:leading-[1.6]

            xe:max-w-[350px]
            xe:text-xs

            sm:max-w-[550px]
            sm:text-sm

            md:max-w-[650px]

            lg:max-w-[750px]
          "
        >
          {address}
        </p>
      </div>

      {/* ========================================
          GOOGLE MAP
      ======================================== */}
      {/* <GoogleMapsButton /> */}
    </div>
  );
};

export default EventCard;