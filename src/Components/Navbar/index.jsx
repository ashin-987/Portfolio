import { useState, useMemo, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo";
import { FaTimes } from "react-icons/fa";
import { menu } from "../../data";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [theme, setTheme] = useState("dark");

  const handleSidebarToggle = () => setShowSidebar(!showSidebar);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const navLinks = useMemo(
    () =>
      menu.map((list, index) => (
        <Link
          to={list.name.toLowerCase()}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="tab"
          activeClass="btn__shine"
          key={index}
          onClick={() => setShowSidebar(false)}
        >
          {list.name}
        </Link>
      )),
    []
  );

  return (
    <nav className="card flex__center navbar" role="navigation" aria-label="Main Navigation">
      {showSidebar && (
        <div className="aside__overlay" onClick={handleSidebarToggle} />
      )}

      <div
        className="flex__center logo"
        onClick={() => scroll.scrollToTop({ duration: 500 })}
      >
        <Logo />
      </div>

      <aside className={`flex__center sidebar ${showSidebar ? "visible" : ""}`}>
        <div className="flex sidebar__top">
          <span className="icon__container close__btn" onClick={handleSidebarToggle}>
            <FaTimes />
          </span>
        </div>
        <div className="flex sidebar__middle">{navLinks}</div>
      </aside>

      <div className="flex__center buttons__wrapper">
        <Link to="contact" className="btn flex__center hire__btn">
          Hire Me
          <div className="flex__center icon">
            <FaArrowUpRightFromSquare />
          </div>
        </Link>

        <a
          href="/Ashin_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
          aria-label="Open resume"
        >
          Resume
        </a>

        {/* 🌗 Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <BsMoon /> : <BsSun />}
        </button>

        <FaBarsStaggered className="menu" onClick={handleSidebarToggle} />
      </div>
    </nav>
  );
};

export default Navbar;
