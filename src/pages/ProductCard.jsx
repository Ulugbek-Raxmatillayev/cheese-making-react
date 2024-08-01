import React from 'react'
import Filters from '../components/Filters'

const ProductCard = ({API, card,addToCard,increment,decrement,count}) => {
    API = [API[4],API[1],API[2], API[3]]
    return (
        <div className='container mx-auto my-[50px]'>

            <div className='flex flex-wrap  gap-[40px]'>
                <Filters />
                <div className="title">
                    <h2 className='text-2xl font-semibold mb-2'>Мезофильная закваска Hansen Flora Danica (50U)</h2>
                    <div className="ico flex flex-wrap items-center gap-5">
                        <img src="/src/assets/images/Group 308.png" alt="" />
                        <a href="" className='flex flex-wrap gap-1 items-center'>
                            <img src="/src/assets/images/chat-messages 1.svg" alt="" />
                            <span>{0} Отзыва</span>
                        </a>
                    </div>
                    <div className='my-[30px] flex flex-wrap gap-[50px]'>
                        <div className='w-[360px] h-[410px] bg-white border'>
                            {card.map((item) => {
                                return (
                                    <div className='container mx-auto p-2'>
                                        <div>
                                            <img className='w-full h-[100%]' src={item.image} />
                                        </div>
                                        <div className='flex gap-2 justify-center items-center'>
                                            <img className='w-[100px] h-[100px] border border-blue-300' src={item.image} alt="" />
                                            <img className='w-[100px] h-[100px] border border-blue-300' src={item.image} alt="" />
                                            <img className='w-[100px] h-[100px] border border-blue-300' src={item.image} alt="" />
                                        </div>
                                    </div>

                                )
                            }
                            )}
                        </div>
                        <div className='product-card-desc'>
                            <img src="/src/assets/images/Group 306.png" alt="" />
                            <span className='text-2xl font-bold text-orange-400'>{card.map((item) => (count == 0 ? item.price : item.price*count))} руб.</span>
                            <span className='text-xl'><sup><del>1200 руб.</del></sup></span>
                            <p><strong className='text-orange-400'>+95</strong> бонусных рублей</p>
                            <p><b>Артикул</b>:  23006</p>
                            <p><b>Производитель: </b>  Lactofarm ECO, Италия</p>
                            <div className='flex gap-3'>
                                <div className="count">
                                    <button className='w-[46.6px] h-full hover:border bg-white' onClick={() => decrement()}>-</button>
                                    <button className='w-[46.6px] h-full  bg-white'>{count}</button>
                                    <button className='w-[46.6px] h-full hover:border bg-white' onClick={() => increment()}>+</button>
                                </div>
                                <button className='p-2 px-[7.2rem] text-lg border border-orange-400 bg-orange-400 rounded-md'>В корзину</button>
                            </div>
                            <div className='w-[470px] h-[112px] border border-[#F2EFE2] bg-[#FCF6E3] my-[10px] p-3'>
                                <label htmlFor="select" className=' font-bold'>Выберите регион для рассчета стоимости доставки:</label>
                                <select name="" id="select" className='w-[430px] h-[44px] text-[#808080] p-1 outline-none border rounded-md border-[#F2EFE2]'>
                                    <option value="" selected>Выберите регион</option>
                                    <option value="">Region 1</option>
                                    <option value="">Region 2</option>
                                    <option value="">Region 3</option>
                                    <option value="">Region 4</option>
                                </select>
                            </div>
                            <div>
                                <img src="/src/assets/images/Features.svg" alt="" />
                            </div>



                        </div>
                    </div>
                            <div>
                                <div className="title">
                                    <h2 className='font-bold text-2xl my-[20px]'>Аналогичные товары</h2>
                                </div>
                                <div className='flex flex-wrap gap-4'>
                                    {API.map((item) => {
                                        return (
                                            <div class="w-[228px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-300 text-black">
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
                                                        <button onClick={() => addToCard(item)} class="text-white bg-orange-200 hover:bg-orange-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Добавить</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    )}
                                </div>
                            </div>
                </div>
            </div>

        </div>
    )
}

export default ProductCard