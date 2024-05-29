import React from 'react'
import Weather from '@/components/Weather'

function page() {
  return (
    <div style={{ position: 'absolute', backgroundColor: 'black', minHeight: '100vh' , left: 0 , right : 0  }}>
      <Weather/>
    </div>
  )
}

export default page