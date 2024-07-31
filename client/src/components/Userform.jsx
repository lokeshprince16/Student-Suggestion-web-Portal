import React,{ useState,useContext } from 'react'
import photo1 from '../Images/ssc logo img.png'
import photo2 from '../Images/TNPSC.png'
import photo3 from '../Images/SSC.png'
import photo4 from '../Images/rrb.png'
import photo5 from '../Images/ibps.jpeg'
import bgimage from '../Images/6057485.jpg'
import{ExternalLink} from 'react-external-link'
import { Agecontext } from '../App'
import { useNavigate } from 'react-router-dom'



const Userform = () => {
   const{setdata} = useContext(Agecontext)
   const[name,setName] = useState('')
   const [sex, setSex] = useState('')
   const [age, setAge] = useState('');
   const [education, setEducation] = useState('');
  
   console.log(name,sex,age,education)
   const navigate = useNavigate()

   
   
   
   
   const handleSubmit = async(e) => {
      e.preventDefault()
      await setdata({ name,sex,age,education });
      setName('');
      setSex('');
      setAge('');
      setEducation('');

      navigate('/filter')
   
    }
  
   

   const style = {backgroundImage:`url("${bgimage}")`,
            // height: "100vh",
            // marginTop: "-70px",
            // fontSize: "50px",
             backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
           
         }

    const images = [
        {id:1,img:photo1,title:"SSC",link:'https://ssc.nic.in/'},
        {id:2,img:photo2,title:"TNPSC",link:'https://www.tnpsc.gov.in/'},
        {id:3,img:photo3,title:"UPSC",link:'https://upsc.gov.in/'},
        {id:4,img:photo4,title:"RRB",link:'https://indianrailways.gov.in/'},
        {id:5,img:photo5,title:"IBPS",link:'https://www.ibps.in/'}
      
    ]

  return (
    <div style={style} className=' overflow-x-hidden'>

   {/* <!-- component --> */}
    <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />

    {/* <!-- ====== Contact Section Start --> */}
    <section className=" lg:py-[120px]  ">
       <div className="container">
          <div className="flex flex-wrap lg:justify-between ">
             <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
                <div className="max-w-[570px] mb-12 lg:mb-0">,
                    <span className="container content-start justify-items-start">
                        <div className="grid grid-cols-2 grid-rows-2 gap-10">
                                {images.map((images) => (
                                    <div key={images.id}> 
                                        <div className='rounded -mt-5 overflow-hidden  shadow-xl tranform hover:scale-110 duration-500 ease-in-out'>
                                        <ExternalLink href={images.link} >
                                          <img className='h-56 mb-7 w-52 shadow-emerald-400 rounded-lg bg-white border-white object-cover  ' src={images.img} />
                                          
                                        
                                        <span className='text-emerald-500 bg-pink-500 rounded-lg w-full px-4 font-bold '>{images.title}</span>
                                       
                                        </ExternalLink>
                                        </div>
                                    
                           </div>         
                            ))}
                        </div>
                     </span>
                </div>
             </div>
             <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                <div className="bg-transparent  relative rounded-lg p-8 sm:p-12 shadow-lg">
                   <form onSubmit={handleSubmit} className='form  '>
                      <div className="mb-6">
                        <label className='text-emerald-500 text-2xl'>Name</label>
                         <input
                            type="text"
                            placeholder="Your Name..."
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            bg-transparent
                            text-green-500 text-base
                            border border-emerald-500 
                            outline-none
                            focus-visible:shadow-none
                            focus:bg-opacity-90
                            "
                            />
                      </div>
                      <div className="mb-6">
                      <label  className='text-emerald-500 text-2xl'>Gender</label>
                         <select
                            type="string"
                            placeholder="Enter Your Sex"
                            value={sex}
                            onChange={(e)=>setSex(e.target.value)}
                            
                            className="
                            w-full
                            rounded
                            py-3
                            bg-transparent
                            px-[14px]
                            text-green-500 text-base
                            border border-emerald-500
                            outline-none
                            focus-visible:shadow-none
                            focus:border-emerald-500
                            "
                            >
                           <option value=" ">Select</option>
                           <option value="Male">Male</option>
                           <option value="Female">Female</option>

                            </select>
                      </div>
                      <div className="mb-6">
                      <label className='text-emerald-500  text-2xl'>Age</label>
                         <select
                            type="number"
                            placeholder="How old are U"
                            id='age'
                            value={age}
                            onChange={(e)=>setAge(e.target.value)}
                            className="
                            w-full
                            rounded
                            py-3
                            bg-transparent
                            px-[14px]
                            text-green-500 text-base
                            border border-emerald-500
                            outline-none
                            focus-visible:shadow-none
                            focus:border-emerald-500
                            "
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
                      <label className='text-emerald-500 text-2xl'>Educational Qualification</label>
                         <select
                            rows="6"
                            placeholder="Highest Education qualification ..."
                            value={education}
                            onChange={(e)=>setEducation(e.target.value)}
                            id='education'
                            
                            className="
                            w-full
                            rounded
                            
                            py-3
                            px-[14px]
                            bg-transparent
                            text-green-500 
                            border border-emerald-500
                            resize-none
                            outline-none
                            focus-visible:shadow-none
                            focus:border-emerald-500
                            "
                            >
                              <option value=" ">Select</option>
                              <option value="SSLC">SSLC</option>
                              <option value="UG degree in any recognized University">B.A</option>
                              <option value="UG degree in any recognized University, forest, science">B.Sc</option>
                              <option value="UG degree in any recognized University,commerce">B.COM</option>
                              <option value="UG degree in any recognized University">BCA</option>
                              <option value="UG degree in  Engineering">B.E</option>
                              <option value="UG degree in any recognized University">B.TECH</option>
                              <option value="PG">PG</option>
                            </select>
                      </div>
                      <div>
                         <button
                            type="submit"
                            className="
                            w-full
                            text-green-100
                            bg-emerald-500
                            rounded
                            border 
                            border-emerald-500

                            p-3
                            transition
                            hover:bg-opacity-75
                            "
                            >
                           Search  Opportunities🧐
                         </button>
                      </div>
                   </form>
                   <div>
                      <span className="absolute -top-10 -right-9 z-[-1]">
                         <svg
                            width="100"
                            height="100"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                               d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                               fill="#3056D3"
                               />
                         </svg>
                      </span>
                   </div>
                </div>
             </div>
          </div>
       </div>

    </section>
   
   </div>
  )
}

export default Userform;