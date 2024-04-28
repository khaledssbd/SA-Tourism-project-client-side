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
      <CarouselAni allSpots={allSpots}></CarouselAni>
      <Hero />
      <Countries />
      <SwiperSlides allSpots={allSpots}></SwiperSlides>
      <TouristsSpots allSpots={allSpots}></TouristsSpots>
      <SlidesFlip />
    </div>
  );
};

export default Home;
