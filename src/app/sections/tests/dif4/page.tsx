"use client"

import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import ReturnButton from '@/app/components/returnButton';
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
                'Math : Question Level : 4',
                1000, 
                'Math : Question Level : ⭐️⭐️⭐️⭐️',
                1000,
                'Math : Question Level : Hard',
                1000,
                'Math : Question Level : Four',
                1000,
              ]}
              wrapper="h1"
              speed={10}
              className="m-10 font-bold text-ColorPalete_1 text-xl"
              repeat={Infinity}
            />

        <ul className='ml-10 mx-5 text-ColorPalete_1 flex flex-col gap-3'>
        <QuestionInput
            question="ให้ Σ i=1 ถึง n=10 (5i) หาผลบวกของอนุกรมนี้"
            answer="275"
        />
        <QuestionInput
            question="ให้ Σ i=1 ถึง n=6 (2i² + 3i) หาผลบวกของอนุกรมนี้"
            answer="245"
        />
        <QuestionInput
            question="ให้ Σ i=1 ถึง n=8 (i³ - 2i² + 3i) หาผลบวกของอนุกรมนี้"
            answer="996"
        />
        <QuestionInput
            question="ให้ Σ i=1 ถึง n=12 (i² + 3i - 2) หาผลบวกของอนุกรมนี้"
            answer="860"
        />
        <QuestionInput
            question="ให้ Σ i=1 ถึง n=9 (5i³ + 2i² - 3i) หาผลบวกของอนุกรมนี้"
            answer="10560"
        />
        
        </ul>
      </div>
    </div>
  )
}

export default page
