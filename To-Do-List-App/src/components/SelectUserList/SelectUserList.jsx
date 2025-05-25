import { useEffect, useState} from 'react';
import { getUsers } from '../../data/usersApi';
import { getUserToDos } from '../../data/tasksApi';

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



            {toDosList.length > 0 && (
                <div className="mt-6 bg-gray-200">
                    <ul className="space-y-2 border-gray-200">
                        {toDosList.map(item => {
                            return (
                                <li
                                    key={item.id}
                                    className="p-3 border-gray-100 rounded"
                                >
                                    {item.todo}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SelectUserList;