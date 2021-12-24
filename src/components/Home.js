import React from "react";
import image from "../web-background.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Background Image of Leaves"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex flex-col justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Greetings. I'm Taylor.</h1>
        <h2 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug">Front End Developer</h2>
      </section>
    </main>
  );
}
