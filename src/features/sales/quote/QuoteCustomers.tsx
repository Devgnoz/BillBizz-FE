import { useState, useRef, MouseEvent } from "react";
import BookIcon from "../../../assets/icons/BookIcon";
import BookXIcon from "../../../assets/icons/BookXIcon";
import NewspaperIcon from "../../../assets/icons/NewspaperIcon";
import OpenedBookIcon from "../../../assets/icons/OpenedBookIcon";

// Define the type for a supplier item
interface Supplier {
  icon: JSX.Element;
  title: string;
}

const QuoteCustomers: React.FC = () => {
  const [selected, setSelected] = useState<string>("All");
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const scrollLeft = useRef<number>(0);

  const Suppliers: Supplier[] = [
    { icon: <BookIcon color="#585953" />, title: "All" },
    { icon: <OpenedBookIcon color="#585953" />, title: "Draft" },
    { icon: <BookXIcon color="#585953" />, title: "Pending Approval" },
    { icon: <NewspaperIcon color="#585953" />, title: "Invoiced" },
    { icon: <NewspaperIcon color="#585953" />, title: "Expired" },
    { icon: <NewspaperIcon color="#585953" />, title: "Approved" },
    { icon: <NewspaperIcon color="#585953" />, title: "Sent" },
    { icon: <NewspaperIcon color="#585953" />, title: "Customer Viewed" },
    { icon: <NewspaperIcon color="#585953" />, title: "Accepted" },
    { icon: <NewspaperIcon color="#585953" />, title: "Declined" },
  ];

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      isDragging.current = true;
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = scrollRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; //scroll-fast
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      className="overflow-x-auto max-w-full hide-scrollbar"
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ overflowX: "auto" }}
    >
      <div className="flex gap-3">
        {Suppliers.map((customer) => (
          <div
            key={customer.title}
            onClick={() => setSelected(customer.title)}
            className={`flex items-center gap-2 p-2 w-[150px] justify-center rounded ${
              selected === customer.title ? "bg-WhiteIce" : "bg-white"
            }`}
            style={{ border: "1px solid #DADBDD", flexShrink: 0 }}
          >
            {customer.icon}
            <span
              style={{ color: "#4B5C79", fontSize: "12px", fontWeight: "600" }}
            >
              {customer.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteCustomers;
