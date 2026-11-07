
"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Headphones,
  Youtube,
  CalendarDays,
  HeartHandshake,
  BookOpen,
  Mail,
  MapPin,
  Hospital,
  Globe,
  Heart,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Sermons", href: "/sermons" },
  { label: "Service Times", href: "/service-times" },
  { label: "Missions & Outreach", href: "/missions-outreach" },
  { label: "Resources", href: "/resources" },
  { label: "Give / Partner", href: "/give" },
  { label: "Contact Us", href: "/contact" },
];

const aboutItems = [
  { label: "Vision", href: "/about/vision" },
  { label: "Mission", href: "/about/mission" },
  { label: "Statement of Faith", href: "/about/statement-of-faith" },
  { label: "Pastors", href: "/about/pastors" },
];

const shop = [
  {
    letter: "S",
    title: "Street Evangelism",
    description:
      "Taking the message of Jesus Christ to our communities through compassionate outreach.",
    Icon: MapPin,
  },
  {
    letter: "H",
    title: "Hospital Evangelism",
    description:
      "Sharing hope, encouragement, and the love of Christ with those facing illness.",
    Icon: Hospital,
  },
  {
    letter: "O",
    title: "Online Evangelism",
    description:
      "Reaching people around the world through digital teachings and the gospel.",
    Icon: Globe,
  },
  {
    letter: "P",
    title: "Prison Evangelism",
    description:
      "Sharing the message of salvation, restoration, and new life in Christ.",
    Icon: Heart,
  },
];

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="/">
            <img
              src="/hillcity-logo.png"
              alt="Hillcity International Ministries"
              className="brand-logo"
            />
            <span>HILLCITY INTERNATIONAL MINISTRIES</span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="/">Home</a>

            <div className="nav-dropdown">
              <a href="/about">
                About Hillcity <ChevronDown size={14} />
              </a>
              <div className="dropdown-menu">
                {aboutItems.map((item) => (
                  <a href={item.href} key={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {navItems.slice(1).map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="mobile-toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="/">Home</a>
            <a href="/about">About Hillcity</a>
            {aboutItems.map((item) => (
              <a className="mobile-subitem" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
            {navItems.slice(1).map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section className="hero">
          <div className="container hero-content">
            <span className="eyebrow">WELCOME TO HILLCITY</span>
            <h1>A City Set on a Hill Cannot Be Hidden.</h1>
            <p>
              Sharing the love of Jesus Christ, transforming lives through
              God's Word, and reaching the world with the gospel.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/sermons">
                Explore Sermons <ArrowRight size={18} />
              </a>
              <a className="btn btn-outline" href="/service-times">
                Join Bible Study
              </a>
            </div>
            <p className="scripture">Matthew 5:14</p>
          </div>
        </section>

        <section className="section welcome">
          <div className="container centered">
            <span className="eyebrow">WHO WE ARE</span>
            <h2>Welcome to Hillcity International Ministries</h2>
            <p>
              We are a Christ-centered ministry committed to proclaiming
              the gospel, equipping believers through God's Word, and
              extending the love of Christ to our world.
            </p>
            <a className="text-link" href="/about">
              Discover Hillcity <ArrowRight size={17} />
            </a>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">GROW IN THE WORD</span>
              <h2>Sermons & Teachings</h2>
              <p>
                Explore biblical teachings designed to strengthen your
                faith and deepen your relationship with Jesus Christ.
              </p>
            </div>

            <div className="feature-grid">
              <div className="feature-card">
                <Headphones size={36} />
                <h3>Listen to Sermons</h3>
                <p>
                  Access our audio teachings and sermon series
                  on SoundCloud.
                </p>
                <a href="/sermons">
                  Explore Audio Sermons <ArrowRight size={16} />
                </a>
              </div>

              <div className="feature-card">
                <Youtube size={36} />
                <h3>Watch Teachings</h3>
                <p>
                  Watch video teachings and ministry messages
                  through our YouTube channel.
                </p>
                <a href="/sermons">
                  Explore Video Teachings <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container service-panel">
            <div>
              <span className="eyebrow">WORSHIP & FELLOWSHIP</span>
              <h2>Join Our Weekly Bible Study</h2>
              <p>
                Every Sunday, we gather online to study God's Word,
                grow in faith, and experience the transforming
                power of the gospel.
              </p>
              <div className="service-detail">
                <CalendarDays size={22} />
                <span>Sundays | 6:00–6:30 PM Eastern Time</span>
              </div>
              <a className="btn btn-primary" href="tel:6692749759">
                Dial 669 274 9759
              </a>
            </div>
            <div className="service-verse">
              <BookOpen size={42} />
              <h3>Growing Together in God's Word</h3>
              <p>Come, learn, grow, and be strengthened in faith.</p>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">OUR EVANGELISM MANDATE</span>
              <h2>The SHOP Mandate</h2>
              <p>
                Reaching people with the gospel of Jesus Christ
                wherever they are.
              </p>
            </div>

            <div className="shop-grid">
              {shop.map(({ letter, title, description, Icon }) => (
                <div className="shop-card" key={letter}>
                  <div className="shop-icon"><Icon size={26} /></div>
                  <span className="shop-letter">{letter}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>

            <div className="centered section-action">
              <a className="btn btn-primary" href="/missions-outreach">
                Explore Our Missions <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="section centered">
          <div className="container">
            <span className="eyebrow">PARTNER WITH THE MISSION</span>
            <h2>Help Us Reach More Lives</h2>
            <p className="narrow">
              Through prayer, service, and generosity, you can
              partner with Hillcity to advance the gospel and
              extend Christ's love to more people.
            </p>
            <a className="btn btn-primary" href="/give">
              Give / Partner <HeartHandshake size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>Hillcity International Ministries</h3>
            <p>
              Sharing Christ. Transforming Lives.
              Reaching the World.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="/about">About Hillcity</a>
            <a href="/sermons">Sermons</a>
            <a href="/missions-outreach">Missions & Outreach</a>
            <a href="/resources">Resources</a>
          </div>
          <div>
            <h4>Connect</h4>
            <a href="/service-times">Service Times</a>
            <a href="/give">Give / Partner</a>
            <a href="/contact">Contact Us</a>
            <a
              href="https://www.instagram.com/hillcityglobalministries/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          © {new Date().getFullYear()} Hillcity International Ministries.
          All rights reserved.
        </div>
      </footer>
    </>
  );
}
