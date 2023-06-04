import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { pinArticle, removeArticle } from "../store/articlesSlice";
import PushPinIcon from "@mui/icons-material/PushPin";

const Article = ({ id, title, description, urlToImage, author }) => {
  const dispatch = useDispatch();
  const { pinnedArticle, newsType } = useSelector((state) => state.articles);
  const articleTitle = title?.split(" ").slice(0, 4).join(" ");
  const articleDescription = description.split(" ").slice(0, 20).join(" ");

  return (
    <div className="border article">
      <img
        src={urlToImage}
        alt={title}
        style={{
          width: "30rem",
          height: "20rem",
          objectFit: "cover",
          borderRadius: "2rem",
        }}
      />
      <h4 style={{ fontStyle: "italic", color: "grey" }}>
        {author}{" "}
        {pinnedArticle === id && (
          <PushPinIcon style={{ color: "orange", fontSize: "2rem" }} />
        )}
      </h4>
      <h1>{articleTitle}</h1>
      <h4>{articleDescription}</h4>
      {newsType === "personal" && (
        <div className="d-flex justify-content-center align-items-center">
          <Button
            className="btn btn-warning me-2"
            onClick={() => dispatch(pinArticle(id))}
          >
            Pin
          </Button>
          <Button
            className="btn btn-danger"
            onClick={() => dispatch(removeArticle(id))}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default Article;
