
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Cross,
  Compass,
  Users,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "About Hillcity",
  description:
    "Discover the vision, mission, beliefs, and pastoral leadership of Hillcity International Ministries.",
};

const coreValues = [
  {
    title: "Bible-Based",
    description:
      "Grounded in the truth and authority of God's Word.",
    Icon: BookOpen,
  },
  {
    title: "Christ-Centered",
    description:
      "Proclaiming Jesus Christ as Lord and the center of all we do.",
    Icon: Cross,
  },
  {
    title: "Love-Rooted",
    description:
      "Expressing the love of Christ through faith and service.",
    Icon: Heart,
  },
  {
    title: "Holy Spirit-Inspired",
    description:
      "Depending on the Holy Spirit for guidance and empowerment.",
    Icon: Sparkles,
  },
];

export default function AboutPage() {
  return (
    <main className="hillcity-about">
      {/* INTRODUCTION */}
      <section className="about-new-hero">
        <div className="container centered">
          <span className="eyebrow">GET TO KNOW US</span>
          <h1>About Hillcity</h1>
          <p>
            A Bible-based, Christ-centered ministry
            proclaiming the supremacy of Jesus Christ
            and helping believers discover who they
            are in Him.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section about-new-intro">
        <div className="container about-new-intro-grid">
          <div>
            <span className="eyebrow">WHO WE ARE</span>

            <h2>
              A City Set on a Hill.
              <br />
              A Light to the World.
            </h2>

            <p>
              Founded in the United States in 2023,
              Hillcity International Ministries is
              committed to proclaiming the gospel of
              Jesus Christ to the nations.
            </p>

            <p>
              Inspired by Matthew 5:14, we seek to
              make Christ known, equip believers
              to embrace their identity and
              inheritance in Him, and demonstrate
              His love through biblical teaching,
              discipleship, and compassionate outreach.
            </p>
          </div>

          <div className="about-new-intro-image">
            <Image
              src="/images/outreach/Outreach 2.jpeg"
              alt="Hillcity community outreach"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* VISION */}
      <section
        id="vision"
        className="section about-new-purpose"
        style={{ scrollMarginTop: "110px" }}
      >
        <div className="container">
          <div className="about-new-section-heading centered">
            <span className="eyebrow">OUR PURPOSE</span>
            <h2>Our Vision & Mission</h2>
          </div>

          <div className="about-new-purpose-grid">
            <div className="about-new-purpose-card">
              <span className="eyebrow">OUR VISION</span>

              <h3>
                Proclaiming the Supremacy of
                Jesus Christ.
              </h3>

              <p>
                We envision a world where Jesus
                Christ is made known and believers
                live in the fullness of their
                identity in Him.
              </p>
            </div>

            <div
              id="mission"
              className="about-new-purpose-card"
              style={{ scrollMarginTop: "110px" }}
            >
              <span className="eyebrow">OUR MISSION</span>

              <h3>Equipping Believers. Proclaiming Christ.</h3>

              <p>
                To proclaim the supremacy of Christ
                while empowering members to embrace
                their identity, inheritance, and
                ability in Him.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDING CONVICTION */}
      <section className="about-new-conviction">
        <div className="container centered">
          <span className="eyebrow">
            OUR GUIDING CONVICTION
          </span>

          <h2>
            The Word of God is our Map.
            <br />
            The Holy Spirit is our Guide.
            <br />
            Jesus is our Lord.
          </h2>

          <Compass size={30} />
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section about-new-values">
        <div className="container">
          <div className="about-new-section-heading centered">
            <span className="eyebrow">WHAT GUIDES US</span>
            <h2>Our Core Values</h2>
          </div>

          <div className="about-new-values-grid">
            {coreValues.map(
              ({ title, description, Icon }) => (
                <div
                  className="about-new-value-card"
                  key={title}
                >
                  <Icon size={27} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* STATEMENT OF FAITH */}
      <section
        id="statement-of-faith"
        className="section about-new-faith"
        style={{ scrollMarginTop: "110px" }}
      >
        <div className="container about-new-faith-grid">
          <div>
            <span className="eyebrow">
              WHAT WE BELIEVE
            </span>

            <h2>
              Built on the Truth of God's Word.
            </h2>

            <p>
              Hillcity International Ministries
              is a Bible-based and Christ-centered
              ministry founded on the vision of
              proclaiming the supremacy of Jesus.
            </p>

            <p>
              We believe in the truth of God's Word,
              the person and finished work of
              Jesus Christ, and the transforming
              power of the Holy Spirit.
            </p>

            <p>
              Through our union with Christ,
              believers can discover their identity,
              understand their inheritance, and
              walk in the ability and power
              available to them in Him.
            </p>
          </div>

          <div className="about-new-faith-quote">
            <BookOpen size={35} />

            <p>
              "You are the light of the world.
              A city set on a hill cannot be hidden."
            </p>

            <strong>MATTHEW 5:14</strong>
          </div>
        </div>
      </section>

      {/* PASTORS */}
      <section
        id="pastors"
        className="section about-new-pastors"
        style={{ scrollMarginTop: "110px" }}
      >
        <div className="container">
          <div className="about-new-pastors-grid">
            <div
              className="about-new-pastors-image"
              style={{
                minHeight: "450px",
                background: "#FAF9F5",
              }}
            >
              <Image
                src="/images/pastors/pastors-together-2.png"
                alt="Pastors Foyin and Peace Bamidele, co-founders of Hillcity International Ministries"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            </div>

            <div className="about-new-pastors-copy">
              <span className="eyebrow">
                MEET OUR PASTORS
              </span>

              <h2>
                Leading With Faith.
                <br />
                Serving With Love.
              </h2>

              <h3>
                Pastors Foyin & Peace Bamidele
              </h3>

              <p>
                Foyin and Peace Bamidele founded
                Hillcity International Ministries
                in the United States in 2023,
                driven by a shared mandate to
                proclaim the gospel of Jesus
                Christ to the nations and help
                believers discover their identity,
                inheritance, and ability in Him.
              </p>

              <p>
                Peace has served as an ordained
                minister since 2019. Together,
                they lead the ministry through
                biblical teaching, discipleship,
                evangelism, and compassionate
                outreach.
              </p>

              <p>
                Their shared passion is to see
                lives transformed through God's
                Word and the love of Christ
                demonstrated in communities
                across Atlanta and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN US */}
      <section className="section about-new-join centered">
        <div className="container">
          <Users size={32} />

          <span className="eyebrow">GROW WITH US</span>

          <h2>
            There's a Place for You at Hillcity.
          </h2>

          <p>
            Join us every Sunday for Bible Study
            and grow in your understanding of
            God's Word.
          </p>

          <strong>
            Sundays · 6:00–6:30 PM ET
          </strong>

          <Link
            className="btn btn-primary"
            href="/join-us"
          >
            Join Bible Study
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
