import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/Slice/booksSlice";
import BookCard from "./BookCard";

export default function Home() {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books.list);
  const loading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);


  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch])

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
        <div className=" lg:hidden flex flex-col gap-2">
          <p className=" text-gray-500 font-medium text-sm">Books Categories</p>
          {/* //only for small and medium screens */}
          <div className="flex flex-wrap gap-2 [&>button]:px-4 [&>button]:py-2 [&>button]:bg-blue-500 [&>button]:text-white [&>button]:rounded-xl [&>button]:hover:bg-blue-600 [&>button]:transition">
            <button>Fantasy</button>
            <button>Fiction</button>
            <button>Science Fiction</button>
            <button>Biography</button>
            <button>History</button>
            <button>Cook Books</button>
            <button>Children Books</button>
          </div>
        </div>

        {/* //show fome random books */}
        <div className="flex flex-col gap-4">
          {
            randomBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
