"use client";
import * as React from "react";
import Card from "./card";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import styles from "../../_styles/Courses.module.css";
function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
  // Array.from(new Array(40))
  return messageExamples.map(
    () => messageExamples[getRandomInt(messageExamples.length)]
  );
}
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Icourses() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <>
      {messages.map(
        ({ img, l, video, heading, avatar, date, channel, view }) => (
          <>
            <div className={styles.grid}>
              <Card
                l={l}
                img={img}
                video={video}
                heading={heading}
                avatar={avatar}
                date={date}
                view={view}
                channel={channel}
              />
            </div>
          </>
        )
      )}
    </>
  );
}
const messageExamples = [
  {
    l: "Courses/Python-GUI-Tkinter",
    img: "/mkbhd1.jpg",
    video: "/video.mp4",
    heading: "$20K vs $2,000,000 Hybrid Car!",
    avatar: "/amkbhd.jpg",
    date: " 8 days ago",
    view: "2.8M views",
    channel: "Marques Brownlee",
    link: "/watch",
  },
  {
    l: "Courses/Python-GUI-Tkinter",
    img: "/mkbhd2.jpg",
    video: "/3.mp4",
    heading: "Here's the Thing about the M3 Macbook Air...",
   avatar: "/amkbhd.jpg",
    date: "1 day ago",
    view: "3.5M views",
channel: "Marques Brownlee",
    link: "/watch",
  },
  {
  l: "Courses/Python-GUI-Tkinter",
  img: "/mkbhd3.jpg",
  video: "/3.mp4",
  heading: "Tesla Cybertruck Review: Already Iconic?",
 avatar: "/amkbhd.jpg",
  date: "6 day ago",
  view: "3.3M views",
channel: "Marques Brownlee",
  link: "/watch",
},
{
  l: "Courses/Python-GUI-Tkinter",
  img: "/mkbhd4.jpg",
  video: "/3.mp4",
  heading: "Google Pixel 8/8 Pro Review: We'll Fix It In Post!",
 avatar: "/amkbhd.jpg",
  date: "9 day ago",
  view: "4.2M views",
channel: "Marques Brownlee",
  link: "/watch",
},
{
  l: "Courses/Python-GUI-Tkinter",
  img: "/mkbhd5.jpg",
  video: "/3.mp4",
  heading: "I Tried a Disney Secret Project!",
 avatar: "/amkbhd.jpg",
  date: "9 days  ago",
  view: "5.9M views",
channel: "Marques Brownlee",
  link: "/watch",
},

  {
    l: "Courses/Python-GUI-Tkinter",
    img: "/nasa1.jpg",
    video: "/2.mp4",
    heading: "We Are Going",
   avatar: "/nasa.jpg",
    date: " 2 min ago",
    view: "17M views ",
channel: "NASA",
    link: "/watch",
  },
  {
    l: "Courses/Python-GUI-Tkinter",
    img: "/nasa2.jpg",
    video: "/2.mp4",
    heading: "How We Are Going to the Moon - 4K",
   avatar: "/nasa.jpg",
    date: " 4 years ago",
    view: "10M views",
channel: "NASA",
    link: "/watch",
  },
  {
    l: "Courses/Python-GUI-Tkinter",
    img: "/nasa3.jpg",
    video: "/2.mp4",
    heading: "Welcome Back! Discovery Lands Safely at Kennedy",
   avatar: "/nasa.jpg",
    date: "14 years ago",
    view: "4.4M views",
channel: "NASA",
    link: "/watch",
  },
  {
    l: "Courses/Python-GUI-Tkinter",
    img: "/nasa4.jpg",
    video: "/3.mp4",
    heading: "NASA Artemis Lunar Terrain Vehicle (Official NASA Trailer)",
   avatar: "/nasa.jpg",
    date: " 1 month ago",
    view: "17K views ",
channel: "NASA",
    link: "/watch",
  },
  {
    l: "Courses/Python-GUI-Tkinter",
    img: "/nasa5.jpg",
    video: "/4.mp4",
    heading: "NASA Astronauts Aboard Space Station Huddle Up for Super Bowl",
   avatar: "/nasa.jpg",
    date: " 2 months ago",
    view: "14K views ",
channel: "NASA",
    link: "/watch",
  },{
    l: "Courses/Python-GUI-Tkinter",
    img: "/mkbhd1.jpg",
    video: "/video.mp4",
    heading: "$20K vs $2,000,000 Hybrid Car!",
    avatar: "/amkbhd.jpg",
    date: " 3 days ago",
    view: "2.8M views",
    channel: "Marques Brownlee",
    link: "/watch",
  },
  {
    l: "Courses/Python-GUI-Tkinter",
    img: "/mkbhd2.jpg",
    video: "/3.mp4",
    heading: "Here's the Thing about the M3 Macbook Air...",
   avatar: "/amkbhd.jpg",
    date: "1 month ago",
    view: "3.5M views",
channel: "Marques Brownlee",
    link: "/watch",
  },
  {
  l: "Courses/Python-GUI-Tkinter",
  img: "/mkbhd3.jpg",
  video: "/3.mp4",
  heading: "Tesla Cybertruck Review: Already Iconic?",
 avatar: "/amkbhd.jpg",
  date: "1 month ago",
  view: "3.3M views",
channel: "Marques Brownlee",
  link: "/watch",
},
{
  l: "Courses/Python-GUI-Tkinter",
  img: "/mkbhd4.jpg",
  video: "/3.mp4",
  heading: "Google Pixel 8/8 Pro Review: We'll Fix It In Post!",
 avatar: "/amkbhd.jpg",
  date: "6 month ago",
  view: "4.2M views",
channel: "Marques Brownlee",
  link: "/watch",
},
{
  l: "Courses/Python-GUI-Tkinter",
  img: "/mkbhd5.jpg",
  video: "/3.mp4",
  heading: "I Tried a Disney Secret Project!",
 avatar: "/amkbhd.jpg",
  date: "9 days  ago",
  view: "5.9M views",
channel: "Marques Brownlee",
  link: "/watch",
},

  {
    l: "Courses/Python-GUI-Tkinter",
    img: "/nasa1.jpg",
    video: "/2.mp4",
    heading: "We Are Going (Official NASA Trailer)",
   avatar: "/nasa.jpg",
    date: " 2 min ago",
    view: "17M views ",
channel: "NASA",
    link: "/watch",
  },
  {
    l: "Courses/Python-GUI-Tkinter",
    img: "/nasa2.jpg",
    video: "/2.mp4",
    heading: "How We Are Going to the Moon - 4K",
   avatar: "/nasa.jpg",
    date: " 4 years ago",
    view: "10M views",
channel: "NASA",
    link: "/watch",
  },
  {
    l: "Courses/Python-GUI-Tkinter",
    img: "/nasa3.jpg",
    video: "/2.mp4",
    heading: "Welcome Back! Discovery Lands Safely at Kennedy",
   avatar: "/nasa.jpg",
    date: "14 years ago",
    view: "4.4M views",
channel: "NASA",
    link: "/watch",
  },
  {
    l: "Courses/Python-GUI-Tkinter",
    img: "/nasa4.jpg",
    video: "/3.mp4",
    heading: "NASA Artemis Lunar Terrain Vehicle (Official NASA Trailer)",
   avatar: "/nasa.jpg",
    date: " 1 month ago",
    view: "17K views ",
channel: "NASA",
    link: "/watch",
  },
  {
    l: "Courses/Python-GUI-Tkinter",
    img: "/nasa5.jpg",
    video: "/4.mp4",
    heading: "NASA Astronauts Aboard Space Station Huddle Up for Super Bowl",
   avatar: "/nasa.jpg",
    date: " 2 months ago",
    view: "14K views ",
channel: "NASA",
    link: "/watch",
  },
 
];

{
  /* <div className={styles.grid}>
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
    </div> */
}
//     </main>
//   );
// }

// import * as React from "react";
// import Card from "./card";
// import styles from "../../styles/Courses.module.css";
// import youtubeService from '../../services/youtube';
// export async function getServerSideProps() {
//   const playlistId = 'PLMElh5YpJilZCEzu6OhfbsLYPJYz5TACL'; // Replace with your actual YouTube playlist ID
//   const response = await youtubeService.playlistItems.list({
//     part: 'snippet',
//     maxResults: 50, // Set the number of videos you want to retrieve
//     playlistId,
//   });

//   const playlistItems = response.data.items;

//   return {
//     props: { playlistItems },
//   };
// }

// function PlaylistPage({ playlistItems }) {
//   return (
//     <div>
//       <h1>YouTube Playlist</h1>
//       <ul>
//         {playlistItems?.map((item) => (
//           <li key={item.id}>
//             <a
//               href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {item.snippet.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PlaylistPage;

{
  /* <div className={styles.grid}>
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
    </div> */
}
