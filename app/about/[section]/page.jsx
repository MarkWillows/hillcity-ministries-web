
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Heart,
  HeartHandshake,
  Users,
  Globe,
  Sparkles,
  Church,
  HandHeart,
  Lightbulb,
  ShieldCheck,
  Compass,
} from "lucide-react";

const sections = {
  vision: {
    title: "Our Vision",
    eyebrow: "THE VISION THAT GUIDES US",
    intro:
      "Proclaiming the supremacy of Jesus Christ and shining His light to the nations.",
  },
  mission: {
    title: "Our Mission",
    eyebrow: "OUR CALLING AND PURPOSE",
    intro:
      "Helping believers embrace their identity, inheritance, and ability in Jesus Christ.",
  },
  "statement-of-faith": {
    title: "Statement of Faith",
    eyebrow: "WHAT WE BELIEVE",
    intro:
      "The biblical truths and convictions upon which Hillcity International Ministries is founded.",
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

const missionPurposes = [
  {
    title: "World Evangelization",
    description:
      "We are called to proclaim the gospel of Jesus Christ and make disciples of all nations, raising believers who reflect His character, attitude, and impact in the world.",
    Icon: Globe,
  },
  {
    title: "Transformation of Thinking",
    description:
      "We teach believers to renew their minds through God's Word, grow in the knowledge of His truth, and live by faith through the power of the Holy Spirit.",
    Icon: Lightbulb,
  },
  {
    title: "Societal Transformation",
    description:
      "We believe believers are called to be the light of the world and salt of the earth, bringing Christ-centered values, practical solutions, hope, and restoration to their communities.",
    Icon: HandHeart,
  },
  {
    title: "Building Godly Families",
    description:
      "We encourage marriages and families grounded in biblical truth, spiritual unity, love, and the guidance of the Holy Spirit, raising generations that walk in God's ways.",
    Icon: Users,
  },
  {
    title: "Dependence on God's System",
    description:
      "We teach believers to trust God above worldly systems, live free from covetousness, practice faithful stewardship, and use their resources to advance the gospel and God's Kingdom.",
    Icon: HeartHandshake,
  },
];

const faithBeliefs = [
  {
    title: "The Word of God",
    description:
      "We believe God's Word is the foundation of our faith and conduct. Through Scripture, rightly understood by the guidance of the Holy Spirit, believers discover God's truth and are equipped for victorious Christian living.",
    scripture: "2 Timothy 3:16–17; 2 Corinthians 3:6",
    Icon: BookOpen,
  },
  {
    title: "The Triune God",
    description:
      "We believe in God the Father, God the Son, and God the Holy Spirit. We depend on the presence, guidance, and power of the Holy Spirit in our relationship with God and in fulfilling His purposes.",
    scripture: "Matthew 28:19",
    Icon: Sparkles,
  },
  {
    title: "Jesus Christ",
    description:
      "We believe Jesus Christ is Lord, the way, the truth, and the life. Through Him, we are reconciled to the Father, and through His finished work believers receive their identity and inheritance in Him.",
    scripture: "John 14:6",
    Icon: Church,
  },
  {
    title: "Reconciliation and Discipleship",
    description:
      "We believe the gospel calls people into reconciliation with God and into a transformed life. We are commissioned to proclaim Christ, make disciples of all nations, and demonstrate the reality of His Kingdom in the world.",
    scripture: "Matthew 28:19–20; Matthew 6:10",
    Icon: Globe,
  },
  {
    title: "Life in Christ",
    description:
      "We believe that through union with Christ, believers receive a new identity, spiritual inheritance, and the ability to live in victory. As their minds are renewed by God's Word, their lives increasingly reflect the character of Christ.",
    scripture: "Romans 12:2; Colossians 1:27",
    Icon: ShieldCheck,
  },
  {
    title: "The Ministry of the Holy Spirit",
    description:
      "We believe the Holy Spirit empowers believers, illuminates the truth of God's Word, and enables them to express the life of Christ through spiritual fruit, gifts, prayer, and service.",
    scripture: "John 16:13; Galatians 5:22–23",
    Icon: Heart,
  },
];

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

        <Compass size={30} color="#78923A" />
      </div>
    </section>
  );
}

function VisionPage() {
  return (
    <>
      <section className="section">
        <div className="container about-detail-centered">
          <span className="eyebrow">
            OUR VISION
          </span>

          <h2>
            Proclaiming the Supremacy of Jesus Christ.
          </h2>

          <p>
            At Hillcity International Ministries,
            our vision is to proclaim the supremacy
            of Jesus Christ and make Him known to
            people across the nations.
          </p>

          <p>
            Inspired by Matthew 5:14, we are called
            to be the light of the world, a city set
            on a hill that cannot be hidden. We believe
            the life of Christ within believers should
            shine through their character, attitudes,
            relationships, and impact on society.
          </p>

          <p>
            Our desire is to see people reconciled
            to God, established in the truth of His
            Word, and empowered to live in the fullness
            of their identity and inheritance in Christ.
            As believers grow in the knowledge of Jesus,
            they become vessels through whom His love,
            truth, and power are revealed to the world.
          </p>
        </div>
      </section>

      <section className="section about-detail-soft">
        <div className="container about-detail-centered">
          <BookOpen size={34} color="#78923A" />

          <h2>A City Set on a Hill Cannot Be Hidden.</h2>

          <p>
            Matthew 5:14 is more than the inspiration
            behind our name. It expresses our calling
            to reflect the light of Christ and make
            His truth visible wherever God places us.
          </p>
        </div>
      </section>

      <GuidingConviction />

      <section className="section">
        <div className="container about-detail-centered">
          <span className="eyebrow">
            LIVE THE VISION
          </span>

          <h2>Be a Light in Your World.</h2>

          <p>
            Through the Word of God, prayer,
            evangelism, discipleship, and service,
            we seek to raise believers who know
            Christ and make Him known.
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

function MissionPage() {
  return (
    <>
      <section className="section">
        <div className="container about-detail-centered">
          <span className="eyebrow">
            OUR OFFICIAL MISSION
          </span>

          <h2>
            Equipping Believers.
            Proclaiming Christ.
          </h2>

          <p>
            To proclaim the supremacy of Christ
            while empowering members to embrace
            their identity, inheritance, and
            ability in Him.
          </p>

          <p>
            Our mission begins with the conviction
            that knowing Jesus Christ transforms
            how we understand ourselves, how we
            live, and how we relate to the world.
            Through the ministry of God's Word,
            prayer, and the Holy Spirit, we seek
            to establish believers in the truth
            of their union with Christ.
          </p>
        </div>
      </section>

      <section className="section about-detail-soft">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">
              OUR MESSAGE
            </span>

            <h2>
              Identity. Inheritance. Ability.
            </h2>

            <p>
              Three essential truths at the heart
              of our ministry.
            </p>
          </div>

          <div className="about-new-values-grid">
            <div className="about-new-value-card">
              <Users size={29} />
              <h3>Identity in Christ</h3>
              <p>
                Helping believers understand who
                they are through their union with
                Jesus Christ, rather than defining
                themselves by the limitations
                of their past or circumstances.
              </p>
            </div>

            <div className="about-new-value-card">
              <Heart size={29} />
              <h3>Inheritance in Christ</h3>
              <p>
                Teaching believers to discover
                the spiritual blessings, promises,
                and realities made available to
                them through the finished work
                of Jesus Christ.
              </p>
            </div>

            <div className="about-new-value-card">
              <Sparkles size={29} />
              <h3>Ability in Christ</h3>
              <p>
                Equipping believers to live by
                faith, walk in the power of the
                Holy Spirit, and express the life
                and character of Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">
              OUR MINISTRY PURPOSE
            </span>

            <h2>Five Ways We Live Our Mission</h2>

            <p>
              Our bylaws identify five priorities
              that guide how we teach, disciple,
              serve, and engage the world.
            </p>
          </div>

          <div className="about-new-values-grid">
            {missionPurposes.map(
              ({ title, description, Icon }) => (
                <div
                  className="about-new-value-card"
                  key={title}
                >
                  <Icon size={28} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="section about-detail-soft">
        <div className="container about-detail-centered">
          <span className="eyebrow">
            OUR EVANGELISM MANDATE
          </span>

          <h2>The SHOP Mandate</h2>

          <p>
            Through Street, Hospital, Online,
            and Prison evangelism, we seek to
            reach people wherever they are with
            the gospel of Jesus Christ.
          </p>

          <Link className="btn btn-primary" href="/missions">
            See Our Missions
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

          <h2>
            Bible-Based. Christ-Centered.
          </h2>

          <p>
            Hillcity International Ministries
            is a Bible-based and Christ-centered
            ministry founded on the vision of
            proclaiming the supremacy of Jesus.
          </p>

          <p>
            Our faith is rooted in the truth of
            God's Word, the person and finished
            work of Jesus Christ, and the ministry
            of the Holy Spirit. We believe the
            gospel reveals the identity, inheritance,
            and ability believers possess through
            their union with Christ.
          </p>
        </div>
      </section>

      <section className="section about-detail-soft">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">
              FUNDAMENTAL TRUTHS
            </span>

            <h2>What We Believe</h2>

            <p>
              These convictions reflect the
              biblical foundation of our ministry.
            </p>
          </div>

          <div className="about-new-values-grid">
            {faithBeliefs.map(
              ({ title, description, scripture, Icon }) => (
                <div
                  className="about-new-value-card"
                  key={title}
                >
                  <Icon size={28} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <p>
                    <strong>{scripture}</strong>
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">
              CHURCH ORDINANCES AND PRACTICES
            </span>

            <h2>Expressions of Our Faith</h2>
          </div>

          <div className="about-new-values-grid">
            <div className="about-new-value-card">
              <Church size={28} />
              <h3>Water Baptism</h3>
              <p>
                We practice baptism by immersion
                in the name of the Father, Son,
                and Holy Spirit for those who
                have believed in Jesus Christ.
              </p>
              <p><strong>Matthew 28:19</strong></p>
            </div>

            <div className="about-new-value-card">
              <BookOpen size={28} />
              <h3>The Lord's Supper</h3>
              <p>
                We observe the Lord's Supper
                in remembrance of Jesus Christ,
                His sacrifice, and the new
                covenant established through Him.
              </p>
              <p><strong>1 Corinthians 11:23–26</strong></p>
            </div>

            <div className="about-new-value-card">
              <Users size={28} />
              <h3>Child Dedication</h3>
              <p>
                We recognize the importance of
                dedicating children to the Lord
                and encouraging families to
                raise them in His ways.
              </p>
              <p><strong>Mark 10:13–16</strong></p>
            </div>

            <div className="about-new-value-card">
              <HeartHandshake size={28} />
              <h3>Prayer for the Sick</h3>
              <p>
                We believe in ministering to
                the sick through prayer, laying
                on of hands, and anointing
                with oil as taught in Scripture.
              </p>
              <p><strong>James 5:14</strong></p>
            </div>
          </div>
        </div>
      </section>

      <GuidingConviction />

      <section className="section">
        <div className="container about-detail-centered">
          <span className="eyebrow">
            OUR CORE VALUES
          </span>

          <h2>
            Bible-Based. Christ-Centered.
            Love-Rooted. Holy Spirit-Inspired.
          </h2>

          <p>
            These four values guide our teaching,
            relationships, ministry activities,
            and service to the world.
          </p>

          <Link className="btn btn-primary" href="/sermons">
            Explore Our Teachings
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
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
                Foyin and Peace Bamidele founded
                Hillcity International Ministries
                together in the United States in 2023,
                with a shared mandate to proclaim
                the gospel of Jesus Christ to the
                nations and help believers discover
                their identity, inheritance, and
                ability in Him.
              </p>

              <p>
                Peace has served as an ordained minister
                since 2019. He teaches God's Word weekly
                and is passionate about helping people
                understand their identity, inheritance,
                and ability in Christ.
              </p>

              <p>
                Together, Foyin and Peace lead the
                ministry, sharing biblical truth,
                nurturing spiritual growth, and
                demonstrating Christ's love through
                evangelism, discipleship, and
                compassionate outreach, including
                serving people experiencing
                homelessness across Atlanta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GuidingConviction />
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
          <span className="eyebrow">{data.eyebrow}</span>
          <h1>{data.title}</h1>
          <p>{data.intro}</p>
        </div>
      </section>

      {section === "vision" && <VisionPage />}
      {section === "mission" && <MissionPage />}
      {section === "statement-of-faith" && <FaithPage />}
      {section === "pastors" && <PastorsPage />}
    </main>
  );
}
