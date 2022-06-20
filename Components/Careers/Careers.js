import React from "react";
import styles from "./Careers.module.css";

export default function Careers(props) {
  return (
    <div>
      <div className={`container-fluid pt-5 ${styles.bg}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <h2 className={`${styles.title_top}`}>Careers</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={`container-fluid ${styles.bg_carrier}  pt-5 pb-5`}>
        <div className="row justify-content-center m-0">
          <div className={`col-lg-6 col-md-12 col-sm-12 ${styles.ml25}  `}>
            <div className={`${styles.card}`}>
              <h2 className={`${styles.title}`}>
                {props.careers.title.split("<br> #")[0]}
                <br />
                {props.careers.title.split("<br> #")[1]}
              </h2>
              <p className={`${styles.content}`}>{props.careers.description}</p>
              <div className="d-flex gap-4">
                {props.careers.ctaGroup.map((data) => (
                  <button className={`${styles.button}`}>{data.cta}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
