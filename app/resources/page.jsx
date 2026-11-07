
import Image from "next/image";
import Link from "next/link";
import {
  BookMarked,
  Headphones,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "Resources | Hillcity International Ministries",
  description:
    "Explore books, devotionals, Bible study resources, and sermons from Hillcity International Ministries.",
};

const amazonBookUrl =
  "https://www.amazon.com/My-Royal-Identity-Peace-Bamidele/dp/9785960161";

export default function ResourcesPage() {
  return (
    <main>
      {/* PAGE INTRODUCTION */}
      <section className="resources-hero">
        <div className="container centered">
          <span className="eyebrow">
            GROW IN THE WORD
          </span>

          <h1>Resources</h1>

          <p>
            Discover resources to strengthen your faith,
            deepen your understanding of Scripture,
            and grow in your relationship with Jesus Christ.
          </p>
        </div>
      </section>

      {/* FEATURED BOOK */}
      <section className="section resources-featured">
        <div className="container">
          <div className="resources-book-panel">
            <div className="resources-book-visual">
              <a
                href={amazonBookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View My Royal Identity on Amazon"
              >
                <Image
                  src="/my-royal-identity.avif"
                  alt="My Royal Identity book cover by Peace Bamidele"
                  width={320}
                  height={512}
                  style={{
                    width: "100%",
                    maxWidth: "290px",
                    height: "auto",
                    display: "block",
                    borderRadius: "6px",
                    boxShadow:
                      "0 12px 30px rgba(0,0,0,0.13)",
                  }}
                />
              </a>
            </div>

            <div className="resources-book-content">
              <span className="eyebrow">
                FEATURED BOOK
              </span>

              <h2>My Royal Identity</h2>

              <p className="resources-book-subtitle">
                A Pocket-Size Collection of 100 Power
                Confessions of Who God Says You Are
              </p>

              <p>
                Discover who you are in Christ through
                100 Scripture-based confessions designed
                to help you meditate on God's Word,
                strengthen your faith, and live with
                a renewed understanding of your
                identity in Jesus Christ.
              </p>

              <div className="resources-book-author">
                <BookMarked size={19} />
                <span>By Peace Bamidele</span>
              </div>

              <a
                className="btn btn-primary"
                href={amazonBookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get the Book on Amazon
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL RESOURCES */}
      <section className="section section-light resources-library">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">
              EXPLORE & LEARN
            </span>

            <h2>Grow in God's Word</h2>

            <p>
              Explore teachings and resources
              for your spiritual growth.
            </p>
          </div>

          <div className="resources-grid">
            <article className="resources-card">
              <div className="resources-card-icon">
                <FileText size={29} />
              </div>

              <h3>Bible Study Materials</h3>

              <p>
                Study notes, devotional guides, and
                Scripture-based resources to support
                your personal study of God's Word.
              </p>

              <span className="resources-coming-soon">
                Resources coming soon
              </span>
            </article>

            <article className="resources-card">
              <div className="resources-card-icon">
                <Headphones size={29} />
              </div>

              <h3>Sermons</h3>

              <p>
                Listen to biblical messages and
                sermon series that encourage
                spiritual growth and a deeper
                relationship with Jesus Christ.
              </p>

              <Link
                href="/sermons"
                className="resources-card-link"
              >
                Explore Sermons
                <ArrowRight size={17} />
              </Link>
            </article>

            <article className="resources-card">
              <div className="resources-card-icon">
                <Sparkles size={29} />
              </div>

              <h3>Weekly Bible Study</h3>

              <p>
                Join us every Sunday as we explore
                Scripture, grow in faith, and
                learn together in fellowship.
              </p>

              <Link
                href="/join-us"
                className="resources-card-link"
              >
                Join Bible Study
                <ArrowRight size={17} />
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
