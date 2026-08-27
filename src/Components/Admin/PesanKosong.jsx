import { Trash2 } from "lucide-react";

function PesanKosong() {
  return (
    <section className="min-h-screen bg-[#faf8f4] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">

        {/* ================= HEADER ================= */}
        <div className="mb-10 text-center">
          <p
            className="
              font-playfair
              text-lg
              italic
              bg-gradient-to-b
              from-[#f0a504]
              via-[#b68721]
              to-[#f0a504]
              bg-clip-text
              text-transparent
            "
          >
            Wedding Wishes
          </p>

          <h2
            className="
              mt-2
              font-playfair
              text-4xl
              bg-gradient-to-b
              from-[#f0a504]
              via-[#b68721]
              to-[#f0a504]
              bg-clip-text
              text-transparent
            "
          >
            Pesan
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#f0a504]" />
        </div>

        {/* ================= CARD ================= */}
        <div
          className="
            rounded-2xl
            border
            border-[#eadfc9]
            bg-white
            p-4
            shadow-[0_8px_30px_rgba(91,67,61,0.06)]
            sm:p-6
            md:p-8
          "
        >

          {/* ================= STATISTIK ================= */}
          <div
            className="
              mb-6
              flex
              flex-col
              justify-between
              gap-3
              sm:flex-row
              sm:items-center
            "
          >
            <span
              className="
                rounded-lg
                bg-gradient-to-r
                from-[#f0a504]
                via-[#b68721]
                to-[#f0a504]
                px-4
                py-3
                text-center
                font-serif
                text-white
              "
            >
              Total Pesan : 0
            </span>

            <button
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-red-500
                px-4
                py-3
                font-serif
                text-white
                transition
                hover:bg-red-600
              "
            >
              <Trash2 size={16} />
              Hapus Semua
            </button>
          </div>

          {/* ================= LIST PESAN ================= */}
          <div className="space-y-4">

            {/* CARD PESAN TEMPLATE */}
            <div
              className="
                rounded-xl
                border
                border-pink-100
                bg-white
                p-4
                shadow-[0_8px_32px_rgba(158,184,176,0.25)]
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-4
                  md:flex-row
                  md:items-start
                  md:justify-between
                "
              >

                {/* ================= ISI PESAN ================= */}
                <div className="min-w-0 flex-1">

                  <h4
                    className="
                      font-playfair
                      text-lg
                      font-semibold
                      text-[#5B433D]
                    "
                  >
                    No Pesan
                  </h4>

                  <p
                    className="
                      mt-3
                      break-words
                      font-serif
                      leading-7
                      text-gray-600
                    "
                  >
                  Semua Pesan Sudah di hapus Sama Admin 4daDigital
                  </p>

                </div>

                {/* ================= KEHADIRAN + DELETE ================= */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    md:justify-end
                  "
                >

                  <span
                    className="
                      rounded-full
                      bg-green-100
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-green-700
                    "
                  >
                    Ya
                  </span>

                  <button
                    className="
                      rounded-lg
                      bg-red-500
                      p-2
                      text-white
                      transition
                      hover:bg-red-600
                    "
                  >
                    <Trash2 size={16} />
                  </button>

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default PesanKosong;