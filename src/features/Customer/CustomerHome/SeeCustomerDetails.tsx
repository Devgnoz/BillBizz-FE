import { Link } from "react-router-dom";
import CheveronLeftIcon from "../../../assets/icons/CheveronLeftIcon";
import cardBg from "../../../assets/Images/Card 3 Mask.png"; 
import walletImage from "../../../assets/Images/Frame 629221.png"
import walletCashImage from "../../../assets/Images/Frame 629221 (1).png"
import revenueImage from "../../../assets/Images/Frame 629221 (2).png"
import salesImage from "../../../assets/Images/Frame 629221 (3).png"
import cardBackground from "../../../assets/Images/Frame 629314.png"
type Props = {};

function SeeCustomerDetails({ }: Props) {
  return (
    <div className="px-6">
      <div className="bg-white rounded-md p-5">
        <div className="flex items-center gap-5">
          <Link to={"/customer/home"}>
            <div
              style={{ borderRadius: "50%" }}
              className="w-[40px] h-[40px] flex items-center justify-center bg-backButton"
            >
              <CheveronLeftIcon />
            </div>
          </Link>
          <p className="text-textColor text-xl font-bold">Back</p>
        </div>

        <div className="mt-6 flex justify-between">
          {/* 1st card */}
          <div className="relative w-[27.9%] h-[146px] rounded-2xl p-4 bg-cover bg-center"
               style={{ backgroundImage: `url(${cardBg})` }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#6B0F1A] to-[#200122] opacity-75 rounded-2xl"></div>
            <div className="relative z-10">
              <p className="text-membershipText text-sm mt-1">Privilege Membership Card</p>
              <div className="flex items-center mt-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/a028/8907/fef415dd8f2188e586883af38bed1558?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nZ7oGkkq0tHpxEYBFp5mdRE0FOSRzXGZOjngXWn03e1-rHgmwZLnHVfd1dWC0Tk45bsST2Pl5d5km9D7h~MOHw6-S~GQJISN7JD78tTHB-FZXEvDQpLLXQj5E1ME4VMiHgtjv4VzoB6WAw2PbN1loPE6eXA9ACX76Qy6-NCAa3Xdm2i2~TjaRAAdDAhJN1htZYRZs-RUPjKD5DjUnzVYUwuc-MoSOBLn4Xj9X1To792JpsZW1zetVmexKz0ck2ZlFsXNmwKXWCSzEFUNXjC~fZfgWUUpZBxUHkkE5rq~jboBM1iCK1Dz-o81Ph7SFjzB36q2QjRLuUxdIjBi1TUJWg__"
                  alt="Profile"
                  className="w-8 h-8 object-cover rounded-full mr-3"
                />
                <div>
                  <p className="text-white text-sm font-semibold mt-1">Jancy Philip</p>
                  <p className="text-membershipText text-xs mt-1">8756347856</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd card */}
          <div className="w-[7.7%] h-[148px] p-6 bg-cuscolumnbg rounded-lg text-center">
              <img src={walletImage} alt="" className="object-cover" />
              <p className="mt-2 text-sm font-semibold text-textColor">Wallet</p>
              <p className="mt-1 text-lg font-bold text-textColor">0.00</p>
          </div>

          {/* 3rd card */}
          <div className="w-[13.4%] h-[148px] p-6 bg-cuscolumnbg rounded-lg text-center">
            <div className="items-center flex justify-center">
              <img src={walletCashImage} alt="" className="object-cover" />
            </div>
              <p className="mt-2 text-sm font-semibold text-textColor">Redeemed Wallet</p>
              <p className="mt-1 text-lg font-bold text-textColor">0.00</p>
          </div>

          {/* 4th card */}
          <div className="w-[11.6%] h-[148px] p-6 bg-cuscolumnbg rounded-lg text-center">
            <div className="items-center flex justify-center">
              <img src={revenueImage} alt="" className="object-cover" />
            </div>
              <p className="mt-2 text-sm font-semibold text-textColor">Total Revenue</p>
              <p className="mt-1 text-lg font-bold text-textColor">5000.00</p>
          </div>

          {/* 5th card */}
          <div className="w-[12.8%] h-[148px] p-6 bg-cuscolumnbg rounded-lg text-center">
            <div className="items-center flex justify-center">
              <img src={salesImage} alt="" className="object-cover" />
            </div>
              <p className="mt-2 text-sm font-semibold text-textColor">Total no of sales</p>
              <p className="mt-1 text-lg font-bold text-textColor">5</p>
          </div>

          {/* 6th card */}
          <div className="w-[20.65%] h-[148px] p-6 bg-cuscolumnbg rounded-lg text-center"
          style={{backgroundImage:`url(${cardBackground})`}}>
           
          </div>

        </div>
      </div>
    </div>
  );
}

export default SeeCustomerDetails;
