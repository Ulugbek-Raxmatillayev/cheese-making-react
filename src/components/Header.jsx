import React from 'react'
import Logo from '../assets/images/Logo.svg'
import deliver from '../assets/images/delivery-06 1.svg'
import card from "../assets/images/credit-card-repeat 1.svg";
import user from "../assets/images/user-protection-shield-square 1.svg";
import telegram from "../assets/images/Telegram.svg";
import watsup from "../assets/images/WhatsUp.svg";
import messenger from "../assets/images/Messenger.svg";
import call from "../assets/images/phones-03 1.svg"
import cart from "../assets/images/cart.svg"
import { Link } from 'react-router-dom';

const Header = ({ length, price}) => {
    return (
        <div>


            <nav className="my-[30px]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">

                    <ul className='flex flex-wrap gap-[25px] items-center justify-between'>
                        <Link to={'/'}>

                            <li>
                                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <img src={Logo} className="w-full h-full" alt="Flowbite Logo" />
                                </a>
                            </li>
                        </Link>
                        <Link to={"/shop/product-cardes"}>
                            <li className='flex  flex-wrap items-center gap-2'>
                                <img src={deliver} alt="deliver" />
                                <span className='text-gray-500'>Бесплатная <br /> доставка</span>
                            </li>
                        </Link>
                        <li className='flex  flex-wrap items-center gap-2'>
                            <img src={card} alt="deliver" />
                            <span className='text-gray-500'>Скидка при <br /> оплате на сайте</span>
                        </li>
                        <li className='flex  flex-wrap items-center gap-2'>
                            <img src={user} alt="deliver" />
                            <span className='text-gray-500'>Скидка при <br /> оплате на сайте</span>
                        </li>
                        <li className='flex items-center'>
                            <img src={telegram} alt="" />
                        </li>
                        <li className='flex items-center'>
                            <img src={watsup} alt="" />
                        </li>
                        <li className='flex items-center'>
                            <img src={messenger} alt="" />
                        </li>
                        <li className='flex flex-col'>
                            <button><h1 className='text-lg'>+8 916 460-19-60</h1></button>
                            <button className='flex items-center gap-2 px-1 py-2 border rounded-lg border-orange-400 text-orange-400'>
                                <img src={call} alt="" />
                                <span>Заказать звонок</span>
                            </button>
                        </li>
                        <li className='flex  flex-wrap items-center gap-2'>
                            <span className='text-gray-500'>Ваша корзина <br />
                                <span className=' text-orange-400'>{0} руб.</span></span>
                        </li>
                        <Link to={"/shop/cart"}>
                            <li className='cursor-pointer'>
                                <img className='relative' src={cart} alt="" />
                                <div className='border w-7 border-orange-400 rounded-2xl bg-orange-400 top-[4rem] right-11 absolute flex justify-center align-middle'><span>{length}</span></div>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>

            <div className='flex my-[20px] justify-between container mx-auto'>
                <div className='flex gap-[20px] text-[14px]'>
                    <a href="">Рецепты</a>
                    <a href="">Доставка и оплата</a>
                    <a href="">Калькулятор Сыродела</a>
                    <a href="">Отзывы</a>
                    <a href="">Вопросы и ответы</a>
                    <a href="">Контакты</a>
                </div>
                <div className='flex'>
                    <img src="/src/assets/svg/search-loupe.svg" alt="" />
                    <input for="default-search" type="text" placeholder="Введите название товара или артикул" />
                </div>
            </div>

        </div>
    )
}

export default Header
