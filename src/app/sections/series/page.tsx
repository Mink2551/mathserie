"use client"

import React, { JSX } from 'react'
import ReturnButton from '@/app/components/returnButton'
import Question from '@/app/components/Question'
import Link from 'next/link'

const page = () => {
  return (
    <div className='bg-ColorPalete_4 duration-500 shadow-xl mx-auto flex flex-col justify-center items-center min-h-[100vh] w-[100vw] px-3 py-2'>
        {/* border */}
      <div className='border-2 min-h-[95vh] bg-white rounded-2xl w-[95vw] border-ColorPalete_2'>
        {/* Return button */}
        <ReturnButton link='/'/>
        <div className='gap-5 flex flex-col mx-5 font-bold text-ColorPalete_1'>
            {/* header */}
            <h1 className='mt-20  text-[2rem]'>Lesson : Series</h1>
            {/* lesson */}
            <p className='ml-3 font-medium text-ColorPalete_1 opacity-90'>อนุกรม! เป็นแนวคิดทางคณิตศาสตร์ ที่เกิดจากการบวก ของลำดับ ตัวเลข ไปเลื่อยๆ</p>
            <div className='ml-3 font-medium text-Colordivalete_1 opacity-90'>
                <span className='font-bold'>ชนิดของอนุกรม</span>
                <ul className='mx-2'>
                    <li>1. อนุกรมจำกัด (Finite Series)</li>
                    <li>2. อนุกรมอนันต์ (Infinite Series)</li>
                </ul>
                <div className='bg-ColorPalete_4 bg-opacity-75 ml-[-1rem] max-w-[700px] my-5 rounded-2xl px-3 py-5 border-ColorPalete_3 shadow-lg border-2'>
                      <h2 className='font-bold'>ข้อควรรู้ :</h2>
                      <p className='mx-3'>ตัวแปรที่ใช้ใน อนุกรม มีหลายตัวแปรมากแต่ที่เราจะพูดถึงตอนนี้คือ</p>
                      <ul className='mx-5'>
                          <li>1. <span className='font-bold'>a</span> : แทนการเรียกพจน์ ในอนุมกรม</li>
                          <li>2. <span className='font-bold'>a1</span> : คือพจน์ที่ 1 นั้นเอง</li>
                          <li>3. <span className='font-bold'>n</span> : คือค่าของ พจน์สุดท้ายหรือพจน์ที่เรากำลังสนใจ</li>
                      </ul>
                      <p className='mx-3'>เช่น ถ้าเรามี อนุกรม "1 + 2 + 3 + ... + 10" หมายความ a1 ของอนุมกรมนี้ = 1 และ n = 10 เพราะ พจน์สุดท้ายมีค่าเท่ากับ 10 นั้นเอง</p>
                </div>
                <p className='font-bold'>อนุกรมจำกัด</p>
                <ul className='mx-2'>
                    <li>หมายถึง อนุกรมที่มีพจน์สุดท้าย เช่น "1 + 2 + 3 + ... + 10"</li>
                </ul>
                <p className='font-bold mt-7'>อนุกรมอนันต์</p>
                <ul className='mx-2'>
                    <li>หมายถึง อนุกรมที่ไม่มีพจน์สุดท้าย เช่น "1 + 2 + 3 + ..."</li>
                </ul>
                {/* question */}
                <Question question='ข้อไหนที่ไม่ใช่อนุกรมจำกัด' answer={3} choice1='2 + 3 + 4 + 5' choice2='1 + 3 + 5 + 7 + ... + 51' choice3='10 + 20 + 30 + ...' choice4='1 + 10 + 19 + ... an'/>
                
                <Question question='อนุกรมใดที่เป็นอนุกรมจำกัด' answer={2} choice1='1 + 2 + 3 + ... + ∞' choice2='1 + 2 + 3 + ... + 20' choice3='5 + 10 + 15 + ...' choice4='2 + 4 + 6 + ...'/>
                
                <Question question='โจทย์ใดที่เป็นอนุกรมอนันต์' answer={1} choice1='1 + 2 + 3 + ...' choice2='5 + 10 + 15 + ... + 50' choice3='10 + 20 + 30 + ... + 100' choice4='3 + 6 + 9 + ... + 30'/>

                <p className='font-bold'>ประเภทของอนุกรม</p>
                <ul className='mx-2'>
                    <li>1. อนุกรมเลขคณิต (Arithmetic series) </li>
                    <ul className='mx-5 flex flex-col gap-2'>
                        <li>- อนุกรม นี้หมายถึงค่าของพจน์ที่ 1 มีค่าน้อยกว่า พจน์ที่ 2 อยู่ "d" หรือ ค่าของพจน์ 2 มีค่ามากกว่า พจน์ที่ 1 อยู่ "d"</li>
                        <li>- หรือก็คือถ้าเราเอา a1 + d = a2 นั้นเองแหละหรือเอา a2 - d = a1 ด้วย</li>
                        <li>- วิธีการหา d ก็คือเอา พจน์ที่มากกว่ามาลบด้วยพจน์ที่น้อยกว่าและทั้ง 2 พจน์นี้ต้องอยู่ติดกัน เช่น an - (an-1) = d</li>
                        <li>- เพราะงั้นการเราสามารถหาพจน์ an ได้ด้วยการใช้สูตร an = a1+(n-1)d</li>
                        <ul className='mx-5 flex flex-col gap-1'>
                            <li>- เพราะ สมมติว่าถ้าเราต้องการจะหา พจน์ที่ 5 เราต้องเอา a1 + 4d</li>
                            <li>- ซึ่งเลขที่คูณอยู่กับ d คือเลขลำดับพจน์ลบด้วย 1 นั้นเอง</li>
                        </ul>
                        <li>- ***ถ้าเรามองโจทย์ไม่ออกว่าเป็นยังไงลองแตกโครงสร้างย้อนตามกฎพวกนี้ดูนะ</li>
                    </ul>
                    <li className='mt-5'>2. อนุกรมเรขาคณิต (Geometric series) </li>
                    <ul className='mx-5 flex flex-col gap-2'>
                        <li>- อนุกรม นี้หมายถึงค่าของพจน์ที่ 1 มีค่าน้อยกว่า พจน์ที่ 2 อยู่ "r" *เท่า* หรือ ค่าของพจน์ 2 มีค่ามากกว่า พจน์ที่ 1 อยู่ "r" *เท่า*</li>
                        <li>- หรือก็คือถ้าเราเอา a1 * r = a2 นั้นเองแหละหรือเอา a2 / r = a1 ด้วย</li>
                        <li>- วิธีการหา r ก็คือเอา พจน์ที่มากกว่ามาหารด้วยพจน์ที่น้อยกว่าและทั้ง 2 พจน์นี้ต้องอยู่ติดกัน เช่น an / (an-1) = r</li>
                        <li>- เพราะงั้นการเราสามารถหาพจน์ an ได้ด้วยการใช้สูตร an = a1*rⁿ⁻¹</li>
                        <ul className='mx-5 flex flex-col gap-1'>
                            <li>- เพราะ สมมติว่าถ้าเราต้องการจะหา พจน์ที่ 5 เราต้องเอา a1 * r⁴</li>
                            <li>- ซึ่งเลขที่ยกกำลังอยู่กับ r คือเลขลำดับพจน์ลบด้วย 1 นั้นเอง</li>
                        </ul>
                        <li>- ***ถ้าเรามองโจทย์ไม่ออกว่าเป็นยังไงลองแตกโครงสร้างย้อนตามกฎพวกนี้ดูนะ</li>
                    </ul>
                    <li className='mt-5'>3. อนุกรม ธรรมดา (Series) </li>
                    <ul className='mx-5 flex flex-col gap-2'>
                        <li>- อนุกรม นี้คือ อนุกรม ที่มีการบวกของลำดับตัวเลขแบบไม่ตายตัว เช่น "1² + 2² + 3² + ..." , "1 + 4 + 9 + 16 + 25 + ..."</li>
                        <li>- อนุกรมข้างต้นนี้ ไม่สามารถใช้สูตรจาก อนุกรมเรขาคณิต หรือว่า อนุกรมเลขคณิต ได้ เพราะงั้นเราจะต้องใช้วิธีอื่นในการหาคำตอบ <span className='text-ColorPalete_3 cursor-pointer hover:underline transition-all'><Link href='/sections/seriesSolving'></Link> วิธีแก้</span></li>
                    </ul>
                </ul>

                <div className='bg-ColorPalete_4 bg-opacity-75 ml-[-1rem] max-w-[700px] my-5 rounded-2xl px-3 py-5 border-ColorPalete_3 shadow-lg border-2'>
                      <h2 className='font-bold'>ข้อควรรู้ :</h2>
                      <p className='mx-3'>ตัวแปรที่ใช้ใน อนุกรม มีหลายตัวแปรมากแต่ที่เราจะพูดถึงตอนนี้คือ</p>
                      <ul className='mx-5'>
                          <li>1. <span className='font-bold'>d</span> : คือจำนวนที่เพิ่มขึ้น a1 มาเป็น a2 ในอนุกรมเลขคณิตนั้นเอง</li>
                          <li>2. <span className='font-bold'>r</span> : คือจำนวนที่คูณกับ a1 แล้วได้ a2 หรือก็คือ ค่าที่มากขึ้นกี่เท่าจาก a1 นั้นเอง</li>
                          <li>3. เพราะงั้นถ้าเราเจอ ตัวแปร r หรือ d ในโจทย์ก็จะรู้ได้ทันทีว่าอนุกรมนั้นเป็นเลขคณิตหรือเรขาคณิต</li>
                      </ul>
                </div>

                <Question question='โจทย์ใดที่เป็นอนุกรมเลขคณิต' answer={4} choice1='10 + 100 + 1000 + ...' choice2='1 + 2 + 4 + 8 + 16 + ...' choice3='2 + -4 + 8 + ...' choice4='1 + 3 + 5 + ...'/>
                <Question question='โจทย์ใดที่เป็นอนุกรมเรขาคณิต' answer={2} choice1='1 + 2 + 3 + 4 + ...' choice2='3 + 6 + 12 + 24 + ...' choice3='1 + 2 + 4 + 7 + ...' choice4='2 + 5 + 8 + 11 + ...'/>
                <Question question='โจทย์ใดที่เป็นอนุกรมธรรมดา' answer={2} choice1='1 + 2 + 3 + 4 + ...' choice2='5 + 10 + 15 + 20 + ...' choice3='2 + -4 + 8 + ...' choice4='2 + 5 + 8 + 11 + ...'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
