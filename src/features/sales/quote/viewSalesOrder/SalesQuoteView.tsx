import PrinterIcon from "../../../../assets/icons/PrinterIcon";
import Button from "../../../../Components/Button";

type Props = {}

function SalesQuoteView({ }: Props) {
    return (
        <div className="mt-4">
            <div className="flex items-center justify-start mb-4">
                <p className="text-textColor border-r-[1px] border-borderRight pr-4 text-sm font-normal">
                 Quote Date: <span className="ms-3 text-dropdownText text-sm font-semibold">24/06/2024</span>
                </p>
                <p className="text-textColor pl-4 text-sm font-normal">
                    Expected Shipment: <span className="ms-3 text-dropdownText text-sm font-semibold">28/06/2024</span>
                </p>
            </div>
            {/* send purchase order */}
            <div className="mt-4 bg-cuscolumnbg p-4 rounded-lg flex justify-between items-center">
                <div>
                    <p className="text-base font-bold text-textColor">Send Sales Quote</p>
                    <p className="text-sm font-normal text-dropdownText  mt-2">Sales quote has been created. You can email the Sales Quote to your customer or mark it as Confirmed.</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="secondary" className="pl-4 pr-4" size="sm"><p className="text-sm font-medium">Mark as Confirmed</p></Button>
                    <Button className="pl-4 pr-4" size="sm"><p className="text-sm font-medium">Send Sales Quote</p></Button>
                </div>
            </div>

            {/* item details */}
            <div className="mt-6 p-4 rounded-lg flex items-center" style={{ background: 'linear-gradient(89.66deg, #E3E6D5 -0.9%, #F7E7CE 132.22%)' }}>
                <div className="flex items-center border-r border-borderRight pr-4">
                    <img src="https://s3-alpha-sig.figma.com/img/d280/d28b/ae738328489af5e587e95fe2105955cf?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p~s4Pd6Qn~p7F2xhOj69kvQuS37jfaVfI~EPvWb3T0GRZszU5IMeNwTmqxKJYVaPzM49ClHtCjva1VuSGl5111Wlfbzit1xe4LSjDywVLhQIlVB2nuy5~7fZOYUdnuVXb2ZtDTL0D3JJCpHURXzepy1njjkZQZtCsMILKWthxm8qryLy-rW7uS870zgh8jX~a1rgig7zSqzVqfolspoo-dnLzhajoPQQuw3LOSOhvAmnpKGjxJsXe6pxQC6XCDHhZjYgyM2bd6MAt6Q1iOBBmy0PDSce0Fyz-wX9mIjfg-KO6wvrCeVpw11e-rG6MvmipkKu9HW10oR2-y~9mAkRcg__" alt="Item" className="w-[78px] h-[62px] object-cover rounded mr-4" />
                    <div>
                        <p className="text-dropdownText text-sm">Item</p>
                        <p className="font-semibold text-sm text-blk">Boat Airdopes 171, Black</p>
                    </div>
                </div>

                <div className="border-r flex items-center border-borderRight pr-[28px] h-[62px] pl-6">
                    <div>
                        <p className="text-dropdownText text-sm">Ordered</p>
                        <p className="font-semibold text-sm text-textColor">10 PCS</p>
                    </div>
                </div>
                <div className="border-r flex items-center border-borderRight pr-[28px] h-[62px] pl-6">
                    <div>
                        <p className="text-dropdownText text-sm">Status</p>
                        <p className="font-bold text-sm text-textColor">0 Invoiced</p>
                    </div>
                </div>
                <div className="border-r flex items-center border-borderRight pr-[28px] h-[62px] pl-6">
                    <div>
                        <p className="text-dropdownText text-sm">Rate</p>
                        <p className="font-bold text-sm text-textColor">RS. 50,000.00</p>
                    </div>
                </div>
                <div className="border-r flex items-center border-borderRight pr-[28px] h-[62px] pl-6">
                    <div>
                        <p className="text-dropdownText text-sm">Discount</p>
                        <p className="font-bold text-sm text-textColor">0</p>
                    </div>
                </div>
                <div className=" flex items-center  h-[62px] pl-6">
                    <div>
                        <p className="text-dropdownText text-sm">Amount</p>
                        <p className="font-bold text-sm text-textColor">Rs. 50,000.00</p>
                    </div>
                </div>

            </div>
            <hr className="mt-6 border-t border-inputBorder" />

            {/* billing address */}
            <div className="flex items-center justify-between gap-6 mt-6">
                <div className="p-6 rounded-lg border border-billingBorder w-[50%]">
                    <p className="text-base font-bold text-textColor">Billing Address</p>
                    <div className="mt-4 text-base mb-[70px] text-dropdownText">
                        <p>Dheeraj k</p>
                        <p>Smart World</p>
                        <p className="text-textColor">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                        <p className="mt-4">Kochi</p>
                        <p>India - 670008</p>
                        <p className="text-textColor">987867566778</p>
                    </div>
                </div>
                <div className="p-6 rounded-lg border border-billingBorder w-[50%]">
                    <p className="text-base font-bold text-textColor">Order Summary</p>
                    <div className="mt-[18.5px] text-textColor">
                        <div className="flex justify-between items-center">
                            <p className="text-sm">Untaxed Amount</p>
                            <p className="font-bold text-lg">RS 0.00</p>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <p>SGST</p>
                            <p>RS 0.00</p>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <p>CGST</p>
                            <p>RS 0.00</p>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <p className="text-base font-bold text-blk">Total</p>
                            <p className="text-textColor font-bold text-lg">RS 0.00</p>
                        </div>
                        <hr className="mt-4 border-t border-[#CCCCCC]" />
                        <div className="flex justify-end gap-2 mt-6 mb-2">
                            <Button variant="secondary" size="sm" className="pl-4 pr-4"><p className="text-sm font-medium">Cancel</p></Button>
                            <Button variant="secondary" className="pl-2 pr-2" size="sm">  <PrinterIcon color="#565148" height={16} width={16} /> <p className="text-sm font-medium">Print</p></Button>
                            <Button variant="primary" className="pl-3 pr-3" size="sm"><p className="text-sm font-medium">Save & Send</p></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SalesQuoteView;
