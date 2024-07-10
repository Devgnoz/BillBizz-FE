import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../Components/Button";
import QrCode from "../../assets/Images/qr-code.svg";
import Qrsign from "../../assets/Images/sign.svg";
import instagramLogo from "../../assets/Images/instagram logo.svg";
import twitterLogo from "../../assets/Images/twitter logo.svg";
import linkedinlog from "../../assets/Images/linkedin logo.svg";
import facebooklogo from "../../assets/Images/facebook logo.svg";
import xMark from "../../assets/Images/x.svg";
import { paymentTermsList } from "../../assets/constants/index";
import useApi from "../../Hooks/useApi";
import { endponints } from "../../Services/apiEndpoints";
import { toast, Toaster } from "react-hot-toast";

interface InputData {
  organizationLogo: string;
  organizationName: string;
  organizationCountry: string;
  organizationIndustry: string;
  addline1: string;
  addline2: string;
  city: string;
  pincode: string;
  state: string;
  organizationPhNum: string;
  website: string;
  baseCurrency: string;
  fiscalYear: string;
  reportBasis: string;
  language: string;
  timeZone: string;
  dateFormat: string;
  dateSplit: string;
  companyId: string;
  companyIdField: string;
  taxId: string;
  taxIdField: string;
  addfield:{ label: string, value: string }[];
  qrLocation: string;
  qrSignature: string;
  twitter: string;
  insta: string;
  linkedin: string;
  facebook: string;
  accountHolderName: string;
  bankName: string;
  accNum: string;
  ifsc: string;
}

interface Field {
  label: string;
  value: string;
}

const CreateOrganizationForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState<File | null>(null);
  const [qrCode, setQrcode] = useState<File | null>(null);
  const [sign, setSign] = useState<File | null>(null);
  const [additionalData, setAdditionalData] = useState<any | null>([]);
  const { request: getAdditionalData } = useApi("get");
  const { request: createOrganization } = useApi("post");
  const [fields, setFields] = useState<{ label: string, value: string }[]>([{ label: "", value: "" }]);  const [inputData, setInputData] = useState<InputData>({
    organizationLogo: "", //image field
    organizationName: "",
    organizationCountry: "",
    organizationIndustry: "",
    addline1: "",
    addline2: "",
    city: "",
    pincode: "",
    state: "",
    organizationPhNum: "",
    website: "",
    baseCurrency: "",
    fiscalYear: "",
    reportBasis: "",
    language: "",
    timeZone: "",
    dateFormat: "",
    dateSplit: "",
    companyId: "",
    companyIdField: "",
    taxId: "",
    taxIdField: "",
    addfield: [],
    qrLocation: "", // image field
    qrSignature: "", // image field
    twitter: "",
    insta: "",
    linkedin: "",
    facebook: "",
    accountHolderName: "",
    bankName: "",
    accNum: "",
    ifsc: "",
  });

  // console.log(inputData);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getDropdownList = async () => {
    try {
      const url = `${endponints.GET_ADDITIONAL_DATA}`;
      const { response, error } = await getAdditionalData(url);
      if (!error && response) {
        setAdditionalData(response.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDropdownList();
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSignChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSign(file);
      setInputData((prevDetails: any) => ({
        ...prevDetails,
        qrSignature: URL.createObjectURL(file),
      }));
    }
  };

  const handleQrocodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setQrcode(file);
      setInputData((prevDetails: any) => ({
        ...prevDetails,
        qrLocation: URL.createObjectURL(file),
      }));
    }
  };

  const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogo(file);
      setInputData((prevDetails: any) => ({
        ...prevDetails,
        organizationLogo: URL.createObjectURL(file),
      }));
    }
  };

  const handleCreateOrganization = async (e: any) => {
    e.preventDefault();
    const formData: any = new FormData();
    formData.append("organizationLogo", inputData.organizationLogo);
    formData.append("organizationName", inputData.organizationName);
    formData.append("organizationCountry", inputData.organizationCountry);
    formData.append("organizationIndustry", inputData.organizationIndustry);
    formData.append("addline1", inputData.addline1);
    formData.append("addline2", inputData.addline2);
    formData.append("city", inputData.city);
    formData.append("pincode", inputData.pincode);
    formData.append("state", inputData.state);
    formData.append("organizationPhNum", inputData.organizationPhNum);
    formData.append("website", inputData.website);
    formData.append("baseCurrency", inputData.baseCurrency);
    formData.append("fiscalYear", inputData.fiscalYear);
    formData.append("reportBasis", inputData.reportBasis);
    formData.append("language", inputData.language);
    formData.append("timeZone", inputData.timeZone);
    formData.append("dateFormat", inputData.dateFormat);
    formData.append("dateSplit", inputData.dateSplit);
    formData.append("companyId", inputData.companyId);
    formData.append("companyIdField", inputData.companyIdField);
    formData.append("taxId", inputData.taxId);
    formData.append("taxIdField", inputData.taxIdField);
    // formData.append("addfield", JSON.stringify(fields)); 
    formData.append("qrLocation", inputData.qrLocation);
    formData.append("qrSignature", inputData.qrSignature);
    formData.append("twitter", inputData.twitter);
    formData.append("insta", inputData.insta);
    formData.append("linkedin", inputData.linkedin);
    formData.append("facebook", inputData.facebook);
    formData.append("accountHolderName", inputData.accountHolderName);
    formData.append("bankName", inputData.bankName);
    formData.append("accNum", inputData.accNum);
    formData.append("ifsc", inputData.ifsc);

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    // Log the formData entries
    console.log(inputData, "ID");

    try {
      const url = `${endponints.CREATE_ORGANIZATION}`;
      const apiResponse = await createOrganization(url, formData);
      console.log(apiResponse, "api response");

      const { response, error } = apiResponse;
      if (!error && response) {
        toast.success(response.data.message);
        console.log(response.data.message, "message");
      } else {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
      }
    } catch (error) {
      console.log(error, "try");
    }
  };

  const addAdditionalField = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFields([...fields, { label: "", value: "" }]);
  };

  const handleFieldChange = (index: number, e: ChangeEvent<HTMLInputElement>, fieldName: 'label' | 'value') => {
    const { value } = e.target;
    const newFields = [...fields];
    newFields[index][fieldName] = value;
    setFields(newFields);
  };

  console.log(fields,"fields");
  

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
      <form className="text-slate-800" >
        <label>
          <div className="h-56 p-3 border-dashed border-neutral-400 w-96 rounded-md mt-5 border text-slate-800 ">
            <div className="bg-lightPink flex h-28 justify-center items-center">
              {logo ? (
                <img src={URL.createObjectURL(logo)} alt="" className="h-24" />
              ) : (
                <>
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
                  <p className="text-sm ms-2">
                    {" "}
                    Upload Your Organizational Logo
                  </p>
                </>
              )}
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
          <input
        
            type="file"
            className="hidden"
            onChange={(e) => handleLogoChange(e)}
          />
        </label>
        <p className="mt-4">
          <b>Organizational Details</b>
        </p>

        <div className="bg-white border-slate-200  border-2 rounded-md mt-4 p-5">
          <label className="text-slate-600">Organization Name</label>
          <input
            className="pl-9 text-sm w-[100%] mt-3 rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
            placeholder="Name"
            name="organizationName"
            value={inputData.organizationName}
            onChange={handleInputChange}
            required
          />{" "}
          <div className="grid grid-cols-2 gap-4 my-3">
            <div className="relative ">
              <label htmlFor="location" className="text-slate-600">
                Oganization Location
              </label>
              <div className="relative w-full mt-3">
                <select
                  value={inputData.organizationCountry}
                  onChange={handleInputChange}
                  name="organizationCountry"
                  id="Location"
                  className="block appearance-none w-full bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="">Select a country</option>
                  <option value="india">India</option>
                  <option value="argentina">Argentina</option>
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
              <label htmlFor="organizationIndustry" className="text-slate-600">
                Industry
              </label>
              <div className="relative w-full mt-3">
                <select
                  onChange={handleInputChange}
                  name="organizationIndustry"
                  id="organizationIndustry"
                  className="block appearance-none w-full bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="">Select Industry</option>

                  {additionalData.industry &&
                  additionalData.industry.length > 0 ? (
                    additionalData.industry.map((item: any, index: any) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))
                  ) : (
                    <></>
                  )}
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
                name="addline1"
                value={inputData.addline1}
                onChange={handleInputChange}
              />{" "}
            </div>

            <div>
              <input
                className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                placeholder="Street 1"
                name="addline2"
                value={inputData.addline2}
                onChange={handleInputChange}
              />{" "}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <input
                className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                placeholder="City"
                value={inputData.city}
                name="city"
                onChange={handleInputChange}
              />{" "}
            </div>

            <div>
              <input
                className="pl-9 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                placeholder="Pincode"
                type="text"
                value={inputData.pincode}
                name="pincode"
                onChange={handleInputChange}
              />{" "}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="relative ">
              <div className="relative w-full">
                <select
                  onChange={handleInputChange}
                  name="state"
                  id="state"
                  className="block appearance-none w-full bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="">Select a State</option>

                  <option value="kerala" className="text-slate-300">
                    Kerala
                  </option>
                  <option value="tamilNadu" className="text-slate-300">
                    TamilNadu
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
                type="tel"
                value={inputData.organizationPhNum}
                name="organizationPhNum"
                onChange={handleInputChange}
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
              value={inputData.website}
              name="website"
              onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    name="baseCurrency"
                    id="currency"
                    className="block appearance-none w-full bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="">Select Currency</option>

                    <option value="USD" className="text-slate-300 ">
                      USD
                    </option>
                    <option value="EUR" className="text-slate-300 ">
                      EUR
                    </option>
                    <option value="INR" className="text-slate-300 ">
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

              <div className="relative">
                <label htmlFor="fiscalYear" className="text-slate-600">
                  Financial Year
                </label>

                <div className="relative w-full mt-3">
                  <select
                    onChange={handleInputChange}
                    name="fiscalYear"
                    id="fiscalYear"
                    className="block appearance-none w-full bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="">Select Financial Year</option>

                    {additionalData.financialYear &&
                    additionalData.financialYear.length > 0 ? (
                      additionalData.financialYear.map(
                        (item: any, index: any) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        )
                      )
                    ) : (
                      <></>
                    )}
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
                onChange={handleInputChange}
                value="Accrual"
                name="reportBasis"
                type="radio"
                placeholder=""
                className="mt-2text-slate-600 "
              />{" "}
              <label htmlFor="" className="text-slate-600">
                {" "}
                <span className="font-semibold">Accrual</span> (You owe tax as
                of invoice date)
              </label>
              <input
                onChange={handleInputChange}
                type="radio"
                value="cash"
                name="reportBasis"
                className="ms-4"
              />{" "}
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
                    onChange={handleInputChange}
                    name="language"
                    id="Location"
                    className="block appearance-none w-full bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="">Select a Language</option>

                    <option value="english">English</option>
                    <option value="Tamil">Tamil</option>
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
                <label htmlFor="timeZone" className="text-slate-600">
                  Time Zone
                </label>
                <div className="relative w-full my-3">
                  <select
                    name="timeZone"
                    onChange={handleInputChange}
                    id="timeZone"
                    className="block appearance-none w-full bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="">Select Time zone</option>

                    <option value="IST">IST</option>
                    <option value="UTC">UTC</option>
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
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative ">
                <label htmlFor="dateformat" className="text-slate-600">
                  Date Format
                </label>
                <div className="relative w-full mt-3">
                  <select
                    onChange={handleInputChange}
                    name="dateFormat"
                    id="dateFormat"
                    className="block appearance-none w-full bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="">Select Date Format</option>

                    {additionalData?.dateFormat?.medium &&
                    additionalData?.dateFormat.medium.length > 0 ? (
                      additionalData.dateFormat.medium.map(
                        (item: any, index: any) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        )
                      )
                    ) : (
                      <></>
                    )}
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
                <div className="relative ">
                  <label htmlFor="dateSplit" className="text-slate-600">
                    Date Split
                  </label>
                  <div className="relative w-full mt-3">
                    <select
                      onChange={handleInputChange}
                      name="dateSplit"
                      id="dateSplit"
                      className="block appearance-none w-full bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option value="">Select Date Split</option>

                      {additionalData?.dateSplit &&
                      additionalData?.dateSplit.length > 0 ? (
                        additionalData?.dateSplit.map(
                          (item: any, index: any) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          )
                        )
                      ) : (
                        <></>
                      )}
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
            </div>
            <label htmlFor="companyId" className="text-slate-600 ">
              Company Id
            </label>
            <div className="grid grid-cols-2 gap-4 ">
              <div>
                <div className="relative w-full mt-3">
                  <select
                    onChange={handleInputChange}
                    name="companyId"
                    id="companyId"
                    className="block appearance-none w-full bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="">Select a Company Id</option>

                    {additionalData.companyId &&
                    additionalData.companyId.length > 0 ? (
                      additionalData.companyId.map((item: any, index: any) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))
                    ) : (
                      <></>
                    )}
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
                  type="text"
                  placeholder="Company Id"
                  className="pl-9 text-sm w-[100%] mt-3 rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                  value={inputData.companyIdField}
                  name="companyIdField"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <label htmlFor="taxId" className="text-slate-600 mt-3">
              Tax Id
            </label>
            <div className="grid grid-cols-2 gap-4 ">
              <div>
                <div className="relative w-full mt-3">
                  <select
                    onChange={handleInputChange}
                    name="taxId"
                    id="taxId"
                    className="block appearance-none w-full bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="">Select Tax Id</option>

                    {additionalData.taxId && additionalData.taxId.length > 0 ? (
                      additionalData.taxId.map((item: any, index: any) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))
                    ) : (
                      <></>
                    )}
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

              <input
                type="text"
                placeholder="Tax Id"
                className="pl-9 text-sm w-[100%] mt-3 rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                value={inputData.taxIdField}
                name="taxIdField"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
          <p className="mt-4">
            <b>Additional Field</b>
          </p>
      {fields.length>0 && fields.map((field, index) => (
        <div key={index} className="bg-white border-slate-200 border-2 rounded-md mt-4 p-5">

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor={`label-${index}`} className="text-slate-600">
                Label Name
              </label>
              <input
                type="text" 
                id={`label-${index}`}
                name="label"
                value={field.label}
                onChange={(e) => handleFieldChange(index, e, 'label')}
                className="pl-9 mt-3 text-sm w-[100%] rounded-md text-start border-2 border-slate-200 h-[39px] p-2"
                placeholder="Value"
              />
            </div>

            <div>
              <label htmlFor={`value-${index}`} className="text-slate-600">
                Value
              </label>
              <input
                type="text"
                id={`value-${index}`}
                name="value"
                value={field.value}
                onChange={(e) => handleFieldChange(index, e,'value')}
                className="pl-9 mt-3 text-sm w-[100%] rounded-md text-start border-2 border-slate-200 h-[39px] p-2"
                placeholder="Value"
              />
            </div>
          </div>
        </div>
      ))}
      
      <button onClick={addAdditionalField} className="mt-5">
        <p className="text-darkRed mt-5 text-sm flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <b> Add New Field</b>
        </p>
      </button>
    </div>

          <p className=" my-4">
            <b>QR Location</b>
          </p>
          <label>
            <div className=" border-dashed rounded-md border-2 p-5 border-neutral-400 grid grid-cols-12 gap-4  ">
              <div className="col-span-10 flex ">
                <div className="bg-organizationBg w-20 h-20 rounded-md flex items-center justify-center ">
                  {qrCode ? (
                    <img src={URL.createObjectURL(qrCode)} alt="" />
                  ) : (
                    <img src={QrCode} alt="" />
                  )}
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
            <input
              type="file"
              className="hidden"
              onChange={(e) => handleQrocodeChange(e)}
            />
          </label>
          <p className=" my-4">
            <b>Invoice Signatory</b>
          </p>
          <label>
            <div className=" border-dashed rounded-md border-2 p-5 border-neutral-400 grid grid-cols-12 gap-4  ">
              <div className="col-span-10 flex ">
                <div className="bg-organizationBg w-20 h-20 rounded-md  flex items-center justify-center object-cover">
                  {sign ? (
                    <img src={URL.createObjectURL(sign)} alt="" />
                  ) : (
                    <img src={Qrsign} alt="" />
                  )}
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
            <input
              type="file"
              className="hidden"
              onChange={(e) => handleSignChange(e)}
            />
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
                    value={inputData.twitter}
                    name="twitter"
                    onChange={handleInputChange}
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
                    value={inputData.insta}
                    name="insta"
                    onChange={handleInputChange}
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
                    value={inputData.linkedin}
                    name="linkedin"
                    onChange={handleInputChange}
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
                    value={inputData.facebook}
                    name="facebook"
                    onChange={handleInputChange}
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
                  value={inputData.accountHolderName}
                  name="accountHolderName"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="text-slate-600">Bank Name</label>

                <input
                  type="text"
                  placeholder="Value"
                  className="pl-9 mt-3 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                  value={inputData.bankName}
                  name="bankName"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="text-slate-600">Account Number</label>
                <input
                  type="number"
                  placeholder="Value"
                  className="pl-9 mt-3 text-sm w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                  value={inputData.accNum}
                  name="accNum"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="text-slate-600">IFSC Code </label>
                <input
                  type="text"
                  placeholder="Value"
                  className="pl-9 text-sm mt-3 w-[100%] rounded-md text-start border-2  border-slate-200  h-[39px] p-2"
                  value={inputData.ifsc}
                  name="ifsc"
                  onChange={handleInputChange}
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
            <Button
              variant="secondary"
              size="lg"
              onClick={(e) => handleCreateOrganization(e)}
            >
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

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default CreateOrganizationForm;
