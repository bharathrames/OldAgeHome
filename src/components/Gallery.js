import React from 'react';
import './GalleryPage.css';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <>
      <div className='gallerybody'>
        <div className='gallery-title'>Second Childhood SupportHub Gallery  <Link to="/"><span><button class="glow-on-hover" type="button">HOME</button></span></Link> </div>
        <div className='gallery-container'>
          <img src='https://atct.in/gallery/gallery_img/G032.jpg' alt='' />
          <img src='https://images.unsplash.com/photo-1565468376450-019ec9b1bf53?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
          <img src='https://atct.in/gallery/gallery_img/G033.jpg' alt='' />
        </div>
      </div>
    </>
  );
};

export default Gallery;

<button class="glow-on-hover" type="button">HOVER ME, THEN CLICK ME!</button>
