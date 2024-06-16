import React from 'react'
import Card from './card'
function CardGrid() {
    return(
        <>
        {
          messages.map(({ i,t,tt}) => (
  
          <> 
           
          <div className='aboutgrid'>

              <Card i={i} t={t} tt={tt}
              />
</div>
          
          </>

        ))
      }

    </>
    )

}
export default CardGrid

const messages = [
    {
     
   
      i: 'https://abnresource.com/wp-content/uploads/2021/05/We-are-carbon-positive-LinkedIn.png',
      t: 'We are carbon neutral',
      tt: 'We are the worlds 1st e-company to achive the title of 100% carbon neutral.',
  
    },
  
  
    {
        i: 'https://assets.codepen.io/14089/internal/screenshots/pens/ZEBYEOm.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1613843076&width=960',
        t: 'Right to Code',
        tt: 'Through our Nap Learning program we are helping millions to Learn to code.',
  
    },
  
    {
        i: 'https://media.istockphoto.com/photos/variety-of-raw-black-angus-prime-meat-steaks-picture-id923692030?k=20&m=923692030&s=612x612&w=0&h=k-b2wtmHwBbpmSM74dN0gZzRD9oEwBUYiXdlWYD6mHY=',
        t: 'No Meat',
        tt: 'Since meat contribute in 15% in Global carbon footprint we are no longer providing meat to our employees.',
  
    },
    {
        i: 'https://c1.wallpaperflare.com/preview/41/972/836/people-work-hands-business.jpg',
        t: 'We hire without degree',
        tt: 'We belive degree or any kind of certificate is not necessary to get a job.',
  
    },
    {
        i: 'https://ocdn.eu/images/pulscms/YmI7MDA_/dae186791f35a41f702b11fe648b79b4.jpg',
        t: 'Unemployment',
        tt: 'Today a large quator of worlds population suffers from Unemployment and we are commeted to solve it.',
  
    },
    {
        i: 'https://static-cse.canva.com/blob/558554/studyingtips1.4762374a.jpg',
        t: 'Get scholarship (NSAT)',
        tt: 'NSAT (NAP SCHOLARSHIP ADMISSION TEST)',
  
    },
  
  
  
   ];