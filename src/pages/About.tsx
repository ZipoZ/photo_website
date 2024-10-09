import React from 'react'

const About: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Jane Doe" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              Hi, I'm Jane Doe, a passionate portrait photographer with over 10 years of experience. I specialize in capturing the essence and personality of my subjects, creating timeless images that tell their unique stories.
            </p>
            <p className="text-lg mb-4">
              My journey in photography began when I received my first camera as a gift. Since then, I've honed my skills through countless shoots, workshops, and a deep love for the art of portraiture.
            </p>
            <p className="text-lg">
              When I'm not behind the camera, you can find me exploring nature trails, experimenting with new recipes in the kitchen, or spending quality time with my family and our golden retriever, Max.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About