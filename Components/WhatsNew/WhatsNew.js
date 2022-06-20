import React from "react";
import styles from "./WhatsNew.module.css";

export default function WhatsNew(props) {
  return (
    <div>
      <div className={`container-fluid ${styles.bg} pt-5`}>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <h2 className={`${styles.whts_title}`}>What’s New</h2>
            </div>
          </div>
          <div className="row">
            {props.whatNew.map((data, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                {index < 3 && (
                  <div className={`${styles.card}`}>
                    <img src={data.image} className="img-fluid" />
                    <p>Jan 2022 | Article</p>
                    <h6 className={`${styles.img_title}`}>{data.title}</h6>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
