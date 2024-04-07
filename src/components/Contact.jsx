import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <h1 className={styles.heading}>
        Get In<span style={{ color: "aqua" }}> Touch</span>
      </h1>
      <section className={styles.container_5} id="contact">
        <div className={styles.cont1}>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/customer-care-3483602-2912019.png?f=webp"
            alt=""
          />
        </div>
        <div className={styles.cont2}>
          <form>
            <div className={styles.inputBox_1}>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Last Name" />
            </div>
            <div className={styles.inputBox_2}>
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Mobile Number" />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <br />
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
