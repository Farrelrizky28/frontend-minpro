import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, TextField, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { ReactElement, Ref, forwardRef } from "react";
import { useForm } from "react-hook-form";
import SubSectionDialog from "./subsectionDialog";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type FormValues = {
  section_name: string;
};

type SectionDialogProps = {
  show: boolean;
  handleClose: () => void;
  handleSaveSection: (sectionName: string) => void;
  // handleSaveSubSection: (subSection: { section_name: string }) => void; // Update the type here
};


const SectionDialog = ({ show, handleClose, handleSaveSection }: SectionDialogProps) => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [subSectionOpen, setSubSectionOpen] = useState(false);

  const handleSectionName = (data: FormValues) => {
    handleSaveSection(data.section_name);
    handleClose();
    reset();
  };

  const handleSubSectionOpen = () => {
    setSubSectionOpen(true);
  };

  const handleSubSectionClose = () => {
    setSubSectionOpen(false);
  };

  const handleSaveSubSection = (subSection: FormValues) => {
    // Implement your logic to save the subSection here
    console.log(subSection);
  };

  return (
    <div className="mt-32">
      <Dialog
        open={show}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Section"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField
              id="outlined-basic"
              label="Section Name"
              className="mt-5"
              variant="outlined"
              {...register("section_name")}
              name="section_name"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={handleSubmit(handleSectionName)}>Save</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <Accordion expanded={subSectionOpen} onChange={handleSubSectionOpen}>
        <AccordionSummary>
          Sub Section
        </AccordionSummary>
        <AccordionDetails>
          <SubSectionDialog
            show={subSectionOpen}
            handleClose={handleSubSectionClose}
            handleSaveSubSection={handleSaveSubSection}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SectionDialog;
