
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
                  <a
                    href="tel:6692749759"
                    className="join-phone-number"
                  >
                    669 274 9759
                  </a>
                </div>
              </div>
            </div>

            {/* JOINING OPTIONS */}
            <div className="join-actions">
              <a
                className="btn btn-primary"
                href={meetingLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Video size={19} />
                Join Bible Study Online
                <ExternalLink size={16} />
              </a>

              <a
                className="btn btn-primary"
                href="tel:6692749759"
              >
                <Phone size={19} />
                Dial In by Phone
              </a>
            </div>

            <p className="join-actions-note">
              Choose how you'd like to join us.
              Phone dialing works on supported devices.
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
