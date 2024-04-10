import React from "react";

import logo from "./../../img/200x60.png";
import avatar from "./../../img/AvatarTektools.png";
import profile from "./../../img/profile.png";
import { BiBell } from "react-icons/bi";
import { RiArrowDropDownLine } from 'react-icons/ri';

const HeaderAdmin = () => {
  return (
    <div className='px-28 h-20 flex flow-row justify-between items-center text-white w-full bg-gradient-to-r from-[#000000] via-[#000000] to-[#2C2F48] shadow-md shadow-shadow drop-shadow-xl'>
      <a href="/" className='flex h-14 gap-x-10'>
        <img src={avatar} alt="logo" className="" />
        <img src={logo} alt="logo" />
      </a>
      <div className=' flex gap-x-5 uppercase text-2xl items-center justify-center'>
        <div className="pr-40">
          <a href="/select-server">link</a>
        </div>
        <div className="flex gap-x-6 justify-center items-center">
          <BiBell />
          <button className="flex items-center" >
            <img src={profile} alt="logo" className="rounded-full h-14 w-14 border" />
            <RiArrowDropDownLine className="text-5xl" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default HeaderAdmin;
