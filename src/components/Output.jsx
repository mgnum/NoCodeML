import React from 'react'

const Output = ({setKey,changeOutputFileName}) => {
  return (
    <div className='flex flex-col w-96 border-2 background-color1 gap-1' key={setKey}>
      <div className='background-color-blue p-2'>
        OUTPUT
        </div>
        <div className='flex flex-col w-80 place-self-center p-2 rounded-lg gap-1 interior'>
          <p className='self-start'>File name</p>
          <input type='text' className='rounded-lg' onChange={e=>changeOutputFileName(setKey,e.target.value)}></input>
        </div>
    </div>
  )
}

export default Output