import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import "./ViewJob.css";



const ViewJob = () => {
    const {id} = useParams();
    const [job, setJob] = useState([]);


    useEffect(()=>{
        fetch('https://gentle-taiga-84055.herokuapp.com/jobpost')
        .then(res=>res.json())
        .then(data=>setJob(data))
    },[])
    const filter = job.filter(jb=>jb._id==id);
      const jb=(filter[0]);
      console.log(jb);
    return (
        <>
       <div>
       <div className='view-job'>
        <h1>Job Title : {jb?.jobtitle}</h1>
        <h1>Shift : {jb?.shift}</h1>
        <h1>Department: {jb?.department}</h1>
        <h1>level  : {jb?.level}</h1>
        <h1>Vacancy : {jb?.vacancy}</h1>
        <h1>Salary : {jb?.salary}</h1>
        <h1>Description : </h1> <p>{jb?.jobtitle}</p>
        <Link  to="/"> <button className="sign-btn">Go To Home</button></Link>
        </div>
       </div>
        
      </>
    );
};

export default ViewJob;