
import { useEffect } from "react";
import NewsCarousel from "./components/Carousel";
import TopNews from "./components/TopNews";
import { useState } from "react";
import Header from "./components/header/Header";
function App() {
  const [newsdata, setNewsData] = useState("");
  // const [topNews, setTopNews] = useState("");
  // const [subNews, setSubNews] = useState("");

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_92334fbd10ab257e1bbdc1c1e462a8b2dce2&language=en`
      );
      const data = await response.json();
      console.log(data);
      setNewsData(data);
    }
    fetchNews();
  }, []);

  const [lightMode, setLightMode] = useState(false);

  function modeSwitch() {
    if (lightMode) {
      setLightMode(false);
    } else {
      setLightMode(true);
    }
  }

  return (
    <div className="App"
    style={{ backgroundColor: `${lightMode ? "#3F4E4F" : "white"}`, padding:'.5rem' }}
    >
  
      <header className="App-header"><Header modeSwitch={modeSwitch} lightMode={lightMode} /></header>

      {newsdata?<TopNews
        title={newsdata.results[0].title}
        url={newsdata.results[0].image_url}
        alt={newsdata.results[0].title}
        description={newsdata.results[0].description}
        link={newsdata.results[0].link}
      /> : 'loading...'}
      <h4>Top News</h4>
      {newsdata ? <NewsCarousel newsdata={newsdata.results} lightMode={lightMode}/> : "news loading"}
      </div>


   
  );
}

export default App;
