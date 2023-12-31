import { reqGetBootcamp, reqGetProgName } from "@/pages/redux/bootcampSchema/action/actionReducer";
import {
  Avatar,
  AvatarGroup,
  Button,
  Divider,
  Menu,
  MenuItem,
  MenuProps,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  alpha,
  styled,
} from "@mui/material";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GradingRounded,
  DeleteOutlineRounded,
  Edit,
  MoreVertRounded,
  PlayArrowOutlined,
  DoDisturbOnOutlined,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import CloseBatch from "./closeBatch";
import DeleteBatch from "./deleteBatch";
import RunningBatch from "./runningBatch";
import { useNavigate } from "react-router-dom";
import Link from "next/link";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
      "&:hover": {
        background: theme.palette.grey[300],
      },
    },
  },
}));

const Bootcamp = () => {
  let { bootcamp, message, refresh, status } = useSelector(
    (state: any) => state.bootcampReducer
  );

  // console.log(bootcamp)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [closeBatch, setCloseBatch]:any = useState(false);
  const [deleteBatch, setDeleteBatch]:any = useState(false)
  const [runningBatch, setRunningBatch]:any = useState(false)

  const [data, setData] = useState('');
  const [selected, setSelected] = useState(0);
  const columns = [
    { name: "No" },
    { name: "Batch" },
    { name: "Technology" },
    { name: "Members " },
    { name: "Periode" },
    { name: "Trainer" },
    { name: "Status" },
    { name: "Aksi" },
  ];
  const router = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>, data:any) => {
    setSelected(data)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleCloseBatch = () => {
    setCloseBatch(true)
    setAnchorEl(null);
  };

  const handleDeleteBatch = () => {
    setCloseBatch(true)
    setAnchorEl(null);
  };

  const handleRunningBatch = () => {
    setRunningBatch(true)
    setAnchorEl(null);
  };

  // const navigate = useNavigate()
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reqGetBootcamp());
  }, [refresh]);

  return (
    <>
      
      <Paper sx={{ width: "100%", overflow: "hidden" }} className="mt-20">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {(columns || []).map((col) => (
                  <>
                    <TableCell className="bg-gray-200 text-center justify-center items-center">
                      {col.name}
                    </TableCell>
                  </>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {(bootcamp || []).map((data: any, i: number) => (
                <TableRow key={i}>
                  <TableCell className=" text-center">{i + 1}</TableCell>
                  <TableCell className=" text-center">
                    {data.batch_name}
                  </TableCell>
                  <TableCell className=" text-center">
                    {data.technology}
                  </TableCell>
                  <TableCell className=" text-center">
                    {/* <AvatarGroup total={data.members.length}>
                      {data.members
                        .slice(0, 4)
                        .map((members: any, index: any) => (
                          <Avatar
                            key={index}
                            alt={members.trainee_id}
                            // src={members.user_photo}
                            src={`https://i.pravatar.cc/300/img=${index + 1}`}
                            style={{ width: "30px", height: "30px" }}
                          />
                        ))}
                    </AvatarGroup> */}
                  </TableCell>
                  <TableCell className=" text-center">
                    <div>
                      {format(new Date(data.batch_start_date), "dd MMMM yyyy")}
                    </div>
                    <div>
                      {format(new Date(data.batch_end_date), "dd MMMM yyyy")}
                    </div>
                  </TableCell>
                  <TableCell className=" text-center">{data.trainer}</TableCell>
                  <TableCell className=" text-center">
                    {data.batch_status}
                  </TableCell>
                  <TableCell className=" text-center">
                    <button
                      id="demo-customized-button"
                      aria-controls={open ? "demo-customized-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={(e) => handleClick(e, data)}
                    >
                      <MoreVertRounded />
                    </button>
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        "aria-labelledby": "demo-customized-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                    >
                      <MenuItem
                        // onClick={() =>
                        //   router.push(`./batch/edit/${data.batch_id}`)
                        // }
                        // onClick={() =>
                        //   router.push({
                        //     pathname: './batch/edit',
                        //     query: {batch_id:data.batch_id}
                        //   })
                        // }

                        onClick={() => router.push('./curriculum/edit')}
                        disableRipple
                      >
                        <Edit />
                        Edit
                      </MenuItem>
                      {/* <Link href={`/app/batch/edit/${data.batch_id}`}>edit</Link> */}
                      
                      <MenuItem 
                      onClick={handleCloseBatch}
                      disableRipple>
                        <DoDisturbOnOutlined />
                        Closed Batch
                      </MenuItem>
                      <MenuItem onClick={handleDeleteBatch} disableRipple>
                        <DeleteOutlineRounded />
                        Delete Batch
                      </MenuItem>
                      <MenuItem onClick={handleRunningBatch} disableRipple>
                        <PlayArrowOutlined />
                        Set To Running
                      </MenuItem>
                      <MenuItem onClick={() => router.push({
                        pathname: `./batch/evaluation/${data.batch_id}`
                      })} disableRipple>
                        <GradingRounded />
                        Evaluation
                      </MenuItem>
                    </StyledMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Paper>
      <CloseBatch
            open={closeBatch}
            handleClose={() => setCloseBatch(false)}
            data={selected}
          />
      <DeleteBatch
            open={deleteBatch}
            handleClose={() => setDeleteBatch(false)}
            data={selected}
          />
      <RunningBatch
            open={runningBatch}
            handleClose={() => setRunningBatch(false)}
            data={selected}
          />
    </>
  );
};

export default Bootcamp;
