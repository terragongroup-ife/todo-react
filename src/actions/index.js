export const createAddTask = (title, content) => {
    return {
        type : "ADD_TASK", 
        title : title, 
        content : content,
    }
}

export const createDeleteTask = (id) => {
    return {
        type : "DELETE_TASK", 
        id : id
    }
}
