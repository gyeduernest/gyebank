import { createContext, useReducer } from "react";
import AppReducer from "../Components/AppReducer";



const initialState = {
        transactions: [
          
        ],

        goals:[

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
  function addGoal(goals) {
    dispatch({
      type: 'ADD_GOAL',
      payload: goals
    });
  }
  function deleteGoal(id){
    dispatch({
      type:'DELETE_GOAL',
      payload: id
    });
  }
  



    return (
      <GlobalContext.Provider value={
        {
          transactions:state.transactions,    
          handleDelete,
          addTransaction,
          lastTransaction,
          goals: state.goals,
          addGoal,
          deleteGoal
         
        }
        }   >
          {children}
      </GlobalContext.Provider>
            );



}
