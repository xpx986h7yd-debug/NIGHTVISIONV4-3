import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-black pt-20">
      {/* BG gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black" />
      <div className="relative z-10 text-center max-w-xl px-6 flex flex-col items-center">
        <Image
          src="/logo-eye-only.png"
          alt="Night Vision"
          width={80}
          height={80}
          className="mb-6 drop-shadow-[0_0_25px_rgba(255,0,0,0.8)]"
        />
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white tracking-tight">
          VOIS LA NUIT.
          <br />
          MONÉTISE LA NUIT.
        </h1>
        <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed">
          Distributeurs de lunettes pour clubs, festivals et zones VIP.
        </p>

        <button className="mt-10 rounded-xl bg-red-600/90 hover:bg-red-600 text-white font-semibold text-sm md:text-base py-3 px-6 shadow-[0_0_30px_rgba(255,0,0,.6)]">
          ÉQUIPER MON LIEU
        </button>
      </div>
    </section>
  );
}