'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const musicSchoolTestimonials = [
    {
        quote: "The guitar course was amazing! I went from knowing nothing to playing my favorite songs in just a few weeks.",
        name: "Alex Thompson",
        title: "Beginner Guitar Student"
    },
    {
        quote: "Thanks to the vocal training, I've gained so much confidence in my singing. The instructors are top-notch!",
        name: "Maria Gonzalez",
        title: "Vocal Training Student"
    },
    {
        quote: "The piano lessons were tailored to my skill level, and I loved how the teacher pushed me to improve every day.",
        name: "James Lee",
        title: "Intermediate Piano Student"
    },
    {
        quote: "Learning music production here was a game-changer for me. I can now produce my own tracks with confidence.",
        name: "Samantha Williams",
        title: "Music Production Student"
    },
    {
        quote: "I joined the ensemble practice sessions, and it was an incredible experience to play with other musicians.",
        name: "Liam Brown",
        title: "Ensemble Participant"
    },
    {
        quote: "The songwriting course helped me find my voice as an artist. I can now write songs that truly express who I am.",
        name: "Isabella Smith",
        title: "Songwriting Student"
    },
    {
        quote: "I never thought I'd be able to DJ, but the digital music course made it so easy to learn and enjoy the process.",
        name: "Ethan Davis",
        title: "DJ and Digital Music Student"
    },
    {
        quote: "The music theory lessons were invaluable. I now understand the structure behind the music I play.",
        name: "Olivia Martinez",
        title: "Music Theory Student"
    },
    {
        quote: "The improvisation classes were so much fun! I learned how to be more creative and spontaneous in my playing.",
        name: "Benjamin Harris",
        title: "Advanced Improvisation Student"
    },
    {
        quote: "The instructors here truly care about your progress. I've improved so much in such a short time.",
        name: "Charlotte Taylor",
        title: "Violin Student"
    }
];


function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-7 z-10">Here our Harmony: Boices of Success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
             <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
                />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials