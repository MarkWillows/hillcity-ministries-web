
import Link from "next/link";
import {
  Eye,
  Target,
  BookOpen,
  Users,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "About Hillcity",
  description:
    "Discover the vision, mission, statement of faith, and pastoral leadership of Hillcity International Ministries.",
};

const aboutSections = [
  {
    title: "Our Vision",
    description:
      "Discover the vision that guides Hillcity International Ministries and our commitment to making Christ known.",
    href: "/about/vision",
    Icon: Eye,
  },
  {
    title: "Our Mission",
    description:
      "Learn about our calling to proclaim the gospel, equip believers, and reach people through evangelism.",
    href: "/about/mission",
    Icon: Target,
  },
  {
    title: "Statement of Faith",
    description:
      "Explore the biblical foundations and Christian beliefs that shape our ministry.",
    href: "/about/statement-of-faith",
    Icon: BookOpen,
  },
  {
    title: "Our Pastors",
    description:
      "Meet the pastoral leadership serving Hillcity International Ministries.",
    href: "/about/pastors",
    Icon: Users,
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="container centered">
          <span className="eyebrow">GET TO KNOW US</span>
          <h1>About Hillcity</h1>
          <p>
            A Christ-centered ministry committed to sharing
            the gospel of Jesus Christ and reaching the world
            with His love.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">WHO WE ARE</span>
            <h2>Discover Our Ministry</h2>
            <p>
              Learn more about our purpose, beliefs,
              and the people serving the ministry.
            </p>
          </div>

          <div className="about-grid">
            {aboutSections.map(
              ({ title, description, href, Icon }) => (
                <Link
                  href={href}
                  className="about-card"
                  key={href}
                >
                  <div className="about-icon">
                    <Icon size={27} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="text-link">
                    Learn More <ArrowRight size={17} />
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
