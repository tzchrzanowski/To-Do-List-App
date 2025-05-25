import { useEffect, useState} from 'react';
import { getUsers } from '../../data/usersApi';
import { getUserToDos, addNewToDoTask, deleteToDoTask, updateToDoTask } from '../../data/tasksApi';
import ToDoList from '../ToDoList/ToDoList';
import AddNewTask from '../AddNewTask/AddNewTask';

function SelectUserList() {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState('');
    const [toDosList, setToDosList] = useState([]);

    useEffect(()=> {
        (async ()=> {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (error) {
                console.error("Getting users error: ", error);
            };
        })();
    }, []);

    useEffect(()=> {
        if (!selectedUserId) return;

        (async ()=> {
            try {
                const toDosList = await getUserToDos(selectedUserId);
                setToDosList(toDosList);
            } catch (error) {
                console.error("Getting users error: ", error);
            };
        })();
    }, [selectedUserId]);

    const changeUser = (e) => {
        setSelectedUserId(e.target.value);
    };

    const addNewTask = async (caption) => {
        try {
            const newTask = await addNewToDoTask(Number(selectedUserId), caption);
            setToDosList(prev => [...prev, newTask]);
        } catch (error) {
            console.error("Failed to add task: ", error);
        }
        
    } 

    const deleteTask = async (taskId) => {
        try {
            await deleteToDoTask(taskId);
            setToDosList(prev => prev.filter(task => task.id !== taskId));
        } catch (error) {
            console.error("Failed to delete task: ", error);
        }
    };

    const updateTask = async (taskId, newCaption) => {
        try {
            const updatedTask = await updateToDoTask(taskId, newCaption);
            setToDosList(prev => prev.map(item => (item.id === taskId) ? {...item, todo: updatedTask.todo} : item));
        } catch (error) {
            console.error("Failed to update task: ", error);
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Select User from list:</h2>
            {selectedUserId && (
                <div className="mt-4 font-medium">
                    <p>{`Selected user ID number: ${selectedUserId}`}</p>
                </div>
            )}
            <select
                value={selectedUserId}
                onChange={changeUser}
                className={"p-3 w-full border-gray-300 shadow-sm"}
            >
                <option value="" disabled>
                    {"Select user"}
                </option>
                {users.map((user) => {
                    return (
                        <option key={user.id} value={user.id}>
                            {`User id: ${user.firstName} ${user.lastName}`}
                        </option>
                    );
                })}
            </select>
            {selectedUserId && (<>
                <ToDoList 
                    toDosList={toDosList}
                    onDelete={deleteTask}
                    onUpdate={updateTask}
                />
                <AddNewTask addTask={addNewTask}/>
            </>)}
        </div>
    );
}

export default SelectUserList;