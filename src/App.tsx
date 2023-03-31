import "./App.css";
import AppRoutes from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
      <AppRoutes />
    </div>
  );
}

export default App;
