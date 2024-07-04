import "./App.css";
import { Routes, Route } from "react-router-dom";
import Root from "./Root";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
