import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="min-w-[690px] h-[433px] items-center justify-center self-stretch w-[var(--responsive-setup-max-width)] bg-[#232534] flex relative">
      <div className="flex-col w-[640px] items-center justify-center gap-16 px-[43px] py-0 flex relative">
        <div className="flex-col w-[635px] items-start gap-[22px] flex-[0_0_auto] ml-[-40.50px] mr-[-40.50px] flex relative">
          <h1 className="relative w-[592px] mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-5xl tracking-[0] leading-[60px]">
            Tailored Code Solutions for your digital projects
          </h1>

          <p className="relative self-stretch [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[34px]">
            Get expert support to fix, enhance, and elevate your AI-generated
            websites &amp; applications
          </p>
        </div>

        <button
          className="all-[unset] box-border inline-flex flex-col justify-end px-[22px] py-3.5 items-center gap-2.5 relative flex-[0_0_auto] bg-[#0d63f7] rounded-md shadow-shadow-md cursor-pointer hover:bg-[#0b56d9] focus:outline-none focus:ring-2 focus:ring-[#0d63f7] focus:ring-offset-2 focus:ring-offset-[#232534] transition-colors duration-200"
          type="button"
          aria-label="Request a consultation for tailored code solutions"
        >
          <span className="relative w-fit mt-[-0.50px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#f1e8e8] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Request a Consultation
          </span>
        </button>
      </div>

      <Image
        src="/static/images/FL_Armando_Cartoon.avif"
        alt="Armando cartoon character representing code solutions expertise"
        width={631}
        height={429}
      />
    </section>
  );
};
