import Title from './Title';
import { servicesList } from '../data';

const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        <Title title="our" subtitle="services" />
        <div className="section-center services-center">
          {servicesList.map((serviceList) => {
            const { id, icon, title, text } = serviceList;
            return (
              <article key={id} className="service">
                <span className="service-icon">
                  <i className={icon} />
                </span>
                <div className="service-info">
                  <h4 className="service-title">{title}</h4>
                  <p className="service-text">{text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Services;
