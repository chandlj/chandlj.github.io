import React from 'react';

import {
  Grid, Paper, Typography, Button,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

import Resume from 'assets/resume.pdf';
import ComputerPhoto from 'assets/computer_photo.jpg';

import Header from '../Header';
import About from '../About';
import Contact from '../Contact';
import Work from '../Work';

import './index.scss';

export default function Home() {
  return (
    <>
      <Grid container direction="column" className="backgroundContainer">
        <Grid item xs={12}>
          <Header />
          <div
            className="background"
            style={{ backgroundImage: `url(${ComputerPhoto})` }}
          >
            <Typography variant="h1" className="titleName">
              JOSEPH CHANDLER
            </Typography>
            <Typography variant="h4" className="subTitle">
              <span>Software Engineer</span>
              <span> | </span>
              <span>Data Scientist</span>
            </Typography>
            <Button variant="contained" className="resumeButton" href={Resume}>
              RESUME
              <DownloadIcon />
            </Button>
          </div>
        </Grid>
      </Grid>
      {/* <section id="about">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section> */}
    </>
  );
}
