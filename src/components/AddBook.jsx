import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/Slice/booksSlice";
import { useNavigate } from "react-router";

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    image: "",
    category: "",
    rating: "",
    publishedDate: "",
  });

  const handleChange = (e) => {
    setErrorMsg("");
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation: all fields must be filled
    if (
      !formData.title ||
      !formData.author ||
      !formData.description ||
      !formData.image ||
      !formData.category ||
      !formData.rating ||
      !formData.publishedDate
    ) {
      setErrorMsg("Please fill all the fields!");
      return;
    }

    const newBook = {
      id: Date.now(), // auto-generated ID
      ...formData,
      rating: parseFloat(formData.rating) || 0,
    };

    dispatch(addBook(newBook));

    // ✅ Reset form
    setFormData({
      title: "",
      author: "",
      description: "",
      image: "",
      category: "",
      rating: "",
      publishedDate: "",
    });

    navigate("/browsebooks"); // redirect after adding
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#e9eef3] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Add New Book
        </h2>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Book Title"
          className="p-2 border border-gray-300 rounded-lg"
        />

        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          className="p-2 border border-gray-300 rounded-lg"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Book Description"
          rows="3"
          className="p-2 border border-gray-300 rounded-lg resize-none"
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="p-2 border border-gray-300 rounded-lg"
        />

        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="p-2 border border-gray-300 rounded-lg"
        />

        <input
          type="number"
          step="0.1"
          max="5"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          placeholder="Rating (0 - 5)"
          className="p-2 border border-gray-300 rounded-lg"
        />

        <input
          type="date"
          name="publishedDate"
          value={formData.publishedDate}
          onChange={handleChange}
          placeholder="Published Date"
          className="p-2 border border-gray-300 rounded-lg"
        />

        <p className="text-sm text-red-500">{errorMsg}</p>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}
