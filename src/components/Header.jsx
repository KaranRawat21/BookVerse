import { NavLink } from "react-router";

export default function Header() {
  return (
    <div>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='browsebooks'>Browse Books</NavLink>
      </div>

      <NavLink to='addbook'>Add Book</NavLink>
    </div>
  )
}
