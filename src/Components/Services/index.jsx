
import "./Services.css"
import {services} from "../../data"
import ServiceCard from '../../ui/ServiceCard'
const Services = () => {
  return (
    <section id='expertise' data-aos="fade-up">
      <div className="section__wrapper">
        <div className="section__header">
          <div className="h2 shine">My Expertise</div>
        </div>
        <div className="services__group">
          {services.map(({title, description,icon,color,colorRGB},index) => (
            <ServiceCard 
            title={title}
            description={description}
            icon={icon}
            color={color}
            colorRGB={colorRGB}
            key={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services