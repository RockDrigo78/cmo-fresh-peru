import React from "react";
import "./News.css";
import { Link } from "react-router-dom";

function News(props) {
  let { item } = props;

  if (item === undefined) {
    return (
    <div className="News">
      <div className="News-back-button">
        <Link className="btn btn-success" to="/home">
          Go Back
        </Link>
      </div>
      <div>News not available, please return to home</div>
    </div>
    )
  }

  return (
    <div className="News">
      <div className="News-back-button">
        <Link className="btn btn-success" to="/home">
          Go Back
        </Link>
      </div>
      <img
        className="News-image"
        src={item.urlToImage ? item.urlToImage : ""}
        alt="News"
      />
      <p className="NewsList-articles-source">
        {item.author} Date:
        {item.publishedAt}
      </p>
      <h2 className="News-title">{item.title}</h2>
      <p className="News-content">{item.content}</p>
    </div>
  );
}

export default News;
