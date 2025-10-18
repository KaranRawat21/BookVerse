import { useSelector } from "react-redux"
import { Link, useParams } from "react-router";
import Rating from "./Rating";

export default function BookDetails() {

  const books = useSelector(state => state.books.list);
  const { id } = useParams();

  const seletedBook = books.find(book => book?.id === id);
  console.log(seletedBook)

  return (
    <div className="bg-[#e9eef3] min-h-screen px-3 py-5 flex flex-col gap-6">
      <Link
        to="/browsebooks"
        className=" w-fit bg-[#53a28a] p-2 hidden md:flex rounded-xl text-white "
      >Go Back</Link>

      <div className="max-w-6xl flex flex-col md:flex-row items-center gap-10">

        <div className="w-full flex justify-center">
          <img src={seletedBook?.image} className="  w-full max-w-[200px] rounded-2xl " />
        </div>

        <div className="w-full flex flex-col gap-2">
          <p className=" font-bold truncate w-50 ">{seletedBook?.title}</p>
          <p className=" text-sm"><span className="font-medium">category: </span>{seletedBook?.category}</p>
          <p className=" text-sm"><span className="font-medium">Author: </span>{seletedBook?.author}</p>
          <p>{seletedBook?.description}</p>
          <Rating rating={seletedBook?.rating} />
          <p><span className="font-medium">Published: </span>{seletedBook?.publishedDate}</p>
        </div>
      </div>
    </div>
  )
}
