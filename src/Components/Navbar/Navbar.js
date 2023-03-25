import React, { useState} from "react";
import styles from "./Navbar.module.css";
import HomeIcon from "@material-ui/icons/Home";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
const Navbar = () => {
  const [screenwidth, setscreenwidth] = useState(window.innerWidth);
  const [navbar_display,setnavbardisplay]=useState("flex");
  const [options_display,setoptionsdisplay]=useState("none");

  const changedisplay=()=>{
       setnavbardisplay(`${navbar_display==="none"?"flex":"none"}`)
       setoptionsdisplay(`${options_display==="none"?"flex":"none"}`)
  }

  if(screenwidth<=780)
  return(<>
  <div className={styles.navbar_mini} style={{display:navbar_display}}>
    <div className={styles.navbar_mini_part1} onClick={changedisplay}>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className={styles.navbar_mini_part2}>
      <div className={styles.logo_mini}></div>
    </div>
  </div>
  <div className={styles.hamburger_options}  style={{display:options_display}}> 
    <div className={styles.options}>
    <div>Home</div>
    <div>About</div>
    <div>Hello</div>
    <div>Hii</div>
    <div>Bye</div>
    </div>
    <div className={styles.cross} onClick={changedisplay}>X</div>
  </div>
  </>)
  else
  return (
    <div
      className={styles.navbar}
    >
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
