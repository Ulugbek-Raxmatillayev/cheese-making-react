import React from 'react'
import cheese from '../assets/images/cheese 1.svg'
import dropright from '../assets/images/dropright.svg'
import bowl from '../assets/images/bowl.svg'

const Filters = () => {
  return (
    <div className=''>
                    <div className="filter relative">
                <ol className='w-[280px] h-[377px] mb-10 bg-white' >
                    <li className='name w-full relative rounded-t-md bg-[#FBE8BB] h-[48px] px-2 flex flex-wrap align-middle gap-[10px] py-2.5'>
                        <img src={cheese} alt="" />
                        <span>Ингредиенты</span>
                    </li>
                    <li className='name w-full relative  h-[48px] px-2 flex flex-wrap align-middle gap-[10px] border py-2.5'>
                        <span>Закваски для сыра</span>
                        <img className='absolute right-3' src={dropright} alt="" />
                    </li>
                    <li className='name w-full relative  h-[48px] px-2 flex flex-wrap align-middle gap-[10px] border py-2.5'>
                        <span>Ферменты для сыра</span>
                        <img className='absolute right-3' src={dropright} alt="" />
                    </li>
                    <li className='name w-full relative  h-[48px] px-2 flex flex-wrap align-middle gap-[10px] border py-2.5'>
                        <span>Хлористый кальций</span>
                        <img className='absolute right-3' src={dropright} alt="" />
                    </li>
                    <li className='name w-full relative  h-[48px] px-2 flex flex-wrap align-middle gap-[10px] border py-2.5'>
                        <span>Плесень для сыра</span>
                        <img className='absolute right-3' src={dropright} alt="" />
                    </li>
                    <li className='name w-full relative  h-[48px] px-2 flex flex-wrap align-middle gap-[10px] border py-2.5'>
                        <span>Кисломолочные закваски</span>
                        <img className='absolute right-3' src={dropright} alt="" />
                    </li>
                    <li className='name w-full relative  h-[48px] px-2 flex flex-wrap align-middle gap-[10px] border py-2.5'>
                        <span>Красители для сыра</span>
                        <img className='absolute right-3' src={dropright} alt="" />
                    </li>
                    <li className='name w-full relative  h-[48px] px-2 flex flex-wrap align-middle gap-[10px] border py-2.5'>
                        <span>Специи для сыра</span>
                        <img className='absolute right-3' src={dropright} alt="" />
                    </li>
                </ol>
                <ol className='w-[280px] h-[377px] bg-white'>
                    <li className='relative name w-full rounded-t-md bg-[#FBE8BB] h-[48px] px-2 flex flex-wrap align-middle gap-[10px] py-2.5'>
                        <img src={bowl} alt="" />
                        <span>Оборудование</span>
                    </li>
                    <li className='relative name w-full  h-[48px] px-2 flex flex-wrap align-middle gap-[10px] border py-2.5'>
                        <span>Формы для сыра</span>
                        <img className='absolute right-2' src={dropright} alt="" />
                    </li>
                    <li className='relative name w-full  h-[48px] px-2 flex flex-wrap align-middle gap-[10px] border py-2.5'>
                        <span>Латексное покрытие</span>
                        <img className='absolute right-2' src={dropright} alt="" />
                    </li>
                    <li className='relative name w-full  h-[48px] px-2 flex flex-wrap align-middle gap-[10px] border py-2.5'>
                        <span>Воск для сыра</span>
                        <img className='absolute right-2' src={dropright} alt="" />
                    </li>
                    <li className='relative name w-full  h-[48px] px-2 flex flex-wrap align-middle gap-[10px] border py-2.5'>
                        <span>Термоусадочные пакеты</span>
                        <img className='absolute right-2' src={dropright} alt="" />
                    </li>
                    <li className='relative name w-full  h-[48px] px-2 flex flex-wrap align-middle gap-[10px] border py-2.5'>
                        <span>Дренажные коврики</span>
                        <img className='absolute right-2' src={dropright} alt="" />
                    </li>
                    <li className='relative name w-full  px-2 flex flex-wrap align-middle gap-[10px] border py-2.5'>
                        <span>Дренажные мешки и <br />салфетки
                            для прессования</span>
                        <img className='absolute right-2' src={dropright} alt="" />
                    </li>
                    <li className='relative name w-full bg-white h-[48px] px-2 flex flex-wrap align-middle gap-[10px] border py-2.5'>
                        <span>Дренажные контейнеры</span>
                        <img className='absolute right-2' src={dropright} alt="" />
                    </li>
                </ol>
            </div>
    </div>
  )
}

export default Filters