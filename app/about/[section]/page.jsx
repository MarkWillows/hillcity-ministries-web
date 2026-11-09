
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Globe,
  Users,
  Compass,
  Sparkles,
  Cross,
  HandHeart,
} from "lucide-react";

const sections = {
  vision: {
    title: "Our Vision",
    eyebrow: "OUR VISION",
    intro: "Proclaiming the supremacy of Jesus Christ.",
  },
  mission: {
    title: "Our Mission",
    eyebrow: "OUR CALLING",
    intro:
      "Empowering believers to embrace their identity, inheritance, and ability in Christ.",
  },
  "statement-of-faith": {
    title: "Statement of Faith",
    eyebrow: "WHAT WE BELIEVE",
    intro:
      "The biblical convictions that shape our faith, teaching, and ministry.",
  },
  pastors: {
    title: "Our Pastors",
    eyebrow: "PASTORAL LEADERSHIP",
    intro:
      "Meet the people serving and leading Hillcity International Ministries.",
  },
};

export function generateStaticParams() {
  return Object.keys(sections).map((section) => ({
    section,
  }));
}

export async function generateMetadata({ params }) {
  const { section } = await params;
  return {
    title: sections[section]?.title || "About Hillcity",
  };
}

function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="about-detail-hero">
      <div className="container centered">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}

function PageFooter() {
  return (
    <section className="about-detail-footer">
      <div className="container centered">
        <h2>Discover More About Hillcity</h2>
        <p>
          Learn about our ministry, grow in God's Word,
          and connect with our community.
        </p>
        <div className="about-detail-actions">
          <Link className="btn btn-primary" href="/about">
            About Hillcity
            <ArrowRight size={18} />
          </Link>
          <Link className="btn btn-outline" href="/join-us">
            Join Bible Study
          </Link>
        </div>
      </div>
    </section>
  );
}

function VisionPage() {
  return (
    <>
      <section className="section">
        <div className="container about-detail-narrow">
          <span className="eyebrow">THE VISION THAT GUIDES US</span>
          <h2>Making Jesus Christ Known.</h2>
          <p>
            The vision of Hillcity International Ministries
            is to proclaim the supremacy of Jesus Christ.
          </p>
          <p>
            Inspired by Matthew 5:14, we believe that
            the light of Christ should shine through
            the lives of believers, bringing hope,
            truth, and transformation to the world.
          </p>
          <p>
            We desire to see people encounter Jesus,
            grow in the knowledge of God's Word,
            and live in the fullness of their
            identity in Him.
          </p>
        </div>
      </section>

      <section className="about-detail-highlight">
        <div className="container centered">
          <BookOpen size={32} />
          <h2>A City Set on a Hill Cannot Be Hidden.</h2>
          <span>MATTHEW 5:14</span>
        </div>
      </section>

      <section className="section">
        <div className="container about-detail-centered">
          <span className="eyebrow">OUR GUIDING CONVICTION</span>
          <h2>Rooted in Christ. Guided by His Spirit.</h2>
          <p>
            The Word of God is our Map.
            The Holy Spirit is our Guide.
            Jesus is our Lord.
          </p>
        </div>
      </section>
    </>
  );
}

function MissionPage() {
  const pillars = [
    {
      Icon: BookOpen,
      title: "Biblical Teaching",
      description:
        "Helping believers grow in the knowledge and understanding of God's Word.",
    },
    {
      Icon: Users,
      title: "Discipleship",
      description:
        "Equipping believers to understand their identity, inheritance, and ability in Christ.",
    },
    {
      Icon: Globe,
      title: "Evangelism",
      description:
        "Sharing the gospel of Jesus Christ with people wherever they are.",
    },
    {
      Icon: HandHeart,
      title: "Compassionate Outreach",
      description:
        "Demonstrating Christ's love through practical service and care.",
    },
  ];

  return (
    <>
      <section className="section">
        <div className="container about-detail-narrow">
          <span className="eyebrow">OUR OFFICIAL MISSION</span>
          <h2>Equipping Believers. Proclaiming Christ.</h2>
          <p className="about-detail-lead">
            To proclaim the supremacy of Christ while
            empowering members to embrace their identity,
            inheritance, and ability in Him.
          </p>
          <p>
            Our mission is expressed through biblical
            teaching, discipleship, evangelism,
            and service to our communities.
          </p>
        </div>
      </section>

      <section className="section about-detail-soft">
        <div className="container">
          <div className="centered about-detail-heading">
            <span className="eyebrow">OUR MISSION IN PRACTICE</span>
            <h2>How We Serve</h2>
          </div>
          <div className="about-detail-card-grid">
            {pillars.map(({ Icon, title, description }) => (
              <div className="about-detail-card" key={title}>
                <Icon size={29} />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-detail-split">
          <div>
            <span className="eyebrow">OUR EVANGELISM MANDATE</span>
            <h2>The SHOP Mandate</h2>
            <p>
              We seek to reach people with the message
              of Jesus Christ through Street, Hospital,
              Online, and Prison evangelism.
            </p>
            <Link className="text-link" href="/missions">
              Explore Our Missions
              <ArrowRight size={17} />
            </Link>
          </div>
          <div className="about-detail-image">
            <Image
              src="/images/outreach/Outreach 2.jpeg"
              alt="Hillcity International Ministries community outreach"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function FaithPage() {
  const beliefs = [
    {
      Icon: Cross,
      title: "Jesus Christ",
      description:
        "Jesus Christ is our Lord and the center of our faith. We proclaim His supremacy and the salvation found in Him.",
    },
    {
      Icon: BookOpen,
      title: "The Word of God",
      description:
        "We are a Bible-based ministry, grounded in the truth of Scripture and committed to teaching God's Word.",
    },
    {
      Icon: Sparkles,
      title: "The Holy Spirit",
      description:
        "We depend on the Holy Spirit for guidance, empowerment, and spiritual transformation.",
    },
    {
      Icon: Heart,
      title: "Our Identity in Christ",
      description:
        "We believe believers should understand their identity, inheritance, and ability through their union with Christ.",
    },
  ];

  return (
    <>
      <section className="section">
        <div className="container about-detail-narrow">
          <span className="eyebrow">OUR FOUNDATION</span>
          <h2>Bible-Based. Christ-Centered.</h2>
          <p>
            Hillcity International Ministries is a
            Bible-based and Christ-centered ministry,
            founded on the vision of proclaiming
            the supremacy of Jesus Christ.
          </p>
          <p>
            Our teaching emphasizes the truth of
            believers' identity in Christ, the
            inheritance provided through union
            with Him, and the ability and power
            they possess as a result.
          </p>
        </div>
      </section>

      <section className="section about-detail-soft">
        <div className="container">
          <div className="centered about-detail-heading">
            <span className="eyebrow">WHAT SHAPES OUR FAITH</span>
            <h2>Our Foundational Convictions</h2>
          </div>
          <div className="about-detail-card-grid">
            {beliefs.map(({ Icon, title, description }) => (
              <div className="about-detail-card" key={title}>
                <Icon size={29} />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-detail-highlight">
        <div className="container centered">
          <Compass size={32} />
          <h2>
            The Word of God is our Map.
            <br />
            The Holy Spirit is our Guide.
            <br />
            Jesus is our Lord.
          </h2>
        </div>
      </section>
    </>
  );
}

function PastorsPage() {
  return (
    <>
      <section className="section">
        <div className="container about-detail-pastors">
          <div className="about-detail-pastors-photo">
            <Image
              src="/images/pastors/pastors-together-2.png"
              alt="Peace Bamidele and Oluwafoyinsola Faniyi"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>

          <div className="about-detail-pastors-copy">
            <span className="eyebrow">MEET OUR PASTORS</span>
            <h2>
              Serving Christ.
              <br />
              Sharing His Love.
            </h2>
            <h3>
              Peace Bamidele & Oluwafoyinsola Faniyi
            </h3>
            <p>
              Peace and Oluwafoyinsola share a passion
              for proclaiming the supremacy of Jesus
              Christ and helping believers discover
              their identity, inheritance, and ability
              in Him.
            </p>
            <p>
              Their ministry is rooted in biblical
              teaching, spiritual growth, evangelism,
              and compassionate service to others.
            </p>
            <p>
              Together, they are committed to
              encouraging believers to grow in
              the knowledge of God's Word and
              reflect the love of Christ in
              their everyday lives.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-detail-soft">
        <div className="container about-detail-centered">
          <span className="eyebrow">OUR HEART FOR MINISTRY</span>
          <h2>Helping People Know Christ and Grow in Him.</h2>
          <p>
            At the heart of Hillcity International
            Ministries is a desire to see lives
            transformed through the truth of
            God's Word and the work of the Holy Spirit.
          </p>
          <p>
            Through teaching, discipleship,
            and evangelism, we seek to make
            Jesus Christ known and share
            His love with the world.
          </p>
        </div>
      </section>
    </>
  );
}

export default async function AboutSectionPage({ params }) {
  const { section } = await params;
  const data = sections[section];

  if (!data) {
    notFound();
  }

  return (
    <main className="hillcity-about-detail">
      <PageHero {...data} />

      {section === "vision" && <VisionPage />}
      {section === "mission" && <MissionPage />}
      {section === "statement-of-faith" && <FaithPage />}
      {section === "pastors" && <PastorsPage />}

      <PageFooter />
    </main>
  );
}
