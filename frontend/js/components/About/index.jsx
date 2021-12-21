import React from 'react';

import {
  Grid, Box, Paper, Typography, Avatar, Container, Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeIcon from '@mui/icons-material/Code';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import DataArrayIcon from '@mui/icons-material/DataArray';

import Portrait from 'assets/portrait.jpg';

import style from './style';

const useStyles = makeStyles(style);

export default function About() {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid container direction="row">
          <Paper className={classes.aboutText} square>
            <Typography
              variant="h4"
              className={classes.header}
            >
              About Me
            </Typography>
            <Box style={{ display: 'flex' }}>
              <Avatar src={Portrait} alt="portrait" style={{ marginLeft: 'auto', width: 150, height: 150 }} />
              <Box style={{ width: 600, marginLeft: 20, marginRight: 'auto' }}>
                <Typography
                  variant="body1"
                  style={{
                    color: '#000', paddingTop: 40,
                  }}
                >
                  I am a second-year student at Massachusetts Institute of Technology
                  studying Computer Science and Engineering. I have experience building full-stack
                  applications using Node.js and React. I also have experience using Python for
                  building data pipelines and machine learning.
                </Typography>
              </Box>
            </Box>
            <Container style={{ display: 'flex', paddingTop: 50 }}>
              <Box className={classes.skillsBox}>
                <Typography variant="h3" style={{ paddingBottom: 20, color: '#000' }}>
                  PROFILE
                </Typography>
                <Box className={classes.dataBox}>
                  <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                    EDUCATION
                  </Typography>
                  <Typography>
                    Massachusetts Institute of Technology
                  </Typography>
                  <Typography style={{ paddingBottom: 10 }}>
                    BSc. Computer Science and Engineering
                  </Typography>
                  <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                    RELEVANT COURSEWORK
                  </Typography>
                  <Typography style={{ paddingBottom: 10 }}>
                    Introduction to Algorithms, Probability and Random Variables, Linear Algebra,
                    Fundamentals of Programming
                  </Typography>
                  <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                    BIRTHDAY
                  </Typography>
                  <Typography style={{ paddingBottom: 10 }}>
                    May 6, 2001
                  </Typography>
                  <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                    EMAIL
                  </Typography>
                  <Typography>
                    jchand@mit.edu
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.skillsBox}>
                <Typography variant="h3" style={{ paddingBottom: 20, color: '#000' }}>
                  SKILLS
                </Typography>
                <Box className={classes.dataBox}>
                  <Grid container direction="row">
                    <CodeIcon />
                    <Typography className={classes.boxHeaders}>
                      Backend
                    </Typography>
                  </Grid>
                  <Container style={{ display: 'flex', paddingLeft: 36 }}>
                    <Grid container direction="column" spacing={1}>
                      <Grid item><Typography>- Python</Typography></Grid>
                      <Grid item><Typography>- NodeJS</Typography></Grid>
                    </Grid>
                    <Grid container direction="column" spacing={1}>
                      <Grid item><Typography>- Restify</Typography></Grid>
                      <Grid item><Typography>- Flask</Typography></Grid>
                    </Grid>
                  </Container>
                </Box>
                <Box className={classes.dataBox}>
                  <Grid container direction="row">
                    <DesktopWindowsIcon />
                    <Typography className={classes.boxHeaders}>
                      Frontend
                    </Typography>
                  </Grid>
                  <Container style={{ display: 'flex', paddingLeft: 36 }}>
                    <Grid container direction="column" spacing={1}>
                      <Grid item><Typography>- React</Typography></Grid>
                      <Grid item><Typography>- HTML</Typography></Grid>
                    </Grid>
                    <Grid container direction="column" spacing={1}>
                      <Grid item><Typography>- CSS</Typography></Grid>
                      <Grid item><Typography>- Webpack</Typography></Grid>
                    </Grid>
                  </Container>
                </Box>
                <Box className={classes.dataBox}>
                  <Grid container direction="row">
                    <DataArrayIcon />
                    <Typography className={classes.boxHeaders}>
                      Data Science
                    </Typography>
                  </Grid>
                  <Container style={{ display: 'flex', paddingLeft: 36 }}>
                    <Grid container direction="column" spacing={1}>
                      <Grid item><Typography>- PyTorch</Typography></Grid>
                      <Grid item><Typography>- SciKit Learn</Typography></Grid>
                    </Grid>
                    <Grid container direction="column" spacing={1}>
                      <Grid item><Typography>- Pandas</Typography></Grid>
                      <Grid item><Typography>- NumPy</Typography></Grid>
                    </Grid>
                  </Container>
                </Box>
              </Box>
            </Container>
          </Paper>
        </Grid>
        <Divider />
      </Grid>
    </>
  );
}
