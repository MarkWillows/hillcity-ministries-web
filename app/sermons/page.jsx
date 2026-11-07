
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
    "Listen to sermons and biblical teachings from Hillcity International Ministries.",
};

const soundcloudProfile =
  "https://soundcloud.com/hillcityinternational";

const sermonSeries = [
  {
    title: "Relegating Religion, Restoring Relationship",
    url: "https://soundcloud.com/hillcityinternational/sets/relegating-religion-restoring",
  },
  {
    title: "The Balance of Grace and Faith",
    url: "https://soundcloud.com/hillcityinternational/sets/the-balance-of-grace-and-faith",
  },
  {
    title: "The Authority of the Believer",
    url: "https://soundcloud.com/hillcityinternational/sets/the-authority-of-the-believer",
  },
  {
    title: "The Set Time for Favor",
    url: "https://soundcloud.com/hillcityinternational/sets/the-set-time-for-favor-series",
  },
  {
    title: "Possessing the Land",
    url: "https://soundcloud.com/hillcityinternational/sets/possessing-the-land-series",
  },
  {
    title: "Prosperity of the Soul",
    url: "https://soundcloud.com/hillcityinternational/sets/prosperity-of-the-soul-series",
  },
  {
    title: "Renewing Your Mind",
    url: "https://soundcloud.com/hillcityinternational/sets/renewing-your-mind-series",
  },
  {
    title: "Walking in the Spirit",
    url: "https://soundcloud.com/hillcityinternational/sets/walking-in-the-spirit",
  },
  {
    title: "How to Hear God",
    url: "https://soundcloud.com/hillcityinternational/sets/how-to-hear-god-series",
  },
  {
    title: "Christ-Based Identity",
    url: "https://soundcloud.com/hillcityinternational/sets/christ-based-identity-series",
  },
  {
    title: "The Supremacy of Jesus Christ",
    url: "https://soundcloud.com/hillcityinternational/sets/the-supremacy-of-jesus-christ",
  },
  {
    title: "The Laws of God",
    url: "https://soundcloud.com/hillcityinternational/sets/the-laws-of-god",
  },
  {
    title: "The Law of Faith",
    url: "https://soundcloud.com/hillcityinternational/sets/the-law-of-faith-series",
  },
  {
    title: "Get Wisdom",
    url: "https://soundcloud.com/hillcityinternational/sets/get-wisdom-series",
  },
];

function getSoundcloudEmbed(url) {
  return (
    "https://w.soundcloud.com/player/?url=" +
    encodeURIComponent(url) +
    "&color=%2331551b" +
    "&auto_play=false" +
    "&hide_related=true" +
    "&show_comments=false" +
    "&show_user=true" +
    "&show_reposts=false" +
    "&show_teaser=true" +
    "&visual=false"
  );
}

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

      {/* ALL SERMONS AND SERMON SERIES */}
      <section className="section">
        <div className="container">
          <div className="sermons-library-layout">

            {/* LEFT: ALL SERMONS */}
            <div className="sermons-player">
              <div className="sermons-player-heading">
                <div className="sermons-player-icon">
                  <Headphones size={23} />
                </div>

                <div>
                  <h2>All Sermons</h2>
                  <p>
                    Select a teaching below to start listening.
                  </p>
                </div>
              </div>

              <iframe
                title="Hillcity All Sermons"
                width="100%"
                height="550"
                scrolling="no"
                frameBorder="0"
                allow="autoplay"
                loading="lazy"
                src={getSoundcloudEmbed(soundcloudProfile)}
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

            {/* RIGHT: SERMON SERIES */}
            <aside className="sermon-series-sidebar">
              <div className="sermon-series-card">
                <div className="sermon-series-symbol">
                  <ListMusic size={27} />
                </div>

                <h2>Sermon Series</h2>
                <p>
                  Explore our teachings by series.
                  Select a playlist to listen.
                </p>

                <div className="sermon-series-scroll">
                  {sermonSeries.map((series) => (
                    <div
                      className="sermon-playlist"
                      key={series.url}
                    >
                      <h3>{series.title}</h3>

                      <iframe
                        title={`${series.title} Playlist`}
                        width="100%"
                        height="180"
                        scrolling="no"
                        frameBorder="0"
                        allow="autoplay"
                        loading="lazy"
                        src={getSoundcloudEmbed(series.url)}
                        style={{
                          display: "block",
                          border: 0,
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </aside>

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

      {/* BIBLE STUDY */}
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
