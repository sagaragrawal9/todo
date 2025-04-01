import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasksSlice";
import { v4 as uuidv4 } from "uuid";

const TaskInput = () => {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch(addTask({ id: uuidv4(), text: taskText, priority: "Medium" }));
      setTaskText("");
    }
  };

  return (
    <div className="mb-6">
      <form onSubmit={handleAddTask} className="flex items-center justify-between space-x-4">
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TaskInput;