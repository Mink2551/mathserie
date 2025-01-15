"use client"

import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import ReturnButton from '@/app/components/returnButton';
import Question from '@/app/components/Question';
import QuestionInput from '@/app/components/questionInput';

function page() {
  return (
    <div className='bg-ColorPalete_4 duration-500 shadow-xl mx-auto flex flex-col justify-center items-center min-h-[100vh] w-[100vw] px-3 py-2'>
    {/* border */}
        <div className='border-2 min-h-[95vh] bg-white rounded-2xl w-[95vw] border-ColorPalete_2'>
        {/* Return button */}
        <ReturnButton link='/'/>
        <TypeAnimation
              sequence={[
                'Math : Question Level : 5',
                1000, 
                'Math : Question Level : ⭐️⭐️⭐️⭐️⭐️',
                1000,
                'Math : Question Level : Expert',
                1000,
                'Math : Question Level : Five',
                1000,
              ]}
              wrapper="h1"
              speed={10}
              className="m-10 font-bold text-ColorPalete_1 text-xl"
              repeat={Infinity}
            />

        <ul className='ml-10 mx-5 text-ColorPalete_1 flex flex-col gap-3'>
            <QuestionInput
              question="ให้ Σ i=3 ถึง n=6 (i² + 2i) หาผลบวกของอนุกรมนี้"
              answer="122"
            />
            <QuestionInput
              question="ให้ Σ i=2 ถึง n=5 (3i³ - 4i) หาผลบวกของอนุกรมนี้"
              answer="616"
            />
            <QuestionInput
              question="ให้ Σ i=4 ถึง n=8 (5i² -i + 7) หาผลบวกของอนุกรมนี้"
              answer="955"
            />
        </ul>
      </div>
    </div>
  )
}

export default page
