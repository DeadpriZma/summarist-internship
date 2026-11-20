export const instant = false;
import BookAudio from "@/app/components/Audio";
import Nav from "@/app/components/Nav";
import SideBar from "@/app/components/SideBar";

import Link from "next/link";

export default async function BookPage({ params }) {
  const { bookId } = await params;
  const response = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${bookId}`,
  );
  const book = await response.json();

  return (
    <main className="h-screen flex flex-col overflow-hidden">
      <Nav />
      <div className="flex flex-1 min-h-0">
        <SideBar />
        <div className="flex-1 min-w-0 bg-[#e6f0f3] overflow-y-auto">
          <div className="flex items-center justify-center">
            <h1 className="text-[#032b41] font-bold text-xl p-4">
              {book.title}
            </h1>
          </div>
          <hr className="text-black" />
          <div className="">
            <BookAudio audioLink={book.audioLink} showPlayer={true} showDuration={false} />
          </div>
          <div className="flex flex-col gap-4 p-2">
            {book.summary.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-md">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
