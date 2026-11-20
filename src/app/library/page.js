"use client";

import Link from "next/link";
import Nav from "@/app/components/Nav";
import SideBar from "@/app/components/SideBar";
import { useLibrary } from "@/app/components/LibraryContext";
import Modal from "../components/Modal";
import { usePremium } from "@/context/PremiumContext";
import { useState } from "react";



export default function LibraryPage() {
  const { library, removeBook } = useLibrary();
  const { premium, setPremium, loaded } = usePremium();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = (e, book) => {
  if (book.subscriptionRequired && !premium) {
    e.preventDefault();
    setIsModalOpen(true);
    }
  };

  return (
    <main className="h-screen flex flex-col overflow-hidden">
      <Nav />

      <div className="flex flex-1 min-h-0">
        <SideBar />

        <div className="flex-1 min-w-0 bg-[#e6f0f3] overflow-y-auto p-8">
          <h1 className="text-2xl font-bold mb-6 text-[#032b41]">
            My Library
          </h1>

          {library.length === 0 ? (
            <p>You haven't added any books yet.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {library.map((book) => (
                <div key={book.id}>
                  <Link href={`/Book/${book.id}`} onClick={(e)=> {
                    handleBookClick(e, book)
                    }}>
                    <div className="relative">
                      {(book.subscriptionRequired === true) && ((premium == false) &&
                        <h1 className="top-0 right-0 bg-black text-white text-xs font-bold py-1 px-2 rounded absolute">Premium</h1>
                      )}
                      <img src={book.imageLink} alt={book.title} className="w-auto h-auto object-cover rounded"></img>
                    </div>
                    <h2 className="font-semibold mt-2">{book.title}</h2>
                  </Link>

                  <button
                    onClick={() => removeBook(book.id)}
                    className="text-red-500 mt-2"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </main>
  );
}
