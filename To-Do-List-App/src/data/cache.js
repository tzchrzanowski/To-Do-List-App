const cachedToDoList = new Map();

export const getCachedTodoList = (userId) => {
    return cachedToDoList.get(userId);
}

export const setCachedTodos = (userId, toDos) => {
    cachedToDoList.set(userId, toDos)
}