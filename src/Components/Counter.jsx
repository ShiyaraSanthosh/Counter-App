import React, { useState } from 'react';

const Counter = () => {
    const [counterValue , setCounterValue] = useState(0);
   
    return (
        <div className='mx-[30%] my-[15%] h-[200px] text-center w-[500px] p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-white dark: shadow-lg'>
        <div>
            <h1 className='text-[40px]'>{counterValue}</h1>
        <div>
            <button type='button'className='text-white bg-green-700  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ' onClick={() =>setCounterValue(prev => prev+1)}>Increase</button>
            <button type='button' className='text-white bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ' onClick={() =>setCounterValue(0)}>Reset</button>
            <button type='button'className='text-white bg-green-700  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 'onClick={() =>setCounterValue(prev => prev-1)}>Decrease</button>
            
        </div>
        </div>
        </div>
    );
}

export default Counter;
