'use client'
import React from "react";
import useLogout from "@/app/hooks/usePostLogout";

type LogoutModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  activeLink: string; 
};


const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onClose, onLogout, activeLink }:LogoutModalProps) => {

  const { handleUserLogOut } = useLogout();
  const handleLogoutConfirmation = () => {
    handleUserLogOut(); 
    onClose();
  };

  return (
    <div className={` bg-opacity-50 ... ... bg-gray-500 fixed inset-0 flex items-center justify-center z-50 ${isOpen ? "" : "hidden"}`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-8 pt-20 pb-20 pl-10 rounded-lg w-66 h-250 flex flex-col items-center justify-center bg-opacity-80 backdrop-blur-50">
        <h2 className="text-2xl font-nunito mb-4 text-white">Are you sure you   <br/> want to logout?</h2>
        <div className="flex gap-4">
          <button
            className={`bg-green-500 text-white px-3 py-3 rounded-md w-28 border-2 border-green-500 font-nunito ${activeLink === "/logOut" ? "text-yellow-500" : ""}`}
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={`bg-green-500 bg-opacity-20 text-white px-3 py-3 rounded-md w-28 border-2 border-green-500 font-nunito ${activeLink === "/logOut" ? "text-yellow-500" : ""}`}
            onClick={handleLogoutConfirmation}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};
export default LogoutModal

