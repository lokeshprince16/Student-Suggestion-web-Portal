import { createContext, useReducer } from "react";

export const Examcontext = createContext()

export const examReducer = (state,action) => {
    switch(action.type){
        case "set_info":
            return{
                info:action.payload
            }
        
    }
}

export const ExamcontextProvider = ({children}) => {
    const[state,dispatch] = useReducer(examReducer,{
        info:null
    })
    return(
        <Examcontext.Provider value={{...state,dispatch}}>
            {children}
        </Examcontext.Provider>
    )
}