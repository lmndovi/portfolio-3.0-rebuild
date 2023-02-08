import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = { pageInfo: PageInfo };

function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto: ${pageInfo?.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`);

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 mt-28">
        <h4 className="text-3xl md:text-5xl font-semibold text-center mx-auto w-96 md:w-[600px]">
          Here to bring your ideas to life.{" "}
          <span className="underline decoration-[#1B7DE5]/50">
            Let&apos;s talk
          </span>
        </h4>
        <div className="space-y-5">
          <div className="flex items-center space-x-4 justify-center">
            <PhoneIcon className="text-[#1B7DE5]/40 h-7 w-7 animate-pulse " />
            <p className="text-2xl">{pageInfo.phoneNumber}</p>
          </div>

          <div className="flex items-center space-x-4 justify-center mx-auto w-96">
            <MapPinIcon className="text-[#1B7DE5]/40 h-7 w-7 animate-pulse " />
            <p className="text-2xl">{pageInfo.address}</p>
          </div>

          <div className="flex items-center space-x-4 justify-center">
            <EnvelopeIcon className="text-[#1B7DE5]/40 h-7 w-7 animate-pulse " />
            <p className="text-2xl">{pageInfo.email}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-80 md:w-[600px] mx-auto"
        >
          <div className="flex space-x-1">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-40"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-[156px]"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#1B7DE5]/60 py-3 px-10 rounded-md text-white font-bold text-lg cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
