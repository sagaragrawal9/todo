import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasksSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="mt-4 bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-3">Task List</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks available.</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center p-2 border-b last:border-none"
            >
              <span className="flex-1">{task.text}</span>
              <span
                className={`px-2 py-1 text-xs rounded-md ${
                  task.priority === "High"
                    ? "bg-red-200 text-red-700"
                    : task.priority === "Medium"
                    ? "bg-yellow-200 text-yellow-700"
                    : "bg-green-200 text-green-700"
                }`}
              >
                {task.priority}
              </span>
              <button
                onClick={() => dispatch(deleteTask(task.id))}
                className="bg-red-500 text-white p-1 rounded-md hover:bg-red-600 ml-3"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;