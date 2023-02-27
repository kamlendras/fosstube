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

  return Array.from(new Array(5)).map(
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
    i: 'https://www.youtube.com/embed/FTFaQWZBqQ8',
    t: 'Figma UI Design Tutorial: Get Started in Just 24 Minutes!',
    p: 'Do you want to learn Figma but don’t know where to start? Well, if you follow this step-by-step tutorial, it will only take you 24 minutes to learn all the basics you need to know to start designing apps and websites in Figma.',

    
    pp: '',
    

  },  {
    i: 'https://www.youtube.com/embed/Cx2dkpBxst8',
    t: 'What is Figma',
    p: 'Figma is where teams design together. Bring ideas to life in a design, wireframe, or prototype. Partner with teammates from content creation to design implementation. Get better feedback from your stakeholders. Figma gets everyone on the same page—literally.',

    
    pp: '',
    

  },  {
    i: 'https://www.youtube.com/embed/jwCmIBJ8Jtc',
    t: 'Figma Tutorial for UI Design - Course for Beginners',
    p: 'In this Figma course, you will learn how to use Figma for UI Design. Figma is a vector graphics editor and prototyping tool.',

    
    pp: '',
    

  },  {
    i: 'https://www.youtube.com/embed/kbZejnPXyLM',
    t: 'Free Figma UX Design UI Essentials Course',
    p: 'Learn Figma',
    
    pp: '',
    

  },  {
    i: 'https://www.youtube.com/embed/eZJOSK4gXl4',
    t: 'Getting started with Figma: A beginners guide',
    p: 'Learn Figma',
    
    pp: '',
    

  },

 

 ];