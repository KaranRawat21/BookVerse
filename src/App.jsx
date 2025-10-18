import { useEffect } from "react"
import { fetchBooks } from "./redux/Slice/booksSlice";
import BrowseBooks from "./components/BrowseBooks";
import Header from "./components/Header";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch])

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
