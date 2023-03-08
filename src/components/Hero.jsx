import React from "react";
import HeroImage from "./hero/HeroImage";
import HeroText from "./hero/HeroText";

const Hero = () => {
  return (
    <section className="bg-[url(assets/wave-haikei.svg)] bg-cover dark:bg-[url(assets/wave-haikei-dark.svg)] dark:text-white">
      <div className="mx-auto grid max-w-screen-xl px-7 py-7 lg:grid-cols-12 lg:gap-8 lg:py-0 xl:gap-0">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
