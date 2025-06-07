import "./About.css"
import Hole from "../../ui/Hole"
import { skills } from "../../data"
import CardUi from "../../assets/CardUi"
const About = () => {
  return (
    <section id='about'>
      <div className='card section__wrapper'>
        <Hole />
        <div className='column left-column'>
          <h3 className="skill__title">My Skills
          </h3>
          <div className="skills__container">
            {skills.map((skill,index) => (
              <div className='flex skill__group' key={index}>
                {skill.data.map((list,key) => (
                  <div className='blur__overlay flex__center skill' key={key}>
                    <div className='skill__logo'>
                      <img src={list.logo} alt='' />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"}/>
        </div>
        <div className="column right-column">
          <h2 className='shine'>About Me</h2>
          <h1 className='title'>
            I am <span className="color__primary">Ashin S H</span>
          </h1>
          <p className="text__muted description">
            B.E. ECE student at CIT Chennai with a growing interest in web development. 
            I've learned front-end technologies like HTML, CSS, and JavaScript, and have 
            worked with frameworks such as React, Tailwind CSS, and Bootstrap. I also use Figma for UI/UX design. 
            Alongside front-end skills, I've learned Java, giving me a solid foundation in programming. 
            Looking ahead, I'm planning to dive into MERN stack development to build full-stack web applications.</p>
        </div>
      </div>
    </section>
  )
}

export default About