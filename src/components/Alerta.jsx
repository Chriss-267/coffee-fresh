import React from 'react'

export default function Alerta({children}) {
  return (
    <div className='text-center my-2 bg-red-200 border-l-4 border-red-600  font-bold p-3'>{children}</div>
  )
}
