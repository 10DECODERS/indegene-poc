import React from "react";
import styles from "./Intro.module.css";
function Intro(props) {
  return (
    <>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={`text-brandcolor3 mt-4 p-2 ${styles.text_fields}`}>
              {props.intro.description}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center txt-left flex-column ps-5 col-6">
            <div className="d-flex align-items-center img-overlay">
              <video width="520" height="320" controls>
                <source
                  src="https://indegenerep.s3.ap-south-1.amazonaws.com/videos/indegene-corporate-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
