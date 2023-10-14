import '../css/service.css';

export const Service = ({ service }) => {
  return (
    <>
      <div className="service-container">
        <h2 className='service-text'>services</h2>
        <div className="cards-container">
          {service.map((service) => {
            return (
              <section className="card-container">
                <img
                  className="card-img"
                  src={service.image}
                  alt={service.service}
                  key={service.image}
                />
                <div className='service'>
                  <h3>{service.service}</h3>
                  <p>{service.description}</p>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
};
