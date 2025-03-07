import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000",
});

export const getTasks = async () => {
    const response = await api.get("/tasks");
    return response.data;
};

export const createTask = async (taskData) => {
    const response = await api.post("/tasks", taskData);
    return response.data;
};
