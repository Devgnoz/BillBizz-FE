import PrinterIcon from "../../../assets/icons/PrinterIcon"
import Button from "../../../Components/Button"

type Props = {}

function DebitPrint({ }: Props) {
    return (
        <>
            <Button variant="secondary" className="border-outlineButton text-outlineButton font-medium" size="lg">  <PrinterIcon color="#565148" /> Print</Button>
        </>
    )
}

export default DebitPrint