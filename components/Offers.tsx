import Image from "next/image";

export default function Offers() {
  return (
    <section className="relative bg-black py-16 px-6 md:px-10 border-t border-red-900/20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-white text-2xl md:text-3xl font-semibold tracking-tight">
          3 FORMATS. MÊME IMPACT.
        </h2>
        <p className="text-center text-zinc-400 text-sm md:text-base max-w-xl mx-auto mt-4">
          Choisis le module adapté à ton lieu, pose-le, encaisse.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mt-12">
          {/* Petit distributeur */}
          <div className="relative flex flex-col justify-between rounded-2xl bg-zinc-950/80 p-6 border border-red-900/40 h-[475px] shadow-[0_0_60px_rgba(255,0,0,.3)]">
            <div className="relative flex-1 flex items-center justify-center">
              <div className="absolute bottom-6 h-24 w-24 rounded-full blur-2xl bg-red-600/40 opacity-60" />
              <Image
                src="/mini-distributeur.png"
                alt="Mini distributeur Night Vision"
                width={320}
                height={400}
                className="relative object-contain max-h-full"
              />
            </div>
            <div className="pt-4">
              <h3 className="text-white text-lg font-semibold tracking-tight">
                Format Compact
              </h3>
              <p className="text-zinc-400 text-sm">
                Idéal corner VIP / entrée club.
              </p>
              <button className="mt-4 w-full rounded-xl bg-red-600/90 text-white text-sm font-medium py-3 hover:bg-red-600">
                ÉQUIPER MON CLUB
              </button>
            </div>
          </div>

          {/* Distributeur club */}
          <div className="relative flex flex-col justify-between rounded-2xl bg-zinc-950/80 p-6 border border-red-900/40 h-[475px] shadow-[0_0_60px_rgba(255,0,0,.3)]">
            <div className="relative flex-1 flex items-center justify-center">
              <div className="absolute bottom-6 h-24 w-24 rounded-full blur-2xl bg-red-600/40 opacity-60" />
              <Image
                src="/distributeur-club.png"
                alt="Distributeur Club Night Vision"
                width={320}
                height={400}
                className="relative object-contain max-h-full"
              />
            </div>
            <div className="pt-4">
              <h3 className="text-white text-lg font-semibold tracking-tight">
                Club / Bar
              </h3>
              <p className="text-zinc-400 text-sm">
                Installation clé en main, revenus partagés.
              </p>
              <button className="mt-4 w-full rounded-xl bg-red-600/90 text-white text-sm font-medium py-3 hover:bg-red-600">
                DEMANDER L'INSTALLATION
              </button>
            </div>
          </div>

          {/* Festival */}
          <div className="relative flex flex-col justify-between rounded-2xl bg-zinc-950/80 p-6 border border-red-900/40 h-[475px] shadow-[0_0_60px_rgba(255,0,0,.3)]">
            <div className="relative flex-1 flex items-center justify-center">
              <div className="absolute bottom-6 h-24 w-24 rounded-full blur-2xl bg-red-600/40 opacity-60" />
              <Image
                src="/distributeur-festival.png"
                alt="Module Festival Night Vision"
                width={320}
                height={400}
                className="relative object-contain max-h-full"
              />
            </div>
            <div className="pt-4">
              <h3 className="text-white text-lg font-semibold tracking-tight">
                Festival / Grand Flux
              </h3>
              <p className="text-zinc-400 text-sm">
                Haute capacité. Résiste aux nuits les plus violentes.
              </p>
              <button className="mt-4 w-full rounded-xl bg-red-600/90 text-white text-sm font-medium py-3 hover:bg-red-600">
                ÉQUIPER MON FESTIVAL
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}