import React from "react";

export const HeaderSection = () => {
  const navigationItems = [
    { label: "About", hasBlackSpace: true },
    { label: "Our Services" },
    { label: "Pricing" },
    { label: "Our Team" },
    { label: "Why Choose Us" },
  ];

  return (
    <header className="flex h-[116px] items-center justify-center gap-[78px] px-[243px] py-0 relative self-stretch w-full bg-transparent bg-[linear-gradient(180deg,rgba(36,36,51,1)_58%,rgba(240,16,142,1)_100%)]">
      <div className="relative w-[150.5px] h-[78px]">
        <div className="relative w-[149px] h-[78px]">
          <div className="absolute w-[79px] h-[78px] top-0 left-[70px] bg-[#fc94c6] rounded-[39.5px/39px]" />

          <p className="absolute top-[18px] left-0 [-webkit-text-stroke:0.5px_#000000] [font-family:'Roboto-Bold',Helvetica] font-normal text-transparent text-4xl leading-[normal] whitespace-nowrap">
            <span className="[font-family:'Roboto-BoldItalic',Helvetica] font-bold italic text-white tracking-[-0.72px]">
              Fixify
            </span>

            <span className="[font-family:'Roboto_Condensed-Black',Helvetica] font-black text-black tracking-[-1.08px]">
              LABS
            </span>
          </p>
        </div>
      </div>

      <nav
        className="inline-flex items-center justify-center gap-[30px] relative flex-[0_0_auto]"
        role="navigation"
        aria-label="Main navigation"
      >
        {navigationItems.map((item, index) => (
          <div key={index}>
            {item.hasBlackSpace ? (
              <p className="relative w-[43px] [font-family:'Roboto-Medium',Helvetica] font-medium text-transparent text-base tracking-[0] leading-[normal]">
                <span className="text-white">{item.label}</span>
                <span className="text-black">&nbsp;</span>
              </p>
            ) : (
              <a
                href="#"
                className="relative w-fit [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap hover:opacity-80 transition-opacity"
              >
                {item.label}
              </a>
            )}
          </div>
        ))}

        <button
          className="inline-flex justify-center px-3 py-2.5 items-center gap-2.5 relative flex-[0_0_auto] bg-[#0d63f7] rounded-md shadow-shadow-md hover:bg-[#0b56d9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0d63f7] focus:ring-offset-2"
          type="button"
          aria-label="Request a consultation"
        >
          <span className="relative w-fit mt-[-0.50px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#f1e8e8] text-base tracking-[0] leading-[normal] whitespace-nowrap">
            Request a Consultation
          </span>
        </button>
      </nav>
    </header>
  );
};
