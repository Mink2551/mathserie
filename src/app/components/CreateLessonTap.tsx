"use client"

import React, { JSX } from 'react'
import Link from 'next/link';
import { useState } from 'react';

const star: string = "⭐";

const CreateLessonTap = ({header, level, content, link} : {header: string, level:number, content:string, link:string}) : JSX.Element => {
    const [open, setOpen] = useState(false);
  
    const handleToggle = (): void => {
      setOpen(!open);
    }
  
    return (
      <div
        style={{ height: open ? '120%' : '90px'}}
        className={`rounded-lg bg-slate-200 duration-500 shadow-xl mx-auto flex flex-col justify-center items-center w-[90%] px-3 py-2`}
      >
        <div className="w-[100%] relative h-[100%]">
          <div className="flex justify-between">
            <Link href={link} className="font-bold text-ColorPalete_1 bg-ColorPalete_3 flex hover:bg-opacity-90 shadow-xl w-fit px-3 py-1 rounded-xl">
              {header}
              <span className="rotate-90">
                <p className="animate-bounce">V</p>
              </span>
            </Link>
            <p className="font-bold text-ColorPalete_1">Level : {star.repeat(level)}</p>
          </div>
          <div className="my-4 text-ColorPalete_1">
            {open ? content : ""}
          </div>
          <div className="absolute bottom-0 font-bold cursor-pointer text-ColorPalete_1" onClick={handleToggle}>
            <span className=""> {open? "Less..." : "More..."} </span>
            <button className={`text-orange-500 h-fit font-bold ${open ? "rotate-180 " : "animate-bounce"}`}>V</button>
          </div>
        </div>
      </div>
    );
  }

export default CreateLessonTap
