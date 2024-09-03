'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: 'Andre Gomez',
    designation: 'Drumming Expert',
    image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    name: 'Emily Davis',
    designation: 'Vocal Coach',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    name: 'John Smith',
    designation: 'Guitar Instructor',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    name: 'Sophia Lee',
    designation: 'Piano Instructor',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=500&q=60'
  },
 
];  
  

 function Instructors() {
   return (
     <div className="relative h-[40rem] overflow-hidden flex items-center justify-center ">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-">Meet Our Instructors</h2>
            <p className="text-base md:t5ext-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
            <div className="flex flex-row items-center justify-center mb-5 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
     </div>
   )
 }
 
 export default Instructors