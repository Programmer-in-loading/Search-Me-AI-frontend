import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer_box}>
      <div className={styles.two_box}>
        <div className={styles.about}>
          <h3>About</h3>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            quisquam maiores adipisci repudiandae dolore animi nulla ab eum
            itaque? Aspernatur, eum impedit nisi, sapiente accusantium libero
            fugit atque omnis ullam ipsa eveniet minima possimus. Rem
            repellendus consequuntur possimus fuga atque suscipit quae ducimus
            fugiat porro commodi? Nostrum nam inventore iure.
          </div>
        </div>
        <div className={styles.quick_links}>
          <h3>Quick Links</h3>
          <div className={styles.quick_links_list}>
            <div>About Us</div>
            <div>Contact Us</div>
            <div>Contribute</div>
            <div>Privacy Policy</div>
            <div>Sitemap</div>
          </div>
        </div>
      </div>
      <div className={styles.message}>
        <div>Made with love by team SearchMeAI!</div>
        <div>Copyright all rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
