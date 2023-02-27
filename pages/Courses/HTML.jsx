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
    i: 'https://www.youtube.com/embed/qz0aGYrrlhU',
    t: 'HTML Tutorial for Beginners: HTML Crash Course',
    p: 'HTML Tutorial for Beginners - Learn HTML for a career in web development. This HTML tutorial teaches you everything you need to get started.',

    
    pp: '',
    

  },{
    i: 'https://www.youtube.com/embed/pQN-pnXPaVg',
    t: 'HTML Full Course - Build a Website Tutorial',
    p: 'Learn the basics of HTML5 and web development in this awesome course for beginners',
    
    pp: '',
    

  },{
    i: 'https://www.youtube.com/embed/G3e-cpL7ofc',
    t: 'HTML & CSS Full Course - Beginner to Pro',
    p: 'In this full course, we learn how to build websites with HTML and CSS, and get started as a software engineer.',

    
    pp: '',
    

  },{
    i: 'https://www.youtube.com/embed/UB1O30fR-EE',
    t: 'HTML Crash Course For Absolute Beginners',
    p: 'In this crash course I will cram as much about HTML that I can. This is meant for absolute beginners. If you are interested in learning HTML but know nothing, then you are in the right place. We will be creating a cheat sheet with all of the common HTML5 tags, attributes, semantic markup, ',

    
    pp: '',
    

  },{
    i: 'https://www.youtube.com/embed/kUMe1FH4CHE',
    t: 'Learn HTML – Full Tutorial for Beginners',
    p: 'Learn HTML in this complete course for beginners. This is an all-in-one beginner tutorial to help you learn web development skills. This course teaches HTML5. ',

    
    pp: '',
    

  },{
    i: 'https://www.youtube.com/embed/mU6anWqZJcc',
    t: 'Learn HTML5 and CSS3 From Scratch - Full Course',
    p: 'HTML and CSS are essential skills to have for a career in web development.',
    
    pp: '',
    

  },


 

 ];