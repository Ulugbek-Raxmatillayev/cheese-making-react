import React from 'react'
import geo from '../assets/images/geo.svg'
import user from '../assets/images/users.svg'
import clock from '../assets/images/clock.svg'


const Aside = () => {
    return (
        <div className=' w-full h-full'>
            <aside className="container mx-auto my-2">
                <div className='flex justify-between flex-wrap items-center'>
                    <div className="btns flex flex-wrap justify-between items-center">
                        <button className='flex flex-wrap justify-between items-center gap-1'>
                            <img src={geo} alt="react" />
                            <span>Ваш город:</span>
                            <select className='outline-none' name="" id="">
                                <option value="ru">Москва</option>
                                <option value="en">Сант Петербург</option>
                                <option value="uz">Абаза</option>
                                <option value="uz">Абакан</option>
                                <option value="uz">Абдулино</option>
                                <option value="uz">Абинск</option>
                            </select>
                        </button>
                        <button className='flex flex-wrap justify-between items-center gap-1'>
                            <img src={clock} alt="react" />
                            <span>Пн-Пт 9:00 - 19:00</span>
                        </button>
                    </div>
                    <ul className="aside_list flex flex-wrap gap-[30px] items-center">
                        <li className='cursor-pointer'>
                            <span className='aside_items'>О компании</span>
                        </li>
                        <li className='cursor-pointer'>
                            <span className='aside_items'>Преимущества</span>
                        </li>
                        <li className='cursor-pointer'>
                            <span className='aside_items'>Акционные товары</span>
                        </li>
                        <li className='flex cursor-pointer items-center justify-between gap-2'>
                            <img src={user} alt="" />
                            <span className='aside_items'>Войти в аккаунт</span>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Aside
