import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { updateTask } from "../services/api";
import { markAsDone } from "../services/api";

const TaskModal = ({ task, onClose }) => {
    const { setTasks } = useContext(TaskContext);
    const [formData, setFormData] = useState({
        title: task.title,
        description: task.description,
        end_date: task.end_date,
        status: task.status,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateTask(task.id_task, formData);

        setTasks((prev) => prev.map((t) => (t.id_task === task.id_task ? { ...t, ...formData } : t)));
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-4 text-vivid-red">Editar Tarefa</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block text-sm font-medium">Título</label>
                    <input type="text" 
                        name="title" 
                        value={formData.title} 
                        onChange={handleChange} 
                        className="
                            w-full 
                            p-2 
                            border 
                            rounded-md 
                            mb-3
                        "/>

                    <label className="block text-sm font-medium">Descrição</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded-md mb-3"></textarea>

                    <label className="block text-sm font-medium">Status</label>
                    <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded-md mb-4">
                        <option value="pending">Pendente</option>
                        <option value="done">Concluído</option>
                    </select>

                    <input
                            type="text"
                            value={formData.end_date}
                            onChange={handleChange}
                            className="border p-2 w-full mb-4 rounded-xs"
                        />

                    <div className="flex justify-between">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer">Cancelar</button>
                        <button type="submit" className="bg-blue-600 hover:bg-blue-600 px-4 py-2 text-white rounded-md cursor-pointer">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskModal;
