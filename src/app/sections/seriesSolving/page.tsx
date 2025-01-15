import React from 'react'
import ReturnButton from '@/app/components/returnButton'
import Question from '@/app/components/Question'
import QuestionInput from '@/app/components/questionInput'

export default function page() {
  return (
    <div className='bg-ColorPalete_4 duration-500 shadow-xl mx-auto flex flex-col justify-center items-center min-h-[100vh] w-[100vw] px-3 py-2'>
    {/* border */}
    <div className='border-2 min-h-[95vh] bg-white rounded-2xl w-[95vw] border-ColorPalete_2'>
    {/* Return button */}
    <ReturnButton link='/'/>
    <div className='gap-5 flex flex-col mx-5 font-bold text-ColorPalete_1'>
        {/* header */}
        <h1 className='mt-20  text-[2rem]'>Lesson : Sigma Σ</h1>
        {/* lesson */}
        <div className='ml-3 font-medium text-Colordivalete_1 opacity-90'>
            <div className='bg-ColorPalete_4 bg-opacity-75 ml-[-1rem] max-w-[700px] my-5 rounded-2xl px-3 py-5 border-ColorPalete_3 shadow-lg border-2'>
                <h2 className='font-bold'>ข้อควรรู้ :</h2>
                <p className='mx-3'>ก่อนจะความรู้จักกับ Σ เราต้องรู้ตัวแปรที่ใช้ใน Σ ก่อน</p>
                <ul className='mx-5'>
                    <li>1. <span className='font-bold'>i </span>: คือพจน์แรกของอนุกรม</li>
                    <li>2. <span className='font-bold'>n </span>: คือพจน์สุดท้ายของอนุกรม</li>
                </ul>
                <p>โดยข้างหน้าของ sigma จะมีสมการ ที่แทน i อยู่ให้แทนค่าของ i ลงในสมการแล้วแก้สมการจะได้พจน์ 1 แล้วเอาค่า i+1 แล้วแก้สมการอีกรอบจะได้ พจน์ 2 ทำยังงี้ไปเลื่อยจนกว่า i = n</p>
            </div>
            <p className='font-bold mt-7'>วิธีอ่านค่าของ Sigma</p>
            <ul className='mx-2 flex flex-col gap-3'>
                <li>เราจะเขียน sigma แล้วใส่แปร n และ i ไว้ตรงด้านบนและล่างของเครื่องหมาย Σ ตามลำดับ</li>
                <li>เช่น Σ<sub>i=1</sub><sup>n=10</sup> (i) หมายถึงเอาค่า i มาเป็นพจน์เลยเพราะงั้นอนุกรมนี้จะเท่ากับ 1 + 2 + 3 + ... + 10</li>
                <li>Σ<sub>i=1</sub><sup>n=10</sup> (i + 10) ก็จะอ่านได้ว่า 11 + 12 + 13 + ... + 20</li>
                <li>แต่ในโจทย์ของจริงสมการจะยากกว่ามาก เช่น Σ<sub>i=1</sub><sup>n=10</sup> (2i + i²) ก็จะอ่านได้ว่า 3 + 8 + 15 + ... + 120</li>
            </ul>
            <p className='font-bold mt-7'>การหาผลรวม</p>
            <ul className='mx-2 flex flex-col gap-3'>
                <li>การหาผลรวมของอนุกรมรูปแบบ เลขคณิต และ เรขาคณิตนั้นใช้ สูตร Sₙ เพราะงั้นถ้าพิจารณาแล้วว่า Σ นี้เป็น เลขคณิต หรือ เรขาคณิต เราก็ไปใช้สูตร Sₙ ในการหาผลรวมได้</li>
                <li>แต่ว่าสำหรับอนุกรมธรรมดาแล้ววิธีการหาค่าของ Σ เราต้องใช้กฏของ Sigma ทั้ง 4 ข้อและคุณสมบัติอีก 2 ข้อในการหา</li>
                <ul className='mx-2 flex flex-col gap-10'>
                    <li>สูตรที่ 1 : Σ<sub>i=1</sub><sup>n</sup> (c) = nc โดยกำหนดให้ c เป็นค่าคงตัวเช่น 10 , 5 , 8 จากสูตรนี้เราถ้าสมการเป็น Σ<sub>i=1</sub><sup>n = 7</sup> (10) = 7×10 = 70 นั้นเอง</li>
                    <li>สูตรที่ 2 : Σ<sub>i=1</sub><sup>n</sup> (i²) = [n(n + 1)(2n + 1)] ➗ 6  หรือเขียนได้อีกอย่างว่า n(n+1)(2n+1) × 1/6 จากสูตรนี้เราถ้าสมการเป็น Σ<sub>i=1</sub><sup>n = 4</sup> (i²) = 4(4 + 1)(2(4) + 1) × 1/6 = 30 นั้นเอง</li>
                    <li>สูตรที่ 3 : Σ<sub>i=1</sub><sup>n</sup> (i³) = [(n(n + 1)) ➗ 2]²  หรือเขียนได้อีกอย่างว่า [(n(n+1)) × 0.5]² จากสูตรนี้เราถ้าสมการเป็น Σ<sub>i=1</sub><sup>n = 10</sup> (i³) = [10(10 + 1) × 0.5]² = 3,025 นั้นเอง</li>
                    <li>สูตรที่ 4 : Σ<sub>i=1</sub><sup>n</sup> (i) = [n(n + 1)] ➗ 2 หรือเขียนได้อีกอย่างว่า [n(n + 1)] × 0.5 จากสูตรนี้เราถ้าสมการเป็น Σ<sub>i=1</sub><sup>n = 4</sup> (i) = [4 ( 4 + 1 ) × 0.5] = 10 นั้นเอง</li>
                    <li>**** ทั้ง 4 สูตรนี้จะได้ก็ต่อเมื่อ i = 1 เท่านั้น ****</li>
                </ul>
                <ul className='mx-2 flex flex-col gap-10'>
                    <li>คุณสมบัติ 1 : Σ<sub>i=1</sub><sup>n</sup> (aᵢ ± bᵢ) = Σ<sub>i=1</sub><sup>n</sup> (aᵢ) ± Σ<sub>i=1</sub><sup>n</sup> (bᵢ) ถ้าสมการหน้า sigma มันบวกหรือลบกันอยู่สามารถแยกเป็นสมการได้แล้วเอามาบวกหรือลบกันภายหลัง เช่น Σ<sub>i=1</sub><sup>n</sup> (10i + 7i) = Σ<sub>i=1</sub><sup>n</sup> (10i) + Σ<sub>i=1</sub><sup>n</sup> (7i)</li>
                    <li>คุณสมบัติ 2 : Σ<sub>i=1</sub><sup>n</sup> (caᵢ) =  c Σ<sub>i=1</sub><sup>n</sup> (aᵢ) ถ้าสมการหน้า sigma มันควรกันอยู่สามารถแยกตัวแปรออกมานอก sigma ได้หาค่าของ sigma ให้เสร็จละเอามาคูณกันภายหลัง</li>
                </ul>
            </ul>
            <ul className='mt-10'>
                <h3 className='font-bold text-lg'>Question! : สูตรที่ 1-4</h3>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=8 (5)' answer={3} choice1='30' choice2='35' choice3='40' choice4='45'/>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=10 (12)' answer={2} choice1='110' choice2='120' choice3='130' choice4='140'/>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=4 (20)' answer={3} choice1='60' choice2='70' choice3='80' choice4='90'/>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=5 (i)' answer={3} choice1='12' choice2='14' choice3='15' choice4='16'/>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=5 (i²)' answer={3} choice1='45' choice2='50' choice3='55' choice4='60'/>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=5 (8)' answer={1} choice1='40' choice2='36' choice3='32' choice4='44'/>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=3 (i²)' answer={2} choice1='12' choice2='14' choice3='16' choice4='18'/>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=6 (i³)' answer={3} choice1='396' choice2='420' choice3='441' choice4='450'/>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=7 (i²)' answer={3} choice1='126' choice2='135' choice3='140' choice4='145'/>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=6 (7)' answer={3} choice1='28' choice2='35' choice3='42' choice4='49'/>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=6 (i²)' answer={3} choice1='81' choice2='86' choice3='91' choice4='96'/>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=7 (i)' answer={3} choice1='24' choice2='26' choice3='28' choice4='30'/>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=2 (i²)' answer={2} choice1='3' choice2='5' choice3='7' choice4='9'/>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=3 (i³)' answer={3} choice1='27' choice2='30' choice3='36' choice4='42'/>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=3 (i)' answer={2} choice1='5' choice2='6' choice3='7' choice4='8'/>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=4 (i³)' answer={1} choice1='100' choice2='90' choice3='80' choice4='110'/>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=5 (i³)' answer={3} choice1='200' choice2='210' choice3='225' choice4='240'/>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=2 (i)' answer={2} choice1='2' choice2='3' choice3='4' choice4='5'/>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=6 (i)' answer={2} choice1='20' choice2='21' choice3='22' choice4='23'/>
                <Question question='หาผลรวมของ Σ i=1 ถึง n=2 (i³)' answer={1} choice1='9' choice2='8' choice3='6' choice4='10'/>
            </ul>
            <ul className='mx-2 my-10'>
                <h3 className='font-bold text-lg my-20'>Question! : คุณสมบัติ 1-2</h3>
                <Question question='จงหา Σ i=1 ถึง n=3 (4i + 2i)' answer={2} choice1='28' choice2='30' choice3='32' choice4='34'/>
                <Question question='จงหา Σ i=1 ถึง n=5 (3i - i)' answer={2} choice1='25' choice2='30' choice3='35' choice4='40'/>
                <Question question='จงหา Σ i=1 ถึง n=5 (3 × i)' answer={4} choice1='40' choice2='42' choice3='48' choice4='45'/>
                <Question question='จงหา Σ i=1 ถึง n=2 (7i - 4i)' answer={2} choice1='8' choice2='9' choice3='10' choice4='11'/>
                <Question question='จงหา Σ i=1 ถึง n=3 (5 × i²)' answer={3} choice1='60' choice2='65' choice3='70' choice4='75'/>
                <Question question='จงหา Σ i=1 ถึง n=4 (5i + 3i)' answer={2} choice1='64' choice2='72' choice3='80' choice4='88'/>
                <Question question='จงหา Σ i=1 ถึง n=4 (2 × i³)' answer={1} choice1='200' choice2='190' choice3='180' choice4='210'/>
                <Question question='จงหา Σ i=1 ถึง n=2 (6 × i)' answer={3} choice1='15' choice2='16' choice3='18' choice4='20'/>
            </ul>
            <ul className='mx-2 my-10'>
                <h3 className='font-bold text-lg my-20'>Question! : Bonus ⭐️ ⭐️ ⭐️ ⭐️ ⭐️</h3>
                    <QuestionInput question='จงหา Σ i=1 ถึง n=4 [(2i³) + (3i²)]' answer='290'/>
                    <QuestionInput question='จงหา Σ i=1 ถึง n=5 [(i²) × (2i + 1)]' answer='505'/>
                    <QuestionInput question='จงหา Σ i=1 ถึง n=3 [(3i³) - (4i²) + (2i)]' answer='64'/>
            </ul>
        </div>
    </div>
  </div>
</div>
  )
}
