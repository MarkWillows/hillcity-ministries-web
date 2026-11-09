
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Headphones,
  HeartHandshake,
  MapPin,
  Hospital,
  Globe,
  Heart,
} from "lucide-react";

const outreachPhotos = [
  {
    src: "/images/outreach/Outreach 1.jpeg",
    alt: "Hillcity ministry outreach activity",
  },
  {
    src: "/images/outreach/Outreach 2.jpeg",
    alt: "Hillcity community outreach activity",
  },
  {
    src: "/images/outreach/Outreach 3.jpeg",
    alt: "Hillcity ministry serving the community",
  },
];

const shop = [
  {
    letter: "S",
    title: "Street",
    Icon: MapPin,
  },
  {
    letter: "H",
    title: "Hospital",
    Icon: Hospital,
  },
  {
    letter: "O",
    title: "Online",
    Icon: Globe,
  },
  {
    letter: "P",
    title: "Prison",
    Icon: Heart,
  },
];

export default function HomePage() {
  return (
    <main className="hillcity-home">
      {/* HERO */}
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <span className="eyebrow">
              WELCOME TO HILLCITY INTERNATIONAL MINISTRIES
            </span>

            <h1>
              A City Set on a Hill Cannot Be Hidden.
            </h1>

            <p>
              Proclaiming the supremacy of Jesus Christ,
              revealing our identity in Him, and sharing
              His love with the world.
            </p>

            <div className="home-actions">
              <Link className="btn btn-primary" href="/about">
                Discover Hillcity
                <ArrowRight size={18} />
              </Link>

              <Link className="btn btn-outline" href="/join-us">
                Join Bible Study
              </Link>
            </div>

            <span className="home-scripture">
              MATTHEW 5:14
            </span>
          </div>

          <div className="home-hero-image">
            <Image
              src="/images/outreach/Outreach 1.jpeg"
              alt="Hillcity International Ministries outreach"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* VISION AND MISSION */}
      <section className="section home-purpose">
        <div className="container">
          <div className="home-purpose-grid">
            <div>
              <span className="eyebrow">OUR VISION</span>
              <h2>
                Proclaiming the Supremacy of Jesus Christ.
              </h2>
            </div>

            <div className="home-purpose-mission">
              <span className="eyebrow">OUR MISSION</span>
              <p>
                To proclaim the supremacy of Christ while
                empowering members to embrace their identity,
                inheritance, and ability in Him.
              </p>

              <Link className="text-link" href="/about">
                Learn More About Us
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDING CONVICTION */}
      <section className="home-conviction">
        <div className="container centered">
          <span className="eyebrow">OUR GUIDING CONVICTION</span>

          <h2>
            Rooted in the Word.
            <br />
            Led by the Spirit.
            <br />
            Centered on Jesus.
          </h2>

          <div className="home-conviction-grid">
            <div>
              <BookOpen size={29} />
              <p>
                The Word of God
                <strong> is our Map.</strong>
              </p>
            </div>

            <div>
              <Globe size={29} />
              <p>
                The Holy Spirit
                <strong> is our Guide.</strong>
              </p>
            </div>

            <div>
              <Heart size={29} />
              <p>
                Jesus
                <strong> is our Lord.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTREACH PHOTOGRAPHS */}
      <section className="section home-outreach">
        <div className="container">
          <div className="home-section-top">
            <div>
              <span className="eyebrow">OUR MISSION IN ACTION</span>
              <h2>Sharing Christ. Touching Lives.</h2>
              <p>
                Taking the love and message of Jesus Christ
                beyond the walls of the church.
              </p>
            </div>

            <Link className="text-link" href="/missions">
              Explore Our Missions
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="home-photo-grid">
            {outreachPhotos.map((photo, index) => (
              <div className="home-photo" key={photo.src}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 700px) 100vw, 55vw"
                      : "(max-width: 700px) 100vw, 25vw"
                  }
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>

          <div className="home-shop">
            <div className="home-shop-intro">
              <span className="eyebrow">OUR EVANGELISM MANDATE</span>
              <h3>The SHOP Mandate</h3>
              <p>
                Reaching people wherever they are.
              </p>
            </div>

            <div className="home-shop-grid">
              {shop.map(({ letter, title, Icon }) => (
                <div className="home-shop-item" key={letter}>
                  <Icon size={21} />
                  <strong>{letter}</strong>
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERMONS AND BIBLE STUDY */}
      <section className="section home-grow">
        <div className="container home-grow-grid">
          <div className="home-grow-copy">
            <span className="eyebrow">GROW IN THE WORD</span>

            <h2>Discover the Life-Changing Power of God's Word.</h2>

            <p>
              Explore Christ-centered biblical teachings
              that strengthen faith and reveal the truth
              of who we are in Him.
            </p>

            <Link className="btn btn-primary" href="/sermons">
              <Headphones size={18} />
              Listen to Sermons
            </Link>
          </div>

          <div className="home-study-card">
            <CalendarDays size={30} />

            <span className="eyebrow">YOU'RE INVITED</span>

            <h3>Sunday Bible Study</h3>

            <p>
              Join us for a refreshing time of learning,
              fellowship, and growing in God's Word.
            </p>

            <strong>Sundays · 6:00–6:30 PM ET</strong>

            <Link className="text-link" href="/join-us">
              Join Our Bible Study
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section className="section home-partner centered">
        <div className="container">
          <span className="eyebrow">PARTNER WITH THE MISSION</span>

          <h2>Be Part of What God Is Doing.</h2>

          <p>
            Through prayer, service, and generosity,
            you can help us share the gospel and
            extend Christ's love to more lives.
          </p>

          <Link className="btn btn-primary" href="/give">
            Give / Partner
            <HeartHandshake size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
