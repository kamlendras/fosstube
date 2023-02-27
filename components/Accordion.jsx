import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../styles/Home.module.css'
export default function SimpleAccordion() {
  return (
    <div className={styles.ac}>





      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Cod Nap is Used for?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Cod Nap is The knowledge-sharing community Of Developers.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography>Is Cod Nap free?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            Yes, It is totally Free.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography>Can I earn money from Cod Nap?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can if more than 1000 people viewing your blogs.
            You will started getting monetizing as you cross 1000 views.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography>Take a Quizze?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Taking a Quizze gives you the confidence to learn more and more.<br />
            It tells how much you know about your profession<br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography>Get a Certificate?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Getting a certificate proves your commitment to upgrade your skills, gives you the credibility needed for more responsibilities, larger projects, and a higher salary.
            <br />Study for free at Codnap.com <br />
            Study at your own speed
            Test your skills with Cod Nap online quizzes<br />
            Apply for your certificate by paying an exam fee<br />
            Take your exam online, at any time, and from any location.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography>Grow your business with Ads.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Advertise with us # For business enquiries email at Codnap.com@gmail.com
          </Typography>
        </AccordionDetails>
      </Accordion>


    </div>
  );
}