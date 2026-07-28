import { Copy, Landmark } from "lucide-react";
import { toast } from "react-toastify";

const GiftCard = ({
  bank,
  accountNumber,
  accountName,
  delay,
}) => {

  const copyNumber = async () => {
    await navigator.clipboard.writeText(accountNumber);

    toast.success("Nomor rekening berhasil disalin");
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={delay}
      className="
      rounded-3xl
      border
      border-[#C99708]/40

      bg-[#444444]

      p-8

      shadow-xl"
    >

      <div className="flex items-center gap-3">

        <div className="rounded-full bg-[#C99708] p-3">
          <Landmark
            size={24}
            className="text-white"
          />
        </div>

        <div>

          <p className="font-playfair text-sm text-gray-300">
            Bank
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#D4A017]">
            {bank}
          </h2>

        </div>

      </div>

      <div className="mt-8">

        <p className="font-playfair text-gray-300">
          Nomor Rekening
        </p>

        <h3 className="mt-2 break-all font-playfair text-3xl font-bold text-white">
          {accountNumber}
        </h3>

      </div>

      <div className="mt-8">

        <p className="font-playfair text-gray-300">
          Atas Nama
        </p>

        <h3 className="mt-2 font-playfair text-xl font-semibold text-white">
          {accountName}
        </h3>

      </div>

      <button
        onClick={copyNumber}
        className="
        mt-8

        flex
        w-full
        items-center
        justify-center
        gap-2

        rounded-full

        bg-[#C99708]

        py-3

        font-semibold
        text-white

        transition-all
        duration-300

        hover:scale-105
        hover:bg-[#B98A04]"
      >
        <Copy size={18} />

        Salin Nomor Rekening
      </button>

    </div>
  );
};

export default GiftCard;