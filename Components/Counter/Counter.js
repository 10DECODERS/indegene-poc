import React from "react";
import styles from "./Counter.module.css";

export default function ({ counter }) {
  return (
    <div>
      <div className={`container-fluid pt-5 pb-5 ${styles.bgblue}`}>
        <div className="container">
          <div className={`row ${styles.gap30}`}>
            {counter.map((data) => (
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className={`${styles.card}`}>
                  <h3>
                    <span>{data.title}</span>
                  </h3>
                  <p>{data.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
