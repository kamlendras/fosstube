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
          <Typography>What is the goal of the project?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Nowdays, platforms have an extremely invasive privacy policy which relies on using user data in unethical ways. You give them a lot of data - ranging from ideas, music taste, content, political opinions, and much more than you think.
By using codnap, you can freely watch and listen to content without the fear of prying eyes watching everything you are doing.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography>Which Licence do FossTube use ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            AGPL-3.0
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography>How FossTube runs ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Through your contributions and donations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography>How can I contribute to FossTube ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Whether you have ideas, translations, design changes, code cleaning, or real heavy code changes, help is always welcome. The more is done the better it gets!
If you&apos;re interested in contributing, you can browse the issues or create a new one to discuss your feature idea. Every contribution is very welcome.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
     
      


    </div>
  );
}