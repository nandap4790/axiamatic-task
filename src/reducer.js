function listReducer(state = {}, action){
    switch (action.type){
       case "ADD_TO_LIST":
          return [...state, action.payload]
        case "removeFromList":
          return [...state, action.payload]
       default:
          return state
    }
 }
 export default listReducer;