import { useLoaderData } from 'react-router-dom';
import Hero from './Hero';
import { Helmet } from 'react-helmet-async';
// npm i react-helmet-async
import SlidesFlip from './SlidesFlip';
import SwiperSlides from './SwiperSlides';
import CarouselAni from './CarouselAni';
import TouristsSpots from './TouristsSpots';
import Countries from './Countries';

const Home = () => {
  const allSpots = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>SA-Tourism | Home</title>
      </Helmet>
      <SwiperSlides allSpots={allSpots}></SwiperSlides>
      <Hero />
      <Countries />
      <CarouselAni allSpots={allSpots}></CarouselAni>
      <TouristsSpots allSpots={allSpots}></TouristsSpots>
      <SlidesFlip />
    </div>
  );
};

export default Home;
