const taskReducer = (state, action) => {
    switch(action.type){
        case "ADD_TASK":
            const newState = [...state]
            newState.push({title : action.title, id: Math.random(), content : action.content});
            
            return newState;
            
        case "DELETE_TASK":
            const newDeleteState = state.filter((item) => { return item.id !== action.id});
            return newDeleteState;
        default: 
            return state;
    }
}

export default taskReducer;