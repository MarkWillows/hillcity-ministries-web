
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  HeartHandshake,
  Users,
  Globe,
} from "lucide-react";

const sections = {
  vision: {
    title: "Our Vision",
    eyebrow: "OUR VISION",
    intro: "Proclaiming the supremacy of Jesus Christ.",
  },
  mission: {
    title: "Our Mission",
    eyebrow: "OUR MISSION",
    intro:
      "Empowering believers to embrace their identity, inheritance, and ability in Christ.",
  },
  "statement-of-faith": {
    title: "Statement of Faith",
    eyebrow: "WHAT WE BELIEVE",
    intro:
      "The biblical convictions that guide Hillcity International Ministries.",
  },
  pastors: {
    title: "Our Pastors",
    eyebrow: "MINISTRY LEADERSHIP",
    intro:
      "Meet the co-founders of Hillcity International Ministries.",
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

function VisionPage() {
  return (
    <>
      <section className="section">
        <div className="container about-detail-centered">
          <span className="eyebrow">
            THE VISION THAT GUIDES US
          </span>

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
        </div>
      </section>

      <section className="section about-detail-soft">
        <div className="container about-detail-centered">
          <BookOpen size={32} color="#78923A" />

          <h2>A City Set on a Hill Cannot Be Hidden.</h2>

          <p>Matthew 5:14</p>
        </div>
      </section>

      <GuidingConviction />
    </>
  );
}

function MissionPage() {
  const activities = [
    {
      title: "Biblical Teaching",
      description:
        "Helping believers grow in their knowledge and understanding of God's Word.",
      Icon: BookOpen,
    },
    {
      title: "Discipleship",
      description:
        "Equipping believers to understand their identity, inheritance, and ability in Christ.",
      Icon: Users,
    },
    {
      title: "Evangelism",
      description:
        "Sharing the gospel of Jesus Christ with people wherever they are.",
      Icon: Globe,
    },
    {
      title: "Compassionate Outreach",
      description:
        "Demonstrating Christ's love through practical service and care.",
      Icon: HeartHandshake,
    },
  ];

  return (
    <>
      <section className="section">
        <div className="container about-detail-centered">
          <span className="eyebrow">
            OUR OFFICIAL MISSION
          </span>

          <h2>Equipping Believers. Proclaiming Christ.</h2>

          <p>
            To proclaim the supremacy of Christ while
            empowering members to embrace their identity,
            inheritance, and ability in Him.
          </p>

          <p>
            We express this mission through biblical
            teaching, discipleship, evangelism, and
            compassionate service to our communities.
          </p>
        </div>
      </section>

      <section className="section about-detail-soft">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">
              OUR MISSION IN PRACTICE
            </span>

            <h2>How We Serve</h2>
          </div>

          <div className="about-new-values-grid">
            {activities.map(({ title, description, Icon }) => (
              <div className="about-new-value-card" key={title}>
                <Icon size={27} />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-detail-centered">
          <span className="eyebrow">
            OUR EVANGELISM MANDATE
          </span>

          <h2>The SHOP Mandate</h2>

          <p>
            We seek to reach people with the message
            of Jesus Christ through Street, Hospital,
            Online, and Prison evangelism.
          </p>

          <Link className="btn btn-primary" href="/missions">
            Explore Our Missions
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

function FaithPage() {
  return (
    <>
      <section className="section">
        <div className="container about-detail-centered">
          <span className="eyebrow">
            OUR FOUNDATION
          </span>

          <h2>Bible-Based. Christ-Centered.</h2>

          <p>
            Hillcity International Ministries is a
            Bible-based and Christ-centered ministry,
            founded on the vision of proclaiming
            the supremacy of Jesus Christ.
          </p>

          <p>
            We are committed to helping believers
            discover the truth of their identity
            in Christ, the inheritance provided
            through their union with Him, and the
            ability and power they possess as a result.
          </p>

          <p>
            Our ministry is Bible-Based,
            Christ-Centered, Love-Rooted,
            and Holy Spirit-Inspired.
          </p>
        </div>
      </section>

      <GuidingConviction />
    </>
  );
}

function PastorsPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div
            className="about-detail-pastors"
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: "clamp(28px, 5vw, 70px)",
              alignItems: "center",
            }}
          >
            <div
              className="about-detail-pastors-photo"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4 / 5",
                overflow: "hidden",
                borderRadius: "20px",
                background: "#F5F7F0",
              }}
            >
              <Image
                src="/images/pastors/pastors-together-2.png"
                alt="Pastors Foyin and Peace Bamidele, co-founders of Hillcity International Ministries"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 46vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            </div>

            <div className="about-detail-pastors-copy">
              <span className="eyebrow">
                MEET OUR PASTORS
              </span>

              <h2>Pastors Foyin & Peace Bamidele</h2>

              <h3>
                Co-Founders, Hillcity International Ministries
              </h3>

              <p>
                Foyin and Peace Bamidele founded Hillcity
                International Ministries together in the
                United States in 2023, with a shared mandate
                to proclaim the gospel of Jesus Christ to
                the nations and help believers discover
                their identity, inheritance, and ability
                in Him.
              </p>

              <p>
                Peace has served as an ordained minister
                since 2019. He teaches God's Word weekly
                and is passionate about helping people
                understand their identity, inheritance,
                and ability in Christ.
              </p>

              <p>
                Together, Foyin and Peace lead the ministry,
                sharing sound biblical truth, nurturing
                spiritual growth, and demonstrating Christ's
                love through evangelism, discipleship,
                and compassionate outreach, including
                serving people experiencing homelessness
                across Atlanta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GuidingConviction />
    </>
  );
}

function GuidingConviction() {
  return (
    <section className="section about-detail-soft">
      <div className="container about-detail-centered">
        <span className="eyebrow">
          OUR GUIDING CONVICTION
        </span>

        <h2>
          Rooted in the Word.
          Guided by the Spirit.
          Centered on Jesus.
        </h2>

        <p>
          The Word of God is our Map.
          The Holy Spirit is our Guide.
          Jesus is our Lord.
        </p>
      </div>
    </section>
  );
}

export default async function AboutSectionPage({ params }) {
  const { section } = await params;
  const data = sections[section];

  if (!data) {
    notFound();
  }

  return (
    <main>
      <section className="about-hero">
        <div className="container centered">
          <span className="eyebrow">{data.eyebrow}</span>
          <h1>{data.title}</h1>
          <p>{data.intro}</p>
        </div>
      </section>

      {section === "vision" && <VisionPage />}
      {section === "mission" && <MissionPage />}
      {section === "statement-of-faith" && <FaithPage />}
      {section === "pastors" && <PastorsPage />}

      <section className="section about-detail-soft">
        <div className="container centered">
          <h2>Discover More About Hillcity</h2>

          <p>
            Learn about our ministry, grow in God's Word,
            and connect with our community.
          </p>

          <Link className="btn btn-primary" href="/about">
            About Hillcity
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
