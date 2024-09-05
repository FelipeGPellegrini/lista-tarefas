import React from 'react'
import { FaTrash } from "react-icons/fa";

const Task = () => {
  return (
    <div className='p-2 bg-amber-300 w-80 m-auto drop-shadow-lg flex flex-col items-center rounded-lg mt-6'>
      <div className='m-2'>
        <h2 className='text-center text-3xl drop-shadow-lg'>Lavar o carro</h2>
      </div>
      <div className='m-4'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni laborum quaerat, saepe in distinctio tempora qui iure adipisci unde officia doloremque vel sint neque deserunt illum deleniti, consequuntur excepturi animi?</p>
      </div>
      <div className='cursor-pointer m-2'>
        <FaTrash size={20} />
      </div>
    </div>
  )
}

export default Task