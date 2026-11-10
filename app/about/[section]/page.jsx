
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
      "We proclaim the gospel of Jesus Christ and make disciples of all nations, raising believers who reflect His character, attitude, and impact.",
    Icon: Globe,
  },
  {
    title: "Transformation of Thinking",
    description:
      "We teach believers to renew their minds through God's Word, grow in the knowledge of His truth, and live by faith through the Holy Spirit.",
    Icon: Lightbulb,
  },
  {
    title: "Societal Transformation",
    description:
      "We equip believers to bring Christ-centered values, practical solutions, hope, and restoration to their communities.",
    Icon: HandHeart,
  },
  {
    title: "Building Godly Families",
    description:
      "We encourage marriages and families grounded in biblical truth, spiritual unity, love, and the guidance of the Holy Spirit.",
    Icon: Users,
  },
  {
    title: "Dependence on God's System",
    description:
      "We teach believers to trust God, practice faithful stewardship, live without covetousness, and use their resources to advance His Kingdom.",
    Icon: HeartHandshake,
  },
];

const faithBeliefs = [
  {
    title: "The Word of God",
    description:
      "We believe God's Word is the foundation of our faith and conduct. Through Scripture, rightly understood by the guidance of the Holy Spirit, believers discover God's truth and are equipped for Christian living.",
    scripture: "2 Timothy 3:16–17; 2 Corinthians 3:6",
    Icon: BookOpen,
  },
  {
    title: "The Triune God",
    description:
      "We believe in God the Father, God the Son, and God the Holy Spirit. We depend on His presence, guidance, and power in our relationship with Him and in fulfilling His purposes.",
    scripture: "Matthew 28:19",
    Icon: Sparkles,
  },
  {
    title: "Jesus Christ",
    description:
      "We believe Jesus Christ is Lord, the way, the truth, and the life. Through Him we are reconciled to the Father, and through His finished work we receive our identity and inheritance in Him.",
    scripture: "John 14:6",
    Icon: Church,
  },
  {
    title: "Reconciliation and Discipleship",
    description:
      "We believe the gospel calls people into reconciliation with God and a transformed life. We are commissioned to proclaim Christ, make disciples of all nations, and demonstrate His Kingdom in the world.",
    scripture: "Matthew 28:19–20; Matthew 6:10",
    Icon: Globe,
  },
  {
    title: "Life in Christ",
    description:
      "We believe that through union with Christ, believers receive a new identity, spiritual inheritance, and the ability to live in victory. As their minds are renewed, their lives increasingly reflect His character.",
    scripture: "Romans 12:2; Colossians 1:27",
    Icon: ShieldCheck,
  },
  {
    title: "The Ministry of the Holy Spirit",
    description:
      "We believe the Holy Spirit empowers believers, illuminates God's Word, and enables them to express the life of Christ through spiritual fruit, gifts, prayer, and service.",
    scripture: "John 16:13; Galatians 5:22–23",
    Icon: Heart,
  },
];

const ordinances = [
  {
    title: "Water Baptism",
    description:
      "We practice baptism by immersion in the name of the Father, Son, and Holy Spirit for those who have believed in Jesus Christ.",
    scripture: "Matthew 28:19",
    Icon: Church,
  },
  {
    title: "The Lord's Supper",
    description:
      "We observe the Lord's Supper in remembrance of Jesus Christ, His sacrifice, and the new covenant established through Him.",
    scripture: "1 Corinthians 11:23–26",
    Icon: BookOpen,
  },
  {
    title: "Child Dedication",
    description:
      "We dedicate children to the Lord and encourage families to raise them according to His Word.",
    scripture: "Mark 10:13–16",
    Icon: Users,
  },
  {
    title: "Prayer for the Sick",
    description:
      "We minister to the sick through prayer, laying on of hands, and anointing with oil as taught in Scripture.",
    scripture: "James 5:14",
    Icon: HeartHandshake,
  },
];

const coreValues = [
  {
    title: "Bible-Based",
    description:
      "God's Word is the authority that shapes our beliefs, teaching, and conduct.",
  },
  {
    title: "Christ-Centered",
    description:
      "Jesus Christ is the foundation, focus, and ultimate expression of our ministry.",
  },
  {
    title: "Love-Rooted",
    description:
      "We express the love of Christ through our relationships, service, and outreach.",
  },
  {
    title: "Holy Spirit-Inspired",
    description:
      "We depend on the Holy Spirit for wisdom, direction, and empowerment.",
  },
];

function ContentCards({ items }) {
  return (
    <div className="hc-detail-grid">
      {items.map(({ title, description, scripture, Icon }) => (
        <article className="hc-detail-card" key={title}>
          {Icon && (
            <div className="hc-detail-icon">
              <Icon size={25} strokeWidth={1.8} />
            </div>
          )}

          <h3>{title}</h3>
          <p>{description}</p>

          {scripture && (
            <span className="hc-detail-scripture">
              {scripture}
            </span>
          )}
        </article>
      ))}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="hc-detail-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function VisionPage() {
  return (
    <>
      <section className="hc-detail-section">
        <div className="hc-detail-narrow">
          <span className="eyebrow">OUR VISION</span>

          <h2>
            Proclaiming the Supremacy of Jesus Christ
          </h2>

          <p>
            At Hillcity International Ministries,
            our vision is to proclaim the supremacy
            of Jesus Christ and make Him known
            to people across the nations.
          </p>

          <p>
            Inspired by Matthew 5:14, we are called
            to be the light of the world, a city
            set on a hill that cannot be hidden.
            We believe the life of Christ within
            believers should shine through their
            character, attitudes, relationships,
            and impact on society.
          </p>

          <p>
            Our desire is to see people reconciled
            to God, established in the truth of
            His Word, and empowered to live in
            the fullness of their identity and
            inheritance in Christ.
          </p>
        </div>
      </section>

      <section className="hc-detail-section hc-detail-soft">
        <div className="hc-detail-narrow hc-detail-center">
          <BookOpen size={35} color="#78923A" />

          <h2>
            A City Set on a Hill Cannot Be Hidden
          </h2>

          <p>
            Matthew 5:14 expresses our calling
            to reflect the light of Christ and
            make His truth visible wherever
            God places us.
          </p>

          <p className="hc-detail-scripture">
            Matthew 5:14
          </p>
        </div>
      </section>

      <section className="hc-detail-section">
        <div className="hc-detail-narrow hc-detail-center">
          <SectionHeading
            eyebrow="LIVE THE VISION"
            title="Be a Light in Your World"
            description="Through biblical teaching, prayer, evangelism, discipleship, and compassionate service, we seek to raise believers who know Christ and make Him known."
          />

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
      <section className="hc-detail-section">
        <div className="hc-detail-narrow hc-detail-center">
          <span className="eyebrow">
            OUR OFFICIAL MISSION
          </span>

          <h2>
            Equipping Believers. Proclaiming Christ.
          </h2>

          <p className="hc-detail-lead">
            To proclaim the supremacy of Christ
            while empowering members to embrace
            their identity, inheritance, and
            ability in Him.
          </p>

          <p>
            Through God's Word, prayer, and
            the Holy Spirit, we help believers
            discover the realities of their
            union with Christ and express
            His life in the world.
          </p>
        </div>
      </section>

      <section className="hc-detail-section hc-detail-soft">
        <div className="hc-detail-container">
          <SectionHeading
            eyebrow="OUR MESSAGE"
            title="Identity. Inheritance. Ability."
            description="Three truths at the heart of our ministry."
          />

          <ContentCards
            items={[
              {
                title: "Identity in Christ",
                description:
                  "Helping believers understand who they are through their union with Jesus Christ rather than the limitations of their past or circumstances.",
                Icon: Users,
              },
              {
                title: "Inheritance in Christ",
                description:
                  "Teaching believers to discover the spiritual blessings, promises, and realities made available through the finished work of Jesus Christ.",
                Icon: Heart,
              },
              {
                title: "Ability in Christ",
                description:
                  "Equipping believers to live by faith, walk in the power of the Holy Spirit, and express the life and character of Christ.",
                Icon: Sparkles,
              },
            ]}
          />
        </div>
      </section>

      <section className="hc-detail-section">
        <div className="hc-detail-container">
          <SectionHeading
            eyebrow="OUR MINISTRY PURPOSE"
            title="Five Ways We Live Our Mission"
            description="Our bylaws identify five priorities that guide how we teach, disciple, serve, and engage the world."
          />

          <ContentCards items={missionPurposes} />
        </div>
      </section>

      <section className="hc-detail-section hc-detail-soft">
        <div className="hc-detail-narrow hc-detail-center">
          <SectionHeading
            eyebrow="OUR EVANGELISM MANDATE"
            title="The SHOP Mandate"
            description="Through Street, Hospital, Online, and Prison evangelism, we seek to reach people wherever they are with the gospel of Jesus Christ."
          />

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
      <section className="hc-detail-section">
        <div className="hc-detail-container">
          <SectionHeading
            eyebrow="FUNDAMENTAL TRUTHS"
            title="What We Believe"
            description="Our faith is grounded in Scripture, the finished work of Jesus Christ, and the ministry of the Holy Spirit."
          />

          <ContentCards items={faithBeliefs} />
        </div>
      </section>

      <section className="hc-detail-section hc-detail-soft">
        <div className="hc-detail-container">
          <SectionHeading
            eyebrow="CHURCH ORDINANCES AND PRACTICES"
            title="Expressions of Our Faith"
            description="We observe these biblical practices as expressions of our faith and commitment to Jesus Christ."
          />

          <ContentCards items={ordinances} />
        </div>
      </section>

      <section className="hc-detail-section">
        <div className="hc-detail-container">
          <SectionHeading
            eyebrow="OUR CORE VALUES"
            title="The Values That Guide Us"
            description="These four convictions shape how we teach, serve, and relate to others."
          />

          <ContentCards items={coreValues} />

          <div className="hc-detail-bottom-action">
            <Link
              className="btn btn-primary"
              href="/sermons"
            >
              Explore Our Teachings
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function PastorsPage() {
  return (
    <section className="hc-detail-section">
      <div className="hc-detail-container">
        <div className="hc-detail-pastors">
          <div className="hc-detail-pastors-photo">
            <Image
              src="/images/pastors/pastors-together-2.png"
              alt="Pastors Foyin and Peace Bamidele"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 45vw"
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </div>

          <div className="hc-detail-pastors-copy">
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
              Peace has served as an ordained
              minister since 2019. He teaches
              God's Word weekly and is passionate
              about helping people understand
              their identity, inheritance, and
              ability in Christ.
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

      <style>{`
        .hc-detail-container {
          width: min(1100px, calc(100% - 40px));
          margin: 0 auto;
        }

        .hc-detail-narrow {
          width: min(760px, calc(100% - 40px));
          margin: 0 auto;
        }

        .hc-detail-section {
          padding: 72px 0;
        }

        .hc-detail-soft {
          background: #f6f8f1;
        }

        .hc-detail-center {
          text-align: center;
        }

        .hc-detail-narrow h2 {
          color: #31551b;
          font-size: clamp(27px, 3vw, 38px);
          line-height: 1.2;
          margin: 15px 0 24px;
        }

        .hc-detail-narrow p {
          line-height: 1.85;
          margin-bottom: 20px;
        }

        .hc-detail-lead {
          font-size: clamp(18px, 2vw, 23px);
          color: #31551b;
          font-weight: 600;
        }

        .hc-detail-heading {
          max-width: 740px;
          margin: 0 auto 36px;
          text-align: center;
        }

        .hc-detail-heading h2 {
          color: #31551b;
          font-size: clamp(27px, 3vw, 37px);
          line-height: 1.2;
          margin: 10px 0 14px;
        }

        .hc-detail-heading p {
          line-height: 1.75;
          color: #555e50;
        }

        .hc-detail-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          align-items: stretch;
        }

        .hc-detail-card {
          background: #ffffff;
          border: 1px solid #e5ebdd;
          border-radius: 15px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-shadow: 0 4px 18px rgba(30, 55, 15, 0.035);
        }

        .hc-detail-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #edf3e4;
          color: #31551b;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .hc-detail-card h3 {
          color: #31551b;
          font-size: 19px;
          line-height: 1.35;
          margin: 0 0 12px;
        }

        .hc-detail-card p {
          color: #4f584b;
          font-size: 15px;
          line-height: 1.75;
          margin: 0 0 14px;
        }

        .hc-detail-scripture {
          display: block;
          color: #78923a;
          font-size: 13px;
          font-weight: 700;
          margin-top: auto;
          padding-top: 12px;
        }

        .hc-detail-bottom-action {
          display: flex;
          justify-content: center;
          margin-top: 38px;
        }

        .hc-detail-pastors {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
          gap: clamp(28px, 5vw, 70px);
          align-items: center;
        }

        .hc-detail-pastors-photo {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          border-radius: 20px;
          overflow: hidden;
          background: #f5f7f0;
        }

        .hc-detail-pastors-copy h2 {
          color: #31551b;
          font-size: clamp(28px, 3vw, 40px);
          line-height: 1.2;
          margin: 12px 0 15px;
        }

        .hc-detail-pastors-copy h3 {
          color: #78923a;
          font-size: 17px;
          margin-bottom: 22px;
        }

        .hc-detail-pastors-copy p {
          line-height: 1.85;
          margin-bottom: 18px;
        }

        @media (max-width: 900px) {
          .hc-detail-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 650px) {
          .hc-detail-section {
            padding: 50px 0;
          }

          .hc-detail-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .hc-detail-card {
            padding: 23px;
          }

          .hc-detail-pastors {
            grid-template-columns: 1fr;
          }

          .hc-detail-heading {
            margin-bottom: 26px;
          }
        }
      `}</style>
    </main>
  );
}
