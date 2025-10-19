import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#e9eef3] text-center p-6">
      <h1 className="text-7xl font-bold text-[#53a28a] mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-3">
        Oops! Page not found 😢
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you’re looking for doesn’t exist or might have been moved.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-[#53a28a] text-white rounded-xl shadow-md hover:bg-blue-700 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
}
