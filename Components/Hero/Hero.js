import React from "react";
import Button from "@mui/material/Button";
import styles from "../../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.css";
function Hero(props) {
  return (
    <div>
      <div className={`container-fluid ${styles.banner}`}>
        <div className="container">
          <div className="row align-items-center txt-left ms-5">
            <div className="col-lg-6 mt-5">
              <div className={`h1 text-white  ${styles.fitcontent}`}>
                We enable healthcare
              </div>
              <div className={`h1 text-white  ${styles.fitcontent}`}>
                organizations be
              </div>
              <div className={`h1 text-white ${styles.fitcontent}`}>
                future ready
              </div>
              <div>
                <Button
                  title="Get started"
                  className={`rounded-0  mt-5 ${styles.button}`}
                >
                  Learn more
                </Button>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
