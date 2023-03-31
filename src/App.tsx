import "./App.css";
import AppRoutes from "./routes";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
