import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/Slice/booksSlice";
import BookCard from "./BookCard";
import Categories from "./Categories";

export default function Home() {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books.list);
  const loading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);


  const randomBooks = useMemo(() => {
    if (books.length === 0) return [];

    const temp = [];

    const getRandomBook = () => {

      const randomNum = Math.floor(Math.random() * books.length);

      const randomBook = books[randomNum];

      //check if this book already exists in randomBooks
      const exists = temp.some(item => item.id === randomBook.id);

      if (!exists) {
        temp.push(randomBook);
      }

    }

    while (temp.length < 4) {
      getRandomBook();
    }
    return temp;
  }, [books]);



  return (
    <div className=" bg-[#e9eef3] px-3 py-10 flex flex-col gap-10">
      <div className="flex flex-col items-center gap-6">
        <h1 className=" text-3xl font-bold text-center text-[#5a8d7e]">Welcome to the Digital Library</h1>
        <p className="text-center text-[#8a8f96] font-medium">Explore books from fantasy to history and discover stories that inspire, entertain, and spark your imagination.</p>
      </div>

      {/* //category container */}
      <div className="flex flex-col gap-5  ">
        <Categories />

        {/* //show fome random books */}
        {
          books.length > 0 ? <div className="flex flex-col gap-4">
            {
              randomBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))
            }
          </div>
            :
            <div className="w-full h-[140px] rounded-2xl shadow-xl animate-color-change"></div>
        }

      </div>

      {/* inline animation for color changing */}
      <style>
        {`
          @keyframes color-change {
            0%, 100% { background-color: #a9aaac; }
            50% { background-color: #d1d5db; } /* gray-300 */
          }
          .animate-color-change {
            animation: color-change 1.5s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  )
}
