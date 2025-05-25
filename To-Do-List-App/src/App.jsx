// import { useState } from 'react'
import ToDoContainer from './components/SelectUserList/ToDoContainer';
import './App.css'

function App() {

  return (
    <>
      <div>
        <p className='p-6 mb-20 rounded-xl shadow-lg text-4xl font-extrabold hover:shadow-2xl'>
          {"To-Do-List App"}
        </p>
        <div>
          <ToDoContainer />
        </div>
      </div>
    </>
  )
}

export default App
