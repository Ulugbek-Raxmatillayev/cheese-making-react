import React, { useEffect, useState } from 'react'
import cheese from '../assets/images/cheese 1.svg'
import dropright from '../assets/images/dropright.svg'
import bowl from '../assets/images/bowl.svg'

const Products = ({API,addToCard}) => {


    console.log(API);
  return (
    <div className='container mx-auto my-[50px] flex flex-wrap gap-[30px]'>
      <div className="filter relative">
        <ol className='w-[280px] h-[377px] mb-10'>
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
        <ol className='w-[280px] h-[377px] '>
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
          <li className='relative name w-full  h-[48px] px-2 flex flex-wrap align-middle gap-[10px] border py-2.5'>
            <span>Дренажные контейнеры</span>
            <img className='absolute right-2' src={dropright} alt="" />
          </li>
        </ol>
      </div>

      <div>
        <div className="filters flex gap-[40px]">
          <a href="" className='hover:border hover:border-l-0 hover:border-r-0 hover:border-t-0 active-filter hover:border-orange-400 border-b-1 hover:text-orange-400'>Популярные товары</a>
          <a href="" className='hover:border hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:border-orange-400 border-b-1 hover:text-orange-400'>Акции  </a>
        </div>
        <div className="cardes-box my-[40px]">
          <div className="title my-5">
            <h1 className='text-2xl font-bold'>Ингредиенты</h1>
          </div>
          <div className="cardes grid grid-cols-4 gap-[10px]">

            {
              API.map((item) => {
                return (
                  <div class="w-[228px]  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-300 text-black">
                    <a href="#">
                      <img class="p-8 rounded-t-lg" src={item.image} alt="product image" />
                    </a>
                    <div class="px-5 pb-5">
                      <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 ">{item.title}</h5>
                      </a>
                      <div class="flex items-center mt-2.5 mb-5">
                        <div class="flex items-center space-x-1 rtl:space-x-reverse">
                          <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 ">{item.price}</span>
                        <button onClick={() => addToCard(item)} class="text-white bg-orange-400 hover:bg-orange-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Добавить</button>
                      </div>
                    </div>
                  </div>
                )

              })
            }
          </div>
  
          <div className="title my-5">
            <h1 className='text-2xl font-bold'>Оборудование</h1>
          </div>
          <div className="cardes grid grid-cols-4 gap-[10px]">

            {
              API.map((item) => {
                return (
                  <div class="w-[228px]  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-300 text-black">
                    <a href="#">
                      <img class="p-8 rounded-t-lg" src={item.image} alt="product image" />
                    </a>
                    <div class="px-5 pb-5">
                      <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 ">{item.title}</h5>
                      </a>
                      <div class="flex items-center mt-2.5 mb-5">
                        <div class="flex items-center space-x-1 rtl:space-x-reverse">
                          <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 ">{item.price}</span>
                        <button onClick={() => addToCard(item)} class="text-white bg-orange-400 hover:bg-orange-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Добавить</button>
                      </div>
                    </div>
                  </div>
                )

              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
