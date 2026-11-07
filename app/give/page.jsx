
import Link from "next/link";
import {
  HeartHandshake,
  Heart,
  HandHeart,
  Users,
  ArrowRight,
  Mail,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Give / Partner | Hillcity International Ministries",
  description:
    "Partner with Hillcity International Ministries through giving, prayer, and service.",
};

const opportunities = [
  {
    title: "Give",
    description:
      "Support the work of the ministry as we share the gospel and extend the love of Christ to more people.",
    Icon: HandHeart,
  },
  {
    title: "Pray",
    description:
      "Stand with us in prayer for lives to be transformed and for the gospel to reach more communities.",
    Icon: Heart,
  },
  {
    title: "Volunteer",
    description:
      "Join us in serving others through evangelism, compassionate outreach, and ministry activities.",
    Icon: Users,
  },
];

export default function GivePage() {
  return (
    <main className="give-page">
      <section className="give-hero">
        <div className="container centered">
          <span className="eyebrow">PARTNER WITH HILLCITY</span>
          <h1>Give / Partner</h1>
          <p>
            Together, we can share the gospel, serve our
            communities, and reach more lives with the
            love of Jesus Christ.
          </p>
        </div>
      </section>

      <section className="give-section">
        <div className="container">
          <div className="give-intro centered">
            <HeartHandshake size={34} />
            <h2>Be Part of the Mission</h2>
            <p>
              Your generosity, prayers, and service help
              advance our mission of sharing Christ,
              transforming lives, and reaching the world.
            </p>
          </div>

          <div className="give-opportunities">
            {opportunities.map(({ title, description, Icon }) => (
              <article className="give-card" key={title}>
                <div className="give-icon">
                  <Icon size={27} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="give-section give-section-soft">
        <div className="container">
          <div className="give-donation-panel">
            <div className="give-donation-icon">
              <HandHeart size={34} />
            </div>

            <h2>Support the Work of the Ministry</h2>
            <p>
              Your financial partnership helps us
              proclaim God's Word and extend compassionate
              outreach to those in need.
            </p>

            <div className="give-pending">
              Online giving information will be available soon.
            </div>

            <p className="give-contact-note">
              For partnership or giving inquiries, please
              contact our ministry team.
            </p>

            <Link className="btn btn-primary" href="/contact">
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="give-section">
        <div className="container centered">
          <Mail size={30} color="#78923A" />
          <h2>Interested in Partnering?</h2>
          <p className="give-closing-text">
            Whether you'd like to volunteer, collaborate,
            or support our outreach initiatives, we'd love
            to hear from you.
          </p>

          <Link className="btn btn-primary" href="/contact">
            Get in Touch
            <ArrowRight size={18} />
          </Link>

          <div className="give-trust-note">
            <ShieldCheck size={18} />
            <span>
              Hillcity International Ministries is a
              recognized 501(c)(3) nonprofit organization.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
