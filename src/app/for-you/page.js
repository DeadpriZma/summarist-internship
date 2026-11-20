"use client";
import React from "react";
import axios from "axios";
import Link from "next/link";

import { usePremium } from "@/context/PremiumContext";

import Navbar from "../components/Nav";
import Sidebar from "../components/SideBar";

import { useEffect, useState } from "react";

import Modal from "../components/Modal";

export default function ForYou() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { premium, setPremium, loaded } = usePremium();

  const [book, setBook] = useState([]);
  const [booksR, setBooksR] = useState([]);
  const [booksS, setBooksS] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected");
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchRBooksData = async () => {
      try {
        const response = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended");
        setBooksR(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchSBooksData = async () => {
      try {
        const response = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested");
        setBooksS(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    fetchRBooksData();
    fetchSBooksData();
  }, []);

  const handleBookClick = (e, book) => {
  if (book.subscriptionRequired && !premium) {
    e.preventDefault();
    setIsModalOpen(true);
    }
  };

  return (
    <main className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-row flex-1 min-h-0">
        <Sidebar />
        <div className="flex-1 min-w-0 min-h-0 bg-[#e6f0f3] overflow-y-auto">
          <div className="flex-1 bg-[#e6f0f3] py-4 px-2 min-h-0 overflow-y-auto">
            <div className="py-4 px-2 h-20 flex justify-center items-center">
              <h1 className="text-xl font-bold text-[#032b41]">Selected just for you</h1>
            </div>
            <div className="p-4 bg-green-300 flex justify-between w-full max-w-2xl mx-auto h-auto overflow-y-auto">
              {book.map((book) => (
                <div key={book.id} className="flex justify-between">
                  <Link href={`/Book/${book.id}`} className="flex justify-between">
                  <div className="flex flex-col justify-center m-4 p-4">
                    <h1 className="text-lg font-semibold text-[#032b41]">{book.subTitle}</h1>
                    <div className="flex flex-col justify-center m-4 p-4">
                    <h2 className="text-md font-normal text-[#032b41]">{book.title}</h2>
                    <p className="text-sm text-[#032b41]">By: {book.author}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <img src={book.imageLink} alt={book.title} className="w-full h-max rounded" />
                  </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 py-4 px-2 min-h-0 items-center overflow-y-auto">
            <div className="py-4 px-2 h-20 flex justify-center items-center">
              <h1 className="text-xl font-bold text-[#032b41]">Recommended for you</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto p-2">
              {booksR.slice(0, 4).map((book) => (
                <div key={book.id} className="flex flex-col">
                  <Link href={`/Book/${book.id}`} className="flex flex-col" onClick={(e)=> {
                    handleBookClick(e, book)
                    }} >
                  <div className="flex flex-col justify-center items-center">
                    <div className="relative">
                      {(book.subscriptionRequired === true) && ((premium == false) &&
                        <h1 className="top-0 right-0 bg-black text-white text-xs font-bold py-1 px-2 rounded absolute">Premium</h1>
                      )}
                      <img src={book.imageLink} alt={book.title} className="w-auto h-auto object-cover rounded"></img>
                    </div>
                    
                    <div className="flex flex-col justify-center p-1">
                      <h1 className="text-sm font-semibold text-[#032b41]">{book.title}</h1>
                      <p className="text-sm text-gray-500">By: {book.author}</p>
                      <h1 className="text-sm font-normal text-[#032b41]">{book.subTitle}</h1>
                    </div>
                  </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />     
        
          <div className="flex-1 py-4 px-2 min-h-0 items-center overflow-y-auto">
            <div className="py-4 px-2 h-20 flex justify-center items-center">
              <h1 className="text-xl font-bold text-[#032b41]">Suggested for you</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto p-2">
              {booksS.slice(0, 4).map((book) => (
                <div key={book.id} className="flex flex-col">
                <Link href={`/Book/${book.id}`} className="flex flex-col" onClick={(e)=> {
                    handleBookClick(e, book)
                    }}>
                  <div className="flex flex-col justify-center items-center">
                    <div className="relative">
                      {(book.subscriptionRequired === true) && ((premium == false) &&
                        <h1 className="top-0 right-0 bg-black text-white text-xs font-bold py-1 px-2 rounded absolute">Premium</h1>
                      )}
                      <img src={book.imageLink} alt={book.title} className="w-auto h-auto object-cover rounded"></img>
                    </div>
                    <div className="flex flex-col justify-center p-1">
                      <h1 className="text-sm font-semibold text-[#032b41]">{book.title}</h1>
                      <p className="text-sm text-gray-500">By: {book.author}</p>
                      <h1 className="text-sm font-normal text-[#032b41]">{book.subTitle}</h1>
                    </div>
                  </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
      
    </main>
  );
}
