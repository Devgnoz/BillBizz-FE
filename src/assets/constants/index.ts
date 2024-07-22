import box from "../icons/box";
import circleDollar from "../icons/circle-dollar-sign";
import home from "../icons/home";
import newspapper from "../icons/newspaper";
import receiptIndianRupee from "../icons/receipt-indian-rupee";
import shoppingBag from "../icons/shopping-bag";
import shoppingCart from "../icons/shopping-cart";
import squreUserRound from "../icons/squre-user-round";
import truck from "../icons/truck";
import userRound from "../icons/user-round";
import usersRound from "../icons/users-round";
 
const navlist = [
  {
    nav: "Home",
    icon: home,
    route: "/dashboard",
  },
  {
    nav: "Inventory",
    icon: box,
    route: "/inventory",
    subhead: [
      {
        headName: "Dashboard",
        subRoute: "/inventory",
      },
      {
        headName: "Item",
        subRoute: "/inventory/Item",
      },
      {
        headName: "Unit of Measurement",
        subRoute: "/inventory/unit",
      },
    ],
  },
  {
    nav: "Customer",
    icon: userRound,
    route: "/customer",
    subhead: [
      {
        headName: "Dashboard",
        subRoute: "/customer",
      },
      {
        headName: "Customer",
        subRoute: "/customer/home",
      },
    ],
  },
  {
    nav: "Sales",
    icon: shoppingCart,
    route: "/sales",
    subhead: [
      {
        headName: "Dashboard",
        subRoute: "/sales",
      },
      {
        headName: "Sales Order",
        subRoute: "/inventory",
      },
      {
        headName: "Invoice",
        subRoute: "/inventory",
      },
      {
        headName: "POS",
        subRoute: "/inventory",
      },
      {
        headName: "Sales Return",
        subRoute: "/inventory",
      },
      {
        headName: "Credit Note",
        subRoute: "/inventory",
      },
    ],
  },
  {
    nav: "Accountant",
    icon: squreUserRound,
    route: "/accountant",
    subhead: [
      {
        headName: "Dashboard",
        subRoute: "/accountant/chart-OF-accountant",
      },
      {
        headName: "Chart Of Account",
        subRoute: "/accountant/chart-OF-accountant",
      },
      {
        headName: "Manual Journals",
        subRoute: "/accountant/manualjournal",
      },
      {
        headName: "Bank",
        subRoute: "/accountant/bank",
      },
      {
        headName: "Cash",
        subRoute: "/accountant/cash",
      },
      {
        headName: "Currency Adjustment",
        subRoute: "/inventory",
      },
    ],
  },
  {
    nav: "Supplier",
    icon: truck,
    route: "/supplier",
    subhead:[
      {
        headName: "Dashboard",
        subRoute: "/supplier",
      },
      {
        headName:"Supplier",
        subRoute:"/supplier/home"
      }
    ]
  },
  {
    nav: "Expense",
    icon: circleDollar,
    route: "/home",
  },
  {
    nav: "Staff",
    icon: usersRound,
    route: "/home",
  },
  {
    nav: "Purchase",
    icon: shoppingBag,
    route: "/purchase",
    subhead: [
      {
        headName: "Dashboard",
        subRoute: "/purchase",
      },
      {
        headName: "Purchase Order",
        subRoute: "/purchase/purchase-order",
      },
      {
        headName: "Payment Made",
        subRoute: "/purchase/payment-made",
      },
      {
        headName: "Debit Note",
        subRoute: "/purchase/debitnote",
      },
    ],
  },
 
  {
    nav: "Payroll",
    icon: receiptIndianRupee,
    route: "/home",
  },
  {
    nav: "Reports",
    icon: newspapper,
    route: "/home",
  },
];
 
export const paymentTermsList = [
  {
    title: "Net 30",
    text: "Payment is due within 30 days from the invoice date",
  },
  {
    title: "2/10 Net 30",
    text: "A 2% discount is available if payment is made within 10 days; otherwise, the full amount is due within 30 days.",
  },
  {
    title: "Due on Receipt",
    text: ": Payment is due immediately upon receiving the invoice",
  },
  {
    title: "EOM",
    text: "Payment is due by the end of the month in which the invoice is dated",
  },
  {
    title: "Net 15",
    text: "Payment is due within 15 days from the invoice date",
  },
  { title: "COD", text: "Payment is due at the time of delivery" },
  {
    title: "Net 60",
    text: "Payment is due within 60 days from the invoice date",
  },
  {
    title: "15 MFI: ",
    text: ": Payment is due on the 15th day of the month following the invoice date",
  },
];
 
export const organizationList = [
  { title: "Profile" },
  { title: "Branding" },
  { title: "Custom Domain" },
  { title: "Branches" },
  { title: "Currencies" },
  { title: "Approvals" },
  { title: "Opening Balance" },
  { title: "Manage Subscription" },
];
 
export const taxList = [{ title: "Tax" }, { title: "MSME Settings" }];
 
export const usersAndRoleList = [
  { title: "Users" },
  { title: "Roles" },
  { title: "User Preferences" },
];
 
export const preferencesList = [
  { title: "General" },
  { title: "Customet & Vendor" },
  { title: "AccountantProjects" },
  { title: "TimeSheets" },
  { title: "Customer Portal" },
  { title: "Vendor Portal" },
];
export const SalesList = [
  { title: "Quotes" },
  { title: "Sales Order" },
  { title: "Delivery Challans" },
  { title: "Invoices" },
  { title: "Recurring Invoices" },
  { title: "Payment Recieved" },
  { title: "Credit Notes" },
  { title: "Delivery Notes" },
  { title: "Packing Slips" },
];
 
export const purchasesList = [
  { title: "Expenses" },
  { title: "Recurring Expensess" },
  { title: "Bills" },
  { title: "Recurring Bills" },
  { title: "Payment Mode" },
  { title: "Purchase Orders" },
  { title: "Vendor Credit" },
];
 
export const itemsList = [{ title: "Item" }, { title: "Inventory Adjustment" }];
 
export const onlinePaymentList = [
  { title: "Customer Payments" },
  { title: "vendor Payments" },
];
 
export const customizationList = [
  { title: "Reporting Tags" },
  { title: "Web Tabs" },
  { title: "Digital Signature" },
  { title: "Transaction rating Series" },
  { title: "PDF Templates" },
];
 
export const ReminderList = [
  { title: "Reminders" },
  { title: "Email Notification" },
  { title: "SMS Notification" },
];
 
export const newPurchaseOrderTableHead=[
  "Product",
  "Quantity",
  "Rate",
  "Tax",
  "Discount",
  "Amount",
   "Actions"
 
]
 
export default navlist;