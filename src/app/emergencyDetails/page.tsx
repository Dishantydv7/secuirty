"use client"
import React from 'react'
import { Button } from '@/components//ui/moving-border'
import Link from 'next/link'
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Watermark } from '@hirohe/react-watermark';



export default function EmergencyDetails() {

  const featuredNumbers = [
    {
      title: 'MAIN GATE CONTROL ROOM',
      description:
        'INTERCOM - 1112',
      slug: 'understanding-music-theory',
      description2 : "",
      isFeatured: true,
    },
    {
      title: 'QRT',
      description:
        'QRT - 9833338989',
      slug: 'the-art-of-songwriting',
      description2 : "",
      isFeatured: true,
    },
    {
      title: 'FEMALE QRT',
      description:
        'FEMALE QRT - 9167398598',
      slug: 'mastering-your-instrument',
      description2 : "",
      isFeatured: true,
    },
    {
      title: 'VIGILANCE',
      description:
        'VIGILANCE - 9833337979',
      slug: 'music-production-essentials',
      description2 : "",
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'DUTY OFFICER',
      description:
        'MOBILE - 9167398596',
      slug: 'live-performance-techniques',
      description2 : "INTERCOM - 1112",
      isFeatured: true,
    },
    {
      title: 'DUTY INSPECTOR',
      description:
        'MOBILE - 9167398597',
      slug: 'digital-music-marketing',
      description2 : "INTERCOM - 1100",
      isFeatured: true,
    },
  ];
  return (
   <Watermark text="22b3984" textSize={20} gutter={23}>
    <div className='p-12 bg-gray-900'>
       
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
          <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>IIT BOMBAY</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Emergency Contact</p>
        </div>
        <div className='m-10'>
          <HoverEffect items={featuredNumbers.map(webinar => ({
            title: webinar.title,
            description: webinar.description,
            description2: webinar.description2,
            link: '/'
          }))} />
        </div>
        <div className='m-10 text-center'>
          <Link href={'/dashboard'}>
            <Button>
              Back to Mainpage
            </Button>
          </Link>
        </div>
      </div>
      
    </div>
    </Watermark>
  )
}

