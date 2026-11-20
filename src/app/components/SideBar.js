"use client";

import Link from "next/link";
import { usePremium } from "@/context/PremiumContext";
import Modal from "./Modal";
import { useState } from "react";

export default function SideBar() {
  const { premium, setPremium, loaded } = usePremium();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#cedadd] py-4 px-2 h-full flex flex-col justify-between w-30 shrink-0">
      <div>
        <Link href="/for-you" className="block hover:bg-[#99acb1] w-full p-2">
          <h1 className="text-m font-bold text-[#032b41] flex justify-center">
            For You
          </h1>
        </Link>

        <Link href="/library" className="block hover:bg-[#99acb1] w-full p-2">
          <h1 className="text-m font-bold text-[#032b41] flex justify-center">
            My Library
          </h1>
        </Link>

        <button className="cursor-not-allowed hover:bg-[#99acb1] w-full p-2">
          <h1 className="text-m font-bold text-[#032b41] flex justify-center cursor-not-allowed">
            Highlights
          </h1>
        </button>

        <button className="cursor-not-allowed hover:bg-[#99acb1] w-full p-2">
          <h1 className="text-m font-bold text-[#032b41] flex justify-center cursor-not-allowed">
            Search
          </h1>
        </button>
      </div>
      
      <div>
        <Link href="/choose-plan" className="flex hover:bg-[#99acb1] w-full p-2">
          <h1 className="text-sm font-bold text-[#032b41] flex justify-center">
            Change Plans
          </h1>
        </Link>
        <Link href="/settings" className="block hover:bg-[#99acb1] w-full p-2">
          <h1 className="text-m font-bold text-[#032b41] flex justify-center">
            Settings
          </h1>
        </Link>

        <button className="cursor-not-allowed hover:bg-[#99acb1] w-full p-2">
          <h1 className="text-sm font-bold text-[#032b41] flex justify-center cursor-not-allowed">
            Help & Support
          </h1>
        </button>

        {loaded &&
          (premium ? (
            <button
              onClick={() => setPremium(false)}
              className="block hover:bg-[#99acb1] w-full p-2"
            >
              <h1 className="text-m font-bold text-[#032b41] flex justify-center">
                Logout
              </h1>
            </button>
          ) : (
            <button
              onClick={() => setIsModalOpen(true)}
              className="block hover:bg-[#99acb1] w-full p-2 cursor-pointer"
            >
              <h1 className="text-m font-bold text-[#032b41] flex justify-center">
                Login
              </h1>
            </button>
          ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
