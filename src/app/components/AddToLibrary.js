
"use client";

import { useLibrary } from "@/app/components/LibraryContext";

export default function AddToLibrary({ book }) {
  const { library, addBook, removeBook } = useLibrary();

  const isSaved = library.some((item) => item.id === book.id);

  return (
    <button
      onClick={() =>
        isSaved ? removeBook(book.id) : addBook(book)
      }
      className="bg-[#032b41] text-white px-4 py-2 rounded"
    >
      {isSaved ? "Remove from Library" : "Add to Library"}
    </button>
  );
}
