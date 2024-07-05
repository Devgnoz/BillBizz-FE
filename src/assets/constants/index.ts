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
    nav: "Dashboard",
    sub: null,
    icon: home,
    route: "/dashboard",
  },
  {
    nav: "Inventory",
    sub: ["item"],
    icon: box,
    route: "/inventory",
  },
  {
    nav: "Customer",
    sub: null,
    icon: userRound,
    route: "/home",
  },
  {
    nav: "Sales",
    sub: ["Sales Order", "POS"],
    icon: shoppingCart,
    route: "/sales",
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
    icon: squreUserRound,
    route: "/home",
  },
  {
    nav: "Supplier",
    sub: null,
    icon: truck,
    route: "/home",
  },
  {
    nav: "Expense",
    sub: null,
    icon: circleDollar,
    route: "/home",
  },
  {
    nav: "Staff",
    sub: null,
    icon: usersRound,
    route: "/home",
  },
  {
    nav: "Purchase",
    sub: null,
    icon: shoppingBag,
    route: "/home",
  },
  {
    nav: "Payroll",
    sub: null,
    icon: receiptIndianRupee,
    route: "/home",
  },
  {
    nav: "Reports",
    sub: null,
    icon: newspapper,
    route: "/home",
  },
];

export default navlist;
