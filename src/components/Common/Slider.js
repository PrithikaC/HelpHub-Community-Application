import React from 'react';
import logos from '../images/logos.jpeg';

function Slider() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide custom-carousel" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={logos} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={logos} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={logos} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
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
            margin: 0 auto; /* Center the carousel */
            max-width: 80%; /* Adjust this value to leave space on the left and right */
            padding: 0 10%; /* Adjust this value to control the space on the left and right */
          }
          
          .custom-carousel .carousel-inner {
            height: 100%;
          }
          
          .custom-carousel .carousel-item {
            height: 100%;
          }
          
          .custom-carousel .carousel-item img {
            height: 100%;
            object-fit: cover; /* Ensures image covers the container */
          }
          
          .custom-carousel .carousel-caption {
            bottom: 20px; /* Adjust the position of captions if needed */
          }
        `}
      </style>
    </div>
  );
}

export default Slider;
