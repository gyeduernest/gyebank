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
    
    default:
    return state;
  }
}