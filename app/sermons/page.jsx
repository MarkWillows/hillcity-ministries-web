
import Link from "next/link";
import {
  Headphones,
  BookOpen,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

export const metadata = {
  title: "Sermons & Teachings",
  description:
    "Listen to biblical teachings from Hillcity International Ministries.",
};

const soundcloudProfile =
  "https://soundcloud.com/hillcityinternational";

const soundcloudEmbed =
  "https://w.soundcloud.com/player/?url=" +
  encodeURIComponent(soundcloudProfile) +
  "&color=%2331551b" +
  "&auto_play=false" +
  "&hide_related=true" +
  "&show_comments=false" +
  "&show_user=true" +
  "&show_reposts=false" +
  "&show_teaser=true" +
  "&visual=false";

export default function SermonsPage() {
  return (
    <main>
      {/* PAGE INTRODUCTION */}
      <section className="sermons-hero">
        <div className="container centered">
          <h1>Sermons & Teachings</h1>

          <p>
            Grow in your relationship with Jesus Christ
            through the transforming power of God's Word.
          </p>
        </div>
      </section>

      {/* SOUNDCLOUD SERMON LIBRARY */}
      <section className="section">
        <div className="container">
          <div className="sermons-player">
            <div className="sermons-player-heading">
              <div className="sermons-player-icon">
                <Headphones size={23} />
              </div>

              <div>
                <h2>Listen to Our Sermons</h2>
                <p>
                  Select a teaching below to start listening.
                </p>
              </div>
            </div>

            <iframe
              title="Hillcity SoundCloud Sermons"
              width="100%"
              height="550"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              loading="lazy"
              src={soundcloudEmbed}
              style={{
                display: "block",
                border: 0,
                borderRadius: "10px",
              }}
            />

            <div className="sermons-player-footer">
              <span>
                Explore more teachings on SoundCloud.
              </span>

              <a
                href={soundcloudProfile}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit SoundCloud
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SCRIPTURE */}
      <section className="section sermons-encourage">
        <div className="container centered">
          <BookOpen size={32} color="#78923A" />

          <h2>Faith Comes by Hearing</h2>

          <p>
            "So then faith comes by hearing,
            and hearing by the word of God."
          </p>

          <span>Romans 10:17 (NKJV)</span>
        </div>
      </section>

      {/* BIBLE STUDY INVITATION */}
      <section className="section">
        <div className="container centered">
          <CalendarDays size={30} color="#78923A" />

          <h2>Join Our Weekly Bible Study</h2>

          <p>
            Sundays | 6:00–6:30 PM Eastern Time
          </p>

          <a
            className="btn btn-primary"
            href="tel:6692749759"
          >
            Dial 669 274 9759
          </a>
        </div>
      </section>
    </main>
  );
}
