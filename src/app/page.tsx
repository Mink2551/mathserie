"use client"

import { TypeAnimation } from 'react-type-animation';
import CreateLessonTap from "./components/CreateLessonTap";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {/* Card */}
      <div className="bg-ColorPalete_4 min-h-[90vh] w-[90vw] shadow-xl rounded-lg">
        {/* Header */}
        <TypeAnimation
          sequence={[
            'Math : Arithmetic series',
            1000, 
            'Math : Geometric series',
            1000,
            'Math : Sigma Σ',
            1000,
            'Math : Series',
            1000, 
          ]}
          wrapper="h1"
          speed={10}
          className="m-10 font-bold text-ColorPalete_1 text-xl"
          repeat={Infinity}
        />
        {/* Layer Line */}
        <hr className="mx-5 border-ColorPalete_1"/>
        {/* Tap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 gap-y-5 pb-10 pt-5 overflow-y-auto max-h-[70vh]">
          <CreateLessonTap 
            header="Introduction to 'Series'" 
            level={1} 
            content="ความหมายและประเภทของอนุกรม." 
            link="/sections/series"/>
            
          <CreateLessonTap 
            header="Jumpstart 'aₙ'" 
            level={2} 
            content="aₙ คือสูตรที่ไว้ใช้หาค่าของ พจน์ทั่วไป หรือว่าค่าของพจน์สุดท้าย โดย aₙ หมายถึง ค่าของพจน์ในลำดับที่ n และเรายังใช้สูตรนี้หาค่าของ n , d , r ได้อีกด้วย" 
            link="/sections/AnSolving"/>

          <CreateLessonTap 
            header="Jumpstart 'sₙ'" 
            level={2} 
            content="aₙ คือสูตรที่ไว้ใช้หาค่าของ พจน์ทั่วไป หรือว่าค่าของพจน์สุดท้าย โดย aₙ หมายถึง ค่าของพจน์ในลำดับที่ n และเรายังใช้สูตรนี้หาค่าของ n , d , r ได้อีกด้วย" 
            link="/sections/AnSolving"/>

          <CreateLessonTap 
            header="Jumpstart 'Sigma Σ'" 
            level={3} 
            content="สัญลักษณ์ Σ (Sigma) สัญลักษณ์ที่ใช้แทนอนุกรมได้ทุกรูปแบบ มีวิธีการแก้ที่หลากหลาย และซ้บซ้อนมาก" 
            link="/sections/seriesSolving"/>

          <CreateLessonTap 
            header="QTests" 
            level={5} 
            content="Questions Tests" 
            link="/sections/QuestionsTests"/>
        </div>
        
      </div>
    </div>
  );
}
