import { Fragment } from "react";
import { AddArticle, ArticlesContainer, Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <AddArticle />
      <ArticlesContainer />
    </Fragment>
  );
}

export default App;
