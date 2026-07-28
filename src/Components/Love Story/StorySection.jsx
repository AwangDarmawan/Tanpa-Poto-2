import Oranment1 from "../Hooks/Oranment1";

import DataStory from "./DataStory";
import StoryCard from "./StoryCard";

const StorySection = () => {
  return (
     <section id="lovestory" className="relative overflow-hidden">

      <div className="relative z-10 mx-auto flex max-w-md flex-col items-center px-5 py-28">  
        <Oranment1/>

        <div className="text-center">
          <h2 className="font-great text-6xl text-[#D4A017]">
            Love Story
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-playfair text-white">
            Setiap perjalanan memiliki kisahnya masing-masing.
            Inilah perjalanan singkat yang mengantarkan kami menuju hari
            bahagia.
          </p>
        </div>

        <div className="mt-20">
          {DataStory.map((story, index) => (
            <StoryCard
              key={story.id}
              {...story}
              last={index === DataStory.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default StorySection;