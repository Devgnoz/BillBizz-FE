import {
  HomeIcon,
  CubeIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const navlist = [
  {
    nav: "Dashboard",
    sub: null,
    icon: HomeIcon,
    route: "/home",
  },
  {
    nav: "Inventory",
    sub: ["item"],
    icon: CubeIcon,
    route: "/home",
  },
  {
    nav: "Customer",
    sub: null,
    icon: UserIcon,
    route: "/home",
  },
  {
    nav: "Sales",
    sub: ["Sales Order", "POS"],
    icon: ShoppingCartIcon,
    route: "/home",
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
    route: "/home",
  },
  {
    nav: "Supplier",
    sub: null,
    icon: "",
    route: "/home",
  },
  {
    nav: "Expense",
    sub: null,
    icon: "",
    route: "/home",
  },
  {
    nav: "Staff",
    sub: null,
    icon: "",
    route: "/home",
  },
  {
    nav: "Purchase",
    sub: null,
    icon: "",
    route: "/home",
  },
  {
    nav: "Payroll",
    sub: null,
    icon: "",
    route: "/home",
  },
  {
    nav: "Reports",
    sub: null,
    icon: "",
    route: "/home",
  },
];

export default navlist;
