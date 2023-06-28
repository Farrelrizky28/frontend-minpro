import React from 'react';
import { Fragment } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Slide } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { reqDeleteCurri } from '@/pages/redux/curriculumSchema/action/actionReducer';

const DeleteCurr = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const handleRegistration = async (data: any) => {
    dispatch(reqDeleteCurri(data));
    props.closeModal();
  };

  return (
    <div>
      <Dialog open={props.show} TransitionComponent={Slide} onClose={() => null}>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(handleRegistration)}>
            <p className="pb-10 text-center text-md font-medium leading-6 text-gray-900">
              Apakah anda yakin ingin menghapus?
            </p>
            <input
              type="hidden"
              defaultValue={props.data.prog_entity_id}
              {...register('id')}
              className="px-2 py-2 border w-full rounded-lg text-gray-800"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeModal}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit(handleRegistration)}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteCurr;
