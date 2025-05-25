function ToDoList({toDosList, onDelete}) {
    if (!toDosList.length) {
        return <p>{"Nothing to show..."}</p>
    }

    return (
        <div className="mt-6 bg-gray-200">
            <ul className="space-y-2 border-gray-200">
                {toDosList.map(item => {
                    return (
                        <li
                            key={item.id}
                            className="w-full flex flex-row justify-between items-center p-3 border-gray-100 rounded"
                        >
                            <div>{item.todo}</div>
                            <button
                                onClick={()=> onDelete(item.id)}
                                className="ml-4 bg-red-200 text-white rounded hover:bg-red-500"
                            >
                                {"X"}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ToDoList;