import { useEffect, useState } from "react";

const weddingDate = new Date("2027-08-17T00:00:00");

const CountDown = () => {
  const calculateTimeLeft = () => {
    const difference = weddingDate - new Date();

    if (difference <= 0) {
      return {
        hari: "00",
        jam: "00",
        menit: "00",
        detik: "00",
      };
    }

    return {
      hari: Math.floor(difference / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0"),

      jam: Math.floor((difference / (1000 * 60 * 60)) % 24)
        .toString()
        .padStart(2, "0"),

      menit: Math.floor((difference / (1000 * 60)) % 60)
        .toString()
        .padStart(2, "0"),

      detik: Math.floor((difference / 1000) % 60)
        .toString()
        .padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdown = [
    {
      value: timeLeft.hari,
      label: "Hari",
    },
    {
      value: timeLeft.jam,
      label: "Jam",
    },
    {
      value: timeLeft.menit,
      label: "Menit",
    },
    {
      value: timeLeft.detik,
      label: "Detik",
    },
  ];

  return (
    <div className="mt-3 grid grid-cols-4 gap-3 md:gap-5">
      {countdown.map((item) => (
        <div
          key={item.label}
          className="
            flex flex-col items-center justify-center
            rounded-md bg-[#C99708] shadow-lg
             xs:w-16
             xe:w-16
             w-16
            md:w-28
          "
        >
          <h2 className="font-playfair text-3xl font-bold text-white xs:text-2xl">
            {item.value}
          </h2>

          <p className="font-playfair text-[11px] font-semibold uppercase text-white">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountDown;