"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: "Instrument Mastery",
      description:
        "Achieve excellence in playing your chosen instrument. Our courses are designed to help you master the fundamentals, refine your technique, and perform with confidence. Whether you're a beginner or an advanced musician, our instructors will guide you every step of the way."
    },
    {
      title: "Live Performance Skills",
      description:
        "Develop the skills you need to shine on stage. Learn how to perform confidently in front of an audience, manage stage presence, and connect with your listeners. Our performance workshops will prepare you for both solo and ensemble performances."
    },
    {
      title: "Music Theory and Composition",
      description:
        "Dive deep into the world of music theory and composition. Understand the building blocks of music, including scales, chords, and rhythm. Our courses will equip you with the knowledge to compose your own music and appreciate the intricacies of musical works."
    },
    {
      title: "Ear Training and Aural Skills",
      description:
        "Sharpen your listening skills and develop a strong musical ear. Learn to recognize intervals, chords, and rhythms by ear. Our ear training courses will help you improve your pitch accuracy and enhance your overall musicianship."
    },
    {
      title: "Ensemble and Band Practice",
      description:
        "Experience the joy of making music with others. Join our ensemble and band practice sessions to learn how to play in a group, blend your sound, and synchronize with other musicians. Perfect for those looking to improve their teamwork and collaborative skills."
    },
    {
      title: "Songwriting and Lyrics",
      description:
        "Unleash your creativity and start writing your own songs. Our songwriting courses cover everything from lyric writing to melody creation, helping you craft songs that resonate with your audience. Get feedback from experienced songwriters and take your music to the next level."
    },
    {
      title: "Music Production and Recording",
      description:
        "Learn the art of music production and recording. From setting up a home studio to mixing and mastering your tracks, our courses provide a comprehensive guide to producing professional-quality music. Ideal for aspiring producers and musicians alike."
    },
    {
      title: "Vocal Training and Technique",
      description:
        "Enhance your vocal abilities with expert training. Our vocal courses focus on improving your technique, expanding your range, and maintaining vocal health. Whether you're interested in classical singing, pop, or jazz, our instructors will help you find your voice."
    },
    {
      title: "Advanced Improvisation",
      description:
        "Take your improvisation skills to new heights. Learn how to create music spontaneously, develop your unique voice, and experiment with different styles and genres. Perfect for musicians looking to enhance their creativity and expressiveness."
    },
    {
      title: "Digital Music and DJing",
      description:
        "Step into the world of digital music and DJing. Learn how to use software and hardware to create and mix tracks, perform live sets, and engage your audience. Our courses cover everything from beatmatching to sound design, making it ideal for aspiring DJs and electronic music producers."
    }
];


function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />  

    </div>
  )
}

export default WhyChooseUs