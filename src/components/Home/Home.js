import React from 'react';
import Slider from '../Common/Slider';

function Home() {
  return (
    <div>
      <Slider />
      <section className='section'>
        <div className='container'>
          <div className='row'>

            <div className='col-md-12 text-center'>
              <h3 className='main-heading'>Our Company</h3>
              <div className='underline mx-auto'></div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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

     20px;
          
      
    </div>
  );
}

export default Home;

