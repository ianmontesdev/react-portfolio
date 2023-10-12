import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "../assets/css/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main id="contact-container">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="contact_name" placeholder="Your name" />
        <input
          type="email"
          name="contact_email"
          placeholder="Your contact email"
        />
        <textarea name="message" placeholder="Write your message..." />
        <input type="submit" value="Send" />
      </form>
    </main>
  );
};

export default Contact;
