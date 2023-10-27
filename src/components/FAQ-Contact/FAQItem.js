import {useState} from 'react';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQItem(props) {
  const [isActive, setActive] = useState(false);
  const handleClick = (id) => {
    setActive(!isActive);
  };

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <Accordion id={`faq-${props.id}`} className="faq py-1 my-2 md:my-5 border-none" expanded={expanded === `faq-panel${props.id}`}
               onChange={handleChange(`faq-panel${props.id}`)}>
      <AccordionSummary
        expandIcon={!expanded ? (
          <Image
            src="/images/show-more-icon.png"
            width={30}
            height={30}
            alt="show more icon"
          />
        ) : (
          <Image
            src="/images/show-less-icon.png"
            width={30}
            height={30}
            alt="show less icon"
          />
        )}
        aria-controls={`faq-${props.id}bh-content`}
        id={`faq-${props.id}bh-header`}
        className="bg-transparent border-none"
      >
        <Typography
          variant="paragraph"
          sx={{maxWidth: '80%'}}
        >
          {props.question}
        </Typography>
      </AccordionSummary>

      <AccordionDetails
        className="font-bold text-left bg-transparent border-none"
      >
        <Typography
          variant="body1"
        >
          {props.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

