import React from "react";
import Header from "../../components/Header/Header";
import alpha from "../../img/alpha2.svg";

const HeaderAdmin = () => {
  return (
    <div className='flex flow-row z-50 h-max-10 items-center w-full bg-gradient-to-r from-[#000000] via-[#000000] to-[#2C2F48] shadow-md shadow-shadow drop-shadow-xl'>
      <img src={alpha} alt="Alpha Test" className="absolute h-full -left-12" />
      <Header />
    </div>
  );
};
export default HeaderAdmin;
