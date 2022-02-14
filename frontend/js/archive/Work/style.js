const style = (theme) => ({
  workBackgroundText: {
    minHeight: '100vh',
    backgroundColor: theme.palette.common.white,
    padding: 50,
  },
  workBackground: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '20vh',
      padding: '20px 0px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      height: '100vh',
      padding: '50px 0px',
      alignItems: 'center',
    },
    backgroundColor: theme.palette.secondary.dark,
    justifyContent: 'center',
    display: 'flex',
    border: '20px solid white',
  },
  container: {
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
    },
  },
});

export default style;
