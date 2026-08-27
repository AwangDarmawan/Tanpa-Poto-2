import { useEffect, useRef, useState } from "react"
import HeroSection from '../Components/Hero/HeroSection'
import AyatSection from '../Components/Ayat/AyatSection'
import PasanganSection from '../Components/Pasangan/PasanganSection'
import EventSection from '../Components/Akad/EventSection'
import StorySection from '../Components/Love Story/StorySection'
import GiftSection from '../Components/Gift/GiftSection'
import RsvpSection from '../Components/RSVP/RsvpSection'
import TurutMengundang from '../Components/Mengundang/TurutMengundang'
import Closing from '../Components/Closing/Closing'
import Footer from '../Components/Footer'
import CoverSection from '../Components/Cover/CoverSection'
import NavbarBottom from '../Components/Navbar/NavbarBottom'

import Lagu from "../assets/Musik/LaguSunda.mp3"
import { Volume2, VolumeX } from "lucide-react"

function HomePage() {
   const [open, setOpen] = useState(false);
        const audioRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);
const handleOpenInvitation = () => {
  setOpen(true);

  if (audioRef.current) {
    audioRef.current.play();
    setIsPlaying(true);
  }
};
  return (
    <>
     {!open && (
        <CoverSection
     onOpen={handleOpenInvitation}
        />
      )}
      <HeroSection/>
      <AyatSection/>
      <PasanganSection/>
      <EventSection/>
      <StorySection/>
      <GiftSection/>
      <RsvpSection/>
      <TurutMengundang/>
      <Closing/>
      <Footer/>
      {open && <NavbarBottom />}

       <button
  onClick={() => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }}
  


  


  className="
     fixed
    bottom-24
    right-5
    z-50
    w-12
    h-12
    
    rounded-full
    border
  border-white
  bg-[#D4A017]
 
  text-white
    flex
    items-center
    justify-center
      shadow-[0_4px_15px_rgba(62,92,147,0.5)]
    
"
>
  {isPlaying ? (
     <Volume2 size={22} />
  ) : (
   
       <VolumeX size={22} />
   
     )}
</button>

     {/* musik */}
     <audio ref={audioRef} loop>
  <source src={Lagu} type="audio/mp3" />
   </audio>
    </>
  )
}

export default HomePage
