import Title from './Title';
import { toursList } from '../data';

const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title title="features" subtitle="tours" />
        <div className="section-center featured-center">
          {toursList.map((tourList) => {
            const {
              id,
              image,
              tourDate,
              tourTitle,
              tourDesc,
              icon,
              tourCountry,
              tourDays,
              packageAmount,
            } = tourList;
            return (
              <article key={id} className="tour-card">
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt={tourTitle} />
                  <p className="tour-date">{tourDate}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{tourTitle}</h4>
                  </div>
                  <p>{tourDesc}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className={icon} />
                      </span>
                      {tourCountry}
                    </p>
                    <p>{tourDays} days</p>
                    <p>from ${packageAmount}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Tours;
