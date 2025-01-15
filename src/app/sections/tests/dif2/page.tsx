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
                'Math : Question Level : 2',
                1000, 
                'Math : Question Level : ⭐️⭐️',
                1000,
                'Math : Question Level : Medium',
                1000,
                'Math : Question Level : Two',
                1000,
              ]}
              wrapper="h1"
              speed={10}
              className="m-10 font-bold text-ColorPalete_1 text-xl"
              repeat={Infinity}
            />

        <ul className='ml-10 mx-5 text-ColorPalete_1 flex flex-col gap-3'>
          <Question question='1. อนุกรมคณิตศาสตร์ที่แต่ละพจน์เพิ่มขึ้นทีละจำนวนคงที่เรียกว่าอะไร?' answer={1} choice1='อนุกรมเลขคณิต' choice2='อนุกรมเรขาคณิต' choice3='อนุกรมฮาร์โมนิก' choice4='อนุกรมปริภูมิ'/>
          <Question question='2. หากพจน์ที่ 1 ของอนุกรมเลขคณิตคือ 5 และมีการเพิ่มขึ้นทีละ 3 พจน์ที่ 10 จะเป็นเท่าใด?' answer={1} choice1='32' choice2='35' choice3='33' choice4='34'/>
          <Question question='3. อนุกรมที่แต่ละพจน์เพิ่มขึ้นโดยการคูณกับจำนวนคงที่เรียกว่าอะไร?' answer={2} choice1='อนุกรมเลขคณิต' choice2='อนุกรมเรขาคณิต' choice3='อนุกรมฮาร์โมนิก' choice4='อนุกรมลอการิธึม'/>
          <Question question='4. ผลรวมของอนุกรมเลขคณิตสามารถคำนวณได้จากสูตรใด?' answer={4} choice1='Sn = a / (1 - r)' choice2='Sn = a * r^n' choice3='Sn = a * (1 - r^n) / (1 - r)' choice4='Sn = n/2 (2a + (n-1) d)'/>
          <Question question='5. ผลรวมอนุกรมเรขาคณิตที่ไม่มีอนุกรมจำกัด (ไม่คงที่) สามารถคำนวณได้จากสูตรไหน?' answer={1} choice1='Sn = a / (1 - r)' choice2='Sn = n/2 (a + an)' choice3='Sn = a * r^n' choice4='Sn = n/2 (2a + (n-1) d)'/>
          <Question question='6. หากพจน์ที่ 1 ของอนุกรมเรขาคณิตคือ 4 และอัตราการคูณคือ 2 ผลรวมของ 4 พจน์แรกคืออะไร?' answer={4} choice1='30' choice2='40' choice3='50' choice4='60'/>
          <Question question='7. อนุกรมใดที่ประกอบด้วยพจน์ที่เป็นผลรวมของลำดับการหาร?' answer={3} choice1='อนุกรมเลขคณิต' choice2='อนุกรมเรขาคณิต' choice3='อนุกรมฮาร์โมนิก' choice4='อนุกรมลอการิธึม'/>
          <Question question='8. อนุกรมที่มีผลรวมเป็นค่าคงที่เรียกว่าอะไร?' answer={3} choice1='อนุกรมแปรผัน' choice2='อนุกรมอนันต์' choice3='อนุกรมจำกัด' choice4='อนุกรมผลคูณ'/>
          <Question question='9. การคำนวณผลรวมของอนุกรมเลขคณิตจำเป็นต้องรู้ข้อมูลใดบ้าง?' answer={1} choice1='พจน์แรก, อัตราการเพิ่ม, จำนวนพจน์' choice2='พจน์แรก, อัตราการเพิ่ม' choice3='พจน์แรก, พจน์สุดท้าย' choice4='อัตราการเพิ่ม, จำนวนพจน์'/>
          <Question question='10. ในอนุกรมเลขคณิตที่มีพจน์แรกเป็น 3 และมีอัตราการเพิ่มเป็น 5 ผลรวมของ 7 พจน์แรกคือเท่าไร?' answer={2} choice1='105' choice2='110' choice3='115' choice4='120'/>
          <QuestionInput question='1. อนุกรมเลขคณิตที่มีพจน์แรก 5 และความต่าง 3 จงหาค่าของพจน์ที่ 10' answer='32'/>
          <QuestionInput question='2. อนุกรมเรขาคณิตที่มีพจน์แรก 4 และอัตราคูณ 2 จงหาค่าของพจน์ที่ 5' answer='64'/>
          <QuestionInput question='3. อนุกรมเลขคณิตที่มีพจน์แรก 3 และความต่าง 5 จงหาผลรวมของ 7 พจน์แรก' answer='126'/>
          <QuestionInput question='4. อนุกรมเรขาคณิตที่มีพจน์แรก 2 และอัตราคูณ 3 จงหาผลรวมของ 4 พจน์แรก' answer='80'/>
          <QuestionInput question='5. อนุกรมเลขคณิตที่มีพจน์แรก 7 และความต่าง -2 จงหาค่าของพจน์ที่ 6' answer='-3'/>
          <QuestionInput question='6. อนุกรมเรขาคณิตที่มีพจน์แรก 5 และอัตราคูณ 0.5 จงหาค่าของพจน์ที่ 4' answer='0.625'/>
          <QuestionInput question='7. อนุกรมเลขคณิตที่มีพจน์แรก 8 และความต่าง -4 จงหาผลรวมของ 10 พจน์แรก' answer='-100'/>
          <QuestionInput question='8. อนุกรมเรขาคณิตที่มีพจน์แรก 6 และอัตราคูณ 2 จงหาผลรวมของ 6 พจน์แรก' answer='378'/>
          <QuestionInput question='9. อนุกรมเลขคณิตที่มีพจน์แรก 12 และความต่าง 7 จงหาค่าของพจน์ที่ 8' answer='61'/>
          <QuestionInput question='10 อนุกรมเรขาคณิตที่มีพจน์แรก 3 และอัตราคูณ 1.5 จงหาผลรวมของ 5 พจน์แรก (ทศนิยม 2 ตำแหน่ง)' answer='39.56'/>
        </ul>
      </div>
    </div>
  )
}

export default page
