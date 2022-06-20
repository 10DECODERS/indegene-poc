import React from "react";
import styles from "./Stories.module.css";

function Stories(props) {
  return (
    <div className={`container-fluid ${styles.banner}`}>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center pt-5 pb-5 row">
          <div
            className={`d-flex col-lg-6 col-md-6 col-sm-12 flex-wrap ${styles.gap30}`}
          >
            <div className={`col-lg-5 col-md-5 col-sm-6 mb-4 mt-4 `}>
              <div
                className={`${styles.boxone} d-flex align-items-center justify-content-center ${styles.box_title}`}
              >
                <div>{props.services.capabilities.title}</div>
              </div>
            </div>
            <div className={`col-lg-5 col-md-5 col-sm-6 mb-4 mt-4`}>
              <div
                className={`${styles.boxTwo} d-flex align-items-center justify-content-center ${styles.box_title}`}
              >
                <div>{props.services.segments.title}</div>
              </div>
            </div>
            <div className={`col-lg-5 col-md-5 col-sm-6 mb-4`}>
              <div
                className={`${styles.boxTwo} d-flex align-items-center justify-content-center ${styles.box_title}`}
              >
                <div>{props.services.solutions.title}</div>
              </div>
            </div>
            <div className={`col-lg-5 col-md-5 col-sm-6 mb-4`}>
              <div
                className={`${styles.boxTwo} d-flex align-items-center justify-content-center ${styles.box_title}`}
              >
                <div>{props.services.technology.title}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-white">
            <h2 className={`${styles.text_fields_header}`}>
              Enabling Outcomes
            </h2>
            <p className={`${styles.text_fields}`}>
              We understand healthcare organizations need to deliver outcomes
              today, while building capabilities for the future. That's why we
              support you with day-to-day operations across the full life cycle,
              while enabling your vision through conversations with industry
              peers and thought-provoking content.
            </p>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item border-0">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className={`${styles.heading} accordion-button collapsed`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    className={`${styles.transprent} accordion-body text-white`}
                  >
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className={`${styles.heading} accordion-button collapsed`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    className={`${styles.transprent} accordion-body text-white`}
                  >
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the , though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className={`${styles.heading} accordion-button collapsed`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    className={`${styles.transprent} accordion-body text-white`}
                  >
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
