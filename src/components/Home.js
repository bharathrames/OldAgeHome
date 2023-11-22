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
    autoplay: true,
    autoplaySpeed: 3000,
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
      <SiteName>Second Childhood Support Hub</SiteName>
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
      <Paragraph className='belowcontainer'>
      <p id='paragraphcontent'>Welcome to Second Childhood Support Hub, a platform dedicated to making a difference in the lives of our 
      cherished elderly community. As we strive to create a haven for the elderly in need, your support becomes the foundation of our mission. 
      Discover how you can contribute to the well-being of our senior citizens by understanding the essential requirements of old age homes.
      </p>
<h4>The Requirements of Old Age Homes:</h4>

<h5>Comfortable Living Spaces:</h5>
<p>Ensure that our seniors enjoy a warm and comfortable environment by supporting the provision of well-designed living spaces. Your contribution helps us create a home where they feel safe and valued.</p>

<h5>Healthcare Facilities:</h5>
<p>Uphold the health and vitality of our elderly residents by contributing to state-of-the-art healthcare facilities. From regular check-ups to specialized care, your support ensures their well-being.</p>

<h5>Nutritious Meals:</h5>
<p>Help us provide nutritious and balanced meals to our seniors. Your donation directly contributes to their health and vitality, ensuring they receive the nutrition necessary for a fulfilling life.</p>

<h5>Recreational Activities:</h5>
<p>Enrich the lives of our elderly by supporting recreational activities. From cultural events to hobby clubs, your contribution fosters a vibrant community that promotes mental and emotional well-being.</p>

<h5>Trained Staff and Caregivers:</h5>
<p>Support the hiring and training of compassionate staff and caregivers. Your donation ensures that our elderly residents receive the attention and care they deserve, creating a supportive and loving community.</p>

<h5>Safety and Security:</h5>
<p>Help us maintain a secure environment by supporting safety measures within our facilities. Your contribution ensures that our elderly residents feel protected and can enjoy their golden years without worry.</p>

<h5>How You Can Make a Difference:</h5>

<p>Your support matters. By contributing to Second Childhood SupportHub, you become a vital part of creating a nurturing and supportive space for our elderly residents. Together, we can make their twilight years truly golden.

Donate Now to make a positive impact on the lives of those who have paved the way for us.</p>

      </Paragraph>
    </>
  );
};

export default Home;

