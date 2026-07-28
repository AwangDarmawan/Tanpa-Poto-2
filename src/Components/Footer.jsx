import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" px-5 py-10 text-center">
      <div className="mx-auto w-full max-w-[430px]">
        <h3 className="animate-pulse font-great text-2xl text-[#F7E6C4]">
          🎉 Promo Spesial Bulan Ini
        </h3>

        <p className="mt-4 font-serif text-sm leading-7 text-[#EFE7DD]">
          Diskon hingga{" "}
          <span className="font-bold text-[#F7D37A]">60%</span>
          <br />
          untuk seluruh template
          <br />
          website undangan digital.
        </p>

        <a
  href="https://web-4dadigital.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-6
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-[#D8BF8B]
    px-6
    py-3
    font-serif
    text-[#F7E6C4]
    transition-all
    duration-300
    hover:bg-[#D8BF8B]
    hover:text-[#5B433D]
    hover:scale-105
  "
>
  Lihat Template
  <FaArrowRight className="text-sm" />
</a>
       

        <div className="my-8 h-px w-full bg-[#8B6B5A]" />

        <p className="text-xs font-serif text-[#D8CFC8]">
          © 2026 <span className="font-semibold">4daDigital</span>
          <br />
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}