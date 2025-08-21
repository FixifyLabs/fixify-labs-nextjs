import React from "react";

export const ServicesExplainerSection = () => {
  const services = [
    "Code Repair: Fixing bugs and errors in your existing code.",
    "Custom Adjustments: Tailoring your website or application to meet specific requirements.",
    "API Integration: Seamlessly installing and configuring API keys for enhanced functionality.",
    "Application Rebuilds: Comprehensive support for rebuilding entire applications from the ground up.",
  ];

  return (
    <section className="flex h-[617px] items-center justify-center gap-[38px] px-[62px] py-[22px] relative self-stretch w-full">
      <div className="gap-11 inline-flex items-start justify-center relative flex-[0_0_auto]">
        <div className="flex flex-col w-[770px] items-center gap-11 relative">
          <p className="relative self-stretch mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[26px] tracking-[0] leading-[34px]">
            Let us help you get unstuck! We are a full stack dev team
            specializing in repairing and adjusting code in AI generated
            applications made with no-code app development platforms like
            Lovable and Basecamp.
            <br />
            <br />
            At FixifyLabs, we understand that while AI-generated, or vibe coded
            websites made with natural language can be a fantastic starting
            point, they often come with their own set of challenges. Our
            dedicated team of full stack dev team is here to ensure your project
            not only gets off the ground but soars to new heights!
          </p>

          <button
            className="all-[unset] box-border inline-flex flex-col justify-end px-[22px] py-3.5 items-center gap-2.5 relative flex-[0_0_auto] bg-[#0d63f7] rounded-md shadow-shadow-md hover:bg-[#0b56d9] transition-colors duration-200 cursor-pointer"
            type="button"
            aria-label="Request a consultation with FixifyLabs"
          >
            <span className="relative w-fit mt-[-0.50px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#f1e8e8] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Request a Consultation
            </span>
          </button>
        </div>

        <aside className="inline-flex flex-col items-start justify-center gap-2.5 p-[30px] relative flex-[0_0_auto] bg-[#201d1e] rounded-lg border border-solid border-[#e57cfd] shadow-[0px_4px_8.9px_#e57cfd]">
          <h2 className="relative w-[391px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-[26px] text-center tracking-[0] leading-[41px]">
            Our Services Include but are not limited to:
          </h2>

          <div className="relative w-[391px] [font-family:'Roboto-Light',Helvetica] font-light text-white text-lg tracking-[0] leading-[27px]">
            {services.map((service, index) => (
              <p key={index} className="mb-0">
                {service}
                {index < services.length - 1 && <br />}
              </p>
            ))}
            <br />
            <br />
            <p className="mb-0">
              Let us help you get unstuck and bring your digital projects to
              life!
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};
