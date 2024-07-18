import { Link } from 'react-router-dom';
import Button from '../../../Components/Button';
import CheveronLeftIcon from '../../../assets/icons/CheveronLeftIcon';
import PencilEdit from '../../../assets/icons/PencilEdit';

type Props = {};

function PaymentView({}: Props) {
  return (
    <div className="p-6">
      <div className="flex items-center space-x-2 mb-4">
      <Link to={"/purchase/payment-made"}>
          <div
            style={{ borderRadius: "50%" }}
            className="w-[40px] h-[40px] flex items-center justify-center bg-white"
          >
            <CheveronLeftIcon />
          </div>
        </Link>
        <h1 className="text-[20px] font-bold text-[#303F58]">View Payment</h1>
      </div>
      <div className='flex justify-between items-center'>
        <div className='space-x-3 items-center flex text-[#303F58] font-bold text-[16px]'>
           <h3>Payment</h3>
            <h3 className='font-normal'>|</h3>
            <h3>VP-0001</h3>
            <p className='w-[47px] h-[25px] bg-[#F3F3F3] rounded-lg'>Draft</p>
        </div>
        <div className="flex space-x-3 mb-4">
            <Button className='h-[38px] w-[100px] flex justify-center items-center' variant="secondary"><PencilEdit color='black'/>Edit</Button>
            <Button className='h-[38px] w-[100px] flex justify-center items-center' variant="secondary"><PencilEdit color='black'/>Email</Button>
            <select
          className="border border-[#565148] h-[38px] w-auto  pl-3 pr-4 rounded-md bg-[#FEFDFA]  font-semibold text-gray-800"
          style={{ color: "#585953" }}
        >
          <option>More Actions</option>
          <option>Delete</option>
        </select>
          </div>
      </div>
      <hr className='mb-5'/>
      <div className="flex space-x-4">
        {/* Sidebar */}
        <div className="w-1/4">
          <div className=" p-4 rounded-md mb-4">
            <div className="font-semibold">Justin Joe</div>
            <div className="text-gray-500">30/05/2024 | VP-0001</div>
            <div className="text-gray-900">₹500</div>
            <div className="text-gray-500">Mode: Cash</div>
          </div>
          <div className="border p-4 rounded-md mb-4">
            <div className="font-semibold">Justin Joe</div>
            <div className="text-gray-500">30/05/2024 | VP-0002</div>
            <div className="text-gray-900">₹300</div>
            <div className="text-gray-500">Mode: Cash</div>
          </div>
          <Button className="w-full" variant="secondary">New Custom View</Button>
        </div>

        {/* Main content */}
 
          
          <div className="w-3/4 border p-4 rounded-md">
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="text-2xl font-semibold">Supplier Payment</div>
                <div className="text-gray-500">VP-0001</div>
              </div>
              <div className="text-2xl font-semibold text-green-500">₹500</div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="font-semibold">Payment ID</div>
                <div className="text-gray-500">VP-0001</div>
              </div>
              <div>
                <div className="font-semibold">Payment Date</div>
                <div className="text-gray-500">17/07/2024</div>
              </div>
              <div>
                <div className="font-semibold">Reference Number</div>
                <div className="text-gray-500">---</div>
              </div>
              <div>
                <div className="font-semibold">Paid To</div>
                <div className="text-gray-500">Mr. Aman Rasheedh</div>
              </div>
              <div>
                <div className="font-semibold">Place of Supply</div>
                <div className="text-gray-500">Kerala</div>
              </div>
              <div>
                <div className="font-semibold">Payment Mode</div>
                <div className="text-gray-500">Cash</div>
              </div>
              <div>
                <div className="font-semibold">Paid Through</div>
                <div className="text-gray-500">Petty Cash</div>
              </div>
              <div>
                <div className="font-semibold">Amount Paid in Words</div>
                <div className="text-gray-500">Five hundred Only</div>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="font-semibold mb-2">Bill Details</div>
              <div className="grid grid-cols-4 gap-4 text-gray-500">
                <div>Bill number</div>
                <div>Bill Date</div>
                <div>Bill Amount</div>
                <div>Payment Amount</div>
                <div>VP-0001</div>
                <div>17/07/24</div>
                <div>₹2000</div>
                <div>₹500</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="font-semibold">Bill to</div>
              <div className="text-gray-500">Mr. Aman Rasheedh</div>
              <div className="text-gray-500">Aman@gmail.com | +91 9654675465</div>
              <div className="text-gray-500">4140 Parker Rd. Allentown, New Mexico 31134</div>
            </div>
            <div className="mt-6">
              <div className="border-t pt-4">
                <div className="font-semibold">Signature</div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
  );
}

export default PaymentView;