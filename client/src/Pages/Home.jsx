import {useMemo,useState} from 'react'
import video from '../Images/BgVideo.mp4'
import {useNavigate} from 'react-router-dom'


const Home = () => {

  const navigate =useNavigate()
  const redirect1 = () =>navigate('/form')
  const redirect2 = () =>navigate('/form2')



  return(
    <div className="h-screen overflow-hidden">  
      <video src={video} autoPlay loop muted className=' relative object-cover w-full h-full '  />
      
      <div className="marquee top-2 bg-opacity-20 bg-black text-2xl font-semibold space-x-2 text-[#f2ccfcf1] py-2 w-full mb-4">
          <span className=" text-lg font-bold">Discover Your Path to Success with Personalized Career Guidance at CareerCompass - Your Ultimate Destination for Informed Career Decisions and Future Planning!</span>
        </div>
      <button onClick={redirect1} className=" light2 top-[80%] gap-4 left-[66%] block absolute text-white  rounded-lg text-2xl font-medium px-10 py-2.5 text-center   ">
        Exams
      </button>  
      <button onClick={redirect2} className=" light2 mr-4 gap-4 top-[80%] left-[24%] block absolute  text-white rounded-lg text-2xl font-medium px-8 py-2.5 text-center ">
        Courses
      </button>
    </div>
  )
  
}


export default Home;
