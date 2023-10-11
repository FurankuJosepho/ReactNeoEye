import React from 'react';
import { Carousel } from '../component/carousel';
import { Info } from '../component/info';
import slides from '../json/slides.json';
import { Service } from '../component/service';
import service from '../json/service.json'
import { Testimonial } from '../component/testimonial';
import comment from '../json/comment.json'

const Home = () => {
  return (
    <>
      <body className="body">
        <main className="main">
          <section className="carousel-container">
            <Carousel slides={slides} />
          </section>
          <section className="info-container">
            <Info />
          </section>
          <section className="service-container">
            <Service service={service} />
          </section>
          <section className='testimonial-container'>
            <Testimonial comment={comment}/>
          </section>
        </main>
      </body>
    </>
  );
};

export default Home;
