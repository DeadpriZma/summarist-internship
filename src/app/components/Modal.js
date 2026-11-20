"use client";
import Link from "next/link";
import { usePremium } from "@/context/PremiumContext";

export default function Modal({ isOpen, onClose }) {
  const { setPremium } = usePremium(); // hooks must go above the early return

  if (!isOpen) return null;

  const handleGuestLogin = () => {
    setPremium(true);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-lg bg-white p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-2xl font-bold text-[#032b41] flex justify-center">
          Log in to Summarist
        </h2>

        <div className="flex justify-center gap-4">
          <Link
            href="/for-you"
            onClick={handleGuestLogin}
            className="text-white rounded bg-blue-900 flex justify-center items-center px-16 py-2  hover:bg-blue-950 cursor-pointer"
          >
            <p className="text-white">
              Login as a Guest
            </p>
            
          </Link>
        </div>

        <p className="my-4 text-[#394547] flex justify-center">or</p>

        <div className="flex justify-center gap-4 cursor-not-allowed">
          <button className="rounded bg-blue-700 flex justify-center items-center gap-2 px-16 py-2 text-white cursor-not-allowed hover:bg-blue-800">
            <img src="/google.png" alt="Google Icon" className="w-6 h-6" />
            Log in With Google
          </button>
        </div>

        <p className="my-4 text-[#394547] flex justify-center">or</p>

        <div className="flex justify-center gap-4 flex-col">
          <input
            type="text"
            placeholder="Enter your email"
            className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
        </div>

        <div className="flex justify-center gap-4 flex-col cursor-not-allowed">
          <button className="cursor-not-allowed rounded bg-[#2bd97c] px-6 py-2 text-[#032b41] hover:bg-[#20ba68]">
            Login
          </button>

          <button
            onClick={onClose}
            className="cursor-pointer rounded bg-black px-6 py-2 text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}