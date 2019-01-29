import {bake_cookie, read_cookie} from 'sfcookies';


const taskReducer = (state, action) => {
    state = read_cookie('newState');
    switch(action.type){
        case "ADD_TASK":
            const newState = [...state]
            newState.push({title : action.title, id: Math.random(), content : action.content});
            bake_cookie('newState', newState)
            return newState;
            
        case "DELETE_TASK":
            const newDeleteState = state.filter((item) => { return item.id !== action.id});
            bake_cookie('newState', newDeleteState)
            return newDeleteState;
        default: 
            return state;
    }
}

export default taskReducer;