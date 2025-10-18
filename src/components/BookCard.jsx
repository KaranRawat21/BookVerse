
export default function BookCard({ book }) {
  return (
    <div className="flex md:flex-col gap-4 bg-white  rounded-2xl p-3 shadow-xl cursor-p">

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

    </div>
  )
}
