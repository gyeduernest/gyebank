export default (state, action) => {
  switch(action.type){
    case'HANDLE_DELETE':
    return{
      ...state,
      transactions: state.transactions.filter(transactions => transactions.id !== action.payload)
    }
    case'ADD_TRANSACTION':
    return{
      ...state,
      transactions: [action.payload, ...state.transactions]
    }
    case'LAST_TRANSACTION':
    return{
      ...state,
      transactions: [action.payload.amount, ...state.transactions]      
    }
    case'ADD_GOAL':
    return{
      ...state,
      goals: [action.payload, ...state.goals]      
          }
    case'DELETE_GOAL':
    return{
      ...state,
      goals: state.goals.filter(goals => goals.id !== action.payload)
    }
    
    default:
    return state;
  }
}