import React from 'react';
import { Link } from 'react-router-dom';

function Card5() {
  return (
    <section className="section lets-talk has-animation fadeInUp">
      <div className="container1">
        <div className="holder">
          <div className="info" >
            <h3 >Interested? Let's Talk</h3>
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </div>
          <div className="img-holder">
            <picture decoding="async">
              <img
                width="650"
                height="291"
                decoding="async"
                src="https://www.recogni.com/wp-content/uploads/2022/04/Subscribe-car.png"
                alt="Image"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card5;
