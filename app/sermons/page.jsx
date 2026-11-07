
import Link from "next/link";
import {
  Headphones,
  BookOpen,
  ArrowUpRight,
  CalendarDays,
  Heart,
} from "lucide-react";

export const metadata = {
  title: "Sermons & Teachings",
  description:
    "Listen to biblical sermons and teachings from Hillcity International Ministries.",
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
      <section className="sermons-hero">
        <div className="container centered">
          <span className="eyebrow">
            HILLCITY INTERNATIONAL MINISTRIES
          </span>

          <h1>Sermons & Teachings</h1>

          <p>
            Grow in the knowledge of Jesus Christ
            through sound biblical teaching,
            revelation, and the transforming
            power of God's Word.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sermons-intro">
            <div>
              <span className="eyebrow">
                LISTEN AND BE TRANSFORMED
              </span>

              <h2>Explore Our Sermon Library</h2>

              <p>
                Select any available teaching below
                to listen directly on this website.
                Explore our messages and continue
                growing in your walk with Christ.
              </p>
            </div>

            <Headphones
              size={42}
              color="#78923A"
            />
          </div>

          <div className="sermons-player">
            <div className="sermons-player-heading">
              <div className="sermons-player-icon">
                <Headphones size={23} />
              </div>

              <div>
                <h3>Hillcity Audio Sermons</h3>
                <p>
                  Browse and play our SoundCloud teachings
                </p>
              </div>
            </div>

            <iframe
              title="Hillcity International Ministries SoundCloud Sermons"
              width="100%"
              height="500"
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
                Powered by SoundCloud
              </span>

              <a
                href={soundcloudProfile}
                target="_blank"
                rel="noopener noreferrer"
              >
                View All on SoundCloud
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section sermons-encourage">
        <div className="container centered">
          <BookOpen
            size={36}
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

      <section className="section">
        <div className="container">
          <div className="sermons-bottom-grid">
            <div className="sermons-bottom-card">
              <CalendarDays size={30} />

              <h3>Join Our Bible Study</h3>

              <p>
                Every Sunday from 6:00 to 6:30 PM
                Eastern Time. Grow with us as we
                study God's Word together.
              </p>

              <a href="tel:6692749759">
                Dial 669 274 9759
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="sermons-bottom-card">
              <Heart size={30} />

              <h3>Share the Good News</h3>

              <p>
                Know someone who would be blessed
                by these teachings? Invite them
                to explore the sermon library.
              </p>

              <Link href="/contact">
                Connect With Hillcity
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
