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

  return Array.from(new Array(6)).map(
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
    i: 'https://www.youtube.com/embed/xk4_1vDrzzo',
    t: 'Java Full Course -Learn to code today',
    p: 'Java tutorial for beginners full course',
    
    pp: '',
    

  },{
    i: 'https://www.youtube.com/embed/eIrMbAQSU34',
    t: 'Java Tutorial for Beginners',
    p: 'Java tutorial for beginners - Learn Java, the language behind millions of apps and websites. ',
    
    pp: '',
    

  },{
    i: 'https://www.youtube.com/embed/GoXwIVyNvX0',
    t: 'Intro to Java Programming - Course for Absolute Beginners',

    p: 'Java is a general-purpose programming language. Learn how to program in Java in this full tutorial course. This is a complete Java course meant for absolute beginners. No prior programming experience is required.',

    
    pp: '',
    

  },{
    i: 'https://www.youtube.com/embed/7WiJGTPuVeU',
    t: 'Java Beginner Course - Get Started Coding with Java!',
    p: 'Learn how to start programming in Java in this beginners course.',
    
    pp: '',
    

  },{
    i: 'https://www.youtube.com/embed/drQK8ciCAjY',
    t: 'Learn Java in One Video - 15-minute Crash Course',
    p: 'Learn all the essential basics of Java in one video in just 15 minutes. No programming experience required.',
    
    pp: '',
    

  },{
    i: 'https://www.youtube.com/embed/r3GGV2TG_vw',
    t: 'Java Programming All-in-One Tutorial Series',
    p: 'Learn Java',
    
    pp: '',
    

  },

 ];