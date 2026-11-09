
"use client";

import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  Clock3,
  Instagram,
  Mail,
  MessageCircleHeart,
  Phone,
  Send,
} from "lucide-react";

const ministryEmail = "contact@hillcityministries.org";

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
  });

  const [prepared, setPrepared] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setPrepared(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Hillcity Website: ${form.inquiry}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Inquiry: ${form.inquiry}\n\n` +
      `Message:\n${form.message}`
    );

    const emailLink =
      `mailto:${ministryEmail}?subject=${subject}&body=${body}`;

    setPrepared(true);
    window.location.href = emailLink;
  }

  return (
    <main className="hillcity-contact">
      <section className="contact-hero">
        <div className="container centered">
          <span className="eyebrow">WE'D LOVE TO HEAR FROM YOU</span>

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
              Whether you're reaching out for prayer,
              information, or opportunities to serve,
              we're here to hear from you.
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
                Complete the form below to prepare
                your message.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
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
                    type="email"
                    name="email"
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

              <button
                type="submit"
                className="contact-submit"
              >
                Continue to Email
                <Send size={17} />
              </button>

              {prepared && (
                <p className="contact-form-notice" role="status">
                  <Check size={17} />
                  Your email app should open with
                  the message prepared. Please send
                  it from your email app.
                </p>
              )}

              <p className="contact-form-footnote">
                Your message is not sent until you
                send it from your email application.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-bottom">
        <div className="container centered">
          <MessageCircleHeart size={30} />
          <h2>We Look Forward to Hearing From You</h2>
          <p>
            Every connection is an opportunity
            to share the love of Christ.
          </p>
          <a
            href={`mailto:${ministryEmail}`}
            className="contact-bottom-link"
          >
            Email Our Ministry
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
