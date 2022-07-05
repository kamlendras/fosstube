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
    i: 'https://www.youtube.com/embed/RGOj5yH7evk',
    t: 'Git and GitHub for Beginners - Crash Course',
    p: 'Learn about Git and GitHub in this tutorial. These are important tools for all developers to understand. Git and GitHub make it easier to manage different software versions and make it easier for multiple people to work on the same software project.    ',
    pp: '',

  }, {
    i: 'https://www.youtube.com/embed/USjZcfj8yxE',
    t: 'Learn Git In 15 Minutes',
    p: 'In this video, well go over all the important stuff you need to know to get started using Git',
    pp: '',

  }, {
    i: '',
    t: 'Git and GitHub for Beginners Tutorial',
    p: 'In this step-by-step tutorial, learn how to use Git and GitHub for source control management (SCM). We start with Git. What is it? How you can get it running on your system, and how you can start working with it? Then we look at GitHub.com, a platform for hosting and collaborating on Git repositories.',
    pp: '',

  }, {
    i: '',
    t: 'What is Git? Explained in 2 Minutes!',
    p: 'This short video explains what Git is.',
    pp: '',

  }, {
    i: '',
    t: '',
    p: '',
    pp: '',

  },



 

 ];