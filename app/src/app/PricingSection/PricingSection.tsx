import React from "react";

export const PricingSection = () => {
  const pricingTiers = [
    {
      title: "Basic Support",
      description:
        "Ideal for simple tasks like API installations and diagnostic consultations.",
      services: [
        "White-glove API key installation",
        "Diagnostic consultation",
        "Minor bug fixes",
      ],
      price: "$85 — $200",
    },
    {
      title: "Enhanced Solutions",
      description:
        "Perfect for moderate adjustments and troubleshooting needs.",
      services: [
        "All Basic Support services",
        "Custom code adjustments",
        "Performance optimization",
        "User experience enhancements",
      ],
      price: "$200 — $1400",
    },
    {
      title: "Comprehensive Care",
      description:
        "Designed for complex projects requiring extensive development and support.",
      services: [
        "All Basic & Enhanced Support services",
        "Full Application rebuilds",
        "Database Management & Maintenance Strategies",
        "Extensive support and development services",
      ],
      price: "$1400 +",
    },
  ];

  return (
    <section className="flex flex-col h-[1088px] items-center pt-[62px] pb-[84px] px-11 relative self-stretch w-full bg-[#1e1c1c]">
      <header className="inline-flex flex-col items-start gap-[22px] pl-[66px] pr-[120px] py-0 relative flex-[0_0_auto]">
        <h2 className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[38px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Pricing for Services
        </h2>

        <p className="relative w-[556px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[30px]">
          We offer three pricing tiers to accommodate a range of project
          complexities, starting with our basic tier for services like
          white-glove API key installations and diagnostic consultations, and
          scaling up to more comprehensive solutions for complex coding
          challenges
        </p>
      </header>

      <div className="flex h-[694px] items-start justify-center gap-[22px] px-[25px] py-[53px] relative self-stretch w-full rounded-lg overflow-hidden shadow-[6px_5px_8px_#e57cfd]">
        {pricingTiers.map((tier, index) => (
          <article
            key={tier.title}
            className={`flex flex-col w-[419px] items-start gap-8 p-8 relative ${index === 2 ? "mb-[-53.00px]" : ""} rounded-[15px] border border-solid border-[#e57cfd]`}
          >
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Roboto-Black',Helvetica] font-black text-white text-[32px] tracking-[0] leading-10">
              {tier.title}
            </h3>

            <div className="[font-family:'Roboto-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-6 relative self-stretch">
              <p className="leading-7 mb-4">{tier.description}</p>

              <div className="leading-[38px]">
                <p className="mb-2">Included Services:</p>
                <ul className="list-none">
                  {tier.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>- {service}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              className="inline-flex h-12 items-center justify-center gap-2.5 px-[21px] py-[22px] relative bg-[#e57cfd] rounded-[29px] hover:bg-[#d666f0] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#e57cfd] focus:ring-offset-2 focus:ring-offset-[#1e1c1c]"
              aria-label={`Select ${tier.title} pricing tier for ${tier.price}`}
            >
              <span className="relative w-fit mt-[-19.00px] mb-[-17.00px] [font-family:'Roboto-Black',Helvetica] font-black text-white text-2xl text-center tracking-[0] leading-10 whitespace-nowrap">
                {tier.price}
              </span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};
