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
    i: 'https://www.youtube.com/embed/8hly31xKli0',
    t: 'Algorithms and Data Structures Tutorial - Full Course for Beginners',
    p: 'In this course you will learn about algorithms and data structures, two of the fundamental topics in computer science.',

    
    pp: '',


  }, {
    i: 'https://www.youtube.com/embed/oz9cEqFynHU',
    t: 'Data Structures and Algorithms in 15 Minutes',
    p: 'learn Data Structures and Algorithms:',
    
    pp: '',
    

  }, {
    i: 'https://www.youtube.com/embed/BBpAmxU_NQo',
    t: 'Data Structures and algorithms for beginners.',
    p: 'Data Structures and algorithms for beginners',
    
    pp: '',
    

  }, {
    i: 'https://www.youtube.com/embed/bum_19loj9A',
    t: 'What Are Data Structures?',
    p: 'Data structures and algorithms tutorial',
    
    pp: '',
    

  }, {
    i: 'https://www.youtube.com/embed/RBSGKlAvoiM',
    t: 'Data Structures Easy to Advanced Course',
    p: 'Learn and master the most common data structures in this full course from Google engineer William Fiset. This course teaches data structures to beginners using high quality animations to represent the data structures visually.',

    
    pp: '',
    

  }, {
    i: 'https://www.youtube.com/embed/pkYVOmU3MgA',
    t: 'Data Structures and Algorithms in Python - Full Course for Beginners',
    p: 'A beginner-friendly introduction to common data structures (linked lists, stacks, queues, graphs) and algorithms (search, sorting, recursion, dynamic programming) in Python.',

    
    pp: '',
    

  }, {
    i: 'https://www.youtube.com/embed/jQqQpPMYPXs',
    t: 'Algorithms & Data Structures Full Crash Course',
    p: 'This is a full four-and-a-half hour crash course on algorithms and data structures. It is a compilation of all the individual episodes from the playlist.',

    
    pp: '',
    

  }, {
    i: 'https://www.youtube.com/embed/kQDxmjfkIKY',
    t: 'Data Structures And Algorithms in Python - Python Data Structures Full Tutorial ',
    p: 'Python Data Structures full Tutorial  and Data Structures and Algorithms .',
    
    pp: '',
    

  },

 

 ];