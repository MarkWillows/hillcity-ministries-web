
import Link from "next/link";

export default function Footer() {
  return (
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
          <Link href="/about">About Hillcity</Link>
          <Link href="/sermons">Sermons</Link>
          <Link href="/missions">Missions</Link>
          <Link href="/resources">Resources</Link>
        </div>

        <div>
          <h4>Connect</h4>
          <Link href="/join-us">Join Us</Link>
          <Link href="/give">Give / Partner</Link>
          <Link href="/contact">Contact Us</Link>
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
  );
}
