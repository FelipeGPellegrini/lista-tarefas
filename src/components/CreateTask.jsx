import React, { useState } from 'react';

const CreateTask = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className='flex m-4'>
        <p
          className='cursor-pointer px-3 py-1 bg-amber-300 text-center m-auto rounded-full text-stone-50 drop-shadow-lg text-3xl'
          onClick={toggleVisibility}
        >
          +
        </p>
      </div>

      {isVisible && (
        <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40' />
      )}

      {isVisible && (
        <div className='flex flex-col items-center bg-amber-300 p-6 w-min absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
          <label className='p-4'>
            Tarefa: <input className='p-2' type="text" />
          </label>
          <label className='p-4'>
            Descrição: <input className='p-2' type="text" />
          </label>
          <button className='bg-amber-200 p-2' onClick={toggleVisibility}>Criar</button>
        </div>
      )}
    </div>
  );
};

export default CreateTask;
