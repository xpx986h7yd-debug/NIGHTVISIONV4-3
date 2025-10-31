import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/60 backdrop-blur-xl border-b border-red-900/30">
      <div className="flex items-center gap-3">
        {/* LOGO OEIL SEUL */}
        <Image
          src="/logo-eye-only.png"
          width={48}
          height={48}
          alt="Night Vision"
          className="drop-shadow-[0_0_12px_rgba(255,0,0,.8)]"
        />
        <span className="text-white text-sm font-medium tracking-wide">
          NIGHT VISION
        </span>
      </div>
    </header>
  );
}