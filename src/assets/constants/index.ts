import { BeakerIcon } from "@heroicons/react/24/solid";

const navlist = [
  {
    nav: "Dashboard",
    sub: null,
    icon: BeakerIcon,
  },
  {
    nav: "Inventory",
    sub: ["item"],
    icon: "",
  },
  {
    nav: "Customer",
    sub: null,
    icon: "",
  },
  {
    nav: "Sales",
    sub: ["Sales Order", "POS"],
    icon: "",
  },
  {
    nav: "Accountant",
    sub: [
      "Chart of Account",
      "Manual Journals",
      "Bank",
      "Cash",
      "Currency Adjustment",
    ],
    icon: "",
  },
  {
    nav: "Supplier",
    sub: null,
    icon: "",
  },
  {
    nav: "Expense",
    sub: null,
    icon: "",
  },
  {
    nav: "Staff",
    sub: null,
    icon: "",
  },
  {
    nav: "Purchase",
    sub: null,
    icon: "",
  },
  {
    nav: "Payroll",
    sub: null,
    icon: "",
  },
  {
    nav: "Reports",
    sub: null,
    icon: "",
  },
];

export default navlist;
