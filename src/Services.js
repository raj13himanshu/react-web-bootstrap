import React from 'react'
import { NavLink } from 'react-router-dom';

const Services = () => {
    return (
      <>
        <section>
          <div className="container">
            <h1 className="text-center text-capitalize pt-3">Services</h1>
            <hr className="w-25 my-3 mx-auto pt-md-1" />

            <div className="row text-center mb-5">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="images/service3.jpg"
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h4 className="card-title">John Doe</h4>
                    <p className="card-text">Some example text.</p>
                    <a href="#" className="btn btn-primary">
                      See Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-12">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="images/service3.jpg"
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h4 className="card-title">John Doe</h4>
                    <p className="card-text">Some example text.</p>
                    <a href="#" className="btn btn-primary">
                      See Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-12 ">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="images/service3.jpg"
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h4 className="card-title">John Doe</h4>
                    <p className="card-text">Some example text.</p>
                    <a href="#" className="btn btn-primary">
                      See Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary my-5 pt-2">
          <article className="py-3 text-center text-white">
            <div>
              <h3 className="display-4 ">+91 8700597166</h3>
              <p>If you want best serive Call us now.</p>
              <NavLink to="/contact" target="">
                <button className="btn btn-warning">Contact Now</button>
              </NavLink>
            </div>
          </article>
        </section>
      </>
    );
}

export default Services;
