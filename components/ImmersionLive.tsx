"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  "/immersion-1.jpg",
  "/immersion-2.jpg",
  "/immersion-3.jpg",
  "/immersion-4.jpg",
];

export default function ImmersionLive() {
  const [index, setIndex] = useState(0);

  // auto-play
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[400px] overflow-hidden rounded-3xl bg-black border border-red-900/40 shadow-[0_0_80px_rgba(255,0,0,.4)] mx-6 md:mx-auto md:max-w-6xl my-20">
      {/* SLIDES */}
      {slides.map((src, i) => {
        const visible = i === index;
        return (
          <div
            key={src}
            className={
              "absolute inset-0 transition-opacity duration-700 " +
              (visible ? "opacity-100" : "opacity-0")
            }
          >
            <Image
              src={src}
              alt="Immersion Night Vision"
              fill
              className="object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-transparent" />
          </div>
        );
      })}

      {/* TEXTE OVERLAY */}
      <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-12">
        <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-tight">
          IMMERSION LIVE
        </h2>
        <p className="mt-4 max-w-lg text-zinc-300 text-sm md:text-base leading-relaxed">
          Visualise tes ventes en temps réel. Vois l&apos;impact sur ta foule.
        </p>
        <button className="mt-6 w-fit rounded-xl bg-red-600/90 text-white text-sm font-medium py-3 px-5 hover:bg-red-600 shadow-[0_0_30px_rgba(255,0,0,.6)]">
          VOIR LE DASHBOARD
        </button>
      </div>
    </section>
  );
}
