import React from 'react'
import "./Footer.css"
import { menu } from "../../data"
import { Link } from "react-scroll"
import SocialHandles from '../../ui/SocialHandles'
const Footer = () => {
  return (
    <footer role="contentinfo" aria-label="Footer">
      <div className="section__wrapper">
        <ul className="flex__center nav">
          {menu.map((list,index) => (
            <Link 
              to={list.name.toLowerCase()} 
              smooth = {true}
              duration={500} 
              className="nav__item"
              key= {index} 
            >
              {list.name}
            </Link>
          ))}
        </ul>
        <SocialHandles />
        <div className="copyright">
          <h3>Copyright &copy; All right reserved - | 2025 </h3>
          <p className='text__muted'>Built with love by Ashin S H</p>
        </div>
        <div className="base__logo" aria-label="Back to top">
          <h1 className="full__name shine">Ashin S H</h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer