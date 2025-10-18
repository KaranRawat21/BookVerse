import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (_, thunkAPI) => {
    try {
      const categories = [
        "fantasy",
        "fiction",
        "non-fiction",
        "science fiction",
        "biography",
        "history",
        "cookbooks",
        "children books",
      ];

      const allBooks = [];

      for (const category of categories) {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${encodeURIComponent(
            category
          )}&maxResults=10`
        );

        const books = response.data.items?.map((item) => ({
          id: item.id,
          title: item.volumeInfo.title || "Unknown Title",
          author: item.volumeInfo.authors?.join(", ") || "Unknown Author",
          description:
            item.volumeInfo.description || "No description available.",
          image:
            item.volumeInfo.imageLinks?.thumbnail ||
            "https://via.placeholder.com/150x200?text=No+Image",
          category: category,
          rating: item.volumeInfo.averageRating
            ? item.volumeInfo.averageRating.toFixed(1)
            : (Math.random() * 2 + 3).toFixed(1), // fallback rating
          publishedDate: item.volumeInfo.publishedDate || "Unknown",
        }));

        allBooks.push(...(books || []));
      }

      return allBooks;
    } catch (error) {
      const errorMsg =
        error.response?.data?.error?.message ||
        error.message ||
        "Failed to fetch books";
      return thunkAPI.rejectWithValue(errorMsg);
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBooks.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default booksSlice.reducer;