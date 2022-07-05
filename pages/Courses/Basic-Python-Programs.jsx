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

  return Array.from(new Array(7)).map(
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
    <title>Courses - Arrow Nap</title>
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

        <>  <div className={styles.grid}>
          

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
    i: 'https://www.youtube.com/embed/rfscVS0vtbw',
    t: 'Learn Python - Full Course for Beginners [Tutorial]',
    p: 'This course will give you a full introduction into all of the core concepts in python',

    pp: '',

  },{
    i: 'https://www.youtube.com/embed/kqtD5dpn9C8',
    t: 'Python for Beginners - Learn Python in 1 Hour',
    p: 'This Python tutorial for beginners show how to get started with Python quickly. Learn to code in 1 hour! Watch this tutorial get started! ',

    pp: '',

  },{
    i: 'https://www.youtube.com/embed/_uQrJ0TkZlc',
    t: 'Python Tutorial - Python Full Course for Beginners',
    p: 'Python tutorial - Python full course for beginners - Go from Zero to Hero with Python (includes machine learning & web development projects).',

    pp: '',

  },{
    i: '',
    t: 'Python Tutorial for Beginners - Learn Python in 5 Hours [FULL COURSE]',
    p: 'In this complete Python course you will learn everything you need to get started with Python.  ',
    pp: '',

  },{
    i: 'https://www.youtube.com/embed/Y8Tko2YC5hA',
    t: 'What is Python? Why Python is So Popular?',
    p: 'In this video',
    pp: '- What is Python?- What can you do with Python What kind of applications can you build with Python How to learn Python',

  },{
    i: 'https://www.youtube.com/embed/XKHEtdqhLK8',
    t: 'Python Full Course 🐍 -Learn to code today-',
    p: 'Python tutorial for beginners full course',
    pp: '',

  },{
    i: 'https://www.youtube.com/embed/b093aqAZiPU',
    t: 'Python for Beginners Tutorial',
    p: '  In this step-by-step Python for beginners tutorial',
    pp: '',

  }





 

 ];