
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Eye,
  Download,
  ArrowLeft,
} from "lucide-react";

export const metadata = {
  title: "Sermon Notes & Bible Study Materials | Hillcity",
  description:
    "Read and download free sermon notes and Bible study materials from Hillcity International Ministries.",
};

const resources = [
  {
    title: "Trust in God",
    description:
      "Learn to trust God's Word, rest in His promises, and depend on Him in every season.",
    file: "Trust in God.pdf",
    pages: 3,
  },
  {
    title: "The Blessing of Abraham — Part 2",
    description:
      "Explore God's promises to Abraham and the blessing made available through faith in Jesus Christ.",
    file: "The Blessing of Abraham Pt. 2.pdf",
    pages: 1,
  },
  {
    title: "Faith Checklist",
    description:
      "Discover ten biblical truths about faith, including hearing, speaking, patience, and action.",
    file: "Faith Checklist.pdf",
    pages: 2,
  },
  {
    title: "Christ in You",
    description:
      "Understand the indwelling presence of Christ and how it shapes your spiritual life.",
    file: "Christ in You.pdf",
    pages: 1,
  },
  {
    title: "The Mind of Christ",
    description:
      "Learn to think, discern, and respond with the mind of Christ.",
    file: "The Mind of Christ.pdf",
    pages: 1,
  },
  {
    title: "The Spirit of Christ",
    description:
      "Explore how the Spirit of Christ brings life, peace, and spiritual transformation.",
    file: "The Spirit of Christ.pdf",
    pages: 1,
  },
  {
    title: "The Authority of the Believer",
    description:
      "Explore biblical teaching on the authority believers have in Christ.",
    file: "The_Authority_of_the_Believer.pdf",
    pages: null,
  },
  {
    title: "Those That Wait on the Lord",
    description:
      "Discover renewed strength, joy, and peace through waiting on God.",
    file: "Those that Wait on the Lord.pdf",
    pages: 1,
  },
];

export default function BibleStudyResourcesPage() {
  return (
    <main className="bible-resources-page">
      <section className="bible-resources-hero">
        <div className="container centered">
          <span className="eyebrow">FREE SPIRITUAL RESOURCES</span>
          <h1>Sermon Notes & Bible Study Materials</h1>
          <p>
            Explore Scripture-based teachings to strengthen
            your faith and deepen your relationship with
            Jesus Christ.
          </p>
        </div>
      </section>

      <section className="bible-resources-section">
        <div className="container">
          <div className="bible-resources-top">
            <Link href="/resources" className="bible-resources-back">
              <ArrowLeft size={17} />
              Back to Resources
            </Link>

            <span className="bible-resources-count">
              {resources.length} Free Resources
            </span>
          </div>

          <div className="bible-resources-grid">
            {resources.map((resource) => {
              const pdfUrl =
                "/resources/" + encodeURIComponent(resource.file);

              return (
                <article
                  className="bible-resource-card"
                  key={resource.file}
                >
                  <div className="bible-resource-card-top">
                    <div className="bible-resource-icon">
                      <FileText size={25} />
                    </div>

                    <span className="bible-resource-type">
                      PDF RESOURCE
                    </span>
                  </div>

                  <h2>{resource.title}</h2>
                  <p>{resource.description}</p>

                  <div className="bible-resource-meta">
                    <BookOpen size={15} />
                    <span>
                      {resource.pages
                        ? `${resource.pages} ${
                            resource.pages === 1 ? "page" : "pages"
                          }`
                        : "Sermon notes"}
                    </span>
                  </div>

                  <div className="bible-resource-actions">
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bible-resource-view"
                    >
                      <Eye size={17} />
                      View PDF
                    </a>

                    <a
                      href={pdfUrl}
                      download={resource.file}
                      className="bible-resource-download"
                    >
                      <Download size={17} />
                      Download
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
