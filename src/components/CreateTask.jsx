import React, { useState } from 'react';


const CreateTask = ({ addTask }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const createTask = () => {
    addTask(title, description);
    setTitle(""); 
    setDescription(""); 
    setIsVisible(false); 
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
            <p onClick={toggleVisibility} className='absolute top-0 right-0 p-4 cursor-pointer'>X</p>
          <label className='p-4'>
            Tarefa: <input className='p-2' type="text" onChange={(e) => setTitle(e.target.value)}/>
          </label>
          <label className='p-4'>
            Descrição: <input className='p-2' type="text" onChange={(e) => setDescription(e.target.value)}/>
          </label>
          <button className='bg-amber-200 p-2' onClick={createTask}>Criar</button>
        </div>
      )}
    </div>
  );
};

export default CreateTask;
