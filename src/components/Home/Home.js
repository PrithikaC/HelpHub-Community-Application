import React from 'react';
import Slider from '../Common/Slider';
import Navbar from '../Common/Navbar'; 

function Home() {
  return (
    <div>
      <Navbar/>
      <Slider />
      <section className='section'>
        <div className='container'>
          <div className='row m-2'>
            <div className='col-md-12 text-center'>
              <h3 className='main-heading'>Our Company</h3>
              <div className='underline mx-auto'></div>
              <p>At HelpHub, we connect you with trusted local service providers like plumbers and gardeners, making it easy to find and hire professionals in your community. Our platform supports local businesses and ensures quality service through verified professionals and user reviews. Discover, connect, and support your local experts with us today!</p>
              </div>
          </div>
        </div>
      </section>
      
      <section className='section contactus'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h3 className='main-heading'>Contact Us</h3>
              <div className='underline mx-auto'></div>
              <p>If you have any questions or need further information, please feel free to contact us at:</p>
              <p>Email: contact@ourcompany.com</p>
              <p>Phone: +123-456-7890</p>
              <p>Address: 123 Main Street, Anytown, USA</p>
            </div>
          </div>
        </div>
      </section>

      <footer className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
