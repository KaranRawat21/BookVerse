import { Link } from "react-router";

export default function BookCard({ book }) {

  const currentPath = location.pathname;
  const linkPath = currentPath.startsWith("/browsebooks") ? `/browsebooks/book/${book.id}`
    : `/book/${book.id}`;
  console.log(linkPath)

  return (
    <Link to={linkPath} className="flex  gap-4 bg-white  rounded-2xl p-3 shadow-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-102">

      {/* book cover image */}
      <div className=" w-[100px] h-[130px]">
        <img
          className=" min-w-[100px] h-full object-cover"
          src={book.image} />
      </div>


      <div className="flex flex-col gap-1">
        <p className=" font-bold truncate w-50 ">{book.title}</p>
        <p className=" text-sm"><span className="font-medium">category: </span>{book.category}</p>
        <p className=" text-sm"><span className="font-medium">Author: </span>{book.author}</p>
      </div>

    </Link>
  )
}
