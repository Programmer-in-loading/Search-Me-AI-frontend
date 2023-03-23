import React from "react";
import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import datascience from "./data-science.png";
import c from "./c++.png";
import database from "./database.png";
import microsoft from "./microsoft-windows.png";
import python from "./python.png";
import computer from "./computer-network.png";
const Home = (props) => {
  const loading =props.loading;
  const full_message = "Empowering next generation of tech leaders.";
  const [message, setmessage] = useState("");
  const [display, setdisplay] = useState("none");
  useEffect(() => {
    display_message();
  }, [loading]);
  useEffect(() => {
    setdisplay(`${display === "none" ? "block" : "none"}`);
  }, [message]);
  var m = "";
  function waitforme(milisec) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, milisec);
    });
  }
  async function display_message() {
    for (var i = 0; i < full_message.length; i++) {
      await waitforme(100);
      m = m + full_message[i];
      setmessage(m);
    }
  }
  const categories = [
    {
      name: "DBMS",
      image: `${database}`,
    },

    {
      name: "Data Science",
      image: `${datascience}`,
    },
    {
      name: "Operating System",
      image: `${microsoft}`,
    },
    {
      name: "Computer Networks",
      image: `${computer}`,
    },
    {
      name: "Python",
      image: `${python}`,
    },
    {
      name: "C++",
      image: `${c}`,
    },
  ];
  return (
    <>
    <div>
      <div className={styles.intro_box}>
        <div className={styles.intro}>
          <div className={styles.intro_left}>
            <div className={styles.message}>
              {message}
              <div id={styles.bar} style={{ display: `${display}` }}>
                |
              </div>
            </div>
            <div className={styles.brief}>Your onestop guide to learning</div>
            <div className={styles.button}><button>Explore</button></div>
          </div>
          <div className={styles.intro_image}></div>
        </div>
      </div>
      <div className={styles.top_categories_box}>
        <h1>Top Categories</h1>
        <div className={styles.top_categories}>
          {categories.map((key, index) => (
            <div className={styles.top_category} key={key + index}>
              <div
                className={styles.category_icon}
                style={{
                  width: "5rem",
                  height: "5rem",
                  backgroundImage: `url(${categories[index].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#eef3f9",
                }}
              ></div>
              <h5>{categories[index].name}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.site_information}>
        <div className={`${styles.youtube} ${styles.br}`}>
          <h4 className={styles.heading1}>700K+</h4>
          <h4 className={styles.heading2}>followers on twitter</h4>
        </div>
        <div className={`${styles.youtube} ${styles.br}`}>
          <h4 className={styles.heading1}>700K+</h4>
          <h4 className={styles.heading2}>followers on twitter</h4>
        </div>
        <div className={`${styles.youtube} ${styles.br}`}>
          <h4 className={styles.heading1}>700K+</h4>
          <h4 className={styles.heading2}>followers on twitter</h4>
        </div>
        <div className={`${styles.youtube}`}>
          <h4 className={styles.heading1}>700K+</h4>
          <h4 className={styles.heading2}>followers on twitter</h4>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
