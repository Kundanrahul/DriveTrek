"use client"
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll=()=>{}
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find,Book or Rent a car with Drive Trek

            </h1>
            <p className='hero__subtitle'>Book cars from comfort of your home with our seamless service</p>
            <CustomButton
               title="Explore Cars"
               containerStyles='bg-primary-blue text-white bg-gradient rounded-full mt-10'
                handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container'>
          <div className='hero__image'>
            <Image src="/hero1.png" alt='hero'
            fill priority className='object-contain'/>
              </div>
            <div className='hero__image-overlay'/>
        </div>
    </div>
  )
}

export default Hero