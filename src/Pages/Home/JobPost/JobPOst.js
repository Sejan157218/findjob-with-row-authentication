import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Alert, Button, Select } from "@mui/material";
import { useForm } from "react-hook-form";
import "./JobPost.css";
import axios from "axios";

const JobPOst = ({ open, handleClose,setlLoadData }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios.post("https://gentle-taiga-84055.herokuapp.com/jobpost", data)
    .then(function (response) {
       if(response.data.insertedId){
        handleClose();
        setlLoadData(true)
        alert("Job Post is Successful!!");
        setlLoadData(false)
       };
      });
  };
  return (
    <Modal
      style={{
        width: "50%",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2rem",
        backgroundColor: "#fff",
        padding: '1rem',

      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <h1>Create JOb</h1>

        <form className="job-form" onSubmit={handleSubmit(onSubmit)}>

            <label>
              Job Title
              <input type="text" {...register("jobtitle")} />
            </label>
<br />
            <label>
              Shift
              <select {...register("shift")}>
                <option value="Day">Day</option>
                <option value="Night">Night</option>
              </select>
            </label>
            <br />
  
            <label>
              Departments
              <select {...register("department")}>
                <option value="Web Development">Web Development</option>
                <option value="Front End Developer">Front End Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
              </select>
            </label>
            <br />
            <label>
              Level
              <select {...register("level")}>
                <option value="Entry">Entry</option>
                <option value="Middle">Middle</option>
                <option value="Expert">Expert</option>
              </select>
            </label>
            <br />
  
            <label >
            Vacancy
            <input type="number" {...register("vacancy")} />
            </label>
            <br />

            <label>
              Salary
              <input type="test" {...register("salary")} />
            </label>
            <br />
            <label>
              Filter Options
              <select {...register("filter")}>
                <option value="It">It</option>
                <option value="Technology">Technology</option>
              </select>
            </label>
            <br />
            <label>
              Job Descriptions 
              <input type="text" {...register("description")} />
              </label>
              <br />
          <input sx={{
            width: "90%",
            color: "#ffff",
            backgroundImage: "linear-gradient(to right,#18D2B5, #11CFE3)",
            padding: "6px 22px",
            m: 1,
          }}  type="submit"/>
        </form>

        
      </Box>
    </Modal>
  );
};

export default JobPOst;
