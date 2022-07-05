import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Ca from "/components/Ca";
import { dividerClasses } from '@mui/material';
import styles from "/styles/Code.module.css";
import Head from "next/head";
import Nv from "/components/Nv";
import Footern from "/components/Footern";
function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(8)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Icode() {
  
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    setMessages(refreshMessages());
  }, [value, setMessages]);


  return (
    <>
    <Head>
    <title>Android Development</title>
    <meta
      name="description"
      content="Arrow Nap| Arrow Nap is the knowledge-sharing community Of Developers."
    />
  </Head>
  <div>
      <Nv p={"fixed"}  />
    </div>
    
      {
        messages.map(({ a, url, n, d, i, t, p, pp }) => (

        <>  <div className={styles.grid} >
          

              <Ca  a={a} url={url} n={n} d={d} i={i} t={t} p={p} pp={pp}
              />

          </div></>

        ))
      }
 <div>
        <Footern />
      </div> 
    </>

  );
}





const messageExamples = [
  {
    i: 'https://www.youtube.com/embed/fis26HvvDII',
    a: <Avatar src="https://pbs.twimg.com/media/FGb_8DzUcAU657a?format=png&name=small" />,
    url: "Code/Sourcecode",
    n: 'Arrow Nap',
    d: 'July 12',
    t: 'Android Development for Beginners',
    p: 'Learn how to develop an android app from scratch in this full course for beginners. No prior programming experience required!',
  
  
    

  },
  {
    i: 'https://www.youtube.com/embed/tZvjSl9dswg',
    t: 'Android App Development in Java All-in-One Tutorial Series (4 HOURS!)',
    p: 'Learn how to develop an android app from scratch.',
    pp: '.',

  },
  {
    i: 'https://www.youtube.com/embed/312RhjfetP8',
    t: 'SQLite Database for Android - Full Course',
    p: 'Learn how to use an SQLite database in Android Studio. ',
    pp: 'This tutorial shows every step of programming a demo Android application that uses an SQLlite local database. You will learn how to create an SQLite local database on the Android device, configure new tables with the onCreate method, setup the columns and data types, extend the SQLiteHelper class, create CRUD methods in a DAO (Data Access Object) class, display results on a listview, and more.',

  },
  {
    i: 'https://www.youtube.com/embed/9wWgw9smBJs',
    t: 'Java vs Kotlin for Android App Development',
    p: 'Learn which is beast Java or Kotlin.',
    pp: '.',

  },{
    i: 'https://www.youtube.com/embed/5flXf8nuq60',
    t: 'Kotlin Crash Course',
    p: ' A beginners guide to learning the basics of the Kotlin programming language, which is heaviliy used in creating Android apps',
    pp: '',

  },{
    i: 'https://www.youtube.com/embed/BBWyXo-3JGQ',
    t: 'Build A Simple Android App With Kotlin',
    p: 'We will create a basic todo list Android app using the Kotlin programming language.',
    pp: '',

  },{
    i: 'https://www.youtube.com/embed/WvwwL0TwH6U',
    t: 'How to Become a Mobile Developer',
    p: 'To start a career in mobile development, should you learn Native Android/iOS development or a cross-platform technology such as React-Native? Where do you start learning mobile development? How do you land your first mobile dev job? In this video, I touch on all these topics and more. ',
    pp: '',

  },{
    i: 'https://www.youtube.com/embed/_5jVGROIVB0',
    t: 'The top 3 things to know in Modern Android Development ',
    p: ' Did you miss the latest in Modern Android Development at Google I/O ? Fear not, Android Developer Relations Engineer Florina Muntenescu will recap the top three announcements from this year’s Google I/O!',
    pp: '.',

  },

 ];