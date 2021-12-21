import React from 'react';
import {
  Paper, Typography, Grid, Box,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

import style from './style';

const useStyles = makeStyles(style);

export default function Work() {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="row" style={{ display: 'flex' }}>
        <Paper className={classes.workBackground} square elevation={0}>
          <Typography variant="h1" style={{ fontWeight: 'bold', color: '#fff' }}>WORK</Typography>
        </Paper>
        <Paper className={classes.workBackgroundText} square elevation={0}>
          <Box style={{ marginBottom: 20, marginTop: 40 }}>
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>
              MIT ENGINEERING SYSTEMS LABORATORY | Present
            </Typography>
            <Typography variant="h5" style={{ fontStyle: 'italic' }}>
              Undergraduate Researcher
            </Typography>
            <Typography>
              Researching applications of Dynamic Graph Neural Networks (DGNNs) to real-world
              problems and datasets. Using PyTorch and SciKit Learn to make predictions on various
              datasets like New York City Traffic Collisions.
            </Typography>
          </Box>
          <Box style={{ marginBottom: 20 }}>
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>
              Combined Curiosity | June 2020 - August 2021
            </Typography>
            <Typography variant="h5" style={{ fontStyle: 'italic' }}>
              Software Engineering Intern
            </Typography>
            <Typography>
              Developed a full-stack application using JavaScript and React. Designed to help route
              traffic from online ads to various landing pages, the app increased team productivity
              by over 20% and is currently in a quality assurance environment. Additionally built
              several data pipelines to the data warehouse and used SQL queries to visualize company
              data. The data visualizations helped drive company focus on profitable segments and
              drove revenue by over $100,000.
            </Typography>
          </Box>
          <Box style={{ marginBottom: 20 }}>
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>
              Peerview Data
            </Typography>
            <Typography variant="h5" style={{ fontStyle: 'italic' }}>
              Robotic Process Automation (RPA) Intern | June 2021 - August 2021
            </Typography>
            <Typography>
              Designed a tool for ingesting financial data to power data visualization and increase
              productivity by automating the upload process. Additionally assisted in redesigning
              the app’s data processing and storage flow which dramatically increased live app
              performance by over 85%.
            </Typography>
          </Box>
          <Box style={{ marginBottom: 20 }}>
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>
              analytic.li | June 2019 - August 2019
            </Typography>
            <Typography variant="h5" style={{ fontStyle: 'italic' }}>
              RPA Intern
            </Typography>
            <Typography>
              Developed an automation program using Robotic Process Automation (RPA) to create
              reports from a web page for the company’s analytics software which helped customers
              visualize their payroll and employee performance metrics and drive overall revenue.
              Authored a 30-page documentation guiding the use of RPA software for employees and
              interns to use for automation.
              projects.
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  );
}
