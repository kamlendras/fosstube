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
    i: 'https://www.youtube.com/embed/PkZNo7MFNFg',
    t: 'Learn JavaScript - Full Course for Beginners',
    p: 'JavaScript tutorial for beginners',
    
    pp: '',
    

  },  {
    i: 'https://www.youtube.com/embed/jS4aFq5-91M',
    t: 'JavaScript Programming - Full Course',
    p: 'Learn JavaScript from scratch',
    
    pp: '',
    

  },  {
    i: 'https://www.youtube.com/embed/hdI2bqOjy3c',
    t: 'JavaScript Crash Course For Beginners',
    p: 'In this crash course we will go over the fundamentals of JavaScript',
    
    pp: '',
    

  },  {
    i: 'https://www.youtube.com/embed/Qqx_wzMmFeA',
    t: 'JavaScript Tutorial for Beginners',
    p: 'In this crash course we will go over the fundamentals of JavaScript',
    
    pp: '',
    

  }




 

 ];