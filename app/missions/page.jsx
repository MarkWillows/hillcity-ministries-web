
import Link from "next/link";
import Script from "next/script";
import {
  MapPin,
  Hospital,
  Globe,
  HeartHandshake,
  Instagram,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Missions",
  description:
    "Discover the missions and evangelism mandate of Hillcity International Ministries.",
};

const missions = [
  {
    letter: "S",
    title: "Street Evangelism",
    description:
      "Taking the gospel to our communities, sharing the love of Jesus Christ through personal evangelism and compassionate outreach.",
    Icon: MapPin,
  },
  {
    letter: "H",
    title: "Hospital Evangelism",
    description:
      "Bringing encouragement, prayer, and the hope of Christ to people facing illness and difficult circumstances.",
    Icon: Hospital,
  },
  {
    letter: "O",
    title: "Online Evangelism",
    description:
      "Using digital platforms to proclaim the gospel, share biblical teachings, and reach people wherever they are.",
    Icon: Globe,
  },
  {
    letter: "P",
    title: "Prison Evangelism",
    description:
      "Sharing the message of salvation, restoration, and new life in Jesus Christ with incarcerated individuals.",
    Icon: HeartHandshake,
  },
];

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
            Sharing the gospel, demonstrating
            Christ's love, and reaching lives
            wherever God leads us.
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
              Our mission is to reach people with
              the gospel of Jesus Christ through
              four areas of evangelism.
            </p>
          </div>

          <div className="missions-grid">
            {missions.map(
              ({
                letter,
                title,
                description,
                Icon,
              }) => (
                <article
                  className="missions-card"
                  key={letter}
                >
                  <div className="missions-icon">
                    <Icon size={26} />
                  </div>

                  <span className="missions-letter">
                    {letter}
                  </span>

                  <h3>{title}</h3>

                  <p>{description}</p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* LIVE INSTAGRAM MISSIONS FEED */}
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
