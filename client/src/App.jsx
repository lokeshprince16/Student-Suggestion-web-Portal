import {useState,createContext} from 'react'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Userform from './components/Userform'
import Filterdetails from './components/Filterdetails'
import Table from './components/Table'
import Examdetails from './components/Examdetails'
import Courseform from './components/Courseform'
import Welcome from './Pages/Welcome'

export const Agecontext = createContext();
const App = () => {


const[data,setdata] = useState({
  name: '',
  sex:'',
  age: '',
  education: ''
})

  return (
     <div className="app">
      <Agecontext.Provider value={{data,setdata}}>       
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Welcome/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/form' element={<Userform/>}/>
            <Route path='/filter' element={<Filterdetails/>}/>
            <Route path='/table' element={<Table/>}/>
            <Route path='/table/:id' element={<Examdetails/>}/>
            <Route path='/form2' element={<Courseform/>}/>
          </Routes>
        </BrowserRouter>
      </Agecontext.Provider>
     </div>
    
  )
}


export default App
