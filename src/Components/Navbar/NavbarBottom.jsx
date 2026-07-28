import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { DataNav } from "./DataNav";

export default function NavbarBottom() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = DataNav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setActive(id);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className="
      fixed
      bottom-3
      left-1/2
      -translate-x-1/2

      z-[999]

      w-[95%]
      max-w-md

      rounded-full

      border
      border-[#C9A227]/20

      bg-white/75

      backdrop-blur-xl

      shadow-[0_10px_40px_rgba(0,0,0,.15)]

      px-2
      py-2
      "
    >
      <ul
        className="
        grid
        grid-cols-7

        gap-2
        mx-auto
        
        items-center
        "
      >
        {DataNav.map((item) => (
          <NavItem
            key={item.id}
            {...item}
            active={active === item.id}
            onClick={() => handleClick(item.id)}
          />
        ))}
      </ul>
    </nav>
  );
}