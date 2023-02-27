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
    i: 'https://www.youtube.com/embed/yfoY53QXEnI',
    t: 'CSS Crash Course For Absolute Beginners',
    p: 'Learn CSS',
    pp: '',

  }, {
    i: 'https://www.youtube.com/embed/1PnVor36_40',
    t: 'Learn CSS in 20 Minutes',
    p: 'In this video we will cover everything you need to know to get up and running with CSS in only 20 minutes. We will cover CSS syntax, how to add CSS to your HTML, CSS colors, CSS units, the box model, and best practices for CSS walking through a full example of CSS being used to style an HTML page. By the end of this video you will know enough about CSS to style any basic web pages in your own projects!',

    pp: '',

  }, {
    i: 'https://www.youtube.com/embed/XPv4EeB0PJ8',
    t: 'What is CSS? And How It Works!',
    p: '',
    pp: '',

  }, {
    i: 'https://www.youtube.com/embed/0afZj1G0BIE',
    t: 'Learn CSS in 12 Minutes',
    p: 'I introduce CSS, explain how to link a CSS file with an HTML document and teach the syntax of the language along with the most common properties.',

    pp: '',

  }, {
    i: 'https://www.youtube.com/embed/l1mER1bV0N0',
    t: 'Learn Every CSS Selector In 20 Minutes',
    p: 'CSS Selector ',
    pp: '',

  }, {
    i: 'https://www.youtube.com/embed/=N5wpD9Ov_To',
    t: 'Are you using the right CSS units?',
    p: 'There are a lot of different units that we can use when writing CSS, in this video I give some general rules of thumb of which ones are best suited for which situations.',
    
    pp: '',

  },

 

 ];