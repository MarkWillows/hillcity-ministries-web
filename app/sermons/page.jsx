
"use client";

import { useState } from "react";
import {
  Headphones,
  BookOpen,
  CalendarDays,
  ArrowUpRight,
  ListMusic,
  PlayCircle,
} from "lucide-react";

const soundcloudProfile =
  "https://soundcloud.com/hillcityinternational";

const soundcloudPlaylists =
  "https://soundcloud.com/hillcityinternational/sets";

// Add individual SoundCloud playlist URLs here.
// Only include playlists whose actual links are known.
const sermonSeries = [
  {
    id: "all",
    title: "All Sermons",
    url: soundcloudProfile,
  },
];

// Creates a SoundCloud embed URL for a profile or playlist.
function getEmbedUrl(url) {
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
  const [activeSeries, setActiveSeries] = useState(
    sermonSeries[0]
  );

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

      {/* SERMON LIBRARY */}
      <section className="section">
        <div className="container">
          <div className="sermons-library-layout">
            {/* MAIN PLAYER */}
            <div className="sermons-player">
              <div className="sermons-player-heading">
                <div className="sermons-player-icon">
                  <Headphones size={23} />
                </div>

                <div>
                  <h2>{activeSeries.title}</h2>
                  <p>
                    Select a teaching below to start listening.
                  </p>
                </div>
              </div>

              <iframe
                key={activeSeries.id}
                title={`${activeSeries.title} SoundCloud Player`}
                width="100%"
                height="550"
                scrolling="no"
                frameBorder="0"
                allow="autoplay"
                loading="lazy"
                src={getEmbedUrl(activeSeries.url)}
                style={{
                  display: "block",
                  border: 0,
                  borderRadius: "10px",
                }}
              />

              <div className="sermons-player-footer">
                <span>
                  Listen and grow in God's Word.
                </span>

                <a
                  href={activeSeries.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open on SoundCloud
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* SERIES SIDEBAR */}
            <aside className="sermon-series-sidebar">
              <div className="sermon-series-card">
                <div className="sermon-series-symbol">
                  <ListMusic size={27} />
                </div>

                <h3>Sermon Series</h3>

                <p>
                  Select a series to listen to its teachings.
                </p>

                <div className="sermon-series-list">
                  {sermonSeries.map((series) => (
                    <button
                      type="button"
                      key={series.id}
                      className={
                        "sermon-series-item " +
                        (activeSeries.id === series.id
                          ? "active"
                          : "")
                      }
                      onClick={() =>
                        setActiveSeries(series)
                      }
                    >
                      <PlayCircle size={18} />
                      <span>{series.title}</span>
                    </button>
                  ))}
                </div>

                <a
                  href={soundcloudPlaylists}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sermon-series-all-link"
                >
                  View All Playlists
                  <ArrowUpRight size={16} />
                </a>
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
