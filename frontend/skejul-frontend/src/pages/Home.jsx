import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Home = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Lista de Tarefas</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id_task} className="border p-2 my-2">
                        <strong>{task.title}</strong> - {task.description} | Status: {task.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
