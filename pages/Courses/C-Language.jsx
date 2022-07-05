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

  return Array.from(new Array(30)).map(
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
    i: 'https://www.youtube.com/embed/KJgsSFOSQv0',
    t: 'C Programming Tutorial for Beginners',
    p: 'This course will give you a full introduction into all of the core concepts in the C programming language.',
    pp: '',

  }, {
    i: 'https://www.youtube.com/embed/3lQEunpmtRA',
    t: 'C Programming | In One Video',
    p: '',
    pp: '',

  }, {
    i: 'https://www.youtube.com/embed/87SH2Cn0s9A',
    t: 'C Full Course 🕹️ -Learn to code today',
    p: ' C tutorial for beginners full course',
    pp: '',

  }, {
    i: 'https://www.youtube.com/embed/ci1PJexnfNE',
    t: 'Why C is so Influential - Computerphile',
    p: 'Why is C such an influential language? We asked ardent C  Professor Brailsford.',
    pp: '',

  }, {
    i: 'https://www.youtube.com/embed/8PopR3x-VMY',
    t: 'C Programming For Beginners | Learn C Programming | C Tutorial For Beginners',
    p: ' Learn C Programming basics with examples. This C tutorial for beginners covers all the topics for all the three categories of learners, beginner, intermediate and experienced professionals.',

    pp: '',

  }, {
    i: '',
    t: 'C Programming All-in-One Tutorial Series (10 HOURS!)',
    p: 'Learn C Programming',
    pp: 'https://www.youtube.com/embed/Bz4MxDeEM6k',

  },
 ];