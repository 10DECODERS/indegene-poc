import React from "react";
import styles from "./Form.module.css";

export default function Form() {
  return (
    <div>
      <div className={`container-fluid ${styles.bgpink}`}>
        <div className="container">
          <div className={`row align-items-center justify-content-center`}>
            <div className="col-12 mt-5">
              <h2
                className={`text-center text-white mt-5}${styles.text_fields}`}
              >
                Let's chat about #FutureReadyHealthcare
              </h2>
            </div>
            <form className="row mt-5">
              <div
                className={`col-lg-6 col-md-6 col-sm-12 ${styles.formInputMain}`}
              >
                <input type="text" id="name" name="name" placeholder="Name*" />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email*"
                />
                <input
                  type="text"
                  id="Company"
                  name="Company"
                  placeholder="Company*"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <textarea
                  className={`${styles.textarea}`}
                  id="w3review"
                  name="w3review"
                  rows="4"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="col-12">
                <div className="d-flex gap-5 mt-3">
                  <div>
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      value="CSS"
                      className="me-2"
                    />
                    <label className="text-white">Business Opportunity</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      value="CSS"
                      className="me-2"
                    />
                    <label className="text-white">Career Opportunity</label>
                  </div>
                </div>
                <button className={`mt-3 mb-5 ${styles.button}`}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
