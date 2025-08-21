import React from "react";

export const PackagesOverviewSection = () => {
  const problemAreas = [
    {
      text: "getting out of endless loops and roadblocks with applications like Basecamp44 & Lovable",
      lineHeight: "leading-[27px]",
    },
    {
      text: "costly credits that vanish before your app is even fully functional",
      lineHeight: "leading-8",
    },
    {
      text: "hidden costs with vibe coding platforms such as needing to pay for additional features, tokens, or subscriptions.",
      lineHeight: "leading-8",
    },
    {
      text: "Gaining independence from vendors locking you in with complicated backends",
      lineHeight: "leading-8",
    },
    {
      text: "Unmanageable spaghetti code in the backend of vibe coded sites",
      lineHeight: "leading-8",
    },
    {
      text: "application that aesthetically look lifeless or identical to all of the other apps generated from AI prompts using backend templates",
      lineHeight: "leading-8",
    },
  ];

  return (
    <section className="flex flex-col h-[712px] items-center justify-center gap-[22px] px-1 py-0 relative self-stretch w-full">
      <header className="flex flex-col items-center gap-11 relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative w-[583px] mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-4xl tracking-[0] leading-[normal]">
          Let FixifyLabs be your comprehensive resource for:
        </h2>
      </header>

      <div className="flex items-center justify-center gap-11 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-[582px] mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-xl tracking-[0] leading-5">
          {problemAreas.map((problem, index) => (
            <p key={index} className={problem.lineHeight}>
              {problem.text}
              <br />
            </p>
          ))}

          <br />

          <p className="text-[26px]">
            So if you find yourself needing to get past limited functionality
            issues contact us today.
          </p>
        </div>
      </div>
    </section>
  );
};
