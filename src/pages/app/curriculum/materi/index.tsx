import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SubSectionDialog from '../dialog/subsectionDialog';
import SectionDialog from '../dialog/sectionDialog';

const Materi = () => {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [dialogMateri, setDialogMateri] = useState(false);
  const [dialogSubMateri, setDialogSubMateri] = useState<string | false>(false);
  const [subSections, setSubSections] = useState<{ [key: string]: string[] }>({});

  const handleChange = (panel: string) => (
    _: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded((prevExpanded) => {
      if (isExpanded) {
        return [...prevExpanded, panel];
      } else {
        return prevExpanded.filter((item) => item !== panel);
      }
    });
  };

  const handleOpenSectionDialog = () => {
    setDialogMateri(true);
  };

  const handleOpenSubSectionDialog = (panel: any) => {
    setDialogSubMateri(panel);
  };

  const handleSaveSection = (sectionName: any) => {
    setSubSections((prevSubSections) => ({
      ...prevSubSections,
      [sectionName]: [],
    }));
  };

  const handleSaveSubSection = (subSection: any, panel: any) => {
    setSubSections((prevSubSections) => ({
      ...prevSubSections,
      [panel]: [...prevSubSections[panel], subSection],
    }));
  };

  return (
    <div>
      {dialogMateri && (
        <SectionDialog
          show={dialogMateri}
          handleClose={() => setDialogMateri(false)}
          handleSaveSection={handleSaveSection}
        />
      )}
      {dialogSubMateri && (
        <SubSectionDialog
          show={Boolean(dialogSubMateri)}
          handleClose={() => setDialogSubMateri(false)}
          handleSaveSubSection={(subSection: any) =>
            handleSaveSubSection(subSection, dialogSubMateri)
          }
        />
      )}

      <div className="flex">
        <h1>Materi (Add Section & Subsection Materi)</h1>
        <div className="ml-auto mr-4">
          <button onClick={handleOpenSectionDialog} className="ml-auto">
            <AddIcon />
          </button>
        </div>
      </div>

      {/* Render sections */}
      {Object.keys(subSections).map((panel, index) => (
        <Accordion
          key={index}
          expanded={expanded.includes(panel)}
          onChange={handleChange(panel)}
          className="mt-5"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${panel}-content`}
            id={`${panel}-header`}
            className="bg-gray-300"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>{panel}</Typography>
            <Typography sx={{ color: 'text.secondary' }} className="ml-auto mr-5">
              Duration 1 Hour
            </Typography>
            <button onClick={() => handleOpenSubSectionDialog(panel)}>
              <AddIcon />
            </button>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                {subSections[panel].map((subSection, index) => (
                  <li key={index}>{subSection}</li>
                ))}
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Materi;
