import { useContext,useState } from 'react'
import { Agecontext } from '../App'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, SliderValueLabel } from '@mui/material';
import { examdata } from '../../data/db'
import React from 'react';
import { Link } from 'react-router-dom';

const Filterdetails = () => {
  const style ={
    color:"blue"
  }
  const styles ={
    color:"white"
  }

  


    const{data} = useContext(Agecontext)
    console.log(data)

    const username = data.name


    const handleTextToSpeech = (text) => {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    };
 

    const filtered =  examdata.filter(i => i.minage <= parseInt(data.age) && i.minedu.includes(data.education) );


    const [expandedRow, setExpandedRow] = useState(null);
    const excludedrow =['id'];
    const handleRowClick = (rowId) => {
      if (expandedRow === rowId) {
        setExpandedRow(null);
      } else {
        setExpandedRow(rowId);
      }
      
    };
    const renderRowDetails = (b) => {
      const details = Object.keys(b).map(key => `${key}: ${b[key]}`).join(', ');
      return (
      <div>
        <TableRow>
          <TableCell colSpan={Object.keys(b).length + 1}>
            <div className="p-2 grid grid-cols-2 gap-4  overflow-x-auto">
            {Object.keys(b).map((key) => (
              <React.Fragment key={key} >
                <span className="   font-[poppins] text-md uppercase  ] " >
                  {key}:
                </span> 
                <span className='rounded w-full text-pink-500 font-[playfai Display] ' >
                  {b[key]}
                </span>
                </React.Fragment>
            ))}
            <div>
              <Button
                onClick={() => handleTextToSpeech(details)}
                variant="contained"
                color="primary"
                className="px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-600 transition-colors duration-300"
              >
               Info Audio
              </Button>
            </div>
            </div>
          </TableCell>
        </TableRow>
        </div> 
      );
    };

    
   
  return ( 
  <div className="filter">
  
      <p> welcome 🤩 <span className='font-xl font-serif text-purple-500 '>{username} 🤩 !!</span></p>
    
    <TableContainer component={Paper}>
      <Table  className="min-w-full divide-y divide-gray-200">
        <TableHead >
          <TableRow className='text-white'>
            <TableCell style={styles} className="px-6 py-3 text-pink-500 bg-gray-500 text-left text-xs font-medium  uppercase tracking-wider">ID</TableCell>
            <TableCell style={styles} className="px-6 py-3 text-pink-500 bg-gray-500 text-left text-xs font-medium  uppercase tracking-wider">Name</TableCell>
            <TableCell style={styles} className="px-6 py-3 text-pink-500 bg-gray-500 text-left text-xs font-medium  uppercase tracking-wider">Minimum Age</TableCell>
            <TableCell style={styles} className="px-6 py-3 text-pink-500 bg-gray-500 text-left text-xs font-medium  uppercase tracking-wider">Visit Site ✈️</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {filtered.map((b,index) => (
            <React.Fragment key={b.id}  >
                <TableRow className={`cursor-pointer ${index % 2 === 0 ? 'bg-cyan-200' : 'bg-cyan-100'} mb-1 text-pink-500 hover:bg-pink-100`} onClick={() => handleRowClick(b.id)}>
              <TableCell  style={style} className="px-6 py-3 text-pink-500 whitespace-nowrap">{b.id}</TableCell>
              <TableCell  style={style} className="px-6 py-3 text-pink-500 whitespace-nowrap">{b.ename}</TableCell>
              <TableCell  style={style}className="px-6 py-3  text-pink-500 whitespace-nowrap">{b.minage}</TableCell>
              <TableCell  style={style} className="px-6 py-3 whitespace-nowrap">
                <Link to ={b.link} target="_blank" rel="noopener noreferrer" className="text-pink-500  hover:text-purple-600 ">Visit Link</Link>
              </TableCell>
            </TableRow>
            {expandedRow === b.id && renderRowDetails(b)}
         </React.Fragment>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>


    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sevillana&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sevillana&display=swap" rel="stylesheet"></link>
  </div>
   );
}
 
export default Filterdetails;