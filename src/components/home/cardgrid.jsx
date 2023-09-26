import * as React from "react";
import Card from "./card";
import styles from "../../styles/Courses.module.css";
const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data}) {
  console.log("data", data);
  return (
    <main>




<main>

<ul className={styles.grid}>
  {data.items.map((item) => {
    console.log('item', item);
    const {id, snippet = {} } = item;
    const { title, thumbnails = {} } = snippet;
    const { medium = {} } = thumbnails;
    
    return (
      <li key={id} className={styles.card}>
        <a href="https://ksingh.is-a.dev">
          <p>
            <img width={medium.width} height={medium.height} src={medium.url} alt="" />
          </p>
          <h3>{ title }</h3>
        </a>
      </li>
    )
  })}
</ul>

</main>


    {/* <div className={styles.grid}>
      <Card
        l={title}
        links={"https://www.youtube.com/watch?v=${resourceId.videoId}"}
        key={id}
        img={medium.url}
        video={title}
        heading={title}
        avatar={medium.url}
        date={title}
        view={title}
        channel={title}
      />
    </div> */}
    </main>
  );
}
