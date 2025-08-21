import React from "react";

export const AvailablePackagesSection = (): JSX.Element => {
  const packageData = {
    title: "Stripe Payment API Key Integration & Installation",
    description:
      "White glove installation - We go under the hood into the code and make sure everything is connected to ensure seamless Stripe payments on your platform",
    price: "$99",
  };

  const missionText =
    "Our mission is to assist both small businesses and enterprise-sized organizations in adopting AI-enhanced and technology-driven solutions. We have developed straightforward packages tailored to address specific challenges, providing quick solutions for various roadblocks. We are continually expanding our offerings, so please feel free to reach out with any questions or suggestions.";

  return (
    <section className="flex flex-col h-[478px] items-center justify-center gap-8 pt-8 pb-[46px] px-1 relative self-stretch w-full">
      <header className="mt-[-6.50px] flex flex-col items-center gap-11 relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[38px] tracking-[0] leading-[normal] whitespace-nowrap">
          Available Packages
        </h2>
      </header>

      <div className="flex items-center justify-center gap-11 relative self-stretch w-full flex-[0_0_auto] mb-[-6.50px]">
        <p className="relative w-[441px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-8">
          {missionText}
        </p>

        <article className="flex flex-col w-[369px] h-[336px] items-end justify-center gap-[18px] pt-[27px] pb-6 px-8 relative bg-white rounded-[15px] border-2 border-solid border-[#e57cfd]">
          <h3 className="relative self-stretch mt-[-1.50px] [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[26px] tracking-[0] leading-[30px]">
            {packageData.title}
          </h3>

          <p className="relative self-stretch [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-lg tracking-[0] leading-7">
            {packageData.description}
          </p>

          <div
            className="inline-flex h-12 items-center justify-center gap-2.5 px-[21px] py-[22px] relative bg-[#e57cfd] rounded-[29px]"
            role="button"
            tabIndex={0}
          >
            <span className="relative w-fit mt-[-19.00px] mb-[-17.00px] [font-family:'Roboto-Black',Helvetica] font-black text-black text-2xl text-center tracking-[0] leading-10 whitespace-nowrap">
              {packageData.price}
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};
