import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import * as Ci from 'react-icons/ci';

const Header = () => {
  return (
    <div className="h-12 bg-cyan-600 text-white text-sm p-2 flex flex-row justify-between items-center md:px-20">
      <div className="hidden sm:flex flex-row justify-start gap-4">
        <div className="flex flex-row items-center gap-1">
          <BsTelephone />
          <span>+254727533551</span>
        </div>

        <div className="flex flex-row items-center gap-1">
          <Ci.CiMail />
          <span>contact@northRift.co.ke</span>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-row w-full justify-end items-center gap-3">
          <div className="flex flex-row items-center gap-1 cursor-pointer">
            <Ci.CiLock />
            <span>Log in</span>
          </div>

          <div className="flex flex-row items-center gap-1 cursor-pointer">
            <Ci.CiUser />
            <span>Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
