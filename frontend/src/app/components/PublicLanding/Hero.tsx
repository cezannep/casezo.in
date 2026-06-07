import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-10">
      
      <Image
        src="/hero/landingPageHero.webp"
        alt="Landing Page Hero"
        width={1200}
        height={600}
        className="w-full h-auto hidden md:block"
        priority
      />
      <Image 
      alt="" 
      src="/hero/landingPageHero-MV.webp"
      width={1000}
      height={600}
      className="h-auto md:hidden block"
      priority
      />
     
    </section>
  );
}