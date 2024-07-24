import {useMemo,useState} from 'react'
import video from '../Images/BgVideo.mp4'
import {fetchLlamaResponse} from '../AI/Llama'
import {useNavigate} from 'react-router-dom'

const Home = () => {

  const navigate =useNavigate()
  const redirect1 = () =>navigate('/form')
  const redirect2 = () =>navigate('/form2')
  const [llamaResponse, setLlamaResponse] = useState('');


  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleFetchResponse = async () => {
    try {
      const response = await fetchLlamaResponse(prompt);
      setLlamaResponse(response.text); // Adjust based on the API response structure
    } catch (error) {
      console.error('Failed to fetch LLaMA response:', error);
    }
  };
  

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
     <label>Input:</label> 
     <input
        type="text"
        value={prompt}
        onChange={handlePromptChange}
        placeholder="Enter prompt for LLaMA"
        className="p-2 text-green-50 top-8 absolute border rounded mb-2"
      />
      <button
        onClick={handleFetchResponse}
        className="px-4 py-2 bg-blue-500 top-20 absolute text-white rounded hover:bg-blue-700 transition-colors duration-300"
      >
        Fetch Response
      </button>
      {llamaResponse && (
        <div className="mt-4 p-2 border text-white absolute rounded bg-gray-100">
          <h3 className="font-bold">LLaMA Response:</h3>
          <p>{llamaResponse}</p>
        </div>
      )}
    </div>
  )
  
}


export default Home;
