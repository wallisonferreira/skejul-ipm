import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000",
});

export const getTasks = async () => {
    const response = await api.get("/tasks");
    return response.data;
};

export const getTask = async (id) => {
    const response = await api.get("/tasks/${id}");
    return response.data;
};

export const createTask = async (taskData) => {
    console.log(taskData);
    const response = await api.post("/tasks", taskData);
    return response.status;
};

export const updateTask = async (id, taskData) => {
    const response = await api.put(`/tasks/${id}`, taskData);
    console.log(taskData);
    return response.data;
}

export const markAsDone = async (id) => {
    const response = await api.patch(`/tasks/${id}`);
    console.log(response);
    return response.data;
}

export const deleteTask = async (id) => {
    const response = await api.delete(`/tasks/${id}`);
    return response.status;
}