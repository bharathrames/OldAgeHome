import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SiteName = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #ff6600;  
  margin-bottom: 20px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 30px;
  text-align: center;
`;

const CarouselWrapper = styled.div`
  width: 70%;
  max-width: 100%;
  margin: auto;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 650px;
  border-radius: 8px;
  margin: auto;
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  z-index: 1;
  background: none;
  border: none;
  font-size: 55px;
  cursor: pointer;
  color: #333;
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  z-index: 1;
  background: none;
  border: none;
  font-size: 55px;
  cursor: pointer;
  color: #333;
`;

const Home = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <>
      <SiteName>GoldenYearsSupportHub</SiteName>
      <CarouselWrapper>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <Image src="https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kitten 1" />
          </div>
          <div>
            <Image src="https://images.unsplash.com/photo-1494438043283-22a3c46831a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kitten 2" />
          </div>
          <div>
            <Image src="https://images.unsplash.com/photo-1642502073674-793aa61af8ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kitten 3" />
          </div>
        </Slider>
        <PrevButton onClick={handlePrevClick}><FaChevronLeft /></PrevButton>
        <NextButton onClick={handleNextClick}><FaChevronRight /></NextButton>
      </CarouselWrapper>
      <Paragraph>
      <span className='GoldenYearsSupportHub'>GoldenYearsSupportHub</span> is a comprehensive platform dedicated to addressing the unique needs of senior citizens in 
      search of a nurturing and comfortable old age home. The website serves as a vital resource, outlining the specific requirements for these homes. 
      </Paragraph>
    </>
  );
};

export default Home;
