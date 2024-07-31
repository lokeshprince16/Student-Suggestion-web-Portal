import Bgvideo from '../Images/Bgvideo CC.mp4'
import {useState,useContext, useEffect} from 'react'
import { Coursecontext } from '../App'
import { useNavigate } from 'react-router-dom';

export default function Courseform() {
      const colors = ['text-white', 'text-pink-400', 'text-cyan-400', 'text-violet-400'];
      const bgcolors =['bg-green-400', 'bg-pink-400','bg-cyan-400','bg-violet-500']
      const [colorIndex, setColorIndex] = useState(0);
      const [bgcol, setbgcol] = useState(0)
    
      useEffect(() => {
        const interval = setInterval(() => {
          setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 4400); 
    
        return () => clearInterval(interval); 
      }, []);
      useEffect(() => {
         const interval2 = setInterval(() => {
           setbgcol((prevIndex) => (prevIndex + 1) % bgcolors.length);
         }, 4400); 
     
         return () => clearInterval(interval2); 
       }, []);
    
   const {setdata1}=useContext(Coursecontext)
   const [stuname,setStuname] = useState('')
   const [stusex, setStusex] = useState('')
   const [stuage, setStuage] = useState('');
   const [stream_of_study, setStream_of_study] = useState('');

   console.log(stuname,stusex,stuage,stream_of_study)

   const navigate = useNavigate()


   const handleSubmit = async(e) => {
    e.preventDefault()
    await setdata1({ stuname,stusex,stuage,stream_of_study });
    setStuname('');
    setStusex('');
    setStuage('');
    setStream_of_study('');
    navigate('/filter2')
   }

  return (
    <div>
            <div className='h-screen overflow-hidden relative'>
            <video src={Bgvideo} loop autoPlay muted />
            </div>
                 
               <form  onSubmit={handleSubmit} className='bg-gray-400 w-[30%] bg-opacity-40 px-4 py-4 rounded-lg form absolute top-[10%] left-[36%]  '> 
                  <div className="mb-6">
                    <label className={`text-emerald-500 font-serif text-2xl font-semibold  ${colors[colorIndex]}`}>Name</label>
                     <input
                        type="text"
                        placeholder="Your Name..."
                        value={stuname}
                        onChange={(e)=>setStuname(e.target.value)}
                        className={` w-full
                          rounded
                          py-3
                          bg-gray-500
                          bg-opacity-40
                          px-[14px]
                          ${colors[colorIndex]} text-base
                          border border-emerald-500
                          outline-none
                          focus-visible:shadow-none
                          focus:border-emerald-500`}
                        />
                  </div>
                  <div className="mb-6">
                    <label  className={`text-emerald-500 font-semibold font-serif text-2xl  ${colors[colorIndex]}`}>Gender</label>
                     <select
                        type="string"
                        placeholder="Enter Your Sex"
                        value={stusex}
                        onChange={(e)=>setStusex(e.target.value)}
                        
                        className={` w-full
                          rounded
                          py-3
                          bg-gray-500
                          bg-opacity-40
                          px-[14px]
                          ${colors[colorIndex]} text-base
                          border border-emerald-500
                          outline-none
                          focus-visible:shadow-none
                          focus:border-emerald-500`}
                        >
                       <option value=" ">Select</option>
                       <option value="Male">Male</option>
                       <option value="Female">Female</option>

                        </select>
                  </div>
                  <div className="mb-6">
                    <label className={`text-emerald-500 font-semibold font-serif text-2xl  ${colors[colorIndex]}`}>Age</label>
                     <select
                        type="number"
                        placeholder="How old are U"
                        id='age'
                        value={stuage}
                        onChange={(e)=>setStuage(e.target.value)}
                        className=
                       {` w-full
                        rounded
                        py-3
                        bg-gray-500
                        bg-opacity-40
                        px-[14px]
                        ${colors[colorIndex]} text-base
                        border border-emerald-500
                        outline-none
                        focus-visible:shadow-none
                        focus:border-emerald-500`}
                        
                        >
                         <option value=' '>Select</option>
                         <option value='18' >18</option>
                         <option value='19' >19</option>
                         <option value='20' >20</option>
                         <option value='21' >21</option>
                         <option value='22' >22</option>
                        </select>
                  </div>
                  <div className="mb-6">
                    <label className={`text-emerald-500 font-serif font-semibold text-2xl  ${colors[colorIndex]}`}>Educational Qualification</label>
                     <select
                        rows="6"
                        placeholder="Highest Education qualification ..."
                        value={stream_of_study}
                        onChange={(e)=>setStream_of_study(e.target.value)}
                        id='education'
                        className={` w-full
                          rounded
                          py-3
                          bg-gray-500
                          bg-opacity-40
                          px-[14px]
                          ${colors[colorIndex]} text-base
                          border border-emerald-500
                          outline-none
                          focus-visible:shadow-none
                          focus:border-emerald-500`}
                        >
                          <option value=" ">Select</option>
                          <option value="SSLC">SSLC</option>
                          <option value="Physics,Chemistry,Mathematics,Biology">Phy,Chem,Mat,Bio</option>
                          <option value="Physics,Chemistry,Mathematics,ComputerScience">Phy,Chem,Mat,C.Sc</option>
                          <option value="Accountancy,Commerce,Economics,ComputerScience">Acc,Comm,Eco,C.Sc</option>
                          <option value="Accountancy,Commerce,Economics,BusinessMathematics">Acc,Comm,Eco,B.M</option>
                    
                        </select>
                  </div>
                  <div>
                     <button
                        type="submit"
                        className={`
                        w-full
                        text-green-100
                        bg-emerald-500
                        rounded
                        border 
                        border-emerald-500
                        ${bgcolors[bgcol]}
                        p-3
                        transition
                        hover:bg-opacity-75
                        `}
                        >
                       Search Courses 🧐
                     </button>
                  </div>
               </form>
            </div>
              
  

  )
}

