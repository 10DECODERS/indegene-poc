import React from "react";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../../styles/Home.module.css";
function TopBar() {
  return (
    <div class="container-fluid bg-primary">
      <div className="container">
        <div className={`d-flex justify-content-between ${styles.textCenter}`}>
          <div>
            <div className={`mt-2 text-white `}>
              #FutureReadyHealthcare{" "}
              <span className={`ps-3 text-white ${styles.disNone}`}>{"|"}</span>
            </div>
          </div>
          <div className={`d-flex gap-4 ${styles.disNone}`}>
            <div className="mt-2 text-white">
              About us <span className="ps-3 text-white">{"|"}</span>
            </div>
            <div className="mt-2 text-white">
              News <span className="ps-3 text-white">{"|"}</span>{" "}
            </div>
            <div className="mt-2 text-white">Careers </div>
            <div>
              <Button
                title="Get started"
                className={`rounded-0  mt-0 ${styles.menu_button}`}
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
