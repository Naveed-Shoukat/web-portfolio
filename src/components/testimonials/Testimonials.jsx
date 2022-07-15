import React from 'react';
import './Testimonials.css';
import AVTR1 from '../../assets/Flower1.jpg';
import AVTR2 from '../../assets/Flower2.jpg';
import AVTR3 from '../../assets/Flower3.jpg';
import AVTR4 from '../../assets/Flower4.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 'Test1',
      imgSrc: AVTR1,
      name: 'Client Name 1',
      comments:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque minima nobis, debitis ipsam dignissimos iste atque sed repellendus officia, neque impedit. Veniam necessitatibus porro nemo molestiae! Voluptatibus, illo! Omnis, iure.',
    },
    {
      id: 'Test2',
      imgSrc: AVTR2,
      name: 'Client Name 2',
      comments:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque minima nobis, debitis ipsam dignissimos iste atque sed repellendus officia, neque impedit.',
    },
    {
      id: 'Test3',
      imgSrc: AVTR3,
      name: 'Client Name 3',
      comments:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque minima nobis, debitis ipsam dignissimos iste atque sed repellendus officia, neque impedit. Veniam necessitatibus porro nemo molestiae! Voluptatibus, illo! Omnis, iure. Veniam necessitatibus porro nemo molestiae! Voluptatibus, illo! Omnis, iure.',
    },
    {
      id: 'Test4',
      imgSrc: AVTR4,
      name: 'Client Name 4',
      comments:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque minima nobis, debitis ipsam dignissimos iste atque sed repellendus officia, neque impedit. Veniam necessitatibus porro nemo molestiae! Voluptatibus, illo! Omnis, iure.',
    },
  ];

  const testimonialsDataElement = testimonialsData.map((item) => {
    return (
      <SwiperSlide key={item.id} className="testimonial">
        <div className="client__avatar">
          <img src={item.imgSrc} alt="Avatar" />
        </div>
        <div>
          <h5 className="client__name">{item.name}</h5>
          <small className="client__reviews">
            {item.comments.length > 150
              ? item.comments.slice(0, 150) + ' ...'
              : item.comments}
          </small>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <section id="testimonials">
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination]}
        // modules={[Navigation]}
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialsDataElement}
      </Swiper>
    </section>
  );
};

export default Testimonials;
