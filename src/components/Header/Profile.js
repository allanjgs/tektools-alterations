import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Profile = ({ userData }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleLogout = () => {
    localStorage.clear(userData);
    window.location.replace('/')
  };


  return (
    <section className=" text-white">
      <button className="flex flex-row items-center justify-end gap-x-3 w-52" onClick={() => setShowDropdown(!showDropdown)}>
        <img className="rounded-full h-12" src={`https://cdn.discordapp.com/avatars/${userData.user.id}/${userData.user.avatar}?size=64`} alt="Avatar" />
        <h2 className="text-xl font-semibold">{userData.user.global_name}</h2>
        <IoIosArrowDown />
      </button>
      {showDropdown && (
        <div className="absolute shadow-md mt-2 px-3 py-5 gap-y-2 z-50 w-52 flex flex-col items-start text-start text-lg font-medium bg-gray rounded-lg">
          <NavLink
            activeClassName='active'
            to='select-server'
            className='hover:text-white/70 hover:bg-basic/30 w-full text-start  hover:scale-110 hover:pl-4 transition duration-300'
          >
            My servers
          </NavLink>
          <button className="text-white hover:text-white/70 hover:bg-basic/30 w-full text-start  hover:scale-110 hover:pl-4 transition duration-300" onClick={handleLogout}>Logout</button>
        </div>
      )}

    </section>
  );
};

export default Profile;