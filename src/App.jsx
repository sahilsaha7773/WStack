import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import OngoingEvents from './pages/OngoingEvents'
import OngoingEvent from './pages/OngoingEvent'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='main'>
        <Routes>
          <Route path="/" element={<OngoingEvents />} />
          <Route path="/event" element={<OngoingEvent />} />
        </Routes>
      </div>
      <BottomNav />
    </BrowserRouter>
  )
}

export default App
