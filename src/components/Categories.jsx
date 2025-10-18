import React from 'react'

export default function Categories() {
  return (
    <div className=" flex flex-col gap-2">
      <p className=" text-gray-500 font-medium text-sm">Books Categories</p>

      <div className="flex flex-wrap gap-2 [&>button]:px-4 [&>button]:py-2 [&>button]:bg-blue-500 [&>button]:text-white [&>button]:rounded-xl [&>button]:hover:bg-blue-600 [&>button]:transition">
        <button>Fantasy</button>
        <button>Fiction</button>
        <button>Science Fiction</button>
        <button>Biography</button>
        <button>History</button>
        <button>Cook Books</button>
        <button>Children Books</button>
      </div>
    </div>

  )
}
