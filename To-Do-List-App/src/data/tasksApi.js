import axios from 'axios';

const getUserToDosUrl = "https://dummyjson.com/todos/user/";
const addNewToDoItemUrl = "https://dummyjson.com/todos/add";

export const getUserToDos = async (id) => {
    const userTodosUrl = getUserToDosUrl + id;
    const toDos = await axios.get(userTodosUrl);
    return toDos.data.todos;
};

export const addNewToDoTask = async (id, caption) => {
    const newToDo = await axios.post(addNewToDoItemUrl, {
        todo: caption,
        completed: false,
        userId: id
    });

    return newToDo.data;
}