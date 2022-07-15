import React from "react";
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NewsItem from "../NewsItem";
import css from "./index.module.css";

const NewsCarousel = ({ newsdata }) => {
  return (
    <Carousel>
      <div className={css.carousel}>
        {newsdata
          ? newsdata.slice(1, 4).map((news) => {
              return (
                <NewsItem
                  title={news.title}
                  url={news.image_url}
                  description={news.description}
                  link={news.link}
                />
              );
            })
          : "news loading"}
      </div>
      <div className={css.carousel}>
        {newsdata
          ? newsdata.slice(4, 7).map((news) => {
              return (
                <NewsItem
                  title={news.title}
                  url={news.image_url}
                  description={news.description}
                  link={news.link}
                />
              );
            })
          : "news loading"}
      </div>
      <div className={css.carousel}>
        {newsdata
          ? newsdata.slice(7, 10).map((news) => {
              return (
                <NewsItem
                  title={news.title}
                  url={news.image_url}
                  description={news.description}
                  link={news.link}
                />
              );
            })
          : "news loading"}
      </div>
    </Carousel>
  );
};

export default NewsCarousel;

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
