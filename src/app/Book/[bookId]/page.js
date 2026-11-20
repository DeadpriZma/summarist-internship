export const instant = false;
import BookAudio from "@/app/components/Audio";
import Nav from "@/app/components/Nav";
import SideBar from "@/app/components/SideBar";

import { BiBook } from "react-icons/bi";
import { MdMic } from "react-icons/md";
import { PiFlagBanner } from "react-icons/pi";
import { BiStar } from "react-icons/bi";

import Link from "next/link";

import AddToLibrary from "@/app/components/AddToLibrary";

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
          <div className="flex items-center justify-center flex-col">
            <div className="w-full p-6 flex items-center justify-center md:flex-row flex-col-reverse">
              <div className=" w-1/2 p-2 ">
                <h1 className="text-3xl pb-4 flex justify-center items-center font-bold text-[#032b41]">
                  {book.title}
                </h1>
                <p className="text-lg text-[#032b41] pb-4 italic">"{book.subTitle}"</p>
                <h2 className="text-lg font-bold mb-2 text-[#032b41]">
                  Author: {book.author}
                </h2>
                <hr className="text-black"/>
                <div className="flex mt-2">
                  <div className="mx-4">
                    <div className="flex gap-1 flex-col items-center md:flex-row">
                      <p className="flex gap-1 items-center"> <span className="font-bold">Rating:</span> {book.averageRating}/5 {BiStar()}</p>
                      <p>({book.totalRating} ratings)</p>
                      </div>
                    <p> <span className="font-bold">Type:</span> {book.type}</p>
                    <div className="flex gap-2">
                      <p className="font-bold">Duration:</p> <BookAudio audioLink={book.audioLink} showPlayer={false} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex items-center justify-center">
                <img
                  src={book.imageLink}
                  alt={book.title}
                  className="w-60 h-auto mb-4"
                />
              </div>
            </div>
            <div className="flex gap-4 mb-4">
              <Link href={`/Player/${book.id}`}><button className="bg-[#032b41] text-white px-9 p-3 rounded cursor-default flex items-center">{BiBook()}Read</button></Link>
              <button className="bg-[#032b41] px-9 p-3 text-white rounded cursor-default flex items-center">{MdMic()}Listen</button>
            </div>
            <div>
              <AddToLibrary book={book}>{PiFlagBanner()}</AddToLibrary>
            </div>
            
            <div className="p-4 flex justify-between w-full max-w-2xl mx-auto">
              <div className="flex flex-col gap-4">
                <h1 className="font-bold">What's it about?</h1>
                <div className="flex gap-2">
                  <p className="bg-gray-300 p-3 rounded cursor-default">{book.tags[0]}</p>
                  {book.tags[1] &&
                  <p className="bg-gray-300 p-3 rounded cursor-default">{book.tags[1]}</p>
                  }
                </div>
                
                <p className="text-[#032b41]">{book.bookDescription}</p>
                <h1 className="font-bold">About the author</h1>
                <p className="text-[#032b41]">{book.authorDescription}</p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
