"use client"
import React, { useState } from 'react'
import ReturnButton from '@/app/components/returnButton'
import CreateLessonTap from '@/app/components/CreateLessonTap'
import Link from 'next/link'

function page() {
    const [open, setOpen] = useState(false);

    const handleToggle = (): void => {
        setOpen(!open);
      }
  return (
    <div className='bg-ColorPalete_4 duration-500 shadow-xl mx-auto flex flex-col justify-center items-center min-h-[100vh] w-[100vw] px-3 py-2'>
        {/* border */}
        <div className='border-2 min-h-[95vh] bg-white rounded-2xl w-[95vw] border-ColorPalete_2'>
            {/* Return button */}
            <ReturnButton link='/'/>
            <div className='mt-10 gap-y-5 grid grid-cols-1 lg:grid-cols-2'>
                <CreateLessonTap 
                    header="Click Here" 
                    level={1} 
                    content="Difficult Lvl: 1" 
                    link="/sections/tests/dif1"/>
                    
                <CreateLessonTap 
                    header="Click Here" 
                    level={2} 
                    content="Difficult Lvl: 2" 
                    link="/sections/tests/dif2"/>
                
                <CreateLessonTap 
                    header="Click Here" 
                    level={3} 
                    content="Difficult Lvl: 3" 
                    link="/sections/tests/dif3"/>
                
                <CreateLessonTap 
                    header="Click Here" 
                    level={4} 
                    content="Difficult Lvl: 4" 
                    link="/sections/tests/dif4"/>
                
                <CreateLessonTap 
                    header="Click Here" 
                    level={5} 
                    content="Difficult Lvl: 5" 
                    link="/sections/tests/dif5"/>

                <div
                  style={{ height: open ? '120%' : '90px'}}
                  className={`rounded-lg bg-slate-200 duration-500 shadow-xl mx-auto flex flex-col justify-center items-center w-[90%] px-3 py-2`}
                >
                    <div className="w-[100%] relative h-[100%]">
                      <div className="flex justify-between">
                        <Link href='/sections/tests/difbonus' className="font-bold text-ColorPalete_1 bg-ColorPalete_3 flex hover:bg-opacity-90 shadow-xl w-fit px-3 py-1 rounded-xl">
                          click Here
                          <span className="rotate-90">
                            <p className="animate-bounce">V</p>
                          </span>
                        </Link>
                        <p className="font-bold text-ColorPalete_1">Level : Bonus🌟</p>
                      </div>
                      <div className="my-4 text-ColorPalete_1">
                        {open ? "Difficult Lvl: Bonus" : ""}
                      </div>
                      <div className="absolute bottom-0 font-bold cursor-pointer text-ColorPalete_1" onClick={handleToggle}>
                        <span className=""> {open? "Less..." : "More..."} </span>
                        <button className={`text-orange-500 h-fit font-bold ${open ? "rotate-180 " : "animate-bounce"}`}>V</button>
                      </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default page
