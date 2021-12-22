import React from 'react';

import {
  Grid, Paper, Typography, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DownloadIcon from '@mui/icons-material/Download';

import Resume from 'assets/resume.pdf';

import Header from '../Header';
import About from '../About';
import Contact from '../Contact';
import Work from '../Work';
import style from './style';

const useStyles = makeStyles(style);

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="column" className={classes.backgroundContainer}>
        <Grid item xs={12}>
          <Header />
          <Paper className={classes.background} square>
            <Typography variant="h1" className={classes.titleName}>
              JOSEPH CHANDLER
            </Typography>
            <Typography variant="h4" className={classes.subTitle}>
              <span>Software Engineer</span>
              <span> | </span>
              <span>Data Scientist</span>
            </Typography>
            <Button variant="contained" className={classes.resumeButton} href={Resume}>
              RESUME
              <DownloadIcon />
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
