import React from 'react'
import './rental.css'
import { FaApple, FaAndroid } from 'react-icons/fa';



const Rentals = () => {
  return (
    <div className='rental'>
        <h1 id='rent'>Rental Options</h1>
        <h3 id='rent2'>Explore the Roars of Rhyno</h3>
         <p id='rent3'>Experience Rhyno at your own pace with our flexible rental options! Choose from weekly or monthly rentals at our authorized dealerships and immerse yourself in the Rhyno experience before committing</p>
         <h3 id='rent2'>Campus Commuting</h3>
         <p id='rent3'>We're redefining campus commuting with a rental fleet tailored for college students. Rent Rhyno vehicles on an hourly basis through our user-friendly mobile app and enjoy effortless daily commutes. Embrace the freedom to ride and explore sustainable, convenient transportation</p>
         <h3 id='rent2'>Download Our Rental App:<FaApple size={26} /> Apple |<FaAndroid size={26} /> Android </h3>
          
    </div>
  )
}

export default Rentals
