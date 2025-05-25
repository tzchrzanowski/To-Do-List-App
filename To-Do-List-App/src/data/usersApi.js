import axios from 'axios';

const usersUrl = "https://dummyjson.com/users";

export const getUsers = async () => {
    const users = await axios.get(usersUrl);
    return users.data.users;
} 