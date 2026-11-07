
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Download,
  ArrowLeft,
  Headphones,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Bible Study Resources | Hillcity International Ministries",
  description:
    "Bible study notes, devotional materials, and Scripture-based resources from Hillcity International Ministries.",
};

export default function BibleStudyResourcesPage() {
  return (
    <main>
      <section className="resources-hero">
        <div className="container centered">
          <span className="eyebrow">STUDY & GROW</span>
          <h1>Bible Study Resources</h1>
          <p>
            Explore Scripture-based materials to help
            you study God's Word and grow in faith.
          </p>
        </div>
      </section>

      <section className="section bible-resources-section">
        <div className="container">
          <Link
            href="/resources"
            className="bible-resources-back"
          >
            <ArrowLeft size={17} />
            Back to Resources
          </Link>

          <div className="bible-resources-panel">
            <div className="bible-resources-icon">
              <BookOpen size={34} />
            </div>

            <h2>Study God's Word</h2>

            <p>
              We're preparing Bible study notes,
              Scripture guides, and devotional
              materials to support your spiritual growth.
              These resources will be available here
              as they're released.
            </p>

            <div className="bible-resources-actions">
              <Link
                href="/sermons"
                className="btn btn-primary"
              >
                <Headphones size={18} />
                Explore Sermons
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/join-us"
                className="btn btn-outline"
              >
                <CalendarDays size={18} />
                Join Bible Study
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
