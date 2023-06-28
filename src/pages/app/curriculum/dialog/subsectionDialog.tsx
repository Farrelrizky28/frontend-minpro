import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, TextField } from "@mui/material";
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
  subSectionName: string;
  duration: string;
  attachment: FileList;
};

type SubSectionDialogProps = {
    show: boolean;
    handleClose: () => void;
    handleSaveSubSection: (subSection: { section_name: any }) => void; // Update the type here
  };
  


const SubSectionDialog = ({ show, handleClose, handleSaveSubSection }: SubSectionDialogProps) => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const handleSubSection = (data: FormValues) => {
    handleSaveSubSection(data);
    handleClose();
    reset(); // Reset the form fields after saving
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
        <DialogTitle>{"Sub Section"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField
              id="subSectionName"
              label="Sub Section Name"
              className="mt-5"
              variant="outlined"
              {...register("subSectionName")}
              name="subSectionName"
            />
            <TextField
              id="duration"
              label="Duration"
              className="mt-5"
              variant="outlined"
              {...register("duration")}
              name="duration"
            />
            <input
              type="file"
              id="attachment"
              {...register("attachment")}
              name="attachment"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={handleSubmit(handleSubSection)}>Save</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SubSectionDialog;
