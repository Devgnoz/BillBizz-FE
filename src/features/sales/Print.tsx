import PrinterIcon from "../../assets/icons/PrinterIcon";
import Button from "../../Components/Button";
const Print = () => {

  return (
    <Button variant="secondary" className="border-outlineButton text-outlineButton font-medium" size="sm">  <PrinterIcon color="#565148" height={16} width={16} /> <p className="text-sm font-medium">Print</p></Button>

  );
};

export default Print;
