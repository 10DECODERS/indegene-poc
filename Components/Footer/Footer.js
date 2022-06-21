import React from "react";
import styles from "./Footer.module.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
export default function Footer({ footer }) {
  return (
    <div>
      <div className={`container-fluid ${styles.bgblue}`}>
        <div className="container">
          <div className="row">
            <div
              className={`col-12 text-white mb-5 d-flex justify-content-between`}
            >
              <div
                className={`d-flex gap-5  ${styles.flexDirect} ${styles.gap20}`}
              >
                <a>© 2022 Indegene. All Rights Reserved.</a>
                {footer.topMenu.map((data) => (
                  <a>{data.cta}</a>
                ))}
              </div>
              <div className={`d-flex gap-3 ${styles.flexDirect}`}>
                <LinkedInIcon />
                <InstagramIcon />
                <TwitterIcon />
                <FacebookIcon />
              </div>
            </div>

            <div
              className={`col-12 text-white ${styles.footerText} justify-content-center`}
            >
              {footer.bottomMenu.map((data) => (
                <a>{data.cta}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
