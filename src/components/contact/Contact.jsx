import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../../context";

function Contact() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const notify = () =>
    toast.success("Lorem ipsum dolor", {
      theme: "colored",
    });
  const [done, setDone] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9o2enj4",
        "template_xur8epq",
        formRef.current,
        "_EaloFev53ZB-a6rn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    e.target.reset();
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +90 534 924 90 10
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              emremer91@yahoo.com.tr
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Metin Akkuş Mahallesi 769.sokak 32/15 Çankaya/ANKARA
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What would you like to learn</b> you can ask anything about me
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              name="message"
              placeholder="Message"
              rows="5"
            ></textarea>
            <button type="submit" onClick={notify}>
              Submit
            </button>
            <ToastContainer />
            {done}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
