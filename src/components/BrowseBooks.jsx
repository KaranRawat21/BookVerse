import { useSelector } from "react-redux";
import { useState } from "react";
import BookCard from "./BookCard";
import Categories from "./Categories";

export default function BrowseBooks() {
  const books = useSelector((state) => state.books.list);
  const [searchTerm, setSearchTerm] = useState("");

  // filter books based on search
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="bg-[#e9eef3] px-3 flex flex-col gap-6 items-center p-6 min-h-screen">
      {/* Category Section */}
      <div className="w-full">
        <Categories />
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Books Grid */}
      {
        books.length > 0 ? <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No books found matching “{searchTerm}”.
            </p>
          )}
        </div> : <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
          {
            [...Array(9)].map((_, i) => (
              <div key={i} className="w-full h-[160px] rounded-2xl shadow-xl bg-[#d9d9da] animate-color-change "></div>
            ))
          }
        </div>
      }

      {/* inline animation for color changing */}
      <style>
        {`
          @keyframes color-change {
            0%, 100% { background-color: #d9d9da; }
            50% { background-color: #c2c4c8; } /* gray-300 */
          }
          .animate-color-change {
            animation: color-change 1.5s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
