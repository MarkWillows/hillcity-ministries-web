
import {
  BookOpen,
  CalendarDays,
  Clock3,
  Phone,
  HeartHandshake,
  Video,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Join Us",
  description:
    "Join Hillcity International Ministries for weekly online Bible Study every Sunday from 6:00 to 6:30 PM Eastern Time.",
};

const meetingLink =
  "https://join.freeconferencecall.com/hillcityintlministries";

export default function JoinUsPage() {
  return (
    <main>
      {/* PAGE INTRODUCTION */}
      <section className="join-hero">
        <div className="container centered">
          <span className="eyebrow">
            WORSHIP & FELLOWSHIP
          </span>

          <h1>Join Us</h1>

          <p>
            Come together with us to grow in faith,
            deepen your understanding of God's Word,
            and experience the joy of fellowship.
          </p>
        </div>
      </section>

      {/* WEEKLY BIBLE STUDY */}
      <section className="section join-main-section">
        <div className="container">
          <div className="join-study-card">
            <div className="join-study-intro">
              <div className="join-study-icon">
                <BookOpen size={30} />
              </div>

              <span className="eyebrow">
                OUR WEEKLY GATHERING
              </span>

              <h2>Weekly Bible Study</h2>

              <p>
                Join us online each Sunday as we
                explore the Scriptures and grow
                in our relationship with Jesus Christ.
              </p>
            </div>

            {/* GATHERING DETAILS */}
            <div className="join-details-grid">
              <div className="join-detail">
                <CalendarDays size={23} />

                <div>
                  <span>DAY</span>
                  <strong>Every Sunday</strong>
                </div>
              </div>

              <div className="join-detail">
                <Clock3 size={23} />

                <div>
                  <span>TIME</span>
                  <strong>6:00–6:30 PM ET</strong>
                </div>
              </div>

              <div className="join-detail">
                <Phone size={23} />

                <div>
                  <span>JOIN BY PHONE</span>
                  <strong>669 274 9759</strong>
                </div>
              </div>
            </div>

            {/* JOIN ONLINE */}
            <a
              className="btn btn-primary"
              href={meetingLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Video size={19} />
              Join Bible Study Online
              <ExternalLink size={17} />
            </a>

            <p
              style={{
                textAlign: "center",
                fontSize: "13px",
                color: "#687364",
                marginTop: "14px",
                marginBottom: "0",
              }}
            >
              Opens our FreeConferenceCall meeting page.
              Prefer to call? Dial{" "}
              <a
                href="tel:6692749759"
                style={{
                  color: "#31551b",
                  fontWeight: 600,
                }}
              >
                669 274 9759
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="section join-welcome">
        <div className="container centered">
          <HeartHandshake
            size={34}
            color="#78923A"
          />

          <h2>Everyone Is Welcome</h2>

          <p>
            Whether you're exploring the Christian faith
            or seeking to grow deeper in God's Word,
            we would love to have you join us.
          </p>
        </div>
      </section>
    </main>
  );
}
