import React from 'react'
import Marquee from 'react-fast-marquee'

function NewsHeader({title ,children}:any) {
  if (!title) {
    title = " "
  }
  if (!children) {
    children = ' '
  }
  return (
    <header className="w-full bg-black text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">{title}</h2>
        <Marquee 
        gradient={false} 
        speed={100}
        pauseOnHover = {true}
        direction='right'>
          <p className="text-lg">
            {children}  
          </p>
        </Marquee>
      </div>
    </header>
  )
}

export default NewsHeader