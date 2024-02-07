import { createContext, useReducer } from "react";
import AppReducer from "../Components/AppReducer";



const initialState = {
        transactions: [
          
        ]
        

}


export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

  function handleDelete(id){
    dispatch({
      type:'HANDLE_DELETE',
      payload: id
    });
  }
  function addTransaction(transaction){
    dispatch({
      type:'ADD_TRANSACTION',
      payload: transaction
    })
  }
  function lastTransaction(transaction){
    dispatch({
      type:'LAST_TRANSACTION',
      payload: transaction
    })
  }
  


    return (
      <GlobalContext.Provider value={
        {
          transactions:state.transactions,    
          handleDelete,
          addTransaction,
          lastTransaction,
         
        }
      } >
          {children}
      </GlobalContext.Provider>
            );



}
