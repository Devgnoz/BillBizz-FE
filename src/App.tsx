import "./App.css";
import { Routes, Route } from "react-router-dom";
import Root from "./Root";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import Organization from "./pages/Organization";
import Accountant from "./pages/Accountant";
import ManualHome from "./features/accountant/manualJournel/ManualHome";
import NewJournal from "./features/accountant/manualJournel/NewJournal";
import Cash from "./features/accountant/Cash/Cash";
import BankHome from "./features/accountant/Bank/BankHome";
import Unitconversion from "./features/Unit/Unitconversion";
import UnitHome from "./features/Unit/UnitHome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/accountant" element={<Accountant />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/organization" element={<Organization />}></Route>
          <Route path="/cash" element={<Cash />}></Route>
          <Route path="/manualjournal" element={<ManualHome />}></Route>
          <Route path="/newjournal" element={<NewJournal />}></Route>
          <Route path="/bank" element={<BankHome />}></Route>
          <Route path="/inventory/unit" element={<UnitHome />}></Route>
          <Route
            path="/inventory/unit/unit-conversion"
            element={<Unitconversion />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
