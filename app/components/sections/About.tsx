import React from 'react'
import { NewGlobe } from './NewGlobe'
import { BackgroundGradientAnimation } from '../ui/background-gradient-animation'
import { Meteors } from '../ui/meteors'
import { LinkPreview } from '../ui/link-preview'

const About = () => {
  return (
 
      <div className='w-screen h-screen bg-white bg-dot-black/[0.2] flex flex-col items-center justify-around px-20'>
      
        <div className='flex flex-col items-center justify-center'>
      
          <h1 className="md:text-2xl text-xl lg:text-7xl font-mono text-center text-black relative z-20">
            Hi, I'm Mehul.
          </h1>
        </div>
        
        <div className='text-left text-slate-500 relative z-20 mt-8 w-1/3'>
        {/* <Meteors number={10}/> */}
          <p className="md:text-sm text-base lg:text-sm font-mono">
            When I'm not composing clean, efficient code, you'll find me lost in the world of music. I'm a big fan of <LinkPreview url="https://ui.aceternity.com" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">The 1975</LinkPreview>, a band that combines lyrical depth with mesmerizing melodies.I also play the drums in a band called <LinkPreview url="https://ui.aceternity.com" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">eatbreakfast</LinkPreview>, where we create music that resonates.
            Books are another passion of mine, with <LinkPreview url="https://ui.aceternity.com" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">"Norwegian Wood"</LinkPreview> and <LinkPreview url="https://ui.aceternity.com" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">"Before the Coffee Gets Cold"</LinkPreview> being close to my heart. Lately, I've been exploring the intricate narratives of <LinkPreview url="https://ui.aceternity.com" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">Kafka</LinkPreview> and other thought-provoking authors.
            Coding has been my steadfast companion, a journey I've embraced wholeheartedly. While backend development is my forte, I also enjoy dabbling in frontend design. And somehow, <LinkPreview url="https://ui.aceternity.com" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">Redis</LinkPreview> has become an indispensable tool in my toolkit.
           On a personal note, I have an insatiable need to keep my surroundings organized, and a particular fondness for the elegance of black and white.  <br/> <br/> That's enough from me, find what other people have had to say about me below!
          </p>
        </div>
        {/* <div className='w-1/2'> */}
          <NewGlobe/>
        {/* </div> */}
      </div>
   
  )
}

export default About
