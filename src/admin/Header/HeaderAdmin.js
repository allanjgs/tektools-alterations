import React from "react";
import Header from "../../components/Header/Header";

const HeaderAdmin = () => {
  return (
    <div className='flex flow-row z-50 h-max-10 items-center w-full bg-gradient-to-r from-[#000000] via-[#000000] to-[#2C2F48] shadow-md shadow-shadow drop-shadow-xl'>
      <span className="absolute bg-gradient-to-r from-[#9945ff] to-[#1bf5a0] inline-block text-transparent bg-clip-text -rotate-45 left-0 top-6 font-black tracking-widest text-2xl animate-pulse">ALPHA</span>
      <Header />
    </div>
  );
};
export default HeaderAdmin;
