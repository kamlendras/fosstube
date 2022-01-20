import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Nap from "./Nap";
import Image from 'next/image'
import { dividerClasses } from '@mui/material';
import styles from "../styles/Code.module.css";
function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(10)).map(
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
      {
        messages.map(({ a, url, n, d, i, t, p, pp }) => (

        <>  <div className={styles.grid}>
          

              <Nap key={id} a={a} url={url} n={n} d={d} i={i} t={t} p={p} pp={pp}
              />

          </div></>

        ))
      }

    </>

  );
}





const messageExamples = [
  {
    a: <Avatar src="https://pbs.twimg.com/media/FGb_8DzUcAU657a?format=png&name=small" />,
    url: "Code/Sourcecode",
    n: 'Arrow Nap',
    d: 'September 14, 2020',
    i: 'https://assets.codepen.io/14089/internal/screenshots/pens/ZEBYEOm.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1613843076&width=960',
    t: 'Making Pizza By Pure CSS.',
    p: 'h',
    pp: 'h',

  },


  {
    a: <Avatar src="/img/logo.png" />,
    url: "/Sourcecode",
    n: 'Arrow Nap',
    d: 'September 14, 2020',
    i: 'https://i.ytimg.com/vi/0lynCRmkqqE/maxresdefault.jpg',
    t: 'Making Buttons By Pure CSS.',
    p: 'h',
    pp: 'h',

  },

  {
    a: <Avatar src="/img/logo.png" />,
    url: "Sourcecode",
    n: 'Arrow Nap',
    d: 'September 14, 2020',
    i: 'https://codeastrology.com/wp-content/uploads/2019/04/Search-enginee-1-1200x700.jpg',
    t: 'Making Custom Search Engine with JavaScript.',
    p: 'h',
    pp: 'h',

  },




  {
    a: <Avatar src="/img/logo.png" />,
    url: "Sourcecode",
    n: 'Arrow Nap',
    d: 'September 14, 2020',
    i: 'https://programmersought.com/images/223/f67c50ffa91f72c2c125f8fea4a85d3f.JPEG',
    t: 'Making Custom Loading Bar.',
    p: 'h',
    pp: 'h',

  },

  {
    a: <Avatar src="/img/logo.png" />,
    url: "Sourcecode",
    n: 'Arrow Nap',
    d: 'September 14, 2020',
    i: 'https://codemyui.com/wp-content/uploads/2017/03/menu-button.gif',
    t: 'Simple Hamburger Menu to X Mark Animation.',
    p: 'h',
    pp: 'h',

  },


  {
    a: <Avatar src="/img/logo.png" />,
    url: "Sourcecode",
    n: 'Arrow Nap',
    d: 'September 14, 2020',
    i: 'https://i.ytimg.com/vi/68O6eOGAGqA/maxresdefault.jpg',
    t: 'Making Grid.',
    p: 'h',
    pp: 'h',

  },


  {
    a: <Avatar src="/img/logo.png" />,
    url: "Sourcecode",
    n: 'Arrow Nap',
    d: 'September 14, 2020',
    i: 'https://www.markuptag.com/wp-content/uploads/Simple-login-form-with-social-login-buttons-using-HTML-and-CSS.jpg',
    t: 'Simple login form with social login buttons using HTML and CSS.',
    p: 'h',
    pp: 'h',

  },




  {
    a: <Avatar src="/img/logo.png" />,
    url: "Sourcecode",
    n: 'Arrow Nap',
    d: 'September 14, 2020',
    i: 'https://i.ytimg.com/vi/52ZLjnTPPl4/maxresdefault.jpg',
    t: 'Responsive Footer Design using CSS Flexbox.',
    p: 'h',
    pp: 'h',

  },




  {
    a: <Avatar src="/img/logo.png" />,
    url: "Sourcecode",
    n: 'Arrow Nap',
    d: 'September 14, 2020',
    i: 'https://codeastrology.com/wp-content/uploads/2019/04/Search-enginee-1-1200x700.jpg',
    t: 'Making Custom Search Engine with JavaScript.',
    p: 'h',
    pp: 'h',

  },




  {
    a: <Avatar src="/img/logo.png" />,
    url: "Sourcecode",
    n: 'Arrow Nap',
    d: 'September 14, 2020',
    i: 'https://codeastrology.com/wp-content/uploads/2019/04/Search-enginee-1-1200x700.jpg',
    t: 'Making Custom Search Engine with JavaScript.',
    p: 'h',
    pp: 'h',

  },


  {
    a: <Avatar src="/img/logo.png" />,
    url: "Sourcecode",
    n: 'Arrow Nap',
    d: 'September 14, 2020',
    i: 'https://codeastrology.com/wp-content/uploads/2019/04/Search-enginee-1-1200x700.jpg',
    t: 'Making Custom Search Engine with JavaScript.',
    p: 'h',
    pp: 'h',

  },

  {
    a: <Avatar src="/img/logo.png" />,
    url: "Sourcecode",
    n: 'Arrow Nap',
    d: 'September 14, 2020',
    i: 'https://codeastrology.com/wp-content/uploads/2019/04/Search-enginee-1-1200x700.jpg',
    t: 'Making Custom Search Engine with JavaScript.',
    p: 'h',
    pp: 'h',

  },

 ];