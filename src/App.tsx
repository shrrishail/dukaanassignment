import { Children, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <div className='app h-[100%] flex justify-start overflow-auto'>
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default App
