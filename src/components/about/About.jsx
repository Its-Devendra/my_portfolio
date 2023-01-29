import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {BiUserCheck} from 'react-icons/bi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
      <div className="about__me">
      <div className="about__me-image">
        <img src={Me} alt="About Image" />
      </div>
      </div>

      <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
        <FaAward className='about__icon'/>
        <h5>Experience</h5>
        <small>Fresher</small>
        </article>

        <article className='about__card'>
        <BiUserCheck className='about__icon'/>
        <h5>Soft skills </h5>
        <small>UI & UX</small>
        </article>

        <article className='about__card'>
        <VscFolderLibrary className='about__icon'/>
        <h5>Projects </h5>
        <small>Robotic</small>
        </article>

       
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste dicta unde veniam, ullam esse repudiandae exercitationem sapiente fugit expedita saepe ratione aut suscipit sunt nam! Veritatis saepe sit voluptas voluptate.
      </p>

      <a href="#contact" className='btn btn-primary'>Lets Talk</a>
      </div>

      </div>

    </section>
  )
}

export default About