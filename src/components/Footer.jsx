import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { logoWhite } from "../assets";

export const Footer = () => {
  return (
    <div className="py-[50px] mt-[200px] bg-[#272727] text-white font-thin flex flex-col items-center justify-center">
      <div className="">
        <img src={logoWhite} alt="" className="w-[150px]" />
      </div>
      <div className="flex flex-col justify-center items-center mt-[50px]">
        <h1>
          &copy; 2024 Copyright, Meezan Bungalows. Hotline: +94 11 2 666 333
        </h1>
        <div className="flex gap-2 mt-2">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};
