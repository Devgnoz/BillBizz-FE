import React, { useState } from "react";

const CreateOrganizationForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="bg-lightRose p-3 overflow-y-scroll hide-scrollbar "
      style={{ height: "647px" }}
    >
      <div className="bg-softBeige rounded-md h-28 grid grid-cols-12 gap-4">
        <div className="ms-2 p-2 col-span-5 text-center mt-3">
          <div className="">
            <p className="bg-gray p-1 text-yellow-50 rounded-md w-28">
              Organization
            </p>
          </div>

          <div className="flex mt-3">
            <p className="mt-1">
              <b>Organization Profile</b>
            </p>{" "}
            <div className="ms-3 bg-white rounded-md p-1">ID:56974398198</div>
          </div>
        </div>

        <div className="col-span-7 flex items-end justify-end">
          <img
            src="https://i.postimg.cc/SxSLnWZR/Group-37.png"
            className="h-28"
            alt=""
          />
        </div>
      </div>

      {/* FORM */}
      <form className="text-slate-800">
        <label>
          <div className="h-56 p-3 border-dashed border-neutral-400 w-96 rounded-md mt-5 border text-slate-800 ">
            <div className="bg-lightPink flex h-28 justify-center items-center">
              <div className="justify-center flex items-center bg-darkRed text-white w-5 h-5 p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <p className="text-sm"> Upload Your Organizational Logo</p>
            </div>
            <div className="text-center">
              <p className="mt-3 ">
                <b>Organization Logo</b>
              </p>
              <p className="text-xs mt-1">
                Preferred Image Dimensions: 240&times;240&times; pixels @ 72 DPI{" "}
                <br />
                Maximum File size 1MB
              </p>
            </div>
          </div>
          <input type="file" className="hidden" />
        </label>
        <p className="mt-4">
          <b>Organizational Details</b>
        </p>

        <div className="bg-white border-slate-200  border-2 rounded-md mt-4 p-5">
          <label>
            Organization Name
            <input
              className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
              placeholder="Name"
            />{" "}
          </label>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="relative">
              <label htmlFor="location">Organization Location</label>
              <div className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2">
                <select name="location" id="Location">
                  <option value="volvo">India</option>
                </select>
              </div>
            </div>

            <div className="relative ">
              <label htmlFor="location">Industry</label>
              <div className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2">
                <select name="location" id="Location">
                  <option value="volvo">Technology</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label>
                Organization Address
                <input
                  className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                  placeholder="Street 1"
                />{" "}
              </label>
            </div>

            <div>
              <label>
                Organization Address
                <input
                  className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                  placeholder="Street 1"
                />{" "}
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <input
                className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                placeholder="City"
              />{" "}
            </div>

            <div>
              <input
                className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                placeholder="Pincode"
              />{" "}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="relative ">
              <div className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2">
                <select name="location" id="Location">
                  <option value="volvo">Kerala</option>
                </select>
              </div>
            </div>

            <div>
              <input
                className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                placeholder="Phone"
              />{" "}
            </div>
          </div>

          <p className="mt-4">
            <b>Website Address</b>
          </p>
          <div className="bg-white border-slate-200  border-2 rounded-md  mt-4 p-5">
            <label htmlFor="websit">Website URL</label>
            <input
              type="text"
              placeholder="Value"
              className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
            />
          </div>

          <p className="mt-4">
            <b>Financial Settings</b>
          </p>

          <div className="bg-white  border-slate-200  border-2 rounded-md mt-4 p-5">
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative">
                <label htmlFor="location">Base Currency</label>
                <div className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2">
                  <select name="location" id="Location">
                    <option value="volvo">INR</option>
                  </select>
                </div>
              </div>

              <div className="relative ">
                <label htmlFor="location">Financial Year</label>
                <div className="pl-9 text-sm w-[100%] rounded-md text-start border-2 border-slate-200  h-[39px] p-2">
                  <select name="location" id="Location">
                    <option value="volvo">April-March</option>
                  </select>
                </div>
              </div>
            </div>
            <label htmlFor="" className="mt-5">
              Report Basis
            </label>{" "}
            {"  "}
            <input type="radio" placeholder="" className="mt-2" />{" "}
            <label htmlFor=""> Accrual (You owe tax as of invoice date)</label>
            <input type="radio" className="ms-4" />{" "}
            <label htmlFor="">Cash (You owe tax upon payment recipt)</label>
          </div>

          <p className="mt-4">
            <b>Preferences</b>
          </p>

          <div className="bg-white  border-slate-200  border-2 rounded-md mt-4 p-5">
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative">
                <label htmlFor="location">Language</label>
                <div className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2">
                  <select name="location" id="Location">
                    <option value="volvo">English</option>
                  </select>
                </div>
              </div>

              <div className="relative ">
                <label htmlFor="location">Time Zone</label>
                <div className="pl-9 text-sm w-[100%] rounded-md text-start border-2 border-slate-200  h-[39px] p-2">
                  <select name="location" id="Location">
                    <option value="volvo">Value</option>
                  </select>
                </div>
              </div>
            </div>
            <label htmlFor="location">Date Format</label>
            <div className="pl-9 text-sm w-[100%] rounded-md text-start border-2 border-slate-200  h-[39px] p-2">
              <select name="location" id="Location">
                <option value="volvo">dd/mm/yyyy [04/07/2024]</option>
              </select>
            </div>
          </div>

          <p className="text-darkRed mt-5 text-sm flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <b> Add New Field</b>
          </p>

          <p className=" my-4">
            <b>QR Location</b>
          </p>

          <label>
            <div className=" border-dashed rounded-md border-2 p-5 border-neutral-400 grid grid-cols-12 gap-4  ">
              <div className="col-span-10 flex ">
                <div className="bg-organizationBg w-20 h-20 rounded-md  "></div>
                <div className="ms-3 flex items-center justify-center h-full">
                  <div>
                    <p>
                      <b>Upload Organization's QR Scanner</b>
                    </p>
                    <p>
                      Upload or confiqure the location of your QR code on the
                      invoice
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 flex items-center justify-center">
                <div className="bg-darkRed text-white items-center justify-center rounded-full flex h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <input type="file" className="hidden" />
          </label>

          <p className=" my-4">
            <b>Invoice Signatory</b>
          </p>

          <label>
            <div className=" border-dashed rounded-md border-2 p-5 border-neutral-400 grid grid-cols-12 gap-4  ">
              <div className="col-span-10 flex ">
                <div className="bg-organizationBg w-20 h-20 rounded-md  "></div>
                <div className="ms-3 flex items-center justify-center h-full">
                  <div>
                    <p>
                      <b>Upload Organization's Digital Signature</b>
                    </p>
                    <p>
                      Upload the digital signature of the person authorized to
                      invoices
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 flex items-center justify-center">
                <div className="bg-darkRed text-white items-center justify-center rounded-full flex h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <input type="file" className="hidden" />
          </label>

          <p className=" my-4">
            <b>Add Social Media</b>
          </p>

          <div className=" border-dashed rounded-md border-2 p-5 border-neutral-400 ">
            <div className="grid grid-cols-2 gap-4 ">
              <label htmlFor="">
              Twitter
              <input
                type="text"
                placeholder="Add Link"
                className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
              />
              </label>

             <label>
              Instagram
                <input
                  type="text"
                  placeholder="Add Link"
                  className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                />
             </label>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <label htmlFor="">
              Linkedin
              <input
                type="text"
                placeholder="Add Link"
                className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
              />
              </label>

             <label>
              Facebook
                <input
                  type="text"
                  placeholder="Add Link"
                  className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                />
             </label>
            </div>
          </div>

          <p className=" my-4">
            <b>Add Payment Information</b>

           
          </p>

          <div className="bg-white  border-slate-200  border-2 rounded-md mt-4 p-5">

          <p className=" my-4">
            <b>Enter Bank account Details
            </b>

           
          </p>
              
              </div>
        </div>
      </form>
    </div>
  );
};

export default CreateOrganizationForm;
