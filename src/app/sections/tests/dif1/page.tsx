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
                'Math : Question Level : 1',
                1000, 
                'Math : Question Level : ⭐️',
                1000,
                'Math : Question Level : Easy',
                1000,
                'Math : Question Level : One',
                1000,
              ]}
              wrapper="h1"
              speed={10}
              className="m-10 font-bold text-ColorPalete_1 text-xl"
              repeat={Infinity}
            />

        <ul className='ml-10 mx-5 text-ColorPalete_1 flex flex-col gap-3'>
          <Question question='8 + 16 + 24 + ... จงหาพจน์ทั่วไปของอนุกรมเลขคณิตนี้' answer={1} choice1='8n' choice2='4n' choice3='3n + 2' choice4='5n'/>
          <Question question='6, 12, 18, 24, ... จงหาพจน์ทั่วไปของอนุกรมเลขคณิตนี้' answer={2} choice1='3n' choice2='6n' choice3='n + 2' choice4='2n'/>
          <Question question='5, 10, 15, 20, ... จงหาพจน์ทั่วไปของอนุกรมเลขคณิตนี้' answer={1} choice1='5n' choice2='3n' choice3='n + 4' choice4='10n'/>
          <Question question='10, 20, 30, 40, ... จงหาพจน์ทั่วไปของอนุกรมเลขคณิตนี้' answer={4} choice1='3n' choice2='5n' choice3='n + 10' choice4='10n'/>
          <Question question='3, 6, 9, 12, ... จงหาพจน์ทั่วไปของอนุกรมเลขคณิตนี้' answer={2} choice1='n + 3' choice2='3n' choice3='n + 2' choice4='6n'/>
          <Question question='12, 24, 36, 48, ... จงหาพจน์ทั่วไปของอนุกรมเลขคณิตนี้' answer={3} choice1='6n' choice2='3n' choice3='12n' choice4='24n'/>
          <Question question='4, 8, 12, 16, ... จงหาพจน์ทั่วไปของอนุกรมเลขคณิตนี้' answer={4} choice1='5n' choice2='4+ n' choice3='2n + 1' choice4='4n'/>
          <Question question='7, 14, 21, 28, ... จงหาพจน์ทั่วไปของอนุกรมเลขคณิตนี้' answer={1} choice1='7n' choice2='5n' choice3='6n' choice4='3n'/>
          <Question question='2, 4, 6, 8, ... จงหาพจน์ทั่วไปของอนุกรมเลขคณิตนี้' answer={2} choice1='2 + n' choice2='2n' choice3='n + 1' choice4='3n'/>
          <Question question='1, 4, 7, 10, ... จงหาพจน์ทั่วไปของอนุกรมเลขคณิตนี้' answer={3} choice1='2n' choice2='3n' choice3='3n - 2' choice4='4n'/>

          <QuestionInput question='ในลำดับเลขคณิตที่ 2 + 5 + 8 + ... จงหาค่าของพจน์ทั่วไปของอนุกรมนี้'answer="3n-1" />
          <QuestionInput question='ในลำดับเลขคณิตที่ 4 + 24 + 44 + ... จงหาค่าของพจน์ทั่วไปของอนุกรมนี้'answer="20n-16" />
          <QuestionInput question='ในลำดับเลขคณิตที่ 10 + 22 + 34 + ... จงหาค่าของพจน์ทั่วไปของอนุกรมนี้'answer="12n-2" />
        </ul>
      </div>
    </div>
  )
}

export default page
