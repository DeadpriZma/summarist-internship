"use client";
import React from "react";

import Navbar from "../components/Nav";
import Sidebar from "../components/SideBar";


export default function Settings() {
  
  return (
    <main className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-row flex-1 min-h-0">
        <Sidebar />
        <div className="flex-1 min-w-0 min-h-0 bg-[#e6f0f3] overflow-y-auto">
          <div className="flex-1 bg-[#e6f0f3] py-4 px-2 min-h-0 overflow-y-auto">
            <div className="py-4 px-2 h-20 flex justify-center items-center">
              <h1 className="text-xl font-bold text-[#032b41]">Settings</h1>
            </div>
            <hr className="opacity-20"/>
            <div className="p-4 flex justify-between w-full max-w-2xl mx-auto h-auto overflow-y-auto">
              <h1 className="font-bold">Subscription Plan:</h1>
              <p>premium</p>
            </div>
            <hr className="opacity-20"/>
            <div className="p-4 flex justify-between w-full max-w-2xl mx-auto h-auto overflow-y-auto">
              <h1 className="font-bold">Email:</h1>
              <p>example@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
