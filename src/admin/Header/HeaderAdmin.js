import React from "react";

import logo from "./../../img/200x60.png";
import avatar from "./../../img/AvatarTektools.png";
import profile from "./../../img/profile.png";
import { BiBell } from "react-icons/bi";
import { RiArrowDropDownLine } from 'react-icons/ri';
import Header from "../../components/Header/Header";

const HeaderAdmin = () => {
  return (
    <div className='flex flow-row items-center w-full bg-gradient-to-r from-[#000000] via-[#000000] to-[#2C2F48] shadow-md shadow-shadow drop-shadow-xl'>
        {/* <img src={avatar} alt="logo" className="h-16 items-center" /> */}
      <Header/>
    </div>
  );
};
export default HeaderAdmin;
