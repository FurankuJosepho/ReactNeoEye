import '../css/expert.css';

export const Neoexperts = ({ expert }) => {
  return (
    <>
      <div className="experts">
        <h2 className='expert-text'>Meet Our Experts</h2>
        <div className="expert-container">
          {expert.map((expert) => {
            return (
              <>
                <div className="experts-contain">
                  <img
                    className="expert-img"
                    src={expert.image}
                    alt={expert.name}
                  />
                  <h3 className="profession">{expert.profession}</h3>
                  <h4 className="expert-name">{expert.name}</h4>
                  <button className="info-btn">More Info</button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
