import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

const Hero = () => {
  return (
    <div className='hero'>
    <div className='left-h'>
    <Header/>

{/* Hero ad */}
    <div className='hero-ad'>
         <div></div>
         <span> The best fitness club in town</span>
    </div>

{/* Hero text */}
    <div className='hero-text'>
         <div>
         <span className='stroke-text'>Shape </span>
         <span>Your</span>
         </div>
         <div>
         <span>Ideal Body</span>    
         </div>
         <div>
         <span>In here we will help you to shape and build your ideal body and live up your to life to the fullest </span>    
         </div>
    </div>

{/* Hero Figures */}
    <div className='hero-figures'>
         <div>
         <span>+140</span>
         <span>expert coaches</span>
         </div>
         <div>
         <span>+978</span>
         <span>members joined</span>
         </div>
         <div>
         <span>+56</span>
         <span>fitness Program</span>
         </div>
    </div>

{/* Hero buttons */}
<div className='hero-button'>
         <button className='btn'>Get started</button>
         <button className='btn'>Learn More</button>
</div>
    </div>
    <div className='right-h'>
        <button className='btn'> Join Now</button>

        <div className='heart-rate'>
         <img src={Heart} alt=''/>
         <span>Heart Rate</span>
         <span>116 bps</span>
        </div> 

        {/* Hero images */}
        <img src={hero_image} alt='' className='hero-image'/>
        <img src={hero_image_back} alt='' className='hero-image-back'/>

        {/* Calories */}
        <div className='calories'>
        <img src={Calories} alt='' className=''/>
        <div>
         <span>Calories Burned</span>
        <span> 230 kcal</span>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Hero