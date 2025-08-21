"use client";
import React, { useState } from "react";
import { LuMail } from "react-icons/lu";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
// import drag from "./drag.svg";

export const FooterSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: LuMail,
      text: "info@fixifylabs.com",
      iconProps: {
        className: "!relative !w-[30px] !h-[29px] !mb-[-4.00px] !ml-[-3.00px]",
      },
    },
    {
      icon: LuPhoneCall,
      text: "+1 XXX XXX-XXXX",
      iconProps: { className: "!relative !w-6 !h-6" },
    },
    {
      icon: MdOutlineLocationOn,
      text: "Chicago, IL",
      iconProps: { className: "!relative !w-[26px] !h-[26px]" },
    },
    {
      icon: MdOutlineLocationOn,
      text: "Genoa, IT",
      iconProps: { className: "!relative !w-[26px] !h-[26px]" },
    },
  ];

  const formFields = [
    { name: "name", label: "Name", type: "text" },
    { name: "surname", label: "Surname", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "message", label: "Message", type: "textarea" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <footer className="flex items-center justify-center gap-[244px] pl-[109px] pr-[55px] py-11 relative self-stretch w-full flex-[0_0_auto] bg-[#1a1818]">
      <section className="flex flex-col w-[244px] items-start gap-11 px-0 py-4 relative">
        <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-4xl tracking-[0] leading-[normal]">
          Contact
        </h2>

        <address className="flex flex-col items-start gap-[22px] relative self-stretch w-full flex-[0_0_auto] not-italic">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="inline-flex items-center gap-[22px] relative flex-[0_0_auto]"
              >
                <IconComponent {...item.iconProps} />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[26px] whitespace-nowrap">
                  {item.text}
                </div>
              </div>
            );
          })}
        </address>
      </section>

      <section className="inline-flex flex-col items-start relative flex-[0_0_auto]">
        <div className="justify-center gap-[7px] inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto]">
            <p className="relative w-[476px] mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-10">
              Send us any questions, or request a consultation, and we will be
              in touch
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="min-w-80 gap-[var(--size-space-600)] pt-[var(--size-space-600)] pr-[var(--size-space-600)] pb-[var(--size-space-600)] pl-[var(--size-space-600)] rounded-lg inline-flex flex-col items-start relative flex-[0_0_auto]"
        >
          {formFields.map((field) => (
            <div
              key={field.name}
              className="flex flex-col items-start gap-[var(--size-space-200)] w-full flex-[0_0_auto] relative self-stretch"
            >
              <label
                htmlFor={field.name}
                className="relative self-stretch mt-[-1.00px] font-body-base font-[number:var(--body-base-font-weight)] text-white text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]"
              >
                {field.label}
              </label>

              <div
                className={`flex min-w-60 items-${field.type === "textarea" ? "start" : "center"} ${field.type === "textarea" ? "min-h-20" : ""} pt-[var(--size-space-300)] pr-[var(--size-space-400)] pb-[var(--size-space-300)] pl-[var(--size-space-400)] relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-color-background-default-default rounded-[var(--size-radius-200)] overflow-hidden border border-solid border-color-border-default-default`}
              >
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={"message"}
                    onChange={handleInputChange}
                    placeholder="Value"
                    className="leading-[var(--body-base-line-height)] relative flex-1 mt-[-0.50px] font-body-base font-[number:var(--body-base-font-weight)] text-color-text-default-tertiary text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] [font-style:var(--body-base-font-style)] bg-transparent border-none outline-none resize-none"
                    rows={3}
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={"message"}
                    onChange={handleInputChange}
                    placeholder="Value"
                    className="leading-[var(--single-line-body-base-line-height)] relative flex-1 mt-[-0.50px] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-color-text-default-tertiary text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] [font-style:var(--single-line-body-base-font-style)] bg-transparent border-none outline-none"
                  />
                )}

                {/* {field.type === "textarea" && (
                  <img
                    className="absolute w-[7px] h-[7px] top-[67px] left-[260px]"
                    alt="Drag"
                    src={drag}
                  />
                )} */}
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="all-[unset] box-border flex flex-col justify-end px-[22px] py-3.5 self-stretch w-full items-center gap-2.5 relative flex-[0_0_auto] bg-[#0d63f7] rounded-md shadow-shadow-md hover:bg-[#0b56d9] focus:outline-none focus:ring-2 focus:ring-[#0d63f7] focus:ring-offset-2 focus:ring-offset-[#1a1818] transition-colors cursor-pointer"
          >
            <span className="relative w-fit mt-[-0.50px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#f1e8e8] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Submit
            </span>
          </button>
        </form>
      </section>
    </footer>
  );
};
