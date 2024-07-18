import ListIcon from "../../../assets/icons/ListIcon"
import Button from "../../../Components/Button"

type Props = {}

function DebitSort({ }: Props) {
    return (
        <>
            <Button variant="secondary" className="border-outlineButton text-outlineButton font-medium ms-5" size="lg">
                <ListIcon color="#565148" /> Sort By</Button>
        </>
    )
}

export default DebitSort