import { useContext } from "react";
import { Examcontext } from "../context/Examcontext";

export const useInfoContext = () =>{
    const context = useContext(Examcontext)
    if(!context){
        throw Error('useinfocontext must be used inside on infocontextprovider ')
    }
    return context
}