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
        rounte: "/inventory",
      },
      {
        headName: "Item",
        rounte: "/inventory/Item",
      },
      {
        headName: "Unit of Measurement",
        rounte: "/inventory/unit",
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
        rounte: "/customer",
      },
      {
        headName: "Customer",
        rounte: "/customer/home",
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
        rounte: "/sales",
      },
      {
        headName: "Sales Order",
        rounte: "/inventory",
      },
      {
        headName: "Invoice",
        rounte: "/inventory",
      },
      {
        headName: "POS",
        rounte: "/inventory",
      },
      {
        headName: "Sales Return",
        rounte: "/inventory",
      },
      {
        headName: "Credit Note",
        rounte: "/inventory",
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
        rounte: "/sales",
      },
      {
        headName: "Chart Of Account",
        rounte: "/accountant/chart-OF-accountant",
      },
      {
        headName: "Manuval Journals",
        rounte: "/manualjournal",
      },
      {
        headName: "Bank",
        rounte: "/inventory",
      },
      {
        headName: "Cash",
        rounte: "/inventory",
      },
      {
        headName: "Currency Adjustment",
        rounte: "/inventory",
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
        rounte: "/supplier",
      },
      {
        headName:"Supplier",
        rounte:"/supplier/home"
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
    route: "/home",
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
   "Actions" 

]

export default navlist;
