
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Globe,
  Users,
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
    eyebrow: "OUR MISSION",
    intro:
      "Empowering believers to embrace their identity, inheritance, and ability in Christ.",
  },
  "statement-of-faith": {
    title: "Statement of Faith",
    eyebrow: "WHAT WE BELIEVE",
    intro:
      "Bible-based. Christ-centered. Love-rooted. Holy Spirit-inspired.",
  },
  pastors: {
    title: "Our Pastors",
    eyebrow: "MINISTRY LEADERSHIP",
    intro:
      "Meet the couple serving and leading Hillcity International Ministries.",
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
    description:
      sections[section]?.intro ||
      "Discover Hillcity International Ministries.",
  };
}

function VisionPage() {
  return (
    <>
      <section className="section">
        <div className="container about-content">
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

          <p>
            We desire to see people encounter Jesus,
            grow in the knowledge of God's Word,
            and live in the fullness of their
            identity in Him.
          </p>
        </div>
      </section>

      <section
        className="section centered"
        style={{
          background: "#31551B",
          color: "#fff",
        }}
      >
        <div className="container">
          <BookOpen
            size={34}
            color="#F2B544"
          />

          <h2 style={{ color: "#fff" }}>
            A City Set on a Hill Cannot Be Hidden.
          </h2>

          <p style={{ color: "#F2B544" }}>
            MATTHEW 5:14
          </p>
        </div>
      </section>

      <section className="section centered">
        <div className="container">
          <span className="eyebrow">
            OUR GUIDING CONVICTION
          </span>

          <h2>
            Rooted in Christ.
            Guided by His Spirit.
          </h2>

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

const missionPillars = [
  {
    title: "Biblical Teaching",
    description:
      "Helping believers grow in the knowledge and understanding of God's Word.",
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
    Icon: HandHeart,
  },
];

function MissionPage() {
  return (
    <>
      <section className="section">
        <div className="container about-content">
          <span className="eyebrow">
            OUR OFFICIAL MISSION
          </span>

          <h2>
            Equipping Believers.
            Proclaiming Christ.
          </h2>

          <p>
            <strong>
              To proclaim the supremacy of Christ
              while empowering members to embrace
              their identity, inheritance, and
              ability in Him.
            </strong>
          </p>

          <p>
            Our mission is expressed through
            biblical teaching, discipleship,
            evangelism, and service to
            our communities.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">
              OUR MISSION IN PRACTICE
            </span>

            <h2>How We Serve</h2>
          </div>

          <div className="about-grid">
            {missionPillars.map(
              ({ title, description, Icon }) => (
                <div className="about-card" key={title}>
                  <div className="about-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-detail-pastors">
          <div className="about-detail-pastors-copy">
            <span className="eyebrow">
              OUR EVANGELISM MANDATE
            </span>

            <h2>The SHOP Mandate</h2>

            <p>
              We seek to reach people with the
              message of Jesus Christ through
              Street, Hospital, Online,
              and Prison evangelism.
            </p>

            <Link
              className="text-link"
              href="/missions"
            >
              Explore Our Missions
              <ArrowRight size={17} />
            </Link>
          </div>

          <div
            style={{
              position: "relative",
              minHeight: 330,
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/outreach/Outreach 2.jpeg"
              alt="Hillcity community outreach"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

const beliefs = [
  {
    title: "Bible-Based",
    description:
      "God's Word is the foundation of our teaching, faith, and Christian living.",
    Icon: BookOpen,
  },
  {
    title: "Christ-Centered",
    description:
      "Jesus Christ is supreme and central to our message, identity, and purpose.",
    Icon: Heart,
  },
  {
    title: "Love-Rooted",
    description:
      "We seek to reflect the love of Christ through relationships, evangelism, and service.",
    Icon: HandHeart,
  },
  {
    title: "Holy Spirit-Inspired",
    description:
      "We depend on the Holy Spirit for guidance, empowerment, and spiritual growth.",
    Icon: Globe,
  },
];

function StatementOfFaithPage() {
  return (
    <>
      <section className="section">
        <div className="container about-content">
          <span className="eyebrow">
            OUR FOUNDATION
          </span>

          <h2>
            Bible-Based and Christ-Centered.
          </h2>

          <p>
            Hillcity International Ministries is
            a Bible-based and Christ-centered
            ministry founded on the vision of
            proclaiming the supremacy of Jesus.
          </p>

          <p>
            We are committed to showing believers
            the truth of their identity in Christ,
            the inheritance provided through
            their union with Him, and the ability
            and power they possess as a result.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">
              OUR CORE VALUES
            </span>

            <h2>What Shapes Our Ministry</h2>
          </div>

          <div className="about-grid">
            {beliefs.map(
              ({ title, description, Icon }) => (
                <div className="about-card" key={title}>
                  <div className="about-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="section centered">
        <div className="container">
          <span className="eyebrow">
            OUR GUIDING CONVICTION
          </span>

          <h2>Jesus Is Our Lord.</h2>

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

function PastorsPage() {
  return (
    <>
      <section className="section">
        <div className="container about-detail-pastors">
          <div
            className="about-detail-pastors-photo"
            style={{
              position: "relative",
              minHeight: 520,
              overflow: "hidden",
              borderRadius: 16,
              background: "#F4F7EE",
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

            <h2>
              Pastors Foyin & Peace Bamidele
            </h2>

            <h3>
              Co-Founders, Hillcity International Ministries
            </h3>

            <p>
              Foyin and Peace Bamidele are a
              husband-and-wife ministry team who
              founded Hillcity International
              Ministries together in 2023,
              united by a shared passion for
              proclaiming the gospel of Jesus
              Christ and helping believers
              discover their identity and
              victory in Him.
            </p>

            <p>
              Peace has served as an ordained
              minister since 2019. He teaches
              God's Word weekly and is
              passionate about helping people
              understand their identity,
              inheritance, and ability in Christ.
            </p>

            <p>
              Together, Foyin and Peace lead the
              ministry, sharing sound biblical
              truth, nurturing spiritual growth,
              and demonstrating Christ's love
              through evangelism, discipleship,
              and compassionate outreach,
              including serving people
              experiencing homelessness
              across Atlanta.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light centered">
        <div className="container">
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
    <main>
      <section className="about-hero">
        <div className="container centered">
          <span className="eyebrow">
            {data.eyebrow}
          </span>

          <h1>{data.title}</h1>
          <p>{data.intro}</p>
        </div>
      </section>

      {section === "vision" && <VisionPage />}
      {section === "mission" && <MissionPage />}
      {section === "statement-of-faith" && (
        <StatementOfFaithPage />
      )}
      {section === "pastors" && <PastorsPage />}

      <section className="section centered">
        <div className="container">
          <h2>Discover More About Hillcity</h2>

          <p>
            Learn about our ministry, grow in
            God's Word, and connect with
            our community.
          </p>

          <Link
            className="btn btn-primary"
            href="/about"
          >
            About Hillcity
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
