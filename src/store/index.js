import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "./articlesSlice";

const store = configureStore({
  reducer: { articles: articlesSlice },
});

export default store;
