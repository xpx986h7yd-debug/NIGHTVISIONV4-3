import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BannerEye from "../components/BannerEye";
import Offers from "../components/Offers";
import ImmersionLive from "../components/ImmersionLive";

export default function Page() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <BannerEye />
      <Offers />
      <ImmersionLive />
      <footer className="text-center text-zinc-600 text-xs py-16">
        © NIGHT VISION
      </footer>
    </main>
  );
}