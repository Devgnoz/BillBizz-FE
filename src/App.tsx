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
import UnitHome from "./features/inventory/Unit/UnitHome";
import Unitconversion from "./features/inventory/Unit/Unitconversion";
import Supplier from "./pages/Supplier";
import Table from "./features/supplier/SupplierHome/Table";
import Customer from "./pages/Customer";
import Item from "./features/inventory/Item/item";
import CustomerHome from "./features/Customer/CustomerHome/CustomerHome";
import SeeCustomerDetails from "./features/Customer/CustomerHome/SeeCustomerDetails";




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
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/supplier/home" element={<Table />}></Route>
          <Route path="/customer" element={<Customer />}></Route>
          <Route path="/customer/home" element={<CustomerHome />}></Route>
          <Route path="/customer/view/:id" element={<SeeCustomerDetails/>}/>
          <Route path="/inventory/Item" element={<Item />}></Route>
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
