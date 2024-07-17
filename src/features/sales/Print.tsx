import PrinterIcon from "../../assets/icons/PrinterIcon";
const Print = () => {

  return (
    <button className="px-2 py-2 gap-2 text-sm flex items-center justify-center border border-gray-500 rounded-lg text-gray-500">
      <PrinterIcon color="#565148" /> <p className="font-medium">Print</p>
    </button>

  );
};

export default Print;
