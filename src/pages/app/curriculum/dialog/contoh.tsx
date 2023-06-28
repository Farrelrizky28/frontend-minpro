import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, TextField, Typography } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { ReactElement, Ref, forwardRef } from "react";
import { useForm } from "react-hook-form";

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

const SectionDialog = ({ show, handleClose, handleeAccordionData }: any) => {
  const [open, setOpen] = useState(show);

  const { register, handleSubmit } = useForm<FormValues>();

  const handleSectionName = (data: FormValues) => {
    console.log("data", data);
    handleeAccordionData(data);
    handleClose();
  };

  const handleClose1 = () => {
    setOpen(false);
    handleClose();
  };

  return (
    <div className="mt-32">
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Bagian"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField
              id="outlined-basic"
              label="Nama Bagian"
              className="mt-5"
              variant="outlined"
              {...register("section_name")}
              name="section_name"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={handleSubmit(handleSectionName)}>Simpan</Button>
          <Button onClick={handleClose}>Batal</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const AccordionComponent = ({ data }: any) => {
  return (
    <div>
      {data.map((item: any, index: number) => (
        <Accordion key={index}>
          <AccordionSummary>
            <Typography>{item.section_name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* Tampilkan detail lainnya di sini */}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
  
};

const ParentComponent = () => {
    const [accordionData, setAccordionData] = useState<FormValues[]>([]);
  
    const handleAccordionData = (data: FormValues) => {
      setAccordionData((prevData) => [...prevData, data]);
    };

  const handleClose = () => {
    // Tindakan untuk menutup dialog
  };


  return (
    <div>
      <SectionDialog show={true} handleClose={handleClose} handleAccordionData={handleAccordionData} />
      <AccordionComponent data={accordionData} />
    </div>
  );
};

export default ParentComponent;
