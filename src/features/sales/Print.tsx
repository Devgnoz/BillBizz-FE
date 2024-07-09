import PrinterIcon from "../../assets/icons/PrinterIcon";
const Print = () => {
    return (
    <div>
      <button
        className="w-20 h-8 text-sm flex items-center justify-center border border-gray-500 rounded-lg text-gray-500"
      >
        <span className="flex items-center px-2.5 gap-2 font-medium">
          <PrinterIcon color="#565148" /> Print
        </span>
      </button>

    </div>
  );
};

export default Print;
