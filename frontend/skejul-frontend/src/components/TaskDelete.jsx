import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { deleteTask } from "../services/api";

const TaskDelete = ({ task, onClose }) => {
    const { setTasks } = useContext(TaskContext);

    const handleDelete = async () => {
        try {
            console.log(task.id_task);
            const response = await deleteTask(task.id_task);
            console.log(response);

            // Atualiza o estado removendo a tarefa excluída
            setTasks((prev) => prev.filter((t) => t.id_task !== task.id_task));

            onClose();
        } catch (error) {
            console.error("Erro ao excluir a tarefa:", error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-4 text-red-600">
                    Tem certeza que quer excluir esta tarefa?
                </h2>
                <h3 className="text-md font-bold mb-4">{task.title}</h3>

                <div className="flex justify-between">
                    <button 
                        type="button" 
                        onClick={onClose} 
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer">
                        Não
                    </button>
                    <button 
                        type="button" 
                        onClick={handleDelete} 
                        className="bg-red-600 hover:bg-red-700 px-4 py-2 text-white rounded-md cursor-pointer">
                        Sim
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskDelete;