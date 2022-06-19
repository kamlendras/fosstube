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
    i: 'https://www.youtube-nocookie.com/embed/fis26HvvDII',
    a: <Avatar src="https://pbs.twimg.com/media/FGb_8DzUcAU657a?format=png&name=small" />,
    url: "Code/Sourcecode",
    n: 'Arrow Nap',
    d: 'September 14, 2020',
    t: 'Android Development for Beginners - Full Course',
    p: '.',
    pp: '.',

  },
  {
    i: 'https://www.youtube-nocookie.com/embed/aS__9RbCyHg',
    a: <Avatar src="https://pbs.twimg.com/media/FGb_8DzUcAU657a?format=png&name=small" />,
    url: "Code/Sourcecode",
    n: 'Arrow Nap',
    d: 'September 14, 2020',
    t: 'Android Full Course - Learn Android in 9 Hours',
    p: '.',
    pp: '.',

  },

  {
    i: 'https://www.youtube-nocookie.com/embed/L88qDgrhp5M',
    a: <Avatar src="https://pbs.twimg.com/media/FGb_8DzUcAU657a?format=png&name=small" />,
    url: "Code/Sourcecode",
    n: 'Arrow Nap',
    d: 'September 14, 2020',
    t: '3 things to know about Modern Android Development',
    p: '.',
    pp: '.',

  },
  {
    i: 'https://www.youtube-nocookie.com/embed/xNPkXGdVw7E',
    a: <Avatar src="https://pbs.twimg.com/media/FGb_8DzUcAU657a?format=png&name=small" />,
    url: "Code/Sourcecode",
    n: 'Arrow Nap',
    d: 'September 14, 2020',
    t: '3 things to know about Modern Android Development',
    p: '.',
    pp: '.',

  },
// k
{
  i: 'https://www.youtube-nocookie.com/embed/xNPkXGdVw7E',
  a: <Avatar src="https://pbs.twimg.com/media/FGb_8DzUcAU657a?format=png&name=small" />,
  url: "Code/Sourcecode",
  n: 'Arrow Nap',
  d: 'September 14, 2020',
  t: '3 things to know about Modern Android Development',
  p: '.',
  pp: '.',

},{
  i: 'https://www.youtube-nocookie.com/embed/xNPkXGdVw7E',
  a: <Avatar src="https://pbs.twimg.com/media/FGb_8DzUcAU657a?format=png&name=small" />,
  url: "Code/Sourcecode",
  n: 'Arrow Nap',
  d: 'September 14, 2020',
  t: '3 things to know about Modern Android Development',
  p: '.',
  pp: '.',

},{
  i: 'https://www.youtube-nocookie.com/embed/xNPkXGdVw7E',
  a: <Avatar src="https://pbs.twimg.com/media/FGb_8DzUcAU657a?format=png&name=small" />,
  url: "Code/Sourcecode",
  n: 'Arrow Nap',
  d: 'September 14, 2020',
  t: '3 things to know about Modern Android Development',
  p: '.',
  pp: '.',

},{
  i: 'https://www.youtube-nocookie.com/embed/xNPkXGdVw7E',
  a: <Avatar src="https://pbs.twimg.com/media/FGb_8DzUcAU657a?format=png&name=small" />,
  url: "Code/Sourcecode",
  n: 'Arrow Nap',
  d: 'September 14, 2020',
  t: '3 things to know about Modern Android Development',
  p: '.',
  pp: '.',

},{
  i: 'https://www.youtube-nocookie.com/embed/xNPkXGdVw7E',
  a: <Avatar src="https://pbs.twimg.com/media/FGb_8DzUcAU657a?format=png&name=small" />,
  url: "Code/Sourcecode",
  n: 'Arrow Nap',
  d: 'September 14, 2020',
  t: '3 things to know about Modern Android Development',
  p: '.',
  pp: '.',

},{
  i: 'https://www.youtube-nocookie.com/embed/xNPkXGdVw7E',
  a: <Avatar src="https://pbs.twimg.com/media/FGb_8DzUcAU657a?format=png&name=small" />,
  url: "Code/Sourcecode",
  n: 'Arrow Nap',
  d: 'September 14, 2020',
  t: '3 things to know about Modern Android Development',
  p: '.',
  pp: '.',

},{
  i: 'https://www.youtube-nocookie.com/embed/xNPkXGdVw7E',
  a: <Avatar src="https://pbs.twimg.com/media/FGb_8DzUcAU657a?format=png&name=small" />,
  url: "Code/Sourcecode",
  n: 'Arrow Nap',
  d: 'September 14, 2020',
  t: '3 things to know about Modern Android Development',
  p: '.',
  pp: '.',

},

 

 ];