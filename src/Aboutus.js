import React from 'react'

const Aboutus = () => {
    return (
      <>
        <section>
          <div className="container-fluid ">
            <h1 className="text-center text-capitalize my-5 pt-5">about us</h1>
            <hr className="w-25 my-5 mx-auto pt-md-1 " />

            <div className="row mb-5 my-5 pb-5 pt-5">
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
      </>
    );
}

export default Aboutus;
