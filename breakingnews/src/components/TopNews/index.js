import {React,useState,useEffect} from 'react'
import logoImg from "../header/Lightmode Logo.svg"
const TopNews = ({title, url, alt, description, link}) => {

  const [image, setImage] = useState(url);

  useEffect(() => {
    if (image === null) {
      setImage(logoImg);
    }
  }, [url]);
  return (
    <div>
        <h1>{title}</h1>
        <img src={image} alt={alt}/>
        <p>{description}</p>
       <a href={link}><p>Learn More</p> </a>
    </div>
  )
}

export default TopNews