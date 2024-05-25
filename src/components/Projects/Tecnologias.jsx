import React from 'react'

const Tecnologias = ({nome, size}) => {
  return (
    <div className= {`rounded-lg ${size === 'small' ? ' text-small ' : ' text-base '} bg-cyan-400 ml-1 mt-2 p-1`}>
        <p className='text-cyan-50'>{nome}</p>
    </div>
  )
}

export default Tecnologias
