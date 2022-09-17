import React from 'react'
import "./Portfolio.css"
import Data from './Data'
import PortfolioItem from './Portfolio-item'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My React Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {Data.map((item)=>{
          return <PortfolioItem key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default Portfolio