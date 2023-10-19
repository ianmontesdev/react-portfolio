import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import "../assets/css/Contact.css";

const Contact = () => {
  const form = useRef();

  const [sendState, setSendState] = useState(0);
  const [sendMsg, setSendMsg] = useState("");

  const [nameValid, setNameValid] = useState(2);
  const [emailValid, setEmailValid] = useState(2);
  const [messageValid, setMessageValid] = useState(2);

  useEffect(() => {
    switch (sendState) {
      case 0:
        setSendMsg(<></>);
        break;
      case 1:
        setSendMsg(
          <>
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </>
        );
        break;
      case 2:
        setSendMsg(
          <>
            <p>Great! Your message was sent</p>
          </>
        );
        break;
      case 3:
        setSendMsg(
          <>
            <p>Something went wrong, please try again</p>
          </>
        );
        break;
    }
  }, [sendState]);

  const sendEmail = (e) => {
    e.preventDefault();

    setSendState(1);
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
            setSendState(2);
          } else {
            setSendState(3);
          }
        },
        (error) => {
          setSendState(3);
          console.log(error.text);
        }
      );
  };

  let startFeedback = "fa-solid fa-star-of-life feedback-start";
  let invalidFeedback = "fa-solid fa-triangle-exclamation";
  let validFeedback = "fa-solid fa-check feedback-valid";

  function validateName() {
    form.current.contact_name.value.length !== 0
      ? setNameValid(1)
      : setNameValid(0);
  }

  function validateEmail() {
    form.current.contact_email.value.length !== 0 &&
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.current.contact_email.value)
      ? setEmailValid(1)
      : setEmailValid(0);
  }

  function validateMessage() {
    form.current.message.value.length !== 0
      ? setMessageValid(1)
      : setMessageValid(0);
  }

  function validateData(e) {
    validateName();
    validateEmail();
    validateMessage();
    if (nameValid == 1 && emailValid == 1 && messageValid == 1) {
      sendEmail(e);
    } else {
      e.preventDefault();
    }
  }

  function toggleLabel(event) {
    let label = event.target.nextElementSibling;
    if (event.target.value != 0) {
      label.classList.add("keep-up");
    } else {
      label.classList.remove("keep-up");
    }
  }

  return (
    <main id="contact-container">
      <form
        ref={form}
        onSubmit={(e) => {
          validateData(e);
        }}
      >
        <fieldset>
          <input
            type="text"
            name="contact_name"
            onBlur={(e) => {
              toggleLabel(e);
              validateName();
            }}
          />
          <label htmlFor="contact_name">Name:</label>
          <i
            className={
              nameValid == 0
                ? invalidFeedback
                : nameValid == 1
                ? validFeedback
                : startFeedback
            }
          ></i>
        </fieldset>
        <fieldset>
          <input
            type="email"
            name="contact_email"
            onBlur={(e) => {
              toggleLabel(e);
              validateEmail();
            }}
          />
          <label htmlFor="contact_email">E-mail:</label>
          <i
            className={
              emailValid == 0
                ? invalidFeedback
                : emailValid == 1
                ? validFeedback
                : startFeedback
            }
          ></i>
        </fieldset>
        <fieldset>
          <textarea
            name="message"
            onBlur={(e) => {
              toggleLabel(e);
              validateMessage();
            }}
          />
          <label htmlFor="message">Message:</label>
          <i
            className={
              messageValid == 0
                ? invalidFeedback
                : messageValid == 1
                ? validFeedback
                : startFeedback
            }
          ></i>
        </fieldset>
        <fieldset id="sendBtn">
          <input type="submit" value="Send" />
          {sendMsg}
        </fieldset>
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
            <a
              href="https://github.com/ianmontesdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-github"></i>{" "}
              <span> GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ian-montes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
              <span> Linkedin</span>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Contact;
