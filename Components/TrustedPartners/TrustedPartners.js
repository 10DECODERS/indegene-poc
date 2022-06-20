import React from "react";
import styles from "./TrustedPartners.module.css";

export default function TrustedPartners({ trustedPartner }) {
  return (
    <div>
      <div className="container">
        <div className={`row mt-5 mb-5 ${styles.ml60} align-items-center`}>
          <div className="col-12 mb-4">
            <h2 className={`${styles.title}`}>Trusted Partner</h2>
          </div>
          {trustedPartner.map((data, index) => (
            <>
              {index === 0 && (
                <>
                  <div className="col-lg-6 col-sm-12">
                    <video
                      width="320"
                      height="240"
                      className={`${styles.video}`}
                      controls
                    >
                      <source src={data.video} type="video/mp4" />
                    </video>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div className={`row ${styles.mr60} `}>
                      {data.resources.map((data) => (
                        <div className="col-12 mt-4 mb-4">
                          <div className={`${styles.card}`}>
                            <p className={`${styles.title_header}  `}>
                              {data.tag}
                            </p>
                            <h6 className={`${styles.title_desc}  `}>
                              {data.title}
                            </h6>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
