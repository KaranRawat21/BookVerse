import { useSelector } from "react-redux"
import BookCard from "./BookCard";

export default function BrowseBooks() {
  const books = useSelector(state => state.books.list);

  return (
    <div className="bg-[#e9eef3] px-3 flex">
      <div>
        {books.map(book => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  )
}
