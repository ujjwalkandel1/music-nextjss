'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";


function UpcomingWebinars() {
        const featuredWebinars = [
          {
            title: 'Understanding Music Theory',
            description: 'Dive deep into the fundamentals of music theory and enhance your musical skills.',
            slug: 'understanding-music-theory',
            isFeatured: true
          },
          {
            title: 'Mastering Guitar Chords',
            description: 'Learn how to play guitar chords like a pro with our comprehensive webinar.',
            slug: 'mastering-guitar-chords',
            isFeatured: true
          },
          {
            title: 'Vocal Warm-ups and Techniques',
            description: 'Discover essential vocal warm-ups and techniques to improve your singing.',
            slug: 'vocal-warmups-and-techniques',
            isFeatured: true
          },
          {
            title: 'Piano Improvisation Basics',
            description: 'Get started with piano improvisation and learn to create music on the fly.',
            slug: 'piano-improvisation-basics',
            isFeatured: true
          },
          {
            title: 'The Art of Songwriting',
            description: 'Unlock your creativity and learn the art of writing compelling songs.',
            slug: 'the-art-of-songwriting',
            isFeatured: true
          },
          {
            title: 'Introduction to Music Production',
            description: 'Explore the basics of music production and start creating your own tracks.',
            slug: 'introduction-to-music-production',
            isFeatured: true
          },
          {
            title: 'Playing the Drums: Tips and Tricks',
            description: 'Enhance your drumming skills with tips and tricks from experienced drummers.',
            slug: 'playing-the-drums-tips-and-tricks',
            isFeatured: true
          },
          {
            title: 'Jazz Improvisation for Beginners',
            description: 'Learn the fundamentals of jazz improvisation and start playing with confidence.',
            slug: 'jazz-improvisation-for-beginners',
            isFeatured: true
          },
          {
            title: 'Advanced Ukulele Techniques',
            description: 'Take your ukulele playing to the next level with advanced techniques.',
            slug: 'advanced-ukulele-techniques',
            isFeatured: true
          },
        ];

  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEAUTURED WEBINARS</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Exhance Your Musical Journey</p>
            </div>

            <div className="mt-10">
                <HoverEffect items={featuredWebinars.map(webinar => ({
                    title: webinar.title,
                    description: webinar.description,
                    link: '/'
                }
                ))} /> 
            </div>

            <div className="mt-10 text-center">
                <Link href={"/"} 
                className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                View  All Webinars
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars