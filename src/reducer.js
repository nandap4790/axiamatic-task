function listReducer(state = [...Array(4)], action){
    switch (action.type){
      case "ADD_ITEM":
        return [...state, action.payload]
      case "REMOVE_ITEM":
        return action.payload
       default:
          return state
    }
 }
 export default listReducer;