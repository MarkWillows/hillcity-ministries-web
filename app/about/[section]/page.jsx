
function PastorsPage() {
  return (
    <>
      <section className="section">
        <div className="container about-detail-pastors">
          <div className="about-detail-pastors-photo">
            <Image
              src="/images/pastors/pastors-together-2.png"
              alt="Pastors Foyin and Peace Bamidele, co-founders of Hillcity International Ministries"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </div>

          <div className="about-detail-pastors-copy">
            <span className="eyebrow">
              MEET OUR PASTORS
            </span>

            <h2>Pastors Foyin & Peace Bamidele</h2>

            <h3>
              Co-Founders, Hillcity International Ministries
            </h3>

            <p>
              Foyin and Peace Bamidele are a husband-and-wife
              ministry team who founded Hillcity International
              Ministries together in 2023, united by a shared
              passion for proclaiming the gospel of Jesus Christ
              and helping believers discover their identity
              and victory in Him.
            </p>

            <p>
              Peace has served as an ordained minister since
              2019. He teaches God's Word weekly and is
              passionate about helping people understand
              their identity, inheritance, and ability
              in Christ.
            </p>

            <p>
              Together, Foyin and Peace lead the ministry,
              sharing sound biblical truth, nurturing
              spiritual growth, and demonstrating Christ's
              love through evangelism, discipleship,
              and compassionate outreach, including
              serving people experiencing homelessness
              across Atlanta.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-detail-soft">
        <div className="container about-detail-centered">
          <span className="eyebrow">
            OUR GUIDING CONVICTION
          </span>

          <h2>
            Rooted in the Word.
            Guided by the Spirit.
            Centered on Jesus.
          </h2>

          <p>
            The Word of God is our Map.
            The Holy Spirit is our Guide.
            Jesus is our Lord.
          </p>
        </div>
      </section>
    </>
  );
}
