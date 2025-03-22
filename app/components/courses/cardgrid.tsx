"use client"
import * as React from 'react';
import Card from "./card";
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import styles from "../../styles/Courses.module.css";
function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
  // Array.from(new Array(40))
  return messageExamples.map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Icourses() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    setMessages(refreshMessages());
  }, [value, setMessages]);


  return (


    <>


      {
        messages.map(({  d, i, t,l }) => (

          <><div className={styles.grid}>


            <Card d={d} i={i} t={t} l={l} />



          </div></>

        ))
      }


    </>

  );
}





const messageExamples = [
  {
   
    t: 'HTML.',
    i: '/html.png',
    d: 'Learn HTML from basic.',
    l:'Courses/HTML'

  },

  {
   
    t: 'CSS.',
    i: 'data:image/jpeg;base64,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',
    d: 'Learn CSS from basic',
    l:'Courses/CSS'

  },
  

  {
   
    t: 'JavaScript.',
    i: '/js.png',
    d: 'Learn JavaScript from basic.',
    l:'Courses/JavaScript'
   

  },

  {
   
    t: 'Figma.',
    i: '/Figma.svg',
    d: 'Learn Figma from basic',
     l:'Courses/Figma'

  },

   {
   
    t: 'React JS.',
    i: 'https://en.karabayyazilim.com/uploads/blogs/reactjs-nedir-2019-06-24-091546/reactjs-nedir-2019-06-24-091546-0.jpg',
    d: 'This series will cover React from starting to the end. You will learn react from the ground up.',
    l:'Courses/React-Js'

  },  {
   
    t: 'React Native.',
    i: 'https://miro.medium.com/max/700/1*C3kxjCrJy-aWSMpe2chfaA.png',
    d: 'This series will cover React Native from starting to the end. You will learn react from the ground up.',
    l:'Courses/React-Native'

  },  
   
  {
   
    t: 'Python.',
    i: 'https://miro.medium.com/max/700/1*C3kxjCrJy-aWSMpe2chfaA.png',
    d: 'Learn Python Programs With Logic.',
     l:'Courses/Python'

  },  



  {
   
    t: 'java.',
    i: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7LFrSTpn-hmIh_YMy1AXub7S8-6aiJQB9w&usqp=CAU',
    d: 'This series will cover Java from starting to the end. You will learn java from the start to the end.',
    l:'Courses/java'

  },  

  {
   
    t: 'Learn C Simple & Clean.',
    i: 'https://nareshit.com/wp-content/uploads/2018/08/C-Programming-online-training-nareshit.jpg',
    d: 'This series contains programs for you to practice C Programming and related concepts',
     l:'Courses/C-Language'

  },   {
   
    t: 'Learn Data Structures and Algorithms.',
    i: 'data:image/png;base64,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',
    d: 'Data Structures and algorithms course',
     l:'Courses/Data-Structures-and-algorithms-course'

  },   {
   
    t: 'Learn PHP.',
    i: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUwAAACYCAMAAAC4aCDgAAAA9lBMVEUAueUAqZPr7u8Ao4UXO1AAuujZ2dnf29wAqJAAsLgAooEAuOGBwLUAt9oAp4z08vRAsZ81tKJmvrHeOCaPy8LW5eTc3+IALkfz9vawuL0PN02Yoqnm6etGWmtTZnMjQVYAMkkAJ0GkrLTO09feKRHbs6h+ipWUy97HXE6BkaIAppX7/f2LlZ/gNCAAssgAqqVRuquj1M0AID4AFji7wcZqeIU0TGBZaXhIXGzIzNJkc4EAIj53hI/I4N6EwLNYvMraysW/0c7eVz/eGQDcoJXeX0nHWj6NjHN7h2fVRTS9YVxXpcHaQCebf4dqm7GodXi1bmI9rc7ZHbQ0AAAD/UlEQVR4nO3de1PiVgCGcQSiWazXKokh1oB06150XetGt7Xdbm13e798/y/Tcw4hCQthR/LO0Jbn+cM5OWac4TcJOUAYGw0iIiIiIiKi/1qe19gUt+yHtLS8i6ctf02Z/8hb9oNaUt6LTgdMTd6jTqsFpqZNawmmJO8CTFmjsxxMSWAKA1MYmMLAFAamMDCFgSkMTGFgCgNTGJjCwBQGpjAwhYEpDExhYAoDUxiYwsAUBqYwMIWBKexDTL9OYJYx/bXL/cXbXfPBzDH9g+ZOnQ4vfTAzTP/lTrNeO/s+mA7Tv6xraQIzw6x9YI4PTTDX/MP6B+bOAZhgSgJTGJjCZmB2S4Whm4rdRlz+fT6bbYZgzsAM034wLjoeuKneldm4Gjiw0y/NuH9rxkdX+Y5JetcNwZzGPI7aeVH/OLaYiRkHGWbfzn9mMYPSjklwHYJZhZmRBq9CgxnMwYyy/YMumBWYaZoGbnDVnY95kqZR4th7IZgzMfunYRindhQchfMwk8fPwvC51YxuwKzCNKOB0+oVmLYpTDMK3dwtmB/DtIYOM3k16JlGR+EkZhNMWxVm8DruXp841tfZc2Y7Ga2C2h9gNuP1r+xkcgdm5dIoyi7W46t5ucml0Qi4fw3m3HVmu/310ccxXckNi/YqzMitIAO73slP874tmIUZJf2bGMwKzOjElN723IvE7AL0/NTmCMvrTLvj8d11yGvzyqt5162DRm9flNeZ00ujZ8WOYFYujfLmL9pD3oLLAlMYmMLAFDYTM4qmMM1cjmnGicN0IzDzZmDe2sVOMIlpV0rRwG2cBmbcvjFL+aPEzoKZN+MzoNjVLDcxVWxM7wkmn06KAlMYmMLAFCa/C45bCkeYu/UxY+7PHN85fFBb85LbsPN72vcP69zS3vxml3vaS9+28PfqNP7yCpj1vwhU/A0wdYEJZu3AFAamMDCFgSkMTGFgCgNTGJjCwBQGpjAwhYEpDExhYAoDUxiYwsAUBqYwMIWBKQxMYWAKA1MYmMLAFAamMDCFgSkMTGFgCgNTGJjCwBQGpjAwhYEpDExhYAoDUxiYwsAUVmDW+u9pk22vOuYnwr59s9KYe+sbRcV/rNhYsC9WGbPzcmM97/Oi79YXamUxLxzm20Ki+/1w3P0PYD6oLXeaHxRHZvfH80+zhmA+LO+F1fTfFs+YZcwFnzVXFbPReGo0fX9vN2vvXY55/j6ffVgrujRq2GtQq7NdqoT50/ZCtVYXs+F5W+XOitP88dZibS77If1b8izm+c9D83P4ZHWPME0Wc/jL5q+/nYNZO4N5/7tnTv2zIZh1886Gf1hDr/HnPZg18/76OyP0noBZO29qQERERERERPQ/7x+Fi93mRdwo6wAAAABJRU5ErkJggg==',
    d: 'PHP Tutorials',
     l:'Courses/PHP-Tutorials'

  },   {
   
    t: 'Learn C++.',
    i: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQuMi_FAtJ6_osAZcU3qzFKhmkAHYUcUD9sB8HboTWlAnhMLN8WgOODzksPSB4bgOBGp0&usqp=CAU',
    d: 'C++ Tutorials',
     l:'Courses/C++-Tutorials'

  },   {
   
    t: 'Web Development.',
    i: 'data:image/png;base64,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',
    d: 'Web Development For Beginners HTML, CSS, JavaScript & More',
     l:'Courses/Web-Development'

  },   {
   
    t: 'Complete Git.',
    i: 'https://tatsuno-system.co.jp/wp-content/uploads/2020/06/git-command.png',
    d: 'Learn Git For Beginners',
     l:'Courses/Complete-Git'

  },   {
   
    t: 'Android Development from bases.',
    i: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAe1BMVEVo8K5EWmRq9rFBTF5DVWJEWGNk4aZOh3lq97JCUWBp87BCTl9Rk35Ia2xIbm1o7q1Yso5at5BBSV1GY2hl5KhcwJVVpohfzpxSmYFeyJli16FUoYVGYWdBR11AQltXq4pLe3M/PFhPjnxdw5ZRloBKdXBNg3dLenJh058Us5rLAAAEsUlEQVR4nO3d63aqOhQFYEyCJisocvOC7bZb7eX9n/AAosRL1UB320Pm969iHTrHSgyYBM8DAAAAAAAAAAAAAAAAAAAAAPhH6Mue1H/hLL2bBKWz8Dvey29H0Z+JvPckOf4TobYK4YCv2e2nyLUefM+b+e1oHvPhzbKhYRzPUVgVGajxzYYoxzq421JdQQM9O4RBRGyPDrUkZ3qAujooGmKcF3EQk2G+Xa92m02wWmd5KFn5aI5GaJK7oiHKMAsSzpVSoqSU5kmwDaVM9AKN0ECJCkZcCX9wwheajwKVoK4MjIKilgZXFQcCujO0cAixqfokqTovNWUororME+3fyqpojjrJ0W155cAgvhNVFVc8Q1rkvej7UZX0CzneFClM6t7KP/8mPNbU4YBIQqfTovCpzkpPgsnVEjMOOJ4WjeuseCaZzPhlVicHxMThsORI1Snsyt5bbi4GECI4OaBGzvbyLDqUktqWJUOZOg/r/ADPXB2epsdOSkVlBsXY9CKsswO+dvTqstHq/LEsL80kF1+IfsJOD4iNkw2RhrHRN73O0/nkyjmPmJwdiO//utFDbGdm42t+/Zzn/IBYONlrXXRQD/GVg5VFywdPc87ppXtpscXNqzKfUyv32qGcPHCt4Rr/1b3vQ2rXZRVh+e5VVnrlRPAx3L1x6fAvb+lv+tPv/duFw9bcq6zyp+eWfvqdw69TzmI41gVr7erL9Qx5UTBaLOvPl76NWnrbd/DElotRkPWzVcqt0kIInuTV9bxhLFp6riZzUf7Eiz+0WvZw2EXb5/2Q3a9mrtGw/Tir/v/65Z57eK4Y8sPpjV/OXOsaVnM90Nc//dG+HJs1pzd8Tl3DomXz72rat9KS7815s5qxrmGxVZO9eOtbryXHTVgi6B6W8auZf39m+P/MV4cVICyEVUFYFhCWBYRlAWFZQFgWEJYFhGUBYVlAWBYQlgWEZQFhWUBYFhCWBYRlAWFZQFgWEJYFhGUBYVlAWBYQlgWEZQFhWTDXCIhd97CMVVL9W0VgTk4op710nUVjrOMUm75NDKFtE06cdp6fZS5W5P2bzSaPKyyrDZ66TmaTu0Npid61wkKa7D8efylbTdewPHrfr9lUSR/XEJC30Fxzf1oVQuewPLYWxcvpRU+3e2XexzKvp7F3D8tjlC8/vL517o1mLckXhGW+XL99SViuQFgWEJYFhGUBYdnosEbavWW/TLXdqkD0d2j1GbZruVeBcnEzmrTd9iq+6uO54D30EbfYYEXw3LnuvcSGL7GqnGz5pI5OtozaPxS/ufdVuEdymE0L0ZNxyXk1PVoZl46fovKRLJWOZuXVezswafReaisP2zdIc79EJRm2dCiFxpBLNXeMocgIy8ENaK57JCxXd5G8gLAsICwLCMsCwrKAsCwgLAsIywLCsoCwLCAsCwjLAk6kLUjjlju6uZOhua+37/dwElYrxmzak23Wwiascs4ulIw5j3pmhMJWx7RiV68mX2JRnZZ+Pykg9rrvtfxnZ+8gc4VcDsrbi/LzffFpwXXx8GCOHstAbLleR+FF/bAwW6/nvd3nti2i65EQw88UAAAAAAAAAAAAAAAAAAAAAPCP/QdnyVaExa0kYgAAAABJRU5ErkJggg==',
    d: 'Learn to create native android applications.',
    l:'Courses/Android-Development'

  },   {
   
    t: 'Learn Python & Django.',
    i: 'https://miro.medium.com/max/1200/1*slHeZngyeUr7ypEz7MNL5w.png',
    d: 'Python Django Tutorials',
     l:'Courses/Python-Django'

  },   {
   
    t: 'Python GUI Tkinter.',
    i: 'https://d1zx6djv3kb1v7.cloudfront.net/wp-content/media/2020/08/Building-Desktop-ApplicationGUI-Using-Python-and-Tkinter.jpg',
    d: 'Python GUI Tkinter Tutorials',
     l:'Courses/Python-GUI-Tkinter'

  },   {
   
    t: 'Game Development with python.',
    i: 'https://dg53gp9bd7dcq.cloudfront.net/files/2750/icon/1423556780_720_20.jpg',
    d: 'Python Game Development Using Pygame',
     l:'Courses/Python-Game-Development'

  },   {
   
    t: 'Machine Learning with Python',
    i: 'https://tutoraj.com/wp-content/uploads/2021/04/20190903-MachineLearning.jpg',
    d: 'Machine Learning Tutorials For Beginners Using Python',
     l:'Courses/Machine-Learning'

  },   {
   
    t: 'Basic Python Programs.',
    i: 'https://www.maxupskill.com/media/course/python.jpg',
    d: 'Basic Python Programs With Code',
     l:'Courses/Basic-Python-Programs'

  },   {
   
    t: 'Web Development Using Flask and Python.',
    i: 'https://tutsnode.com/wp-content/uploads/2021/05/Learn-Flask-A-web-Development-Framework-of-Python.jpg',
    d: 'Web Development Using Flask and Python',
     l:'Courses/Web-Development-Using-Flask-and-Python'

  },  














];
