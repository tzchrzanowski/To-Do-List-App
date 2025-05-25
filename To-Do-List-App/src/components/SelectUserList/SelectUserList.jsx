import { useState} from 'react';
import { users } from '../../data/usersList';

function SelectUserList() {
    const [selectedUserId, setSelectedUserId] = useState('');

    const changeUser = (e) => {
        setSelectedUserId(e.target.value);
    } 

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Select User from list:</h2>
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
                        <option key={user.userId} value={user.userId}>
                            User id: {user.userId}
                        </option>
                    );
                })}
            </select>

            {selectedUserId && (
                <div className="mt-4 font-medium">
                    <p>{`Selected user: ${selectedUserId}`}</p>
                </div>
            )}
        </div>
    );
}

export default SelectUserList;