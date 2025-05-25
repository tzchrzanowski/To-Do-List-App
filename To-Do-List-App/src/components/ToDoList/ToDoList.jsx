function ToDoList({toDosList}) {
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
                            className="p-3 border-gray-100 rounded"
                        >
                            {item.todo}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ToDoList;