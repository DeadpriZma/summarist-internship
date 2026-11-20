
"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [search, setSearch] = useState("");
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!search.trim()) {
        setBook([]);
        return;
      }

      try {
        const response = await axios.get(
          `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${search}`
        );

        setBook(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setBook([]);
      }
    };

    fetchData();
  }, [search]);

  const filteredBooks = book.filter((book) =>
    book.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <nav className="bg-[#cedadd] text-white py-4 px-8 border-black shrink-0 border-b">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">
          <img src="/logo.png" alt="Summarist Logo" className="h-8 w-auto" />
        </div>

        <div className="relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search books"
            className="rounded bg-[#032b41] text-white placeholder:text-[#ccc] border border-[#ccc] focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 py-1"
          />

          {search && (
            <div className="absolute top-full left-0 w-full bg-white text-[#032b41] shadow-lg rounded z-50 mt-1 max-h-60 overflow-y-auto">
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                  <Link
                    key={book.id}
                    href={`/Book/${book.id}`}
                    onClick={() => setSearch("")}
                    className="block p-3 hover:bg-gray-100"
                  >
                    
                    {book.title}
                    <hr className="mt-2" />
                  </Link>
                  
                ))
              ) : (
                <p className="p-3 text-gray-500">No books found</p>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
