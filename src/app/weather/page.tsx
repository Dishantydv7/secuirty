"use client"
import React from 'react'
import Weather from '@/components/Weather'

import { Watermark } from "@hirohe/react-watermark";

function page() {
  return (
    <Watermark text="22b3984" textSize={20} gutter={23} opacity={0.3}>
    <div style={{ position: 'absolute', backgroundColor: 'black', minHeight: '100vh' , left: 0 , right : 0  }}>
      <Weather/>
    </div>
    </Watermark>
  )
}

export default page