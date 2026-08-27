// import Oranment2 from "../Hooks/Ornament2";

// import DataEvent from "./DataEvent"
// import EventCard from "./EventCard";



// const EventSection = () => {
//   return (
//     <section id="waktu" className="relative overflow-hidden  ">

//       {/* Ornamen Atas */}
      

//       <div className="relative z-10 mx-auto flex max-w-md flex-col gap-16 md:py-24 sm:py-28 xs:py-32 py-28 lg:py-32 ">
//         <Oranment2/>

//         {DataEvent.map((event) => (
//           <EventCard key={event.title} {...event} />
//         ))}

//       </div>

//     </section>
//   );
// };

// export default EventSection;
import Oranment2 from "../Hooks/Ornament2";

import DataEvent from "./DataEvent";
import EventCard from "./EventCard";

const EventSection = () => {
  return (
    <section
      id="waktu"
      className="
        relative
        w-full
        overflow-hidden
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1536px]
          flex-col
          items-center

          gap-16

          py-28

          xs:gap-14
          xs:py-28

          xe:gap-16
          xe:py-28

          sm:gap-20
          sm:py-28

          md:gap-24
          md:py-24

          lg:gap-24
          lg:py-32

          xl:gap-28
          xl:py-32
        "
      >
        {/* ORNAMEN */}
        <Oranment2 />

        {/* EVENT */}
        {DataEvent.map((event) => (
          <EventCard
            key={event.id}
            {...event}
          />
        ))}
      </div>
    </section>
  );
};

export default EventSection;