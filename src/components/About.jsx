import React from 'react'

const About = () => {
  return (
    <div className='container mx-auto my-[50px]'>
        <div className='container mx-auto my-[30px]'>
            <h2 className='text-2xl font-semibold'>Мы подобрали для вас</h2>
        </div>
      <div className='flex flex-wrap justify-between'>
         <div className="grid grid-cols-2 bg-[#D2D2D3] border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black uppercase">более 1000 <br />  лучших рецептов</h5>
                        <p className="font-normal text-black mb-20">Мы собрали для Вас большую<br />базу рецептов.</p>
                        <button className='border p-2 bg-orange-400 border-orange-400 text-white rounded-md'>Перейти</button>
                    </div>
                <img className="object-cover w-full h-full mr-2 md:rounded-none md:rounded-s-lg" src="src/assets/images/book.svg" alt="" />
        </div>
            
         <div href="#" className="grid grid-cols-2 bg-[#4E2D2D] border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#614141]">
              <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white uppercase">крутые Наборы <br />  для сыра</h5>
                    <p className="font-normal text-white mb-20">Готовые наборы сэкономят<br />время, мы всё сделали за Вас. </p>
                    <a className='border p-2 bg-orange-400 border-orange-400 text-white rounded-md'>Перейти</a>
              </div>
              <img className="object-cover w-full h-full mr-2 md:rounded-none md:rounded-s-lg" src="src/assets/images/bread.svg" alt="" />
       </div>
      </div>
    </div>
  )
}

export default About
