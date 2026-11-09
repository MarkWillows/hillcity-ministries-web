
"use client";

import { useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  Clock3,
  Instagram,
  Mail,
  MessageCircleHeart,
  Phone,
  Send,
} from "lucide-react";

const ministryEmail = "contact@hillcityministries.org";
const formEndpoint = "https://formspree.io/f/mjyyqkrg";

const inquiryTypes = [
  "General Inquiry",
  "Prayer Request",
  "Volunteering",
  "Partnership",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiry: "General Inquiry",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (status === "sending") return;

    // Hidden spam-trap field
    if (form.website) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          inquiry: form.inquiry,
          message: form.message,
          _subject: `Hillcity Website: ${form.inquiry}`,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        const message =
          result.errors?.map((item) => item.message).join(" ") ||
          "Your message could not be sent. Please try again.";

        throw new Error(message);
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        inquiry: "General Inquiry",
        message: "",
        website: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error.message ||
          "Something went wrong. Please try again."
      );
    }
  }

  return (
    <main className="hillcity-contact">
      <section className="contact-hero">
        <div className="container centered">
          <span className="eyebrow">
            WE'D LOVE TO HEAR FROM YOU
          </span>

          <h1>Contact Us</h1>

          <p>
            Have a question, prayer request, or desire
            to get involved? We'd love to connect.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-layout">
          <div className="contact-info">
            <span className="eyebrow">GET IN TOUCH</span>

            <h2>Let's Connect</h2>

            <p className="contact-intro">
              Reach us directly or use the form
              to send a message.
            </p>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <Mail size={22} />
              </div>

              <div>
                <h3>Email Us</h3>
                <a href={`mailto:${ministryEmail}`}>
                  {ministryEmail}
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <Clock3 size={22} />
              </div>

              <div>
                <h3>Sunday Bible Study</h3>
                <p>Every Sunday, 6:00–6:30 PM ET</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <Phone size={22} />
              </div>

              <div>
                <h3>Join by Phone</h3>
                <a href="tel:+16692749759">
                  669 274 9759
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <Instagram size={22} />
              </div>

              <div>
                <h3>Follow Our Ministry</h3>
                <a
                  href="https://www.instagram.com/hillcityglobalministries/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @hillcityglobalministries
                </a>
              </div>
            </div>

            <div className="contact-encouragement">
              <BookOpen size={24} />
              <p>
                Sharing Christ. Transforming Lives.
                Reaching the World.
              </p>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <MessageCircleHeart size={28} />

              <h2>Send Us a Message</h2>

              <p>
                Complete the form and we'll receive
                your message directly.
              </p>
            </div>

            {status === "success" ? (
              <div
                className="contact-success"
                role="status"
              >
                <CheckCircle2 size={42} />

                <h3>Message Sent!</h3>

                <p>
                  Thank you for contacting Hillcity
                  International Ministries.
                  Your message has been submitted
                  successfully.
                </p>

                <button
                  type="button"
                  className="contact-submit"
                  onClick={() => setStatus("idle")}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">
                      Full Name *
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={updateField}
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">
                      Email Address *
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={updateField}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-inquiry">
                    How Can We Help? *
                  </label>

                  <select
                    id="contact-inquiry"
                    name="inquiry"
                    value={form.inquiry}
                    onChange={updateField}
                    required
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">
                    Your Message *
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={updateField}
                    placeholder="Write your message here..."
                    rows={6}
                    required
                  />
                </div>

                {/* Honeypot field for basic spam protection */}
                <div
                  style={{
                    position: "absolute",
                    left: "-9999px",
                  }}
                  aria-hidden="true"
                >
                  <label htmlFor="contact-website">
                    Leave this field blank
                  </label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    value={form.website}
                    onChange={updateField}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {status === "error" && (
                  <p
                    className="contact-error"
                    role="alert"
                  >
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={status === "sending"}
                >
                  {status === "sending"
                    ? "Sending..."
                    : "Send Message"}

                  {status !== "sending" && (
                    <Send size={17} />
                  )}
                </button>

                <p className="contact-form-footnote">
                  Your message will be sent securely
                  to our ministry team.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
