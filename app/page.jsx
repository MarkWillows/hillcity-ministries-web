
import Link from "next/link";
import {
  ArrowRight,
  Headphones,
  Youtube,
  CalendarDays,
  HeartHandshake,
  BookOpen,
  MapPin,
  Hospital,
  Globe,
  Heart,
} from "lucide-react";

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
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-content">
          <span className="eyebrow">
            WELCOME TO HILLCITY
          </span>

          <h1>
            A City Set on a Hill Cannot Be Hidden.
          </h1>

          <p>
            Sharing the love of Jesus Christ,
            transforming lives through God's Word,
            and reaching the world with the gospel.
          </p>

          <div className="hero-actions">
            <Link
              className="btn btn-primary"
              href="/sermons"
            >
              Explore Sermons
              <ArrowRight size={18} />
            </Link>

            <Link
              className="btn btn-outline"
              href="/join-us"
            >
              Join Bible Study
            </Link>
          </div>

          <p className="scripture">
            Matthew 5:14
          </p>
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="section welcome">
        <div className="container centered">
          <span className="eyebrow">
            WHO WE ARE
          </span>

          <h2>
            Welcome to Hillcity International Ministries
          </h2>

          <p>
            We are a Christ-centered ministry committed
            to proclaiming the gospel, equipping
            believers through God's Word, and extending
            the love of Christ to our world.
          </p>

          <Link className="text-link" href="/about">
            Discover Hillcity
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* SERMONS SECTION */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">
              GROW IN THE WORD
            </span>

            <h2>Sermons</h2>

            <p>
              Explore biblical teachings designed
              to strengthen your faith and deepen
              your relationship with Jesus Christ.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <Headphones size={36} />

              <h3>Listen to Sermons</h3>

              <p>
                Access our audio teachings and
                sermon series on SoundCloud.
              </p>

              <Link href="/sermons">
                Explore Audio Sermons
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="feature-card">
              <Youtube size={36} />

              <h3>Watch Teachings</h3>

              <p>
                Watch video teachings and ministry
                messages through our YouTube channel.
              </p>

              <Link href="/sermons">
                Explore Video Teachings
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN US SECTION */}
      <section className="section">
        <div className="container service-panel">
          <div>
            <span className="eyebrow">
              WORSHIP & FELLOWSHIP
            </span>

            <h2>
              Join Our Weekly Bible Study
            </h2>

            <p>
              Every Sunday, we gather online to
              study God's Word, grow in faith,
              and experience the transforming
              power of the gospel.
            </p>

            <div className="service-detail">
              <CalendarDays size={22} />

              <span>
                Sundays | 6:00–6:30 PM Eastern Time
              </span>
            </div>

            <Link
              className="btn btn-primary"
              href="/join-us"
            >
              Join Us
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="service-verse">
            <BookOpen size={42} />

            <h3>
              Growing Together in God's Word
            </h3>

            <p>
              Come, learn, grow, and be
              strengthened in faith.
            </p>
          </div>
        </div>
      </section>

      {/* SHOP EVANGELISM SECTION */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">
              OUR EVANGELISM MANDATE
            </span>

            <h2>The SHOP Mandate</h2>

            <p>
              Reaching people with the gospel
              of Jesus Christ wherever they are.
            </p>
          </div>

          <div className="shop-grid">
            {shop.map(
              ({
                letter,
                title,
                description,
                Icon,
              }) => (
                <div
                  className="shop-card"
                  key={letter}
                >
                  <div className="shop-icon">
                    <Icon size={26} />
                  </div>

                  <span className="shop-letter">
                    {letter}
                  </span>

                  <h3>{title}</h3>

                  <p>{description}</p>
                </div>
              )
            )}
          </div>

          <div className="centered section-action">
            <Link
              className="btn btn-primary"
              href="/missions"
            >
              Explore Missions
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* GIVE AND PARTNER SECTION */}
      <section className="section centered">
        <div className="container">
          <span className="eyebrow">
            PARTNER WITH THE MISSION
          </span>

          <h2>
            Help Us Reach More Lives
          </h2>

          <p className="narrow">
            Through prayer, service, and generosity,
            you can partner with Hillcity to advance
            the gospel and extend Christ's love
            to more people.
          </p>

          <Link
            className="btn btn-primary"
            href="/give"
          >
            Give / Partner
            <HeartHandshake size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
