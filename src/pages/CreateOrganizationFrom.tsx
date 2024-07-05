import { useState } from "react";
import Button from "../Components/Button";
import qrCode from "./../assets/Images/qr-code.svg";
import sign from "./../assets/Images/sign.svg";
import instagramLogo from "./../assets/Images/instagram logo.svg";
import twitterLogo from "./../assets/Images/twitter logo.svg";
import linkedinlog from "./../assets/Images/linkedin logo.svg";
import facebooklogo from "./../assets/Images/facebook logo.svg";
import xMark from "./../assets/Images/x.svg";
import { paymentTermsList } from "../assets/constants";

const CreateOrganizationForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div
      className="bg-lightRose p-3 overflow-y-scroll hide-scrollbar "
      style={{ height: "89vh" }}
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
              <p className="text-sm ms-2"> Upload Your Organizational Logo</p>
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
          <label className="text-slate-600">Organization Name</label>
          <input
            className="pl-9 text-sm w-[100%] mt-3 rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
            placeholder="Name"
          />{" "}
          <div className="grid grid-cols-2 gap-4 my-3">
            <div className="relative ">
              <label htmlFor="location" className="text-slate-600">
                Oganization Location
              </label>
              <div className="relative w-full mt-3">
                <select
                  name="location"
                  id="Location"
                  className="block appearance-none w-full bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="india">India</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.516 7.548a1 1 0 0 1 1.4.1l2.534 2.932a1 1 0 0 0 1.6 0l2.533-2.932a1 1 0 0 1 1.502 1.298l-3.032 3.507a1 1 0 0 1-1.6 0L5.416 8.946a1 1 0 0 1 .1-1.398z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative ">
              <label htmlFor="industry" className="text-slate-600">
                Industry
              </label>
              <div className="relative w-full mt-3">
                <select
                  name="industry"
                  id="industry"
                  className="block appearance-none w-full bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="technology">Technology</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.516 7.548a1 1 0 0 1 1.4.1l2.534 2.932a1 1 0 0 0 1.6 0l2.533-2.932a1 1 0 0 1 1.502 1.298l-3.032 3.507a1 1 0 0 1-1.6 0L5.416 8.946a1 1 0 0 1 .1-1.398z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <label className="text-slate-600" htmlFor="organizationAddress">
            Organization Address
          </label>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <input
                className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                placeholder="Street 1"
              />{" "}
            </div>

            <div>
              <input
                className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                placeholder="Street 1"
              />{" "}
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
              <div className="relative w-full">
                <select
                  name="state"
                  id="state"
                  className="block appearance-none w-full bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="kerala" className="text-slate-300">
                    Kerala
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.516 7.548a1 1 0 0 1 1.4.1l2.534 2.932a1 1 0 0 0 1.6 0l2.533-2.932a1 1 0 0 1 1.502 1.298l-3.032 3.507a1 1 0 0 1-1.6 0L5.416 8.946a1 1 0 0 1 .1-1.398z" />
                  </svg>
                </div>
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
            <label htmlFor="websit" className="text-slate-600">
              Website URL
            </label>
            <input
              type="text"
              placeholder="Value"
              className="pl-9 text-sm w-[100%] mt-3 rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
            />
          </div>
          <p className="mt-4">
            <b>Financial Settings</b>
          </p>
          <div className="bg-white  border-slate-200  border-2 rounded-md mt-4 p-5">
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative ">
                <label htmlFor="currency" className="text-slate-600">
                  Base Currency
                </label>

                <div className="relative w-full mt-3">
                  <select
                    name="currency"
                    id="currency"
                    className="block appearance-none w-full bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="INR" className="text-slate-300">
                      INR
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.516 7.548a1 1 0 0 1 1.4.1l2.534 2.932a1 1 0 0 0 1.6 0l2.533-2.932a1 1 0 0 1 1.502 1.298l-3.032 3.507a1 1 0 0 1-1.6 0L5.416 8.946a1 1 0 0 1 .1-1.398z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative ">
                <label htmlFor="currency" className="text-slate-600">
                  Financial Year
                </label>

                <div className="relative w-full mt-3">
                  <select
                    name="finacialyear"
                    id="currenfinacialyearcy"
                    className="block appearance-none w-full bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="" className="text-slate-500 p-3">
                      April-March
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.516 7.548a1 1 0 0 1 1.4.1l2.534 2.932a1 1 0 0 0 1.6 0l2.533-2.932a1 1 0 0 1 1.502 1.298l-3.032 3.507a1 1 0 0 1-1.6 0L5.416 8.946a1 1 0 0 1 .1-1.398z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4">
              <label htmlFor="" className="mt-5 text-slate-600">
                Report Basis
              </label>{" "}
              {"  "}
              <input
                type="radio"
                placeholder=""
                className="mt-2text-slate-600 "
              />{" "}
              <label htmlFor="" className="text-slate-600">
                {" "}
                <span className="font-semibold">Accrual</span> (You owe tax as
                of invoice date)
              </label>
              <input type="radio" className="ms-4" />{" "}
              <label htmlFor="" className="text-slate-600">
                <span className="font-semibold">Cash</span> (You owe tax upon
                payment recipt)
              </label>
            </div>
          </div>
          <p className="mt-4">
            <b>Preferences</b>
          </p>
          <div className="bg-white  border-slate-200  border-2 rounded-md mt-4 p-5">
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative ">
                <label htmlFor="location" className="text-slate-600">
                  Language
                </label>
                <div className="relative w-full mt-3">
                  <select
                    name="location"
                    id="Location"
                    className="block appearance-none w-full bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="english">English</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.516 7.548a1 1 0 0 1 1.4.1l2.534 2.932a1 1 0 0 0 1.6 0l2.533-2.932a1 1 0 0 1 1.502 1.298l-3.032 3.507a1 1 0 0 1-1.6 0L5.416 8.946a1 1 0 0 1 .1-1.398z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative ">
                <label htmlFor="location" className="text-slate-600">
                  Time Zone
                </label>
                <div className="relative w-full my-3">
                  <select
                    name="location"
                    id="Location"
                    className="block appearance-none w-full bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="">Value</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.516 7.548a1 1 0 0 1 1.4.1l2.534 2.932a1 1 0 0 0 1.6 0l2.533-2.932a1 1 0 0 1 1.502 1.298l-3.032 3.507a1 1 0 0 1-1.6 0L5.416 8.946a1 1 0 0 1 .1-1.398z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative ">
              <label htmlFor="dateformat" className="text-slate-600">
                Date Format
              </label>
              <div className="relative w-full mt-3">
                <select
                  name="dateformat"
                  id="dateformat"
                  className="block appearance-none w-full bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="">dd/mm/yyyy [04/07/2024]</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.516 7.548a1 1 0 0 1 1.4.1l2.534 2.932a1 1 0 0 0 1.6 0l2.533-2.932a1 1 0 0 1 1.502 1.298l-3.032 3.507a1 1 0 0 1-1.6 0L5.416 8.946a1 1 0 0 1 .1-1.398z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="company id" className="text-slate-600">
                  Company Id
                </label>
                <input
                  className="pl-9 mt-3 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                  placeholder="Value"
                />{" "}
              </div>

              <div>
                <label htmlFor="taxid" className="text-slate-600">
                  Tax Id
                </label>
                <input
                  className="pl-9 mt-3 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                  placeholder="Value"
                />{" "}
              </div>
            </div>
          </div>
          <p className="mt-4">
            <b>Additional Fiels</b>
          </p>
          <div className="bg-white  border-slate-200  border-2 rounded-md mt-4 p-5">
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="" className="text-slate-600">
                  Label
                </label>
                <input
                  className="pl-9 mt-3 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                  placeholder="Value"
                />{" "}
              </div>

              <div>
                <label htmlFor="" className="text-slate-600">
                  Label
                </label>
                <input
                  className="pl-9 mt-3 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                  placeholder="Value"
                />{" "}
              </div>
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
                <div className="bg-organizationBg w-20 h-20 rounded-md flex items-center justify-center ">
                  <img src={qrCode} alt="" />
                </div>
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
                <div className="bg-organizationBg w-20 h-20 rounded-md  flex items-center justify-center">
                  <img src={sign} alt="" />
                </div>
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
              <div>
                <label htmlFor="" className="text-slate-600">
                  {" "}
                  Twitter
                </label>
                <div className="flex gap-2 items-center justify-center">
                  <div className="flex items-center justify-center align-middle  bg-slate-100 p-2 h-10 rounded-md mt-2 ">
                    {" "}
                    <img src={twitterLogo} alt="" />
                  </div>
                  <input
                    type="text"
                    placeholder="Add Link"
                    className="pl-9 mt-3 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                  />
                  <img src={xMark} className="mt-3" alt="" />
                </div>
              </div>

              <div>
                <label className="text-slate-600">Instagram</label>
                <div className="flex gap-2 items-center justify-center">
                  <div className="flex items-center justify-center bg-slate-100 p-2 h-10 rounded-md mt-2 ">
                    {" "}
                    <img src={instagramLogo} alt="" />
                  </div>
                  <input
                    type="text"
                    placeholder="Add Link"
                    className="pl-9 mt-3 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                  />
                  <img src={xMark} className="mt-3" alt="" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="" className="text-slate-600">
                  Linkedin
                </label>

                <div className="flex gap-2 items-center justify-center">
                  <div className="flex items-center justify-center bg-slate-100 p-2 h-10 rounded-md mt-2 ">
                    {" "}
                    <img src={linkedinlog} alt="" />
                  </div>
                  <input
                    type="text"
                    placeholder="Add Link"
                    className="pl-9 mt-3 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                  />
                  <img src={xMark} className="mt-3" alt="" />
                </div>
              </div>

              <div>
                <label className="text-slate-600">Facebook</label>

                <div className="flex gap-2 items-center justify-center">
                  <div className="flex items-center justify-center bg-slate-100 p-2 h-10 rounded-md mt-2 ">
                    {" "}
                    <img src={facebooklogo} alt="" />
                  </div>
                  <input
                    type="text"
                    placeholder="Add Link"
                    className="pl-9 mt-3 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                  />
                  <img src={xMark} className="mt-3" alt="" />

                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <p className=" my-4">
            <b>Add Payment Information</b>
          </p>
          <div className="bg-white  border-slate-200  border-2 rounded-md mt-4 p-5">
            <p className=" my-4">
              <b>Enter Bank account Details</b>
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="text-slate-600">Account Holder Name</label>

                <input
                  type="text"
                  placeholder="Value"
                  className="pl-9 text-sm w-[100%] mt-3 rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                />
              </div>

              <div>
                <label className="text-slate-600">Bank Name</label>

                <input
                  type="text"
                  placeholder="Value"
                  className="pl-9 mt-3 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="text-slate-600">Account Number</label>
                <input
                  type="text"
                  placeholder="Value"
                  className="pl-9 mt-3 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                />
              </div>

              <div>
                <label className="text-slate-600">IFSC Code </label>
                <input
                  type="text"
                  placeholder="Value"
                  className="pl-9 text-sm mt-3 w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                />
              </div>
            </div>

            <p className=" mt-7 mb-3">
              <b>Payment Terms</b>
            </p>
            {paymentTermsList.map((i) => (
              <p className="text-textColor my-2">
                <span className="font-semibold">{i.title}</span>: {i.text}
              </p>
            ))}
          </div>
          <div className="flex my-4 gap-4">
            <Button variant="secondary" size="lg">
              {" "}
              Save
            </Button>
            <Button variant="fourthiary" size="lg">
              {" "}
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateOrganizationForm;
