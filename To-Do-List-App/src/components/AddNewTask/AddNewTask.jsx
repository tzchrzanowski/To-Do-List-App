import { useState } from 'react';

function AddNewTask({addTask}) {
    const [caption, setCaption] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(caption.length == 0) return;
        addTask(caption);
        setCaption('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="New task..."
                value={caption}
                onChange={(e)=> setCaption(e.target.value)}
            />
            <button type='submit' className="px-4, py-2 rounded hober:bg-blue-500">{"Add Task"}</button>
        </form>
    );
}

export default AddNewTask;