import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home'
import Cart from './routes/cart/Cart'

function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
            </Routes>
        </div>
    )
}

export default Router
