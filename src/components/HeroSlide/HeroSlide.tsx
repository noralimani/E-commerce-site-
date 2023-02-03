import React, { useState, useEffect } from 'react'
import { Box, Image } from '@chakra-ui/react'

const slides = [
  {
    id: 1,
    title: 'Slide 1',
    imageUrl: '/banner.jpg',
  },
  {
    id: 2,
    title: 'Slide 2',
    imageUrl: '/banner2.jpg',
  },
  {
    id: 3,
    title: 'Slide 3',
    imageUrl:
      'http://cdn.shopify.com/s/files/1/0214/7974/collections/Front_Page_Banner_Sneaker_POlitic_Reebok-4.jpg?v=1657832920',
  },
]

const HeroSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length)
    }, 5000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <Box position="relative">
      {slides.map((slide, index) => {
        return (
          <Image
            key={slide.id}
            src={slide.imageUrl}
            alt={slide.title}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        )
      })}
    </Box>
  )
}

export default HeroSlide
