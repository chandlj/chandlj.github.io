import React from 'react';

import {
  Paper, Grid, Typography, IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import style from './style';

const useStyles = makeStyles(style);

export default function Contact() {
  const classes = useStyles();

  return (
    <Grid container direction="row">
      <Paper className={classes.contactBackground} square>
        <Grid
          container
          direction="column"
          style={{
            width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center',
          }}
        >
          <Typography variant="h3" style={{ color: '#fff', paddingBottom: 50 }}>
            CONTACT ME
          </Typography>
          <Grid direction="row" container spacing={8}>
            <Grid item style={{ marginLeft: 'auto' }}>
              <IconButton size="large" color="white" href="https://github.com/chandlj">
                <GitHubIcon fontSize="large" style={{ color: '#fff' }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton size="large" href="https://www.linkedin.com/in/joseph-a-chandler/">
                <LinkedInIcon fontSize="large" style={{ color: '#fff' }} />
              </IconButton>
            </Grid>
            <Grid item style={{ marginRight: 'auto' }}>
              <IconButton size="large" href="mailto:jchand@mit.edu">
                <EmailIcon fontSize="large" style={{ color: '#fff' }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
