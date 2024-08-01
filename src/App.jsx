import React, { useState } from 'react'
import Aside from './components/Aside'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Card from './pages/Card'
import NotFound from './pages/NotFound'
import ProductCard from './pages/ProductCard'

const App = () => {

  const API = [
    {
      "title": "Мезофильная закваска Danisco CHOOZIT MM...",
      "price": "1300",
      "oldPrice": "1800",
      "image": "https://raw.githubusercontent.com/DevResHub/CARD-PRODUCT-API/main/Rectangle%2065.png"
    },
    {
      "title": "Душистый перец горошком (100г)",
      "price": "200",
      "oldPrice": "320",
      "image": "https://raw.githubusercontent.com/DevResHub/CARD-PRODUCT-API/main/Rectangle%2065%20(3).png"
    },
    {
      "title": "Красный перец молотый (100г)",
      "price": "380",
      "oldPrice": "400",
      "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(2).png?raw=true"
    },
    {
      "title": "Мускатный орех молотый (100г)",
      "price": "420",
      "oldPrice": "560",
      "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(1).png?raw=true"
    },
    {
      "title": "Форма для твердого сыра 1 кг",
      "price": "1330",
      "oldPrice": "1800",
      "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(4).png?raw=true"
    },
    {
      "title": "Форма для твердого сыра 1 кг",
      "price": "200",
      "oldPrice": "320",
      "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(5).png?raw=true"
    },
    {
      "title": "Красный перец молотый (100г)",
      "price": "380",
      "oldPrice": "400",
      "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(6).png?raw=true"
    },
    {
      "title": "Мускатный орех молотый (100г)",
      "price": "420",
      "oldPrice": "560",
      "image": "https://github.com/DevResHub/CARD-PRODUCT-API/blob/main/Rectangle%2065%20(7).png?raw=true"
    }
  ]
    ;
  const [card, setCard] = useState([])
  function addToCard(item) {
    setCard([...card, item])
  }

  function deleteToCard(itemToRemove) {
    const index = card.findIndex(item => item === itemToRemove);
    if (index !== -1) {
      setCard([
        ...card.slice(0, index),
        ...card.slice(index + 1)
      ]);
    }
  }

  const [count,setCount] = useState(0)

  function increment(){
    setCount(count +1)
  }

  function decrement(){
    
    setCount(count > 0 ? count -1 : 0)
  }


  return (

    <div>
      <Aside  />
      <Header length={card.length}  API={API} />
      <Routes>
        <Route path='/' element={<Home API={API} addToCard={addToCard} deleteToCard={deleteToCard} />} />
        <Route path='/shop/cart' element={<Card card={card} deleteToCard={deleteToCard}/>}/>
        <Route path='/***' element={<NotFound/>}/>
        <Route path='/shop/product-cardes' element={<ProductCard card={card} count={count} API ={API} addToCard={addToCard} increment={increment} decrement={decrement}/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

