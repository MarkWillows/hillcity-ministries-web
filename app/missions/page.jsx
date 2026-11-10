
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  Instagram,
  PlayCircle,
} from "lucide-react";

export const metadata = {
  title: "Missions | Hillcity International Ministries",
  description:
    "Discover Hillcity International Ministries' evangelism mandate through street, hospital, online, and prison evangelism.",
};

const missions = [
  {
    title: "S – Street Evangelism",
    description:
      "Sharing the gospel and demonstrating Christ's love through personal evangelism and compassionate community outreach.",
    type: "image",
    src: "/images/outreach/Outreach 1.jpeg",
    alt: "Hillcity community outreach",
  },
  {
    title: "H – Hospital Evangelism",
    description:
      "Bringing biblical teaching, prayer, encouragement, and the hope of Christ to people in hospital settings.",
    type: "video",
    src: "/videos/vid 1.mp4",
  },
  {
    title: "O – Online Evangelism",
    description:
      "Reaching people through online Bible study, biblical teachings, and digital evangelism.",
    type: "image",
    src: "/images/outreach/Online Bible Study.png",
    alt: "Online Christian Bible study",
  },
  {
    title: "P – Prison Evangelism",
    description:
      "Sharing the message of salvation, restoration, and new life in Jesus Christ with incarcerated individuals.",
    type: "image",
    src: "/images/outreach/prison evangelism.jpeg",
    alt: "Illustration representing prison evangelism",
  },
];

const ministryVideos = [
  {
    src: "/videos/vid 2.mp4",
    title: "Community Outreach",
  },
  {
    src: "/videos/vid 3.mp4",
    title: "Sharing Christ's Love",
  },
  {
    src: "/videos/vid 4.mp4",
    title: "Compassionate Care",
  },
  {
    src: "/videos/vid 5.mp4",
    title: "Ministry Resources",
  },
];

export default function MissionsPage() {
  return (
    <main className="missions-page">
      {/* HERO */}
      <section className="missions-hero">
        <div className="container centered">
          <span className="eyebrow">FAITH IN ACTION</span>

          <h1>Missions</h1>

          <p>
            Sharing the gospel, demonstrating Christ's
            love, and reaching lives wherever God leads us.
          </p>
        </div>
      </section>

      {/* SHOP MANDATE */}
      <section className="section missions-main">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">
              OUR EVANGELISM MANDATE
            </span>

            <h2>The SHOP Mandate</h2>

            <p>
              Street. Hospital. Online. Prison.
              Four expressions of our commitment
              to sharing the love of Jesus Christ.
            </p>
          </div>

          <div className="missions-grid">
            {missions.map((mission) => (
              <article
                className="missions-card"
                key={mission.title}
                style={{
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* IMAGE OR VIDEO */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4 / 3",
                    background: "#edf2e6",
                    overflow: "hidden",
                  }}
                >
                  {mission.type === "video" ? (
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={mission.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        background: "#142314",
                      }}
                    >
                      <source
                        src={mission.src}
                        type="video/mp4"
                      />
                      Your browser does not support video.
                    </video>
                  ) : (
                    <Image
                      src={mission.src}
                      alt={mission.alt}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  )}
                </div>

                {/* CARD CONTENT */}
                <div
                  className="missions-card-copy"
                  style={{
                    padding: "24px",
                    flex: 1,
                  }}
                >
                  <h3
                    style={{
                      marginTop: 0,
                      marginBottom: "12px",
                    }}
                  >
                    {mission.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      lineHeight: 1.7,
                    }}
                  >
                    {mission.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MINISTRY VIDEOS */}
      <section
        className="section"
        style={{ background: "#f4f7ee" }}
      >
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">
              REAL MOMENTS. REAL MINISTRY.
            </span>

            <h2>Hillcity in Action</h2>

            <p>
              A glimpse into our evangelism,
              teaching, and compassionate outreach.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 270px), 1fr))",
              gap: "22px",
              maxWidth: "1150px",
              margin: "0 auto",
            }}
          >
            {ministryVideos.map((video) => (
              <div
                key={video.src}
                style={{
                  background: "#ffffff",
                  border: "1px solid #dce5d2",
                  borderRadius: "14px",
                  overflow: "hidden",
                }}
              >
                <video
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={video.title}
                  style={{
                    display: "block",
                    width: "100%",
                    aspectRatio: "16 / 10",
                    objectFit: "contain",
                    background: "#142314",
                  }}
                >
                  <source
                    src={video.src}
                    type="video/mp4"
                  />
                  Your browser does not support video.
                </video>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "9px",
                    padding: "15px 18px",
                    color: "#31551b",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  <PlayCircle size={17} />
                  <span>{video.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM UPDATES */}
      <section className="section missions-updates">
        <div className="container">
          <div className="missions-social-panel">
            <div className="missions-social-heading">
              <div className="missions-social-icon">
                <Instagram size={28} />
              </div>

              <span className="eyebrow">
                FOLLOW OUR OUTREACH
              </span>

              <h2>More Missions in Action</h2>

              <p>
                Explore outreach activities,
                stories, and updates from our ministry.
              </p>
            </div>

            <div className="missions-instagram-feed">
              <Script
                src="https://elfsightcdn.com/platform.js"
                strategy="afterInteractive"
              />

              <div
                className="elfsight-app-1aedeb70-6840-4f7e-a1a1-c62dfb7bf675"
                data-elfsight-app-lazy
              />
            </div>

            <div className="missions-instagram-follow">
              <a
                className="btn btn-primary"
                href="https://www.instagram.com/hillcitymissions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
                Follow @hillcitymissions
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section className="section missions-partner">
        <div className="container centered">
          <HeartHandshake
            size={34}
            color="#78923A"
          />

          <h2>Partner With the Mission</h2>

          <p>
            Through prayer, service, and generosity,
            you can help us share the gospel and
            extend the love of Christ.
          </p>

          <Link
            href="/give"
            className="btn btn-primary"
          >
            Give / Partner
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
