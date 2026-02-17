"use client";
import { StyledForm, StyledFeedback } from "./styled-contact-form.js";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Contact from "../../Contact/contact.js";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [consent, setConsent] = useState(false);

  const recaptchaRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!name || !email || !message || !recaptchaValue) {
      setFeedback("Bitte fülle alle Felder aus und bestätige die reCAPTCHA.");
      setIsSuccess(false);
      return;
    }

    setIsLoading(true);
    setFeedback("");

    // hier brauchen wir ein setRecaptcha!
    try {
      const request = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ name, email, message, recaptchaValue }),
      });

      const data = await request.json();
      if (data.success) {
        setIsSuccess(true);
        setFeedback(data.message || "Nachricht erfolgreich gesendet!");
        setName("");
        setEmail("");
        setMessage("");
        setConsent(false);
        setRecaptchaValue(null);
        recaptchaRef.current?.reset();

        setTimeout(() => {
          setFeedback("");
          setIsSuccess(null);
        }, 3000);
      } else {
        setFeedback(data.message || "Es gab ein Problem beim Versenden.");
        setTimeout(() => {
          setFeedback("");
          setIsSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Netzwerkfehler:", error);
      setFeedback("Verbindung zum Server fehlgeschlagen.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact">
      <div className="wrapper">
        <Contact />
        <StyledForm onSubmit={onSubmit}>
          <h2>Kontakt</h2>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Name"
            pattern="[A-Za-zÄÖÜäöüß\s\-]{2,30}$"
            title="Nur Buchstaben, Bindestrich und Leerzeichen erlaubt. Maximal 2-30 Zeichen."
            required
          />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Deine Nachricht"
            required
          ></textarea>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={consent}
              onChange={(element) => setConsent(element.target.checked)}
              required
            />
            <span>
              Ich habe die{" "}
              <a href="/#datenschutz" target="_blank" rel="noopener noreferrer">
                Datenschutzerklärung
              </a>{" "}
              gelesen und stimme zu.
            </span>
          </label>

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6Lc7yVwrAAAAAKowc4e_W89ZuwihTQ7d89fbA---"
            onChange={(value) => setRecaptchaValue(value)}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Wird gesendet..." : "Senden"}
          </button>
          {feedback && (
            <StyledFeedback $success={isSuccess}>{feedback}</StyledFeedback>
          )}
        </StyledForm>
      </div>
    </section>
  );
};

export default ContactForm;
