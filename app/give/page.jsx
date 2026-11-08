
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  CreditCard,
  HeartHandshake,
  HandHeart,
  BookOpen,
  Globe,
  Landmark,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";

const donationUrl = "https://givebutter.com/givetohillcity";
const zelleEmail = "hillcityintlministries@gmail.com";

const impactAreas = [
  {
    title: "Missions & Outreach",
    description:
      "Street, hospital, online, and prison evangelism through our SHOP mandate.",
    Icon: Globe,
  },
  {
    title: "Biblical Teaching",
    description:
      "Bible studies, sermons, and resources that equip believers.",
    Icon: BookOpen,
  },
  {
    title: "Compassionate Care",
    description:
      "Practical support and encouragement for people in need.",
    Icon: HandHeart,
  },
  {
    title: "Ministry Growth",
    description:
      "Expanding our capacity to serve communities and advance the mission.",
    Icon: Users,
  },
];

export default function GivePage() {
  const [copied, setCopied] = useState(false);

  async function copyZelleEmail() {
    try {
      await navigator.clipboard.writeText(zelleEmail);
      setCopied(true);
    } catch {
      window.prompt("Copy Hillcity's Zelle email:", zelleEmail);
    }
  }

  return (
    <main className="give-page">
      <section className="give-hero">
        <div className="container centered">
          <span className="eyebrow">PARTNER WITH THE MISSION</span>
          <h1>Give / Partner</h1>
          <p>
            Your generosity helps us share Christ,
            serve communities, and transform lives.
          </p>
          <a
            href={donationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Give Now <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <section className="give-main-section">
        <div className="container">
          <div className="give-intro centered">
            <HeartHandshake size={34} />
            <h2>Where Your Giving Goes</h2>
            <p>
              Every contribution supports the mission
              and outreach of Hillcity International Ministries.
            </p>
          </div>

          <div className="give-impact-grid">
            {impactAreas.map(({ title, description, Icon }) => (
              <article className="give-impact-card" key={title}>
                <div className="give-impact-icon">
                  <Icon size={25} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="give-main-section give-methods-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">WAYS TO GIVE</span>
            <h2>Choose Your Giving Method</h2>
            <p>
              Give securely online, through Zelle,
              or by direct bank transfer.
            </p>
          </div>

          <div className="give-methods-grid">
            <article className="give-method-card give-method-featured">
              <div className="give-method-logo-wrap">
                <img
                  src="/givebutter-logo.jpeg"
                  alt="Givebutter"
                  className="give-method-logo givebutter-logo"
                />
              </div>

              <div className="give-method-heading">
                <CreditCard size={21} />
                <h3>Give Online</h3>
              </div>

              <p>
                Make a one-time gift or become
                a monthly giving partner.
              </p>

              <div className="give-method-details">
                <span>One-time or monthly</span>
                <span>Card and other supported payment options</span>
              </div>

              <a
                href={donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary give-method-button"
              >
                Give Now <ArrowUpRight size={17} />
              </a>
            </article>

            <article className="give-method-card">
              <div className="give-method-logo-wrap">
                <img
                  src="/zelle-logo.jpeg"
                  alt="Zelle"
                  className="give-method-logo"
                />
              </div>

              <div className="give-method-heading">
                <Mail size={21} />
                <h3>Give Through Zelle</h3>
              </div>

              <p>
                Send your gift using the email below.
              </p>

              <div className="give-zelle-box">
                <span>ZELLE EMAIL</span>
                <strong>{zelleEmail}</strong>
              </div>

              <button
                type="button"
                className="give-copy-button"
                onClick={copyZelleEmail}
              >
                {copied ? <Check size={17} /> : <Copy size={17} />}
                {copied ? "Email Copied" : "Copy Zelle Email"}
              </button>

              <p className="give-method-small">
                Confirm the recipient name before sending.
              </p>
            </article>

            <article className="give-method-card">
              <div className="give-method-logo-wrap">
                <img
                  src="/bank-of-america-logo.jpeg"
                  alt="Bank of America"
                  className="give-method-logo"
                />
              </div>

              <div className="give-method-heading">
                <Landmark size={21} />
                <h3>Direct Bank Transfer</h3>
              </div>

              <p>
                Transfer directly to the ministry's
                Bank of America account.
              </p>

              <div className="give-bank-details">
                <div>
                  <span>ACCOUNT NAME</span>
                  <strong>
                    Hillcity International Ministries Inc
                  </strong>
                </div>
              </div>

              <a
                href={`mailto:${zelleEmail}?subject=Hillcity%20Bank%20Transfer%20Instructions`}
                className="give-bank-button"
              >
                Request Transfer Details
                <ArrowRight size={17} />
              </a>

              <p className="give-method-small">
                Account details are shared upon request.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="give-partner-section">
        <div className="container centered">
          <HeartHandshake size={34} />
          <h2>Partner Beyond Giving</h2>
          <p>
            You can also support our mission
            through prayer and volunteering.
          </p>

          <div className="give-partner-actions">
            <Link href="/contact" className="btn btn-outline">
              Volunteer or Connect
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="give-trust-note">
            <ShieldCheck size={18} />
            <span>
              Hillcity International Ministries Inc
              is a recognized 501(c)(3) nonprofit organization.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
