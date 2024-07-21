import React from 'react';
import img_0 from '../images/img4.jpg';
import img_1 from '../images/img11.jpg';
import img_2 from '../images/img15.jpg';

function Slider() {
  return (
    <div className="container">
      <div id="carouselExampleCaptions" className="carousel slide custom-carousel" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img_0} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Reliable Housekeeping Solutions</h5>
              <p> Enjoy a spotless and well-organized home with our trusted housekeeping services tailored to your needs.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img_1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Expert Painting Services</h5>
              <p>Transform your space with professional painting services that bring vibrant colors and a fresh look to your home.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img_2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5> Cozy Home Parlors</h5>
              <p>Create the perfect ambiance with our curated selection of home parlor services for a warm and inviting environment.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* Inline CSS */}
        <style>
          {`
            .custom-carousel {
              margin: 0 auto; /* Center the carousel horizontally */
              max-width: 60%; /* Adjust this value for the width of the carousel */
            }
            
            .carousel-inner {
              height: 60vh; /* Adjust height of the carousel to fit the images */
            }
            
            .carousel-item {
              height: 100%;
            }
            
            .carousel-item img {
              max-height: 60vh; /* Limit the height of images to keep them smaller */
              object-fit: cover; /* Ensures image covers the container proportionally */
              width: 100%; /* Ensure image spans the full width */
            }
            
            .carousel-caption {
              bottom: 20px; /* Adjust the position of captions if needed */
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Slider;
