
export default function BookCard({ book }) {
  return (
    <div className="flex md:flex-col gap-4 bg-white  rounded-2xl p-3 shadow-xl cursor-p">

      {/* book cover image */}
      <div className=" w-[100px] h-[120px]">
        <img
          className=" w-full h-full object-cover"
          src={book.image} />
      </div>


      <div>
        <p className=" font-bold truncate w-50 ">{book.title}</p>
        <p><span>category: </span>{book.category}</p>
        <p><span>Author: </span>{book.author}</p>
      </div>

    </div>
  )
}
