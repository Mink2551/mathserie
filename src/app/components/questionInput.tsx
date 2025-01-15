"use client";

import React, { JSX, useState } from "react";

const QuestionInput = ({ question, answer }: { question: string; answer: string }): JSX.Element => {
  const [userInput, setUserInput] = useState<string>("");
  const [check, setCheck] = useState<number>(0); // 0: ยังไม่ตอบ, 1: ถูกต้อง, 2: ผิด

  const checkAnswer = (): void => {
    userInput === answer ? setCheck(1) : setCheck(2);
  };

  return (
    <div className="bg-ColorPalete_4 bg-opacity-75 ml-[-1rem] max-w-[700px] my-5 rounded-2xl px-3 py-5 border-ColorPalete_3 shadow-lg border-2">
      <h2 className="font-bold">
        คำถาม : {question}
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
  );
};

export default QuestionInput;
