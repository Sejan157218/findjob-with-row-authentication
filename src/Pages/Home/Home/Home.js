import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AllJob from '../AllJob/AllJob';
import "./Home.css";



const Home = () => {
    const [open, setOpen] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [loadData, setlLoadData] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };


    useEffect(()=>{
        fetch('http://localhost:9000/jobpost')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[loadData])
    return (
        <>
        <Grid container>
        <Grid item xs={12} md={2} sx={{ borderRight: 1 }}>
       <div className=''>
       <i class="fas fa-home icon-btn"></i>
       <hr />
       <i onClick={handleOpen} class="fas fa-shopping-bag icon-btn"></i>
       <hr />
       <i class="fas fa-user-friends icon-btn"></i>
       <hr />
       <i class="fas fa-envelope icon-btn"></i>
       </div>
        </Grid>
        <Grid item xs={12} md={10}>
        <AllJob jobs={jobs} open={open} handleClose={handleClose} setlLoadData={setlLoadData}>

        </AllJob>
        </Grid>
       
      </Grid>
     
      </>
    );
};

export default Home;