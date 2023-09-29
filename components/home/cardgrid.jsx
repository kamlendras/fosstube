"use client"
import * as React from 'react';
import Card from "./card";
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import styles from "../../styles/Courses.module.css";
function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
  // Array.from(new Array(40))
  return messageExamples.map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
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


      {
        messages.map(({  img, l,video, heading , avatar , date , channel , view }) => (

          <><div className={styles.grid}>


            <Card l={l} img={img} video={video} heading={heading} avatar={avatar} date={date} view={view} channel={channel}/>



          </div></>

        ))
      }


    </>

  );
}
const messageExamples = [
  {
    l:'Courses/Python-GUI-Tkinter',
    img: '/1.jpg',
    video: '/1.mp4',
    heading: 'This courses is for web dev beginers.',
    avatar:'/fb.svg',
    date: " 2 min ago",
    view: "2 million ",
    channel: "codepress"

  },

  {
    l:'Courses/Python-GUI-Tkinter',
    img: '2.jpg',
    video: '/2.mp4',
    heading: 'This courses is for web dev beginers.',
    avatar:'/fb.svg',
    date: " 2 min ago",
    view: "2 million ",
    channel: "codepress"

  },
  {
    l:'Courses/Python-GUI-Tkinter',
    img: '/3.jpg',
    video: '/3.mp4',
    heading: 'This courses is for web dev beginers.',
    avatar:'/fb.svg',
    date: " 2 min ago",
    view: "2 million ",
    channel: "codepress"

  },
  {
    l:'Courses/Python-GUI-Tkinter',
    img: '/4.jpg',
    video: '/4.mp4',
    heading: 'This courses is for web dev beginers.',
    avatar:'/fb.svg',
    date: " 2 min ago",
    view: "2 million ",
    channel: "codepress"

  },
  {
    l:'Courses/Python-GUI-Tkinter',
    img: '/5.jpg',
    video: '/1.mp4',
    heading: 'This courses is for web dev beginers.',
    avatar:'/fb.svg',
    date: " 2 min ago",
    view: "2 million ",
    channel: "codepress"

  },
  {
    l:'Courses/Python-GUI-Tkinter',
    img: '/6.jpg',
    video: '/2.mp4',
    heading: 'This courses is for web dev beginers.',
    avatar:'/fb.svg',
    date: " 2 min ago",
    view: "2 million ",
    channel: "codepress"

  },

  {
    l:'Courses/Python-GUI-Tkinter',
    img: '/7.jpg',
    video: '/2.mp4',
    heading: 'This courses is for web dev beginers.',
    avatar:'/fb.svg',
    date: " 2 min ago",
    view: "2 million ",
    channel: "codepress"

  },
  {
    l:'Courses/Python-GUI-Tkinter',
    img: '/8.jpg',
    video: '/2.mp4',
    heading: 'This courses is for web dev beginers.',
    avatar:'/fb.svg',
    date: " 2 min ago",
    view: "2 million ",
    channel: "codepress"

  },









];

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


  