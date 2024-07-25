import ListIcon from "../../../assets/icons/ListIcon"
import Button from "../../../Components/Button"

type Props = {}

function DebitSort({ }: Props) {
    return (
        <>
            <Button variant="secondary"  size="sm">
                <ListIcon color="#565148" /> <p className="text-sm font-medium text-outlineButton">Sort By</p></Button>
        </>
    )
}

export default DebitSort;