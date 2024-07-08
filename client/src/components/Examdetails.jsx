import Table from "./Table";
import { examdata } from "../../data/db"
import { useParams } from "react-router-dom";

const  Examdetails = () => {
  const{id} = useParams();
  const data = examdata.find(data => data.id === parseInt(id))
  const filterdata =data.map((d)=>(<div key={d.id}>{d.ename}</div>))
                    

    
    return(
      <div className="examdetails">

      {filterdata}
      </div>
    )
}

export default Examdetails
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 