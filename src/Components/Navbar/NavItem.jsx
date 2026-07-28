export default function NavItem({
  icon: Icon,
  label,
  active,
  onClick,
}) {
  return (
    <li className="flex justify-center">
      <button
        onClick={onClick}
        aria-label={label}
        title={label}
        className={`
          group

          flex
          items-center
          justify-center

          w-10
          h-10

          sm:w-11
          sm:h-11

          rounded-xl

          transition-all
          duration-300

          ${
            active
              ? `
                bg-gradient-to-br
                from-[#F4D35E]
                via-[#D4AF37]
                to-[#C9A227]

                shadow-lg
                shadow-[#C9A227]/40

                scale-110
              `
              : `
                bg-[#3a3a3a]

                hover:bg-[#5e5959]

                hover:-translate-y-1

                hover:shadow-lg
              `
          }
        `}
      >
        <Icon
          size={20}
          className={`
            transition-all
            duration-300

            ${
              active
                ? "text-white scale-110"
                : "text-[#F7F4EF] group-hover:scale-110"
            }
          `}
        />
      </button>
    </li>
  );
}