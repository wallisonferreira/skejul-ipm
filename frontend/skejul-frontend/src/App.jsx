import { TaskProvider } from "./context/TaskContext";
import AppRoutes from "./routes";

function App() {
    return (
        <TaskProvider>
            <AppRoutes />
        </TaskProvider>
    );
}

export default App;
