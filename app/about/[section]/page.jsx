
import Link from "next/link";
import { notFound } from "next/navigation";

const sections = {
  vision: {
    title: "Our Vision",
    eyebrow: "OUR FUTURE",
    intro:
      "The vision that guides Hillcity International Ministries.",
  },
  mission: {
    title: "Our Mission",
    eyebrow: "OUR CALLING",
    intro:
      "The mission and purpose of Hillcity International Ministries.",
  },
  "statement-of-faith": {
    title: "Statement of Faith",
    eyebrow: "WHAT WE BELIEVE",
    intro:
      "The biblical foundations of our faith and ministry.",
  },
  pastors: {
    title: "Our Pastors",
    eyebrow: "MINISTRY LEADERSHIP",
    intro:
      "Meet the pastoral leadership of Hillcity International Ministries.",
  },
};

export function generateStaticParams() {
  return Object.keys(sections).map((section) => ({
    section,
  }));
}

export async function generateMetadata({ params }) {
  const { section } = await params;
  const data = sections[section];

  return {
    title: data?.title || "About Hillcity",
  };
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

      <section className="section">
        <div className="container centered">
          <div className="about-content">
            <h2>{data.title}</h2>
            <p>
              We are preparing the official ministry
              content for this section.
            </p>
            <p>
              Please check back for updates.
            </p>
            <Link className="btn btn-primary" href="/about">
              Back to About Hillcity
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
