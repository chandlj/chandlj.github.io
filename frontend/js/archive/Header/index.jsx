import React, { useState, useEffect } from 'react';
import {
  Link, Toolbar, Divider, Box, Grid, Typography,
} from '@mui/material';

const sections = [
  { title: 'ABOUT', url: '#about' },
  { title: 'WORK', url: '#work' },
  { title: 'CONTACT', url: '#contact' },
];

export default function Header() {
  const [, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <Grid
      justifyContent="center"
      alignItems="stretch"
      container
      direction="column"
      className="navContainer"
    >
      <Grid item xs={12}>
        <Toolbar
          component="nav"
          variant="regular"
          className="navToolbar"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
          {sections.map((section, i) => (
            <Box key={i} sx={{ px: 2 }}>
              <Link
                color="inherit"
                noWrap
                key={section.title}
                href={section.url}
              >
                <Typography variant="h5">
                  {section.title}
                </Typography>
              </Link>
            </Box>
          ))}
        </Toolbar>
        <Divider />
      </Grid>
    </Grid>
  );
}
