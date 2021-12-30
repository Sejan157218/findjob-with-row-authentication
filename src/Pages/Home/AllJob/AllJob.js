import React from 'react';
import JobPOst from '../JobPost/JobPOst';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



const AllJob = ({handleClose,open,setlLoadData,jobs}) => {
    const handlerToDelete = (id)=>{
        axios
      .delete(`http://localhost:9000/jobpost?id=${id}`)
      .then(function (response) {
        if(response.data){
            setlLoadData(true)
            alert("Delete Successfully!")
            setlLoadData(false)
        }
      });
    }
    return (
        <div>
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>POST NAME</StyledTableCell>
            <StyledTableCell align="right">SHIFT</StyledTableCell>
            <StyledTableCell align="right">VACANCIES</StyledTableCell>
            <StyledTableCell align="right">Department</StyledTableCell>
            <StyledTableCell align="right">ACTION</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((job) => (
            <StyledTableRow key={job._id}>
              <StyledTableCell component="th" scope="row">
                {job.jobtitle}
              </StyledTableCell>
              <StyledTableCell align="right">{job.shift}</StyledTableCell>
              <StyledTableCell align="right">{job.vacancy}</StyledTableCell>
              <StyledTableCell align="right">{job.department}</StyledTableCell>
              <StyledTableCell align="right"><button onClick={()=>handlerToDelete(job._id)}><i class="fas fa-trash"></i></button> 
              <button> <Link to={`/${job._id}`}><i class="fas fa-eye"></i></Link></button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
             <JobPOst open={open} handleClose={handleClose} setlLoadData={setlLoadData}></JobPOst>
        </div>
    );
};

export default AllJob;