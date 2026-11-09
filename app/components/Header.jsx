
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const aboutItems = [
  { label: "Vision", href: "/about#vision" },
  { label: "Mission", href: "/about#mission" },
  { label: "Statement of Faith", href: "/about#faith" },
  { label: "Our Pastors", href: "/about#pastors" },
];

const navItems = [
  { label: "Sermons", href: "/sermons" },
  { label: "Join Us", href: "/join-us" },
  { label: "Missions", href: "/missions" },
  { label: "Resources", href: "/resources" },
  { label: "Give / Partner", href: "/give" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
    setAboutOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" onClick={closeMenu}>
          <img
            src="/hillcity-logo.png"
            alt="Hillcity International Ministries"
            className="brand-logo"
          />
          <span>HILLCITY INTERNATIONAL MINISTRIES</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>

          <div className="nav-dropdown">
            <Link href="/about">
              About Hillcity <ChevronDown size={14} />
            </Link>

            <div className="dropdown-menu">
              {aboutItems.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="mobile-toggle"
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="hillcity-mobile-nav"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="hillcity-mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <div className="mobile-about-row">
            <Link href="/about" onClick={closeMenu}>
              About Hillcity
            </Link>

            <button
              type="button"
              aria-label="Toggle About submenu"
              aria-expanded={aboutOpen}
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              <ChevronDown size={18} />
            </button>
          </div>

          {aboutOpen &&
            aboutItems.map((item) => (
              <Link
                className="mobile-subitem"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}

          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
