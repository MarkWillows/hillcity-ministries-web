
import Link from "next/link";
import Script from "next/script";
import {
  Instagram,
  ArrowUpRight,
  ArrowRight,
  HeartHandshake,
  PlayCircle,
} from "lucide-react";

export const metadata = {
  title: "Missions",
  description:
    "Explore the evangelism, biblical teaching, and compassionate outreach of Hillcity International Ministries.",
};

const missions = [
  {
    letter: "S",
    title: "Street Evangelism",
    description:
      "Sharing the gospel and demonstrating Christ's love through personal evangelism and compassionate community outreach.",
    type: "image",
    src: "/images/outreach/Outreach 1.jpeg",
    alt: "Hillcity community outreach",
  },
  {
    letter: "H",
    title: "Hospital Evangelism",
    description:
      "Bringing biblical teaching, prayer, encouragement, and the hope of Christ to people in hospital settings.",
    type: "video",
    src: "/videos/vid 1.mp4",
  },
  {
    letter: "O",
    title: "Online Evangelism",
    description:
      "Reaching people through online Bible study, biblical teachings, and digital evangelism.",
    type: "image",
    src: "/images/outreach/online-evangelism.jpg",
    alt: "Illustration of online Christian teaching",
  },
  {
    letter: "P",
    title: "Prison Evangelism",
    description:
      "Sharing the message of salvation, restoration, and new life in Jesus Christ with incarcerated individuals.",
    type: "image",
    src: "/images/outreach/prison-evangelism.jpg",
    alt: "Representative image of prison ministry",
  },
];

const videos = [
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

function MissionMedia({ mission }) {
  if (mission.type === "video") {
    return (
      <video
        src={mission.src}
        controls
        playsInline
        preload="metadata"
        aria-label="Hillcity hospital ministry teaching"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          background: "#142316",
          display: "block",
        }}
      />
    );
  }

  return (
    <img
      src={mission.src}
      alt={mission.alt}
      loading="lazy"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
  );
}

export default function MissionsPage() {
  return (
    <main>
      {/* PAGE INTRODUCTION */}
      <section className="missions-hero">
        <div className="container centered">
          <span className="eyebrow">
            FAITH IN ACTION
          </span>

          <h1>Missions</h1>

          <p>
            Sharing the gospel, demonstrating Christ's love,
            and reaching lives wherever God leads us.
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
              Reaching people with the gospel of Jesus Christ
              through four areas of evangelism.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
              gap: 22,
              alignItems: "stretch",
            }}
          >
            {missions.map((mission) => (
              <article
                key={mission.letter}
                style={{
                  border: "1px solid #dfe6d5",
                  borderRadius: 20,
                  overflow: "hidden",
                  background: "#fff",
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    height: 235,
                    overflow: "hidden",
                  }}
                >
                  <MissionMedia mission={mission} />
                </div>

                <div
                  style={{
                    padding: "28px 24px 32px",
                  }}
                >
                  <span className="eyebrow">
                    {mission.letter} — SHOP
                  </span>

                  <h3
                    style={{
                      marginTop: 16,
                      marginBottom: 14,
                    }}
                  >
                    {mission.title}
                  </h3>

                  <p>{mission.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MINISTRY VIDEOS */}
      <section
        className="section"
        style={{
          background: "#F4F7EE",
        }}
      >
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">
              REAL MOMENTS. REAL MINISTRY.
            </span>

            <h2>Hillcity in Action</h2>

            <p>
              A glimpse into our evangelism, teaching,
              and compassionate outreach.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: 22,
              maxWidth: 1150,
              margin: "0 auto",
            }}
          >
            {videos.map((video) => (
              <article
                key={video.src}
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "#fff",
                  border: "1px solid #dfe6d5",
                }}
              >
                <video
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={video.title}
                  style={{
                    width: "100%",
                    height: 210,
                    objectFit: "contain",
                    background: "#142316",
                    display: "block",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    padding: "15px 18px",
                    color: "#31551B",
                    fontWeight: 600,
                  }}
                >
                  <PlayCircle size={18} />
                  {video.title}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM MISSIONS FEED */}
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

              <h2>Missions in Action</h2>

              <p>
                Explore our latest outreach activities,
                stories, and updates from the field.
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

      {/* PARTNER WITH THE MISSION */}
      <section className="section missions-partner">
        <div className="container centered">
          <HeartHandshake
            size={34}
            color="#78923A"
          />

          <h2>Partner With the Mission</h2>

          <p>
            Through prayer, service, and generosity,
            you can help us share the gospel
            and extend the love of Christ.
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
