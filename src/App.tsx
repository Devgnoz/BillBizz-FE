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
import Customer from "./pages/Customer";
import ChartOfAccountant from "./features/accountant/chartOfAccountant/ChartOfAccountant";
import Item from "./features/inventory/Item/item";
import CustomerHome from "./features/Customer/CustomerHome/CustomerHome";
import SeeCustomerDetails from "./features/Customer/CustomerHome/SeeCustomerDetails";
import Table from "./features/accountant/chartOfAccountant/Table";
import NewPurchaseOrder from "./features/purchase/purchaseOrder/NewPurchaseOrder";
import PaymentMade from "./features/purchase/paymentMade/PaymentMade";
import Purchase from "./pages/Purchase";
import PurchaseOrder from "./features/purchase/purchaseOrder/PurchaseOrder";
import PaymentView from "./features/purchase/paymentMade/PaymentView";


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
          <Route path="/accountant/cash" element={<Cash />}></Route>
          <Route path="/accountant/manualjournal" element={<ManualHome />}></Route>
          <Route path="/accountant/newjournal" element={<NewJournal />}></Route>
          <Route path="/accountant/bank" element={<BankHome />}></Route>
          <Route path="/inventory/unit" element={<UnitHome />}></Route>
          <Route
            path="/inventory/unit/unit-conversion"
            element={<Unitconversion />}
          ></Route>
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/supplier/home" element={<Table/>}></Route>
          <Route path="/customer" element={<Customer />}></Route>
          <Route path="/customer/home" element={<CustomerHome />}></Route>
          <Route path="/customer/view/1" element={<SeeCustomerDetails/>}/>
          <Route path="/inventory/Item" element={<Item />}></Route>
          <Route
            path="/accountant/chart-OF-accountant"
            element={<ChartOfAccountant />}
          ></Route>
          <Route
            path="/inventory/unit/unit-conversion"
            element={<Unitconversion />}
          ></Route>
          <Route path="/purchase" element={<Purchase/>}/>
          <Route path="/purchase/purchase-order" element={<PurchaseOrder/>}/>
          <Route path="/purchase/purchase-order/new" element={<NewPurchaseOrder/>}></Route>
          <Route path="/purchase/payment-made" element={<PaymentMade/>}></Route>
          <Route path="/purchase/payment-made/view" element={<PaymentView/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
