import React from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import NewsItem from '../NewsItem';

const NewsCarousel = ({newsdata}) =>{
    
        return (
            <Carousel>
                {newsdata? newsdata.map(news => {return <NewsItem title={news.title} url={news.image_url} description={news.description} link={news.link} />}): 'news loading'}
            </Carousel>
        );
    }


export default NewsCarousel;

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
