import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import TaskInput from "../components/taskInput";
import TaskList from "../components/TaskList";
import Weather from "../components/Weather";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-gray-100 min-h-screen rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">📝 To-Do List</h1>
        <button
          onClick={() => dispatch(logout())}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <TaskInput />
      <TaskList />
      <Weather />
    </div>
  );
};

export default Home;