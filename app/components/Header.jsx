
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

const aboutLinks = [
  { label: "Our Vision", href: "/about/vision" },
  { label: "Our Mission", href: "/about/mission" },
  {
    label: "Statement of Faith",
    href: "/about/statement-of-faith",
  },
  { label: "Our Pastors", href: "/about/pastors" },
];

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Sermons", href: "/sermons" },
  { label: "Join Us", href: "/join-us" },
  { label: "Missions", href: "/missions" },
  { label: "Resources", href: "/resources" },
  { label: "Give / Partner", href: "/give" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [desktopAboutOpen, setDesktopAboutOpen] =
    useState(false);

  const desktopDropdownRef = useRef(null);

  function closeMobileMenu() {
    setMobileOpen(false);
    setMobileAboutOpen(false);
  }

  function closeAllMenus() {
    closeMobileMenu();
    setDesktopAboutOpen(false);
  }

  useEffect(() => {
    closeAllMenus();
  }, [pathname]);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target)
      ) {
        setDesktopAboutOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        closeAllMenus();
      }
    }

    document.addEventListener(
      "pointerdown",
      handleOutsideClick
    );
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  const isAboutActive = pathname.startsWith("/about");

  return (
    <header
      className="site-header"
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e7ebdd",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          minHeight: "88px",
        }}
      >
        <Link
          href="/"
          aria-label="Hillcity International Ministries Home"
          onClick={closeAllMenus}
          style={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <Image
            src="/hillcity-logo.png"
            alt="Hillcity International Ministries"
            width={170}
            height={65}
            priority
            style={{
              objectFit: "contain",
              width: "auto",
              maxWidth: "170px",
              height: "65px",
            }}
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="hillcity-desktop-nav"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className={
              pathname === "/"
                ? "nav-link active"
                : "nav-link"
            }
            onClick={closeAllMenus}
          >
            Home
          </Link>

          <div
            ref={desktopDropdownRef}
            className="hillcity-about-menu"
          >
            <button
              type="button"
              className={
                isAboutActive
                  ? "nav-link active hillcity-about-trigger"
                  : "nav-link hillcity-about-trigger"
              }
              aria-expanded={desktopAboutOpen}
              aria-haspopup="true"
              aria-controls="hillcity-desktop-about-dropdown"
              onClick={() =>
                setDesktopAboutOpen((open) => !open)
              }
            >
              About Hillcity
              <ChevronDown
                size={15}
                style={{
                  transform: desktopAboutOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </button>

            {desktopAboutOpen && (
              <div
                id="hillcity-desktop-about-dropdown"
                className="hillcity-about-dropdown"
              >
                {aboutLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      pathname === item.href
                        ? "hillcity-dropdown-link active"
                        : "hillcity-dropdown-link"
                    }
                    onClick={closeAllMenus}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {mainLinks.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={closeAllMenus}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="hillcity-mobile-toggle"
          aria-label={
            mobileOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={mobileOpen}
          aria-controls="hillcity-mobile-navigation"
          onClick={() => {
            setMobileOpen((open) => !open);
            setMobileAboutOpen(false);
            setDesktopAboutOpen(false);
          }}
        >
          {mobileOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <nav
        id="hillcity-mobile-navigation"
        className={
          mobileOpen
            ? "hillcity-mobile-nav is-open"
            : "hillcity-mobile-nav"
        }
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <Link
          href="/"
          className={
            pathname === "/"
              ? "nav-link active"
              : "nav-link"
          }
          onClick={closeMobileMenu}
        >
          Home
        </Link>

        <button
          type="button"
          className={
            isAboutActive
              ? "nav-link active hillcity-mobile-about"
              : "nav-link hillcity-mobile-about"
          }
          aria-expanded={mobileAboutOpen}
          aria-controls="hillcity-mobile-about-submenu"
          onClick={() =>
            setMobileAboutOpen((open) => !open)
          }
        >
          About Hillcity
          <ChevronDown
            size={17}
            style={{
              transform: mobileAboutOpen
                ? "rotate(180deg)"
                : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          />
        </button>

        {mobileAboutOpen && (
          <div
            id="hillcity-mobile-about-submenu"
            className="hillcity-mobile-submenu"
          >
            {aboutLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  pathname === item.href
                    ? "hillcity-mobile-submenu-link active"
                    : "hillcity-mobile-submenu-link"
                }
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}

        {mainLinks.slice(1).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              pathname === item.href
                ? "nav-link active"
                : "nav-link"
            }
            onClick={closeMobileMenu}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <style jsx global>{`
        .hillcity-desktop-nav {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 14px;
        }

        .hillcity-desktop-nav .nav-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #31551b;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          padding: 10px 2px;
          transition: color 0.2s ease;
        }

        .hillcity-desktop-nav .nav-link:hover,
        .hillcity-desktop-nav .nav-link.active {
          color: #78923a;
        }

        .hillcity-about-menu {
          position: relative;
        }

        .hillcity-desktop-nav .hillcity-about-trigger {
          border: none;
          background: transparent;
          cursor: pointer;
          font-family: inherit;
        }

        .hillcity-about-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          min-width: 220px;
          padding: 8px;
          background: white;
          border: 1px solid #e7ebdd;
          border-radius: 12px;
          box-shadow: 0 12px 35px rgba(20, 40, 10, 0.12);
          display: flex;
          flex-direction: column;
          z-index: 200;
        }

        .hillcity-dropdown-link {
          display: block;
          padding: 11px 13px;
          border-radius: 7px;
          color: #31551b;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
        }

        .hillcity-dropdown-link:hover,
        .hillcity-dropdown-link.active {
          background: #f1f5e9;
          color: #31551b;
        }

        .hillcity-mobile-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          color: #31551b;
          cursor: pointer;
          padding: 8px;
        }

        .hillcity-mobile-nav {
          display: none !important;
        }

        @media (max-width: 1100px) {
          .hillcity-desktop-nav {
            display: none;
          }

          .hillcity-mobile-toggle {
            display: inline-flex;
          }

          .hillcity-mobile-nav.is-open {
            display: flex !important;
            flex-direction: column;
            padding: 14px 24px 24px;
            background: #ffffff;
            border-top: 1px solid #e7ebdd;
            max-height: calc(100dvh - 88px);
            overflow-y: auto;
          }

          .hillcity-mobile-nav .nav-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 13px 4px;
            color: #31551b;
            font-size: 15px;
            font-weight: 600;
            text-decoration: none;
            border-bottom: 1px solid #edf0e8;
          }

          .hillcity-mobile-nav .nav-link.active {
            color: #78923a;
          }

          .hillcity-mobile-about {
            width: 100%;
            border: none;
            border-bottom: 1px solid #edf0e8;
            background: transparent;
            text-align: left;
            cursor: pointer;
            font-family: inherit;
          }

          .hillcity-mobile-submenu {
            display: flex;
            flex-direction: column;
            padding: 5px 0 8px 16px;
            background: #f8faf4;
          }

          .hillcity-mobile-submenu-link {
            display: block;
            padding: 12px;
            color: #31551b;
            font-size: 14px;
            text-decoration: none;
            border-bottom: 1px solid #e7ebdd;
          }

          .hillcity-mobile-submenu-link.active,
          .hillcity-mobile-submenu-link:hover {
            color: #78923a;
            font-weight: 600;
          }
        }
      `}</style>
    </header>
  );
}
