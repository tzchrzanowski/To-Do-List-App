import axios from 'axios';

const url = "https://dummyjson.com/todos/user/";

export const getUserToDos = async (id) => {
    const userTodosUrl = url + id;
    const toDos = await axios.get(userTodosUrl);
    return toDos.data.todos;
};