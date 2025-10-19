import React, { useState } from "react";

export default function Categories({ setSearchTerm }) {
  const [active, setActive] = useState("All");

  const categories = [
    "all",
    "fantasy",
    "fiction",
    "science fiction",
    "biography",
    "history",
    "cookbooks",
    "children books",
  ];

  const handleClick = (category) => {
    setActive(category);
    setSearchTerm(category);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-500 font-medium text-sm">Books Categories</p>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleClick(cat)}
            className={`px-4 py-2 rounded-xl transition 
              ${active === cat
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-600 hover:bg-blue-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
