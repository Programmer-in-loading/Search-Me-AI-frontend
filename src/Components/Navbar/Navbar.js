import React from "react";
import styles from "./Navbar.module.css";
import HomeIcon from "@material-ui/icons/Home";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_part1}>
        <div className={styles.logo}></div>
        <div className={styles.home}>
          <div className={styles.navbar_part1__icon}>
            <HomeIcon style={{ height: "3rem", width: "3rem" }} />
          </div>
          <h5>Home</h5>
        </div>
        <div className={styles.about}>
          <div className={styles.navbar_part1__icon}>
            <HomeIcon style={{ height: "3rem", width: "3rem" }} />
          </div>
          <h5>About</h5>
        </div>
      </div>
      <div className={styles.navbar_part2}>
        <div className={styles.navbar_part1__icon}>
          <a href="https://www.facebook.com/people/SearchMe-AI/100090855144186/?mibextid=ZbWKwL">
            <FacebookIcon style={{ height: "4rem", width: "4rem" }} />
          </a>
        </div>
        <div className={styles.navbar_part1__icon}>
          <a href="https://www.instagram.com/searchme_ai/?igshid=ZDdkNTZiNTM%3D">
            <InstagramIcon style={{ height: "4rem", width: "4rem" }} />
          </a>
        </div>
        <div className={styles.navbar_part1__icon}>
          <a href="https://twitter.com/SearchMe_AI">
            <TwitterIcon style={{ height: "4rem", width: "4rem" }} />
          </a>
        </div>
        <div className={styles.navbar_part1__icon}>
          <a href="https://github.com/SearchMe-CF">
            <GitHubIcon style={{ height: "4rem", width: "4rem" }} />
          </a>
        </div>
        <div className={styles.navbar_part1__icon}>
          <a href="https://www.linkedin.com/company/searchme-ai/">
            <LinkedInIcon style={{ height: "4rem", width: "4rem" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
