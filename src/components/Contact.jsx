import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "../assets/css/Contact.css";

const Contact = () => {
  const form = useRef();

  const [sendState, setSendState] = useState("");
  const [sendError, setSendError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text == "OK") {
            setSendError("");
            setSendState("Great! Your message was sent");
          } else {
            setSendState("");
            setSendError("Something went wrong, please try again");
          }
        },
        (error) => {
          setSendState("");
          setSendError("Something went wrong, please try again");
          console.log(error.text);
        }
      );
  };

  return (
    <main id="contact-container">
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="contact_name">Name:</label>
        <input type="text" name="contact_name" placeholder="Your name" />
        <label htmlFor="contact_email">E-mail:</label>
        <input
          type="email"
          name="contact_email"
          placeholder="Your contact email"
        />
        <label htmlFor="message">Message:</label>
        <textarea name="message" placeholder="Write your message..." />
        <input type="submit" value="Send" />
        <p>
          {sendState}
          {sendError}
        </p>
      </form>
      <section id="contact-info">
        <ul>
          <span>
            <i className="fa-solid fa-phone"></i>
            <span> +34 625 87 59 64</span>
          </span>
          <li>
            <span>
              <i className="fa-solid fa-envelope"></i>
              <span>
                {" "}
                <a href="mailto:ianmontesdev@gmail.com">
                  ianmontesdev@gmail.com
                </a>
              </span>
            </span>
          </li>
          <li>
            <span>
              <i className="fa-solid fa-location-dot"></i>
              <span> Gran Canaria / Spain</span>
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <i className="fa-brands fa-square-github"></i> <span> GitHub</span>
          </li>
          <li>
            <i className="fa-brands fa-linkedin"></i>
            <span> Linkedin</span>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Contact;
