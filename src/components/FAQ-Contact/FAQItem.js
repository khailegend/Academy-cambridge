import {useState} from 'react';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

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
          <Box sx={{minWidth: 25}}>
            <Image
              src="/images/show-more-icon.png"
              width={25}
              height={25}
              alt="show more icon"
            />
          </Box>

        ) : (
          <Box sx={{minWidth: 25}}>
            <Image
              src="/images/show-less-icon.png"
              width={25}
              height={25}
              alt="show less icon"
            />
          </Box>
        )}
        aria-controls={`faq-${props.id}bh-content`}
        id={`faq-${props.id}bh-header`}
        className="bg-transparent border-none"
      >
        <Typography
          className="text-left font-bold text-sm md:text-lg"
          variant="body1"
          sx={{maxWidth: '95%'}}
        >
          {props.question}
        </Typography>
      </AccordionSummary>

      <AccordionDetails
        className="font-bold text-left bg-transparent border-none"
      >
        <Typography
          sx={{ whiteSpace: "pre-wrap" }}
          className="text-left text-black text-sm md:text-lg"
        >
          {props.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

