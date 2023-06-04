import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles, setInitialNews } from "../store/articlesSlice";
import { Col, Row } from "react-bootstrap";
import Article from "./Article";
import Pagination from "./Pagination";

const ArticlesContainer = () => {
  const { fetchedArticles, usersArticles, search, newsType } = useSelector(
    (state) => state.articles
  );
  const dispatch = useDispatch();

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(10);

  useEffect(() => {
    const usersNews = JSON.parse(localStorage.getItem("usersArticles")) || [];
    dispatch(setInitialNews(usersNews));
    dispatch(fetchArticles());
  }, []);

  const filterNews = (news) =>
    search
      ? news.filter(
          (item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase())
        )
      : news;

  const personalNews = filterNews(usersArticles);

  const trendingNews = filterNews(fetchedArticles);

  const news = newsType === "personal" ? personalNews : trendingNews || [];

  // Get current page News
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);
  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-5">
      <Row lg={3} md={2} xs={1} className="g-3 news">
        {currentNews.map((item) => (
          <Col key={item.id}>
            <Article {...item} />
          </Col>
        ))}
      </Row>
      {newsType === "trending" && (
        <Pagination newsPerPage={newsPerPage} paginate={paginate} />
      )}
    </div>
  );
};

export default ArticlesContainer;
