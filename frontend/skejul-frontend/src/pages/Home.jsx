import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { createTask } from "../services/api";
import TaskModal from './../components/TaskModal';
import TaskDelete from './../components/TaskDelete';

const Home = () => {
    const { tasks, setTasks } = useContext(TaskContext);
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [taskDetails, setTaskDetails] = useState({
        id: "",
        title: "",
        content: "",
        end_date: ""
    });

    // para o modal de edição
    const [selectedTask, setSelectedTask] = useState(null);
    const [deleteTask, setDeleteTask] = useState(null);
    
    const handleAddTask = () => {
        setTaskDetails({ id: Date.now().toString(), title: newTaskTitle, content: "", end_date: "" });
        setModalOpen(true);
    };

    const handleSaveTask = async () => {
        if (!taskDetails.title || !taskDetails.content || !taskDetails.end_date) return;
        await createTask(taskDetails);
        setTasks([...tasks, taskDetails]);
        setModalOpen(false);
        setNewTaskTitle("");
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-vivid-red">Lista de Tarefas</h1>
            <div className="flex mb-4 gap-2">
                <input
                    type="text"
                    placeholder="Me lembrar de..."
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    className="border p-2 w-full h-fit rounded-md mb-3"
                />
                <button onClick={handleAddTask} className="bg-blue-600 hover:bg-blue-700 transition-all text-white h-fit rounded-md py-2 px-4 cursor-pointer">Adicionar</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tasks.map((task) => (
                    <div key={task.id} className="flex flex-col justify-between p-6 bg-white border rounded-lg shadow-sm cursor-pointer">
                        <div>
                            <h5 className="text-2xl font-semibold text-gray-900">{task.title}</h5>
                            <p className="text-gray-500">{task.content}</p>
                            <p className="text-sm text-gray-400">{task.description}</p>
                            <div className="justify-between">
                                <div className="">
                                    <p className="text-sm text-gray-400">Finalizar até: {task.end_date}</p>
                                </div>
                                <div className="">
                                    <p className="text-sm text-gray-500">Status: {task.status}</p>
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={() => setSelectedTask(task)}
                            className="mt-3 block w-full text-center text-white bg-slate-700 hover:bg-slate-800 cursor-pointer py-2 px-4 rounded-lg transition-all">
                            Editar
                        </button>

                        <button 
                            onClick={() => setDeleteTask(task)}
                            className="mt-3 block w-full text-center text-white bg-red-200 hover:bg-red-300 cursor-pointer py-2 px-4 rounded-lg transition-all">
                            Deletar
                        </button>
                    </div>
                ))}
            </div>

            {/* modal para deleção */}
            {deleteTask && <TaskDelete task={deleteTask} onClose={() => setDeleteTask(null)} />}

            {/* modal para edição */}
            {selectedTask && <TaskModal task={selectedTask} onClose={() => setSelectedTask(null)} />}

            {/* modal para inclusão */}
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Nova Tarefa</h2>
                        <input
                            type="text"
                            placeholder="Título"
                            value={taskDetails.title}
                            onChange={(e) => setTaskDetails({ ...taskDetails, title: e.target.value })}
                            className="border p-2 w-full mb-2 rounded-xs"
                        />
                        <textarea
                            placeholder="Descrição"
                            value={taskDetails.content}
                            onChange={(e) => setTaskDetails({ ...taskDetails, content: e.target.value })}
                            className="border p-2 w-full mb-2 rounded-xs"
                        />
                        <input
                            type="date"
                            value={taskDetails.end_date}
                            onChange={(e) => setTaskDetails({ ...taskDetails, end_date: e.target.value })}
                            className="border p-2 w-full mb-4 rounded-xs"
                        />
                        <div className="flex justify-end">
                            <button onClick={() => setModalOpen(false)} className="mr-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md cursor-pointer">Cancelar</button>
                            <button onClick={handleSaveTask} className="bg-blue-600 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer">Salvar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
