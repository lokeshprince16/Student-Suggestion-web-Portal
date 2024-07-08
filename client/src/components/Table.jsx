import React from 'react'
import { useContext } from 'react'
import { Agecontext } from '../App'
import MUIDataTable from "mui-datatables";
import { examdata } from '../../data/db';
import { ThemeProvider, createTheme } from '@mui/material';
import { ExternalLink } from 'react-external-link';

const Table = () => {
    const{data} = useContext(Agecontext)
    console.log(data)
    const filtered = examdata.filter(i => i.minage === parseInt(data.age) );

    const columns = [
        {
         name: "id",
         label: "Id",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "ename",
         label: "Exam Name",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "minage",
         label: "Minimum Age",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "minedu",
         label: "Education",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
            name: "link",
            label: "link",
            options: {
              customBodyRender:(value)=><a href={value} className='bg-pink-500 px-3 py-1 rounded-md' >Details</a>,
             filter: true,
             sort: false,
            }
           },
        //    {
        //     name: "physique",
        //     label: "physique",
        //     options: {
        //      filter: true,
        //      sort: false,
        //     }
        //    },
        //    {
        //     name: "selectionprocess",
        //     label: "selectionprocess",
        //     options: {
        //      filter: true,
        //      sort: false,
        //     }
        //    },
        //    {
        //     name: "ExamFee",
        //     label: "ExamFee",
        //     options: {
        //      filter: true,
        //      sort: false,
        //     }
        //    },
        //    {
        //     name: "approxsalary",
        //     label: "approxsalary",
        //     options: {
        //      filter: true,
        //      sort: false,
        //     }
        //    },
          //  {
          //   name: "link",
            
          //   label: "link",
          //   options: {
          //    filter: true,
          //    sort: false,
          //   }
          //  },
       ];;
    
   
    // const data =[ examdata.map((d)=>(
    //    <div key={d.id}>
    //         id:{d.id},
    //         Exam_Name:{d.ename},
    //         Minimumage:{d.minage},
    //         MinimumEducation:{d.minedu}
    //     </div>
      
    // ))]
    // console.log(data)
    const getMuiTheme = () =>createTheme({
        components: {
          MUIDataTableBodyCell: {
            styleOverrides:{
              root: {
                  backgroundColor: "violet"
              }
              
            
            }
          }
        }
      })
    
    const options = {
      filterType: 'checkbox',
      selectableRows:false,
      elevation:0,
      rowsPerPage:5,
      rowsPerPageOptions:[5,10,20,30]
    };
  return (
    <div className=' min-h-screen grid place-items-center'>
        <div className=' w-[90%] max-w-4xl'>
            <ThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                className='bg-transparent'
                title={"Exams  List"}
                data={filtered}
                columns={columns}
                options={options}
                />
            </ThemeProvider>
        </div>
    </div>
  )
}

export default Table;