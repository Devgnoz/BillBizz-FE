import { useState } from "react";
import { Link } from "react-router-dom";
import CheveronLeftIcon from "../../../../assets/icons/CheveronLeftIcon";
import Button from "../../../../Components/Button";
import Pen from "../../../../assets/icons/Pen";
import MailIcon from "../../../../assets/icons/MailIcon";
import PdfView from "./PdfView";

type Props = {};

function ViewDebitNote({ }: Props) {
    const [isPdfView, setIsPdfView] = useState(false);

    const handleToggle = () => {
        setIsPdfView(!isPdfView);
    };

    return (
        <>
            <div className="px-6">
                <div className="bg-white rounded-md p-5">
                    <div className="flex items-center gap-5">
                        <Link to={"/purchase/debitnote"}>
                            <div
                                style={{ borderRadius: "50%" }}
                                className="w-[40px] h-[40px] flex items-center justify-center bg-gray"
                            >
                                <CheveronLeftIcon />
                            </div>
                        </Link>
                        <p className="text-textColor text-xl font-bold">View Debit Note</p>
                    </div>
                    <br />

                    <div className="flex justify-between">
                        <div className="flex gap-3 items-center">
                            <p className="text-lg text-textColor font-bold pr-4 border-r-2 border-borderRight">Purchase Order</p>
                            <p className="text-lg text-textColor font-bold pr-4 border-r-2 border-borderRight">Purchase Order#S0001</p>
                            <p className="text-sm font-semibold text-textColor bg-cuscolumnbg p-1 text-center rounded-sm">Draft</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Button variant="secondary" className="text-sm font-medium text-outlineButton border-outlineButton px-6" size="lg"><Pen color="#565148" /> Edit</Button>
                            <Button variant="secondary" className="text-sm font-medium text-outlineButton border-outlineButton px-5" size="lg"><MailIcon color="#565148" /> Email</Button>

                            <select name="" id="" className="border-outlineButton border rounded-md h-[38px] px-4 text-sm font-medium text-outlineButton ">
                                <option value="">More Action</option>
                            </select>
                            {/* toggle button */}
                            <label className="flex items-center cursor-pointer">
                                <div className="relative">
                                    <input type="checkbox" className="sr-only" checked={isPdfView} onChange={handleToggle} />
                                    <div className={`w-11 h-6 rounded-full shadow-inner transition-colors ${isPdfView ? 'bg-checkBox' : 'bg-dropdownBorder'}`}></div>
                                    <div className={`dot absolute w-4 h-4 bg-white rounded-full top-1 transition-transform ${isPdfView ? 'transform translate-x-full left-2' : 'left-1'}`}></div>
                                </div>
                                <div className="ml-3 text-textColor font-semibold text-base">PDF View</div>
                            </label>
                        </div>
                    </div>
                    <hr className="border-t border-inputBorder mt-4" />
                    {isPdfView ? (
                        <div className="pdf-view-component">
                            <PdfView />
                        </div>
                    ) : (
                        <div className="other-component">
                            <p>This is the other component.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default ViewDebitNote;
