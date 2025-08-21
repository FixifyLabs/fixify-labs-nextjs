import React from "react";
import Image from "next/image";

export const AboutUsSection = () => {
  const teamData = {
    title: "About Us",
    description:
      "At FixifyLabs, we pride ourselves on having a talented and dedicated team that combines technical expertise with a passion for innovation. Our lead developer, Armando Gonzalez, brings a wealth of experience from his time as a software engineer at JP Morgan & Chase Bank and holds a Master's degree in Computer Science from Northeastern Illinois University.",
    additionalInfo:
      "As a programmer that blends utilizing AI with expert coding methods, Armando has built numerous AI-leveraging websites and crafted tailored solutions for clients, giving him a unique understanding of the innovative capabilities and limitations of AI-generated projects.",
    philosophy:
      "He believes in the principles of vibe coding: making technology accessible and efficient, allowing clients to focus on what they do best. Complementing Armando is our diverse team of skilled software engineers and web designers based in the USA and Europe, all committed to delivering exceptional results and ensuring your digital projects thrive.",
    leadDeveloper: {
      name: "Armando Gonzalez",
      photo: "/static/images/armando-photo.avif",
      caption:
        "Armando Gonzalez's pursued interest in vibe coding & AI-Powered Web Development from a Software Engineering perspective gives him a unique understanding of its innovative capabilities and limitations in providing results that are fully functional for clients.",
    },
  };

  return (
    <section className="h-[812px] items-center justify-center gap-[85px] px-[75px] py-[114px] bg-[#1d1b1b] flex relative self-stretch w-full">
      <div className="inline-flex flex-col items-start gap-11 relative flex-[0_0_auto]">
        <header className="flex-col items-start gap-11 flex-[0_0_auto] flex relative self-stretch w-full">
          <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[38px] tracking-[0] leading-[normal]">
            {teamData.title}
          </h2>
        </header>

        <div className="gap-[114px] inline-flex items-start justify-center relative flex-[0_0_auto]">
          <div className="inline-flex items-start gap-11 relative flex-[0_0_auto]">
            <div className="relative w-[580px] mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[26px]">
              <p className="mb-5">{teamData.description}</p>
              <p className="mb-5">{teamData.additionalInfo}</p>
              <p>{teamData.philosophy}</p>
            </div>
          </div>

          <aside className="inline-flex flex-col items-start gap-[22px] relative flex-[0_0_auto]">
            <Image
              className="relative w-[371px] h-[371px] aspect-[1] object-cover"
              alt={`Photo of ${teamData.leadDeveloper.name}`}
              src={teamData.leadDeveloper.photo}
                width={371}
                height={371}
            />

            <p className="relative w-[415px] [font-family:'Roboto-MediumItalic',Helvetica] font-medium italic text-[#f4c4ff] text-sm tracking-[0] leading-[18px]">
              {teamData.leadDeveloper.caption}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};
