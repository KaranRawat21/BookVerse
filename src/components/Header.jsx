import { NavLink } from "react-router";
import { AiFillProduct } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { IoAddCircle } from "react-icons/io5";


export default function Header() {
  return (
    <div className="px-2 py-4 flex justify-between">
      <div className=" flex gap-4">
        <NavLink
          to='/'
          className="flex items-center gap-1 "><IoMdHome /> Home</NavLink>
        <NavLink
          to='browsebooks'
          className="flex items-center gap-1"><AiFillProduct /> Browse Books</NavLink>
      </div>

      <NavLink
        to='addbook'
        className="flex items-center gap-1 bg-[#53a28a] p-2 rounded-xl text-white text-sm cursor-pointer"><IoAddCircle className="text-2xl" /> Add Book</NavLink>
    </div>
  )
}
