/* eslint-disable @next/next/no-img-element */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema, Step1Data } from "../app/schema";

interface Step1Props {
  onNext: (data: Step1Data) => void;
}

const FStep: React.FC<Step1Props> = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
  });

  const onSubmit = (data: Step1Data) => onNext(data);

  return (
    <div className="">
      <div className="bg-white lg:bg-transparent w-[90%] mx-auto shadow-Light-gray shadow-xl lg:shadow-none relative -top-[80px] lg:-top-0 rounded-lg px-6 py-8 pb-10 xl:px-10">
        <p className="font-[700] text-[24px] text-black">Personal info</p>
        <p className="text-[16px] text-Cool-gray my-3">
          Please provide your name, email address and phone number.
        </p>
        <form
          className="flex flex-col gap-6 mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <label htmlFor="name" className="font-bold text-xs">
                Name
              </label>
              {errors.name && (
                <p className="text-Strawberry-red text-xs">
                  {errors.name.message}
                </p>
              )}
            </div>

            <input
              {...register("name")}
              type="text"
              id="name"
              placeholder="e.g Stephan King"
              className="outline-none rounded border border-Light-gray text-Cool-gray placeholder:text-Cool-gray py-2 px-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label htmlFor="email" className="font-bold text-xs">
                Email Address
              </label>
              {errors.email && (
                <p className="text-Strawberry-red text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="e.g stephanking@lorem.com"
              className="outline-none rounded border border-Light-gray text-Cool-gray placeholder:text-Cool-gray py-2 px-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <label htmlFor="number" className="font-bold text-xs">
                Phone Number
              </label>
              {errors.number && (
                <p className="text-Strawberry-red text-xs">
                  {errors.number.message}
                </p>
              )}
            </div>
            <input
              {...register("number")}
              type="number"
              id="number"
              placeholder="e.g =1 234 567 890"
              className="outline-none rounded border border-Light-gray text-Cool-gray placeholder:text-Cool-gray py-2 px-3"
            />
          </div>
          <button type="submit" className="flex mt-6 items-center justify-end">
            <p className="w-fit text-xs bg-Marine-blue text-white py-3 px-4 rounded">
              Next Step
            </p>
          </button>
        </form>
      </div>
    </div>
  );
};
export default FStep;
