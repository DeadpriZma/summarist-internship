"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LibraryContext = createContext();

export function LibraryProvider({ children }) {
  const [library, setLibrary] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedBooks = localStorage.getItem("myLibrary");

    if (savedBooks) {
      setLibrary(JSON.parse(savedBooks));
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("myLibrary", JSON.stringify(library));
    }
  }, [library, loaded]);

  const addBook = (book) => {
    setLibrary((prev) => {
      if (prev.some((item) => item.id === book.id)) {
        return prev;
      }

      return [...prev, book];
    });
  };

  const removeBook = (bookId) => {
    setLibrary((prev) => prev.filter((book) => book.id !== bookId));
  };

  return (
    <LibraryContext.Provider value={{ library, addBook, removeBook }}>
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  return useContext(LibraryContext);
}
