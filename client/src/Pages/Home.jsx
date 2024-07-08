import {useMemo} from 'react'
import video from '../Images/BgVideo.mp4'
import logo from '../Images/l.png'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate =useNavigate()
  const redirect1 = () =>navigate('/form')
  const redirect2 = () =>navigate('/form2')
  const style ={}

  return(
    <div className="h-screen overflow-hidden">    
     <video src={video} autoPlay loop muted className=' relative object-cover w-full h-full '  />
     <button onClick={redirect1} className=" top-[80%] gap-4 left-[64%] block absolute   bg-gradient-to-r from-purple-400 via-sky-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-emerald-200 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center animate-shimmer bg-[length:200%_200%] ">
       Exams
     </button>  
     <button onClick={redirect2} className=" mr-4 gap-4 top-[80%] left-[28%] block absolute  bg-gradient-to-r from-purple-400 via-sky-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-emerald-200 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center animate-shimmer bg-[length:200%_200%] ">
       Courses
     </button>  
    </div>
  )
  
}


export default Home;
