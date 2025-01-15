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
                'Math : Question Level : 3',
                1000, 
                'Math : Question Level : ⭐️⭐️⭐️',
                1000,
                'Math : Question Level : Hard',
                1000,
                'Math : Question Level : Three',
                1000,
              ]}
              wrapper="h1"
              speed={10}
              className="m-10 font-bold text-ColorPalete_1 text-xl"
              repeat={Infinity}
            />

        <ul className='ml-10 mx-5 text-ColorPalete_1 flex flex-col gap-3'>
        <Question question='อนุกรมเลขคณิตที่มีพจน์แรก 8 และความต่าง -3 จงหาผลรวมของ 20 พจน์แรก' answer={3} choice1='-610' choice2='-510' choice3='-410' choice4='-310'/>
        <Question question='อนุกรมเรขาคณิตที่มีพจน์แรก 7 และอัตราคูณ -2 จงหาผลรวมของ 10 พจน์แรก' answer={3} choice1='-2387' choice2='-3487' choice3='-3398' choice4='-2300'/>
        <Question question='ผลรวมของอนุกรมเลขคณิตจากพจน์แรก 12 และความต่าง 7 ใช้เครื่องหมาย sigma สามารถเขียนได้อย่างไร?' answer={2} choice1='Σ7 + Σ(i-1) * 12' choice2='Σ(12 + (i-1) * 7)' choice3='Σ12 + Σ(i-1) * 7' choice4='Σ(i-1) * 7 + 12'/>
        <QuestionInput question='จงหาผลรวมของอนุกรมเลขคณิตที่มีพจน์แรก 10 และความต่าง -5 สำหรับ 50 พจน์แรก โดยใช้สูตร sigma' answer='-5625'/>
        <QuestionInput question='จงหาผลรวมของอนุกรมเรขาคณิตที่มีพจน์แรก 3 และอัตราคูณ -3 สำหรับ 15 พจน์แรก โดยใช้สูตร sigma' answer='10,761,681'/>
        </ul>
      </div>
    </div>
  )
}

export default page
