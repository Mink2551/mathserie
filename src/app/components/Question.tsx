"use client"

import React, { JSX, useState } from 'react'

const Question = ({ question, answer, choice1, choice2, choice3, choice4 }: { question: string, answer: number, choice1: string, choice2: string, choice3: string, choice4: string }): JSX.Element => {
  const [check, setCheck] = useState<number>(0);
  const [id_, setId_] = useState<number>(0) 

  const handleCheck = (id: number): void => {
    if (answer === id) {
      setCheck(1);
      setId_(id);
    } else {
      setCheck(2);
      setId_(id);
    }
  };

  return (
    <div className='bg-ColorPalete_4 bg-opacity-75 ml-[-1rem] max-w-[700px] my-5 rounded-2xl px-3 py-5 border-ColorPalete_3 shadow-lg border-2'>
      <h2 className='font-bold'>
        คำถาม : {question} 
        <span className={`${check === 0 ? "hidden" : id_ === answer ? "text-ColorPalete_3" : "text-red-500"}`}>
          {check === 0 ? "" : id_ === answer ? " ถูกต้อง!!" : " ผิด!"}
        </span>
      </h2>
      <div className='grid md:grid-cols-2 gap-x-6 mt-3 gap-y-3'>
        <button onClick={() => handleCheck(1)} className={`rounded-lg bg-opacity-40 py-1 ${check === 0? "" : 1? (answer === 1? "bg-opacity-90" : "bg-opacity-90 bg-red-300") : ""} bg-ColorPalete_3 text-left px-4`}>1. "{choice1}"</button>
        <button onClick={() => handleCheck(2)} className={`rounded-lg bg-opacity-40 py-1 ${check === 0? "" : 1? (answer === 2? "bg-opacity-90" : "bg-opacity-90 bg-red-300") : ""} bg-ColorPalete_3 text-left px-4`}>2. "{choice2}"</button>
        <button onClick={() => handleCheck(3)} className={`rounded-lg bg-opacity-40 py-1 ${check === 0? "" : 1? (answer === 3? "bg-opacity-90" : "bg-opacity-90 bg-red-300") : ""} bg-ColorPalete_3 text-left px-4`}>3. "{choice3}"</button>
        <button onClick={() => handleCheck(4)} className={`rounded-lg bg-opacity-40 py-1 ${check === 0? "" : 1? (answer === 4? "bg-opacity-90" : "bg-opacity-90 bg-red-300") : ""} bg-ColorPalete_3 text-left px-4`}>4. "{choice4}"</button>
      </div>
    </div>
  );
};

export default Question;
