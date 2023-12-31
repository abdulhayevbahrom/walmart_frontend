import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home'
import SinglePage from './components/singlePage/SinglePage'
import Header from './components/header/Header'
import Cart from './routes/cart/Cart'

function Router() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/single-page/:id' element={<SinglePage/>}/>
                <Route path='/cart' element={<Cart />}></Route>
            </Routes>
        </div>
    )
}

export default Router
