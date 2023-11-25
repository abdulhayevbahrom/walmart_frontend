import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home'

function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
            </Routes>
        </div>
    )
}

export default Router
