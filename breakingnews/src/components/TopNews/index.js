import React from 'react'

const TopNews = ({title, url, alt, description, link}) => {
  return (
    <div>
        <h1>{title}</h1>
        <img src={url} alt={alt}/>
        <p>{description}</p>
       <a href={link}><p>Learn More</p> </a>
    </div>
  )
}

export default TopNews