import React from "react";
import styles from "./Testimonial.module.css";

export default function Testimonial({ testimonial }) {
  return (
    <div>
      <div className={`container-fluid pt-5 pb-5 ${styles.bgblue}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className={`col-lg-7 col-md-7 col-sm-12`}>
              <div
                className={`${styles.customPadding} text-white position-relative ${styles.TestimonialBorder}`}
              >
                <p className={`${styles.testimonialTitle}`}>
                  {testimonial.heading}
                </p>
                <h4>{testimonial.title}</h4>
                <h6>-{testimonial.name}</h6>
                <p>
                  {testimonial.designation},&nbsp;{testimonial.companyName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
