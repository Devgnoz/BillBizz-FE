import companyLogo from "../../../../assets/Images/Vector@2x.png";

type Props = {};

function PdfView({}: Props) {
    return (
        <div className="mt-4">
            <div className="flex items-center justify-center mb-4">
                <p className="text-textColor border-r-2 border-borderRight pr-4 text-sm font-medium">
                    Order Date: <span className="ms-3 text-dropdownText text-base font-bold">24/06/2024</span>
                </p>
                <p className="text-textColor pl-4 text-sm font-medium">
                    Expected Shipment: <span className="ms-3 text-dropdownText text-base font-bold">24/06/2024</span>
                </p>
            </div>
            <div className="flex justify-center items-center">
                <div className="bg-white drop-shadow-2xl w-[595px]  p-8 pl-[24px] pr-[24px]">
                    <div className="flex justify-between items-center mb-8 mt-1">
                        <div>
                            <img src={companyLogo} alt="Company Logo" className="h-[49px] w-[71px]" />
                        </div>
                        <div className="text-right">
                            <h2 className="text-xl font-bold text-textColor">SUPPLIER DEBITS</h2>
                            <p className="text-sm font-bold text-dropdownText mt-[5px]">Debit Note# Dp-00002</p>
                            <h3 className="font-normal text-xs mt-[14px] text-pdftext">ElectroTech Solution</h3>
                            <p className="font-normal text-xs text-pdftext">electrotech@gmail.com | +91 9654675465</p>
                        </div>
                    </div>

                    <div className="mb-8 mt-8">
                        <h3 className="font-normal text-xs text-pdftext">Bill to</h3>
                        <p className="text-pdftext text-sm font-bold mt-2">Supplier 1</p>
                        <p className="font-normal text-xs text-pdftext mt-2">electrotech@gmail.com | +91 9654675465</p>
                        <p className="font-normal text-xs text-pdftext mt-2">4140 Parker Rd. Allentown,<br />New Mexico 31134</p>
                    </div>

                    <table className="w-full mb-7 border border-dropdownBorder">
                        <thead className="border-b border-dropdownBorder ">
                            <tr className="font-bold text-[10px] text-pdftext text-center">
                                <th className="py-2 px-4 text-left w-[350px]">Description</th>
                                <th className="py-2 px-4 pl-16 ">Qty</th>
                                <th className="py-2 px-4">Price</th>
                                <th className="py-2 px-4">GST</th>
                                <th className="py-2 px-4">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-[10px] text-left">
                                <td className="py-2 px-4">iqoo neo 9 pro</td>
                                <td className="py-2 px-4 pl-16">1</td>
                                <td className="py-2 px-4">50,000.00</td>
                                <td className="py-2 px-4">0.00</td>
                                <td className="py-2 px-4">50,000.00</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div className="flex justify-end bg-pdfbg">
                    <div className="w-[58.4%] border border-dropdownBorder rounded">
                        <div className="px-4 mt-4  bg-gray-100 rounded-lg flex justify-between">
                            <h4 className="text-pdftext text-xs font-normal">Sub Total</h4>
                            <p className="text-pdftext text-xs font-normal">50,000.00</p>
                        </div>
                        <div className="px-4 mt-3 mb-5 bg-gray-100 rounded-lg flex justify-between">
                            <h4 className="text-pdftext text-xs font-normal">Total</h4>
                            <p className="text-pdftext text-xs font-normal">50,000.00</p>
                        </div>
                    </div>
                    </div>
                  
                    <div className="flex justify-end mt-8  bg-pdfbg">
                    <div className="w-[58.4%] mb-8 p-4 border flex justify-between border-dropdownBorder rounded">
                        <h4 className="text-pdftext text-xs font-normal">Credits Remaining</h4>
                        <p className="ttext-pdftext text-xs font-normal">50,000.00</p>
                    </div>
                    </div>

                        <div className="w-[50%] mt-[64px] mb-[55.5px] flex justify-center items-center">
                            <p className="text-pdftext text-xs font-normal">Signature</p>
                            <div className="border-t border-pdftext w-full mt-4"></div>
                    </div>
                        
                </div>
            </div>
        </div>
    );
}

export default PdfView;
