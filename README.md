import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
              ThapaTechnical
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About Us
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Disabled
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>

          <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" className="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="images/homeslider.jpg"
                  alt="Los Angeles"
                  width="1100"
                  height="500"
                />
                <div className="carousel-caption">
                  <h3>Los Angeles</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  src="./images/homeslider2.jpg"
                  alt="Chicago"
                  width="1100"
                  height="500"
                />
                <div className="carousel-caption">
                  <h3>Chicago</h3>
                  <p>Thank you, Chicago!</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/homeIndia.jpg"
                  alt="New York"
                  width="1100"
                  height="500"
                />
                <div className="carousel-caption">
                  <h3>New York</h3>
                  <p>We love the Big Apple!</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>
        </header>

        {/* <!-- about us --> */}

        <section>
          <div className="container-fluid">
            <h1 className="text-center text-capitalize pt-5">about us</h1>
            <hr className="w-25 mx-auto pt-5" />

            <div className="row mb-5">
              <div className="col-lg-6 col-md-6 col-12">
                <img src="images/homeslider2.jpg" className="img-fluid" />
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <h1>Who am I?</h1>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <button className="btn bg-primary text-white">
                  Wanna Know Me
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- about us end --> */}

        {/* <!-- service part --> */}

        <section>
          <div className="container">
            <h1 className="text-center text-capitalize pt-5">Services</h1>
            <hr className="w-25 mx-auto pt-5" />

            <div className="row text-center mb-5">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="images/homeslider.jpg"
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
                    src="images/homeslider.jpg"
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
                    src="images/homeslider.jpg"
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

        {/* <!-- service end --> */}

        {/* <!-- contact demo --> */}

        <section className="bg-primary">
          <article className="py-5 text-center text-white">
            <div>
              <h3 className="display-4 ">+91 123465897</h3>
              <p>If you want best serive Call us now.</p>
              <button className="btn btn-warning">Contact Now</button>
            </div>
          </article>
        </section>

        {/* <!-- contact demo end --> */}

        {/* <!-- gallery start --> */}
        <section>
          <div className="container">
            <h1 className="text-center text-capitalize pt-5">Gallery</h1>
            <hr className="w-25 mx-auto pt-5" />

            <div className="row">
              <div className="col-lg-4 col-md-2 col-12 mb-4">
                <img src="images/homeslider2.jpg" className="img-fluid" />
              </div>
              <div className="col-lg-4 col-md-2 col-12 mb-4">
                <img src="images/homeslider2.jpg" className="img-fluid" />
              </div>
              <div className="col-lg-4 col-md-2 col-12 mb-4">
                <img src="images/homeslider2.jpg" className="img-fluid" />
              </div>
              <div className="col-lg-4 col-md-2 col-12 mb-4">
                <img src="images/homeslider2.jpg" className="img-fluid" />
              </div>
              <div className="col-lg-4 col-md-2 col-12 mb-4">
                <img src="images/homeslider2.jpg" className="img-fluid" />
              </div>
              <div className="col-lg-4 col-md-2 col-12 mb-4">
                <img src="images/homeslider2.jpg" className="img-fluid" />
              </div>
              <div className="col-lg-4 col-md-2 col-12 mb-4">
                <img src="images/homeslider2.jpg" className="img-fluid" />
              </div>
              <div className="col-lg-4 col-md-2 col-12 mb-4">
                <img src="images/homeslider2.jpg" className="img-fluid" />
              </div>
              <div className="col-lg-4 col-md-2 col-12 mb-4">
                <img src="images/homeslider2.jpg" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        {/* <!-- gallery end --> */}

        {/* <!-- register form in short --> */}

        <section className="bg-primary">
          <article className="py-5 ">
            <div className="text-center text-white">
              <h3 className="display-4 ">Want To Join</h3>
              <p>Be a part of ThapaTechnical Family</p>
              <button
                className="btn btn-warning"
                data-toggle="modal"
                data-target="#myModal"
              >
                Join Now
              </button>
            </div>

            {/* <!-- The Modal --> */}
            <div className="modal fade" id="myModal">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  {/* <!-- Modal Header --> */}
                  <div className="modal-header">
                    <h4 className="modal-title">Singup</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                    <form action="/action_page.php">
                      <div className="form-group">
                        <label for="email">Email address:</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          autocomplete="off"
                        />
                      </div>
                      <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input
                          type="password"
                          className="form-control"
                          id="pwd"
                        />
                      </div>
                      <div className="form-group form-check">
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" />{" "}
                          Remember me
                        </label>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* <!-- resister ends --> */}

        {/* <!-- contact us start --> */}
        <section>
          <div className="container mb-5">
            <h1 className="text-center text-capitalize pt-5">Conatct Us</h1>
            <hr className="w-25 mx-auto pt-5" />

            <div className="w-50 mx-auto">
              <form action="/action_page.php">
                <div className="form-group">
                  <label for="email">Your Name</label>
                  <input
                    type="text="
                    className="form-control"
                    id="email"
                    autocomplete="off"
                    placeholder="enter ur name"
                  />
                </div>
                <div className="form-group">
                  <label for="pwd">Email:</label>
                  <input type="email" className="form-control" id="pwd" />
                </div>

                <div className="form-group">
                  <label for="pwd">Mobile No.:</label>
                  <input type="number" className="form-control" id="pwd" />
                </div>

                <div className="form-group">
                  <label> Textarea </label>
                  <textarea className="form-control"></textarea>
                </div>

                <div className="form-group form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" />{" "}
                    Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* <!-- footer --> */}

        <footer>
          <p className="text-center bg-dark text-white">
        
            @copyright ThapaTechnical.com 2019
            
          </p>
        </footer>
      </>
    );
  }
}

export default Home;
