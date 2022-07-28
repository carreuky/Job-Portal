import React from "react";
import "./Contacts.css";

export default function Contacts() {
  const Contact = (
    <div className="content py-3 w-75 text-white ">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="Form card border">
            <div className="card-body">
              <form className="form">
                <label for="name2" className="mb-0">
                  Name
                </label>
                <div className="row mb-1">
                  <div className="col-lg-12">
                    <input
                      type="text"
                      name="name2"
                      id="name2"
                      className="form-control"
                      required=""
                    />
                  </div>
                </div>
                <label for="email2" className="mb-0">
                  Email
                </label>
                <div className="row mb-1">
                  <div className="col-lg-12">
                    <input
                      type="text"
                      name="email2"
                      id="email2"
                      className="form-control"
                      required=""
                    />
                  </div>
                </div>
                <label for="message2" className="mb-0">
                  Message
                </label>
                <div className="row mb-1">
                  <div className="col-lg-12">
                    <textarea
                      rows="6"
                      name="message2"
                      id="message2"
                      className="form-control"
                      required=""
                    ></textarea>
                  </div>
                </div>
                <button className="btnk">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="Contacts p-5">
      <div className="center ">
        <h1>CONTACT US</h1>
      </div>
      <div className="di col-sm Flex">
        <div>
          <div className="border mine w-70 p-3">
            <p className="center ">
              Powered by industry-leading digital technology & a data-driven
              approach, we help employers across industries find the best talent
              & job seekers, the perfect jobs with which they can fall in love.
            </p>
          </div>
          <div className="border socials">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-whatsapp"></i>
            <i class="fab fa-linkedin-in"></i>
            <i class="fab fa-instagram"></i>
          </div>
        </div>

        {Contact}
      </div>
    </div>
  );
}
