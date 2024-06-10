"use client"
import React from 'react'
import NewsHeader from '@/components/NewsHeader'
import { MovingBorderDemo } from '@/components/ButtonWithLink'
import { Card } from '@/components/card'
import Link from 'next/link'
import Testimonials from '@/components/News'
import { Watermark } from '@hirohe/react-watermark'


function page() {

  return (
    <>
    <Watermark text="22b3984" textSize={20} gutter={23}>
    <Testimonials/>
      {/* <NewsHeader children="news will be displayed here" title="Welcome to the Secuirty" /> */}
      
      {/* <div className='flex justify-center gap-5 py-5'>
        <MovingBorderDemo content="tab1"  />
        <MovingBorderDemo content="tab2" />
      </div> */}

      {/* <div className="bg-[#013a6b] p-10 w-full h-screen">
                <div className="max-w-4xl mx-auto grid grid-cols-2 gap-6 w-full">
                    <Button
                        className="bg-[#f97316] text-lg text-white font-bold py-12 px-12 rounded-lg"
                        onClick={() => {
                            router.push("/mainpage")
                        }}
                        >
                        Traffic Police
                    </Button>
                    <Button
                        className="bg-[#f97316] text-lg text-white font-bold py-12 px-12 rounded-lg"
                        onClick={() => {
                            router.push("/mainpage")
                        }}
                        >
                        E-Challan:Maharashtra Police
                    </Button>
                    <Button
                        className="bg-[#f97316] text-lg text-white font-bold py-10 px-12 rounded-lg"
                        onClick={() => {
                            router.push("/mainpage")
                        }}
                        >
                        Grievance Redrassal: Traffic Police
                    </Button>
                    <Button
                        className="bg-[#f97316] text-lg text-white font-bold py-10 px-12 rounded-lg"
                        onClick={() => {
                            router.push("/mainpage")
                        }}
                        >
                        Department of Motor Police (RTO)
                    </Button>
                    <Button
                        className="bg-[#f97316] text-lg text-white font-bold py-10 px-12 rounded-lg"
                        onClick={() => {
                            router.push("/mainpage")
                        }}
                        >
                        Acts and Fines
                    </Button>
                    <Button
                        className="bg-[#f97316] text-lg text-white font-bold py-10 px-12 rounded-lg"
                        onClick={() => {
                            router.push("/mainpage")
                        }}
                        >
                        E-Challan:Maharashtra Police
                    </Button>
                    <Button
                        className="bg-[#f97316] text-lg text-white font-bold py-10 px-12 rounded-lg"
                        onClick={() => {
                            router.push("/mainpage")
                        }}
                        >
                        Grievance Redrassal: Traffic Police
                    </Button>
                    <Button
                        className="bg-[#f97316] text-lg text-white font-bold py-10 px-12 rounded-lg"
                        onClick={() => {
                            router.push("/mainpage")
                        }}
                        >
                        Department of Motor Police (RTO)
                    </Button>
                </div>
            </div> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
        <Link
        // should route to private url's
          href='/forms'>
          <Card
          pinbartitle="IMPORTANT FORMS"
            title="title"
            content="IMPORTANT FORMS"
            linkofimage="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432"
            style={{ maxWidth: '25%' }}
            description = "IMPORTANT FORMS" />
            {/* adding syntax for static images
             */}
        </Link>
        <Link
          href='/guidelines'>
          <Card description = "Rules And Regulations" pinbartitle="REGULATIONS" title="title" linkofimage="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432" content="Regulations" style={{ maxWidth: '25%' }} />
        </Link>
        <Link
          href='/emergencyDetails'>
          <Card description= "Emergency Details" pinbartitle="EMERGENCY CONTACTS" title="title" linkofimage="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432" content="Emergenct Contacts" style={{ maxWidth: '25%' }} />
        </Link>
        <Link
          href='/weather'>
          <Card description = "Weather" pinbartitle = "WEATHER" title="title" linkofimage="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432" content="Weather" style={{ maxWidth: '25%' }} />
        </Link>
        <Link
          href='/photos'>
          <Card description = "Photos" pinbartitle ="PHOTOS" title="title" linkofimage="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432" content="Photos" style={{ maxWidth: '25%' }} />
        </Link>
        <Link
          href='/reports'>
          <Card description="Reports" pinbartitle = "REPORTS" title="title" linkofimage="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432" content="Reports" style={{ maxWidth: '25%' }} />
        </Link>
        <Link
          href='/404'>
          <Card description = "Fines" pinbartitle="ACTS AND FINES" title="title" linkofimage="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432" content="Acts and Fines" style={{ maxWidth: '25%' }} />
        </Link>
        <Link
          href='/404'>
          <Card description= "Emergency Details" pinbartitle="EMERGENCY CONTACTS" title="title3" linkofimage="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432" content="Emergenct Contacts" style={{ maxWidth: '25%' }} />
        </Link>
        <Link
          href='/404'>
          <Card description = "Weather" pinbartitle = "WEATHER" title="title" linkofimage="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432" content="Weather" style={{ maxWidth: '25%' }} />
        </Link>
      </div>
</Watermark>

    </>
  )
}

export default page