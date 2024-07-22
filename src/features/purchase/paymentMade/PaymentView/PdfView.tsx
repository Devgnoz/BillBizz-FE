import companyLogo from "../../../../assets/Images/Vector@2x.png";

type Props = {};

function PdfView({ }: Props) {
    return (
        <div className=" flex justify-center">
            <div className="bg-white drop-shadow-2xl w-[595px] p-8 pl-[24px] pr-[24px]">
                <div className="flex justify-between items-center mb-8 mt-1">
                    <div>
                        <img src={companyLogo} alt="Company Logo" className="h-[49px] w-[71px]" />
                    </div>
                    <div className="text-right">
                        <h2 className="text-xl font-bold text-textColor">Supplier Payment</h2>
                        <p className="text-sm font-bold text-dropdownText mt-[5px]">VP-0001</p>
                        <h3 className="font-normal text-xs mt-[14px] text-pdftext">ElectroTech Solution</h3>
                        <p className="font-normal text-xs text-pdftext">electrotech@gmail.com | +91 9654675465</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                   <div className="grid grid-cols-2 items-center space-y-3">
                    <p className="font-normal text-xs text-pdftext">Payment ID</p>
                    <p className="text-xs  text-pdftext text-end">VP-00001</p>
                    <p className="font-normal text-xs text-pdftext">Payment Date</p>
                    <p className="text-xs  text-pdftext text-end">17/07/2024</p>
                    <p className="font-normal text-xs text-pdftext">Reference Number</p>
                    <p></p>
                    <p className="font-normal text-xs text-pdftext">Paid To</p>
                    <p className="text-xs  text-pdftext text-end">Mr. Aman Rasheedh</p>
                    <p className="font-normal text-xs text-pdftext">Place of Supply</p>
                    <p className="text-xs  text-pdftext text-end">Kerala</p>
                    <p className="font-normal text-xs text-pdftext">Payment Mode</p>
                    <p className="text-xs  text-pdftext text-end">Cash</p>
                    <p className="font-normal text-xs text-pdftext">Paid Through</p>
                    <p className="text-xs  text-pdftext text-end">Petty Cash</p>
                    <p className="font-normal text-xs text-pdftext">Amount Paid in Words</p>
                    <p className="text-xs  text-pdftext text-end">Five hundred Only</p>
                   </div>
                    <div className="flex items-center justify-center ">
                    <div className="bg-gradient-to-r from-[#E3E6D5] to-[#F7E7CE] w-full flex justify-center items-center flex-col py-5 rounded-sm">
                        <h3 className="text-[14px] font-bold ">Amount Paid</h3>
                        <p className="text-[18px] font-bold text-pdftext">₹500</p>
                    </div>
                </ div>
                </div>

              

                <table className="w-full mb-8 border border-dropdownBorder">
                    <thead className="border-b border-dropdownBorder bg-gray-100">
                        <tr className="font-bold text-[10px] text-pdftext text-center">
                            <th className="py-2 px-4">Bill number</th>
                            <th className="py-2 px-4">Bill Date</th>
                            <th className="py-2 px-4">Bill Amount</th>
                            <th className="py-2 px-4">Payment Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-[10px] text-center">
                            <td className="py-2 px-4">VP-0001</td>
                            <td className="py-2 px-4">17/07/24</td>
                            <td className="py-2 px-4">₹2000</td>
                            <td className="py-2 px-4">₹500</td>
                        </tr>
                    </tbody>
                </table>

                <div className="mb-8">
                    <h3 className="font-normal text-xs text-pdftext">Bill to</h3>
                    <p className="text-pdftext text-sm font-bold mt-2">Mr Aman Rasheedh</p>
                    <p className="font-normal text-xs text-pdftext mt-2">Aman@gmail.com | +91 9654675465</p>
                    <p className="font-normal text-xs text-pdftext mt-2">4140 Parker Rd. Allentown,<br />New Mexico 31134</p>
                </div>

                <div className="w-full mt-[64px] gap-2 mb-[55.5px] flex  items-center">
                    <p className="text-pdftext text-xs font-normal">Signature</p>
                    <div className="border-t border-[0.5px] border-loremcolor w-[40%]"></div>
                </div>
            </div>
        </div>
    
    );
}

export default PdfView;
