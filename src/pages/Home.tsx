import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Home: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div className="bg-gray-100">
      <Slider {...settings} className="h-screen">
        <div className="h-screen bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'}}>
          <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-5xl font-bold text-white">Capturing Life's Moments</h1>
          </div>
        </div>
        <div className="h-screen bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1551737823-dfc8495904b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'}}>
          <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-5xl font-bold text-white">Timeless Portraits</h1>
          </div>
        </div>
        <div className="h-screen bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1551737823-dfc8495904b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'}}>
          <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-5xl font-bold text-white">Unforgettable Memories</h1>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Home