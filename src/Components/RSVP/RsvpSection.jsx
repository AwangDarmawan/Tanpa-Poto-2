import { useEffect, useState } from "react";
import { FaEnvelopeOpenText, FaHeart } from "react-icons/fa";
import RsvpForm from "./RsvpForm";
import { getData } from "../../Services/Api";
import { TypeAnimation } from "react-type-animation";

export default function RsvpSection() {
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getData();
      setDatas(data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section
    id="rsvp"
             className="
             relative
             overflow-hidden
            "
           >
           
             <div className="absolute inset-0 " />
    
             <div className="relative z-10 mx-auto w-full max-w-md px-5">
        

        <div
          data-aos="fade-up"
          className="
            
          
            
            p-6
            md:p-10
          "
        >
        

          <div
  className="mb-12 text-center"
  data-aos="fade-up"
>



  <h2
    className="
    mt-2
    font-great
    text-6xl
    text-[#D4A017]
    font-bold
    "
  >
    RSVP
  </h2>



     <TypeAnimation
  sequence={[
    "Kehadiran dan doa restu Anda merupakan kebahagiaan yang sangat berarti bagi kami. Silakan isi formulir di bawah ini.",
    10000,
    "",
    1000,
  ]}
  speed={80}
  repeat={Infinity}
  cursor
  wrapper="p"
  className="
    mx-auto
    max-w-2xl
    min-h-[80px]
    leading-8
    text-white
    font-serif
  "
/>


</div>
            <div className="my-6 flex items-center justify-center gap-4">

              <div className="h-px w-20 bg-[#D4A017]" />

              <FaHeart className="text-[#D4A017] animate-pulse" />

              <div className="h-px w-20 bg-[#D4A017]" />

            </div>

            {/* <p
              className="
                mx-auto
                max-w-2xl
                leading-8
                text-gray-500
                font-serif
              "
            >
              Kehadiran dan doa restu Anda merupakan kebahagiaan yang
              sangat berarti bagi kami. Silakan isi formulir di bawah ini.
            </p> */}
       
          </div>

          {/* Form */}

          <RsvpForm PropfetchData={fetchData} />

          {/* List RSVP */}

          <div className="mt-16">

            <h3
            data-aos="fade-right" data-aos-delay="300" 
              className="
                text-center
                text-3xl
                font-serif
                text-[#D4A017]
              "
            >
              Ucapan & Doa
            </h3>

            <div className="mt-8 grid gap-5 md:grid-cols-1">

              {datas.length === 0 ? (
                <div
                  className="
                    col-span-full
                    rounded-2xl
                    border
                    border-dashed
                    border-[#DCE8E3]
                    p-8
                    text-center
                   text-[#D4A017]
                   font-petit
                  "
                >
                  Belum ada RSVP
                </div>
              ) : (
                datas.map((item) => (
                  <div
                    key={item.id}
                    data-aos="fade-up"
                    className="
                      rounded-2xl
                      border
                      border-[#E6EFEA]
                      bg-[#FBFCFC]
                      p-5
                      shadow-sm
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-lg
                    "
                  >
                    <div  className="flex items-start justify-between gap-3">

                      <div className="flex-1">

                        <h4 className="text-lg font-semibold font-serif italic text-[#D4A017]">
                          {item.nama}
                        </h4>

                        <p className="mt-3 font-serif leading-7 text-gray-600 break-words">
                          {item.pesan}
                        </p>

                      </div>

                      <span
                        className={`
                          rounded-full
                          px-1
                          py-1
                          text-xs
                          font-semibold
                            font-serif
                          ${
                            item.kehadiran === "Ya"
                              ? "bg-green-100 text-green-700"
                              : item.kehadiran === "Mungkin"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }
                        `}
                      >
                        {item.kehadiran}
                      </span>

                    </div>
                  </div>
                ))
              )}

            </div>

          </div>

        </div>


    </section>
  );
}