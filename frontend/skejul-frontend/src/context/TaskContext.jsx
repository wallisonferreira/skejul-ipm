import { createContext, useEffect, useState } from "react";
import { getTasks } from "../services/api";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await getTasks();
            setTasks(data);
        };
        fetchTasks();
    }, []);

    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    );
};
