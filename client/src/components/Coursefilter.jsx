// Coursefilter.js
import React, { useContext, useState } from 'react';
import { Coursecontext } from '../App';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ReactPaginate from 'react-paginate';
import { coursedata } from '../../data/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgvideo from '../Images/Contact.png'



const Coursefilter = () => {
  const style = { color: "blue" };
  const styles = { color: "white" };

  const { data1 } = useContext(Coursecontext);
  const username = data1.stuname;
  const filtered = coursedata.filter(i => i.eligible.includes(data1.stream_of_study));

  const [expandedrows, setExpandedrows] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);


  
  const itemsPerPage = 10;
  

  const handleTextToSpeech = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const handleRowClick = (rowId) => {
    if (expandedrows === rowId) {
      setExpandedrows(null);
    } else {
      setExpandedrows(rowId);
    }
  };

  const renderRowDetails = (b) => {
    const details = Object.keys(b).map(key => `${key}: ${b[key]}`).join(', ');
    return (
      <TableRow>
        <TableCell colSpan={Object.keys(b).length + 1}>
          <div className="p-2 grid grid-cols-2 gap-4 divide-y-2 overflow-hidden">
            {Object.keys(b).map((key) => (
              <React.Fragment key={key} >

                  <span className="font-[poppins] text-gray-800 w-8  bg-transparent text-md uppercase">
                    {key}:
                  </span>
                  <span className='rounded break-words text-wrap text-cyan-800 overflow-x-auto text-md w-full bg-tansparent font-[playfair Display]'>
                    {b[key]}
                  </span>
               
             
              </React.Fragment>
            ))}
             <div className="col-span-2 flex justify-center p-2">
              <button
                onClick={() => handleTextToSpeech(details)}
                variant="contained"
                color="primary"
                className="px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-600 transition-colors duration-300"
              >
               Info Audio
              </button>
            </div>
          </div>
        </TableCell>
      </TableRow>
    );
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = filtered.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filtered.length / itemsPerPage);

  return (
    <div>
      <div className='h-screen overflow-hidden relative'>
            <img src={bgvideo} loop autoPlay muted />
        </div>
    <div className='coursefilter overflow-hidden absolute top-0 w-full ' >
      
      <p className='text-white text-xl '>Welcome 🤩 <span className='font-xl font-serif text-cyan-400'>{username} 🤩 !!</span></p>
      <TableContainer component={Paper}  >
        <Table className="min-w-full divide-y divide-gray-200">
          <TableHead>
            <TableRow className='text-white'>
              {/* <TableCell style={styles} className="px-6 py-3  bg-stone-800 text-left text-xs font-medium uppercase tracking-wider">ID</TableCell> */}
              <TableCell style={styles} className="px-6 py-3  bg-stone-800 text-left ml-8 text-xs font-semibold uppercase tracking-wider">Course</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageData.map((b, index) => (
              <React.Fragment key={b.id}>
                <TableRow className={`cursor-pointer ${index % 2 === 0 ? 'bg-gray-300' : 'bg-gray-200'}  mb-1 text-violet-500  visited:bg-pink-200 hover:bg-violet-200`} onClick={() => handleRowClick(b.id)}>
                  <TableCell style={style} className="px-6 py-3 align items-center  whitespace-nowrap">{b.coursename}</TableCell>
                </TableRow>
                {expandedrows === b.id && renderRowDetails(b)}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          
        />
      </TableContainer>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400..900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Sevillana&display=swap" rel="stylesheet"></link>
    </div>
    </div>
  );
};

export default Coursefilter;
