import React from 'react'
import video from '../Images/welcome.mp4'
import {useNavigate} from 'react-router-dom'

export default function Welcome() {
    const navigate = useNavigate()
    const click = () => navigate('/register')
  return (
    <div className='h-screen overflow-hidden'>
        <video src={video} autoPlay loop muted className=' relative object-cover w-full h-full'  />
        <button onClick={click} className='absolute top-[90%] left-[40%] text-white bg-gradient-to-r from-blue-500  via-green-600 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center  ' >Start your search</button>
        </div>
  )
}
