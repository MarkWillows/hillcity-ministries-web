
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
  title: "Missions",
  description:
    "Explore the SHOP evangelism mandate and ministry outreach of Hillcity International Ministries.",
};

const missions = [
  {
    letter: "S",
    title: "Street Evangelism",
    description:
      "Sharing the gospel and demonstrating Christ's love through personal evangelism and compassionate community outreach.",
    image: "/images/outreach/Outreach 1.jpeg",
    alt: "Hillcity street evangelism and community outreach",
  },
  {
    letter: "H",
    title: "Hospital Evangelism",
    description:
      "Bringing biblical teaching, prayer, encouragement, and the hope of Christ to people in hospital settings.",
    video: "/videos/vid 1.mp4",
  },
  {
    letter: "O",
    title: "Online Evangelism",
    description:
      "Reaching people through online Bible study, biblical teachings, and digital evangelism.",
    image: "/images/outreach/Online Bible Study.png",
    alt: "Hillcity online Bible study",
  },
  {
    letter: "P",
    title: "Prison Evangelism",
    description:
      "Sharing the message of salvation, restoration, and new life in Jesus Christ with incarcerated individuals.",
    image: "/images/outreach/prison evangelism.jpeg",
    alt: "Illustration of prison evangelism",
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
    <main className="hillcity-missions">
      {/* INTRODUCTION */}
      <section className="missions-hero">
        <div className="container centered">
          <span className="eyebrow">FAITH IN ACTION</span>
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
              Reaching people with the gospel of Jesus
              Christ through Street, Hospital, Online,
              and Prison evangelism.
            </p>
          </div>

          <div className="missions-grid">
            {missions.map((mission) => (
              <article
                className="missions-card"
                key={mission.letter}
              >
                <div className="missions-media">
                  {mission.video ? (
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={mission.title}
                    >
                      <source
                        src={mission.video}
                        type="video/mp4"
                      />
                      Your browser does not support video.
                    </video>
                  ) : (
                    <Image
                      src={mission.image}
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

                <div className="missions-card-copy">
                  <span className="missions-letter">
                    {mission.letter} — SHOP
                  </span>

                  <h3>{mission.title}</h3>
                  <p>{mission.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO GALLERY */}
      <section className="section missions-video-section">
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

          <div className="missions-video-grid">
            {ministryVideos.map((video) => (
              <article
                className="missions-video-card"
                key={video.src}
              >
                <video
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={video.title}
                >
                  <source
                    src={video.src}
                    type="video/mp4"
                  />
                  Your browser does not support video.
                </video>

                <div className="missions-video-caption">
                  <PlayCircle size={17} />
                  <span>{video.title}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
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
                Follow our outreach activities,
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
