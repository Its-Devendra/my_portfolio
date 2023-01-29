import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Robotic-Arm.png'
import IMG2 from '../../assets/Portfolio.png'
import IMG3 from '../../assets/In-Progress.svg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>Robotic Arm</h3>
            <div className="portfolio item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://docs.google.com/document/d/1brsnYkhxKxOEV9m4BNqv8RdyvtSp1O_W5FdrIiiKncs/edit" className='btn btn-primary'>Know More</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
            <h3>Portfolio Website</h3>
            <div className="portfolio item-cta">
            <a href="https://github.com/Its-Devendra/my_portfolio" className='btn'>Github</a>
            <a href="#" className='btn btn-primary'>Know More</a>
            </div>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
            <h3>SAG Website (In progress)</h3>
            <div className="portfolio item-cta">
            <a href="https://github.com/SAG-Web-Devs/sag-react-fe" className='btn'>Github</a>
            <a href="#" className='btn btn-primary'>Know More</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio