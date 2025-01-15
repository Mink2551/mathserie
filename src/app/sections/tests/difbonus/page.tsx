"use client"

import React, { JSX, useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import ReturnButton from '@/app/components/returnButton';

function page() {
    const [userInput, setUserInput] = useState<string>("");
    const [check, setCheck] = useState<number>(0); // 0: ยังไม่ตอบ, 1: ถูกต้อง, 2: ผิด
    const answer = '2754990143999461'

    const checkAnswer = (): void => {
        userInput === answer ? setCheck(1) : setCheck(2);
      };
  return (
    <div className='bg-ColorPalete_4 duration-500 shadow-xl mx-auto flex flex-col justify-center items-center min-h-[100vh] w-[100vw] px-3 py-2'>
    {/* border */}
        <div className='border-2 min-h-[95vh] bg-white rounded-2xl w-[95vw] border-ColorPalete_2'>
        {/* Return button */}
        <ReturnButton link='/'/>
        <TypeAnimation
              sequence={[
                'Math : Question Level : ',
                100,
                'Math : Question Level : ⭐️',
                100, 
                'Math : Question Level : ⭐️⭐️',
                100,
                'Math : Question Level : ⭐️⭐️⭐️',
                100,
                'Math : Question Level : ⭐️⭐️⭐️⭐️',
                100,
                'Math : Question Level : ⭐️⭐️⭐️⭐️⭐️',
                100,
                'Math : Question Level : ⭐️⭐️⭐️⭐️⭐️⭐️',
                100,
              ]}
              wrapper="h1"
              speed={10}
              className="m-10 font-bold text-ColorPalete_1 text-xl"
              repeat={Infinity}
            />

        <ul className='ml-10 mx-5 text-ColorPalete_1 flex flex-col gap-3'>
             <div className="bg-ColorPalete_4 bg-opacity-75 ml-[-1rem] max-w-[700px] my-5 rounded-2xl px-3 py-5 border-ColorPalete_3 shadow-lg border-2">
                   <h2 className="font-bold">
                     คำถาม : หาของ Σ (A + B × C - i + D) (ทุกค่าที่มีทศนิยมเอาแค่ 2 ตำแหน่ง)
                     <p className="ml-14">n = log₁₀([cos₆₀(10¹⁰×2)])</p>
                     <p className="ml-14">i = Σ (3i³ - 2i - i² - 10)</p>
                     <p className="ml-16">∟ n = √3tan₄₅(2sin₆₀)</p>
                     <p className="ml-16">∟ i = csc₃₀</p>
                     <p className="ml-14">A = log₁₀(sin₄₅)</p>
                     <p className="ml-14">B = 20i³</p>
                     <p className="ml-14">C = √3²i²</p>
                     <p className="ml-14">D = csc₄₅²cos₆₀</p>
                     <span
                       className={`${
                         check === 0
                           ? "hidden"
                           : check === 1
                           ? "text-ColorPalete_3"
                           : "text-red-500"
                       }`}
                     >
                       {check === 0 ? "" : check === 1 ? " ถูกต้อง!!" : " ผิด!"}
                     </span>
                   </h2>
                   <div className="flex">
                     <input
                       type="text"
                       id="user_input"
                       value={userInput}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserInput(e.target.value)}
                       className="border-2 border-ColorPalete_3 rounded-lg my-5 mx-2"
                     />
                     <button
                       onClick={checkAnswer}
                       className="bg-ColorPalete_3 text-white h-fit my-auto px-1.5 py-1.5 rounded-lg shadow-md hover:bg-ColorPalete_2 transition"
                     >
                       Submit
                     </button>
                   </div>
                   <button onClick={() => {setUserInput(answer)}} className="bg-ColorPalete_1 mx-2 text-white h-fit my-auto px-2 py-1.5 rounded-lg shadow-md hover:bg-ColorPalete_2 transition">เฉลย</button>
                 </div>
        </ul>
      </div>
    </div>
  )
}
// Σ n= log₂([cos₆₀(10³×2)]) i =( Σ n = √3tan₄₅(2sin₆₀) i= 2 (3i³ - 2i - i² - 10)) (log₁₀(sin₄₅) + 20i³ × √3²i² -  i + csc₄₅²cos₆₀)
export default page
