import {useState,createContext} from 'react'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Userform from './components/Userform'
import Filterdetails from './components/Filterdetails'
import Courseform from './components/Courseform'
import Welcome from './Pages/Welcome'
import Coursefilter from './components/Coursefilter'

export const Agecontext = createContext();
export const Coursecontext = createContext();
const App = () => {


const[data,setdata] = useState({
  name: '',
  sex:'',
  age: '',
  education: '',
 
})

const [data1, setdata1] = useState({
  stuname: '',
  stuage:'',
  stusex:'',
  stream_of_study:''

})

  return (
     <div className="app">
      <Agecontext.Provider value={{data,setdata}}> 
        <Coursecontext.Provider value={{data1,setdata1}} >    
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Welcome/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/login' element={<Login />}/>
              <Route path='/home' element={<Home />}/>
              <Route path='/form' element={<Userform/>}/>
              <Route path='/filter' element={<Filterdetails/>}/>
              <Route path='/form2' element={<Courseform/>}/>
              <Route path='/filter2' element={<Coursefilter/>}/>
            </Routes>
          </BrowserRouter>
        </Coursecontext.Provider> 
      </Agecontext.Provider>
     </div>
    
  )
}


export default App
