import Oranment2 from "../Hooks/Ornament2";

import DataEvent from "./DataEvent"
import EventCard from "./EventCard";



const EventSection = () => {
  return (
    <section id="waktu" className="relative overflow-hidden  ">

      {/* Ornamen Atas */}
      

      <div className="relative z-10 mx-auto flex max-w-md flex-col gap-16 md:py-24 sm:py-28 xs:py-32 py-28 lg:py-32 ">
        <Oranment2/>

        {DataEvent.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}

      </div>

    </section>
  );
};

export default EventSection;