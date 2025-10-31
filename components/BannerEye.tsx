import Image from "next/image";

export default function BannerEye() {
  return (
    <section className="relative w-full h-[220px] md:h-[300px] overflow-hidden bg-black">
      {/* image brute telle quelle */}
      <Image
        src="/bandeau-original.jpg"
        alt="Regard"
        fill
        className="object-cover object-center"
        priority
      />

      {/* halo rouge pulsé PAR DESSUS sans déformer l'image */}
      <div className="absolute inset-0 bg-red-600/20 mix-blend-screen halo-pulse pointer-events-none" />
    </section>
  );
}