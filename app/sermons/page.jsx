
import {
  Headphones,
  BookOpen,
  CalendarDays,
  ArrowUpRight,
  ListMusic,
} from "lucide-react";

export const metadata = {
  title: "Sermons & Teachings",
  description:
    "Listen to biblical sermons and teachings from Hillcity International Ministries.",
};

const soundcloudProfile =
  "https://soundcloud.com/hillcityinternational";

const soundcloudPlaylists =
  "https://soundcloud.com/hillcityinternational/sets";

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

      {/* SERMON LIBRARY AND SERIES */}
      <section className="section">
        <div className="container">
          <div className="sermons-library-layout">

            {/* MAIN SOUNDCLOUD PLAYER */}
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
                frameBorder="0"
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
                  More teachings are available on SoundCloud.
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

            {/* SERMON SERIES SIDEBAR */}
            <aside className="sermon-series-sidebar">
              <div className="sermon-series-card">
                <div className="sermon-series-symbol">
                  <ListMusic size={28} />
                </div>

                <span className="eyebrow">
                  EXPLORE BY SERIES
                </span>

                <h3>Sermon Series</h3>

                <p>
                  Discover collections of teachings
                  organized around biblical themes.
                </p>

                <a
                  href={soundcloudPlaylists}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Browse All Series
                  <ArrowUpRight size={17} />
                </a>

                <p className="sermon-series-note">
                  Opens our SoundCloud playlist library.
                </p>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* SCRIPTURE SECTION */}
      <section className="section sermons-encourage">
        <div className="container centered">
          <BookOpen
            size={32}
            color="#78923A"
          />

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
          <CalendarDays
            size={30}
            color="#78923A"
          />

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
