import React from 'react'
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {RxTwitterLogo} from 'react-icons/rx'
import {SlSocialLinkedin} from 'react-icons/sl'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DS</a>
      <ul><a href="#">Home</a></ul>
      <ul><a href="#about">About</a></ul>
      <ul><a href="#experience">Experience</a></ul>
      <ul><a href="#services">Services</a></ul>
      <ul><a href="#portfolio">Portfolio</a></ul>
      <ul><a href="#contact">Contact</a></ul>

      <div className="footer__socials">
        <a href="https://instagram.com"><AiOutlineInstagram /></a>
        <a href="https://twitter.com"><RxTwitterLogo /></a>
        <a href="https://linkedin.com"><SlSocialLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights are reserved 2023</small>
      </div>

    </footer>
  )
}

export default Footer