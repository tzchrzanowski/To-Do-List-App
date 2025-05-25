// import { useState } from 'react'
import SelectUserList from './components/SelectUserList/SelectUserList';
import './App.css'

function App() {

  return (
    <>
      <div>
        <p className='p-6 mb-20 rounded-xl shadow-lg text-4xl font-extrabold hover:shadow-2xl'>
          {"To-Do-List App"}
        </p>
        <div>
          <SelectUserList />
        </div>
      </div>
    </>
  )
}

export default App
