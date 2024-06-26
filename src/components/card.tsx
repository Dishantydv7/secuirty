"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";

export function Card({title ,content , description , linkofimage , pinbartitle}:any) {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center ">
      <PinContainer
        title= {pinbartitle}
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col  tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
           {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {content}
            </span>
          </div>
          <img 
          src={linkofimage}
          />
          <div className="font-extrabold text-white justify-center items-center  flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br bg-blue-400" >{description}</div>
        </div>
      </PinContainer>
    </div>
  );
}
