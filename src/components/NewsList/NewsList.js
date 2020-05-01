import React from "react";
import { Link } from "react-router-dom";
import "./NewsList.css";

function NewsList(props) {
  
  if (props.items.articles === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="NewsList">
      <div className="NewsList-articles">
        <h2 className="NewsList-articles-title">Latest News</h2>
        <ul className="NewsList-articles-list">
          {props.items.articles.map((item, index) => (
            <li className="NewsList-article-item" key={index}>
              <h2 className="NewsList-articles-list-title">
                <Link className="" to={`/home/${item.title}`}>
                  {item.title}
                </Link>
              </h2>
              <p className="NewsList-articles-source">
                {item.author} Date:
                {item.publishedAt}
              </p>
              <img
                className="NewsList-articles-list-image"
                src={item.urlToImage}
                alt="News"
              />
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NewsList;
