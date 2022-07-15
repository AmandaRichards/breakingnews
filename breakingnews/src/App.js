import { useEffect } from "react";
import NewsCarousel from "./components/Carousel";
import TopNews from "./components/TopNews";
import { useState } from "react";


function App() {

  const [newsdata, setNewsData] = useState('')
  useEffect(()=>{
    async function fetchNews(){
      const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_92334fbd10ab257e1bbdc1c1e462a8b2dce2&language=en`);
      const data = await response.json();
      console.log(data)
      setNewsData(data)
    }fetchNews()
    
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      </header>


      <TopNews />
      {newsdata? <NewsCarousel newsdata={newsdata.results}/>: 'news loading'}
      
    </div>
  );
}

export default App;
