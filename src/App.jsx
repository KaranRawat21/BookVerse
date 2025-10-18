import { useEffect } from "react"
import { fetchBooks } from "./redux/Slice/booksSlice";
import BrowseBooks from "./components/BrowseBooks";
import Header from "./components/Header";
import { Outlet } from "react-router";

export default function App() {

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
