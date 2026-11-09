
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
    description: "Grounded in the truth and authority of God's Word.",
    Icon: BookOpen,
  },
  {
    title: "Christ-Centered",
    description: "Proclaiming Jesus Christ as Lord and the center of all we do.",
    Icon: Cross,
  },
  {
    title: "Love-Rooted",
    description: "Expressing the love of Christ through faith and service.",
    Icon: Heart,
  },
  {
    title: "Holy Spirit-Inspired",
    description: "Depending on the Holy Spirit for guidance and empowerment.",
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
            A Bible-based, Christ-centered ministry proclaiming
            the supremacy of Jesus Christ and helping believers
            discover who they are in Him.
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
              Inspired by Matthew 5:14, Hillcity International
              Ministries exists to make Jesus Christ known
              and equip believers to live in the fullness
              of their identity and inheritance in Him.
            </p>

            <p>
              Through biblical teaching, evangelism,
              discipleship, and compassionate outreach,
              we share the transforming power of the gospel
              with people across communities and nations.
            </p>
          </div>

          <div className="about-new-intro-image">
            <Image
              src="/images/outreach/Outreach 2.jpeg"
              alt="Hillcity International Ministries community outreach"
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

      {/* VISION AND MISSION */}
      <section className="section about-new-purpose">
        <div className="container">
          <div className="about-new-section-heading centered">
            <span className="eyebrow">OUR PURPOSE</span>
            <h2>Our Vision & Mission</h2>
          </div>

          <div className="about-new-purpose-grid">
            <div
              id="vision"
              className="about-new-purpose-card"
              style={{ scrollMarginTop: "120px" }}
            >
              <span className="eyebrow">OUR VISION</span>

              <h3>
                Proclaiming the Supremacy of Jesus Christ.
              </h3>

              <p>
                Making Jesus Christ known and bringing
                the light of His gospel to the world.
              </p>
            </div>

            <div
              id="mission"
              className="about-new-purpose-card"
              style={{ scrollMarginTop: "120px" }}
            >
              <span className="eyebrow">OUR MISSION</span>

              <h3>Equipping Believers. Proclaiming Christ.</h3>

              <p>
                To proclaim the supremacy of Christ while
                empowering members to embrace their identity,
                inheritance, and ability in Him.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDING CONVICTION */}
      <section className="about-new-conviction">
        <div className="container centered">
          <span className="eyebrow">OUR GUIDING CONVICTION</span>

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
            {coreValues.map(({ title, description, Icon }) => (
              <div className="about-new-value-card" key={title}>
                <Icon size={27} />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATEMENT OF FAITH */}
      <section
        id="faith"
        className="section about-new-faith"
        style={{ scrollMarginTop: "120px" }}
      >
        <div className="container about-new-faith-grid">
          <div>
            <span className="eyebrow">WHAT WE BELIEVE</span>

            <h2>Built on the Truth of God's Word.</h2>

            <p>
              Hillcity International Ministries is a
              Bible-based and Christ-centered ministry,
              founded on the vision of proclaiming the
              supremacy of Jesus Christ.
            </p>

            <p>
              We believe in the truth of Scripture,
              the finished work of Jesus Christ,
              the transforming power of the Holy Spirit,
              and the identity, inheritance, and ability
              believers possess through union with Christ.
            </p>

            <Link
              className="btn btn-primary"
              href="/about/statement-of-faith"
            >
              Read Our Full Statement of Faith
              <ArrowRight size={18} />
            </Link>
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

      {/* PASTORAL LEADERSHIP */}
      <section
        id="pastors"
        className="section about-new-pastors"
        style={{ scrollMarginTop: "120px" }}
      >
        <div className="container">
          <div className="about-new-pastors-grid">
            <div className="about-new-pastors-image">
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
              <span className="eyebrow">MEET OUR PASTORS</span>

              <h2>
                Leading With Faith.
                <br />
                Serving With Love.
              </h2>

              <h3>Pastors Foyin & Peace Bamidele</h3>

              <p>
                Foyin and Peace founded Hillcity International
                Ministries together in the United States in
                2023, with a shared mandate to proclaim the
                gospel of Jesus Christ to the nations and
                help believers discover their identity,
                inheritance, and ability in Him.
              </p>

              <p>
                Peace has served as an ordained minister
                since 2019. Together, they lead the ministry
                through biblical teaching, discipleship,
                evangelism, and compassionate outreach,
                sharing Christ's love and helping people
                grow in the knowledge of God's Word.
              </p>

              <Link className="text-link" href="/about/pastors">
                Meet Our Pastors
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN US */}
      <section className="section about-new-join centered">
        <div className="container">
          <Users size={32} />

          <span className="eyebrow">GROW WITH US</span>

          <h2>There's a Place for You at Hillcity.</h2>

          <p>
            Join us every Sunday for Bible Study
            and grow in your understanding of God's Word.
          </p>

          <strong>Sundays · 6:00–6:30 PM ET</strong>

          <Link className="btn btn-primary" href="/join-us">
            Join Bible Study
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
