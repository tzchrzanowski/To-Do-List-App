import {useState} from 'react';

function ToDoList({toDosList, onDelete, onUpdate}) {
    const [editItemId, setEditItemId] = useState(null);
    const [editCaption, setEditCaption] = useState('');

    const startEditing = (item) =>  {
        setEditItemId(item.id);
        setEditCaption(item.todo);
    }

    const saveEdit = () => {
        onUpdate(editItemId, editCaption);
        clearEditing();
    }

    const clearEditing = () => {
        setEditItemId(null);
        setEditCaption("");
    }

    if (!toDosList.length) {
        return <p>{"Nothing to show..."}</p>
    }

    return (
        <div className="mt-6 bg-gray-200">
            <ul className="space-y-2 border-gray-200">
                {toDosList.map(item => {
                    return (<div key={item.id}>
                        {editItemId == item.id ? (<>
                            <li
                                className="w-full flex flex-col items-center p-3 border-gray-100 rounded"
                            >
                                <input 
                                    type="text"
                                    value={editCaption}
                                    onChange={(e)=> setEditCaption(e.target.value)}
                                    className="w-full border rounder flex-grow"
                                />
                                <div className="mt-2 w-full flex flex-row justify-around items-center">
                                    <button onClick={saveEdit} className="mr-2 min-w-[20%] rounded text-sm">{"Save"}</button>
                                    <button onClick={clearEditing} className="mr-2 min-w-[20%] rounded text-sm">{"Cancel"}</button>
                                </div>
                            </li>
                        </>) : (<>
                            <li
                                className="w-full flex flex-row justify-between items-center p-3 border-gray-100 rounded"
                            >
                                <div>{item.todo}</div>
                                <div>
                                    <button
                                        onClick={()=> startEditing(item)}
                                        className="ml-4 bg-blue-200 text-white rounded hover:bg-blue-500"
                                    >
                                        {"Edit"}
                                    </button>
                                    <button
                                        onClick={()=> onDelete(item.id)}
                                        className="ml-4 bg-red-200 text-white rounded hover:bg-red-500"
                                    >
                                        {"X"}
                                    </button>
                                </div>
                            </li>
                        </>)}
                    </div>)
                })}
            </ul>
        </div>
    );
}

export default ToDoList;