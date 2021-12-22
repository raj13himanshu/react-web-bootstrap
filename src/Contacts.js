import React from 'react'
// import { NavLink } from 'react-router-dom';

function handle_form_submission() {
  alert("form data Submitted ");
  return false; //do not submit the form
}


const Contacts = () => {
    return (
      <div>
        <section>
          <div className="container mb-5 pb-5 my-5">
            <h1 className="text-center text-capitalize pt-5">Conatct Us</h1>
            <hr className="w-25 my-3 mx-auto pt-md-1" />

            <div className="w-50 mx-auto">
              <form onSubmit={handle_form_submission}>
                <div className="form-group">
                  <label for="email">Your Name :</label>
                  <input
                    type="text="
                    className="form-control"
                    id="email"
                    autocomplete="off"
                    placeholder="enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="pwd">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="pwd"
                    placeholder="enter your correct email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label for="pwd">Mobile No. :</label>
                  <input
                    type="number"
                    className="form-control"
                    id="pwd"
                    placeholder="enter your 10 digit mobile no. "
                    required
                  />
                </div>
                <div>
                  {" "}
                  <label className="pr-4">Gender</label>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                      required
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Male
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      Female
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label> Message </label>
                  <textarea
                    className="form-control"
                    placeholder="enter your message or queries in detail"
                    required
                  ></textarea>
                </div>

                <div className="form-group form-check">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      required
                    />{" "}
                    Remember me
                  </label>
                </div>

                {/* <NavLink to="/" target=""> */}
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                {/* </NavLink> */}
              </form>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Contacts;
