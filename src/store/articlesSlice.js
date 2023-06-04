import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-05-04&sortBy=publishedAt&apiKey=9b82d775bb374a8799de05d5d20ca213"
      );
      const data = await response.json();
      return data.articles;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const initialState = {
  fetchedArticles: [],
  usersArticles: [],
  totalNews: null,
  pinnedArticle: "",
  search: "",
  newsType: "personal",
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setInitialNews(state, action) {
      state.usersArticles = action.payload;
    },
    setNews(state) {
      state.newsType = state.newsType === "personal" ? "trending" : "personal";
    },
    addArticle(state, action) {
      state.usersArticles = [action.payload, ...state.usersArticles];
      localStorage.setItem(
        "usersArticles",
        JSON.stringify(state.usersArticles)
      );
    },
    removeArticle(state, action) {
      state.usersArticles = state.usersArticles.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem(
        "usersArticles",
        JSON.stringify(state.usersArticles)
      );
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    pinArticle(state, action) {
      const pinnedArticleId = action.payload;
      const { usersArticles } = state;

      const pinnedArticleIndex = usersArticles.findIndex(
        (item) => item.id === pinnedArticleId
      );

      if (pinnedArticleIndex !== -1) {
        const [pinnedArticle] = usersArticles.splice(pinnedArticleIndex, 1);

        usersArticles.unshift(pinnedArticle);
      }

      state.pinnedArticle = pinnedArticleId;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchArticles.pending, (state, action) => {})
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.fetchedArticles = action.payload;
        state.totalNews = state.fetchedArticles.length;
        console.log(state.fetchedArticles.length);
      })
      .addCase(fetchArticles.rejected, (state, action) => {}),
});

export const {
  setNews,
  setInitialNews,
  addArticle,
  removeArticle,
  pinArticle,
  setSearch,
} = articlesSlice.actions;
export default articlesSlice.reducer;
