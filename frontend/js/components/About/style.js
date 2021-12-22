const style = (theme) => ({
  header: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    paddingTop: 50,
    textAlign: 'center',
  },
  aboutText: {
    width: '100%',
    minHeight: '100vh',
    height: 'fit-content',
    textAlign: 'center',
    padding: 10,
  },
  aboutParagraph: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
    maxWidth: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  avatar: {
    width: 150,
    height: 150,
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginRight: 'auto',
      marginTop: 20,
    },
  },
  skillsAndProfileContainer: {
    display: 'flex',
    // paddingTop: 50,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  skillsBox: {
    [theme.breakpoints.down('sm')]: {
      width: 280,
    },
    [theme.breakpoints.up('sm')]: {
      width: 500,
    },
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skillsBoxLeft: {
    [theme.breakpoints.down('sm')]: {
      marginRight: 'auto',
    },
    marginLeft: 'auto',
  },
  skillsBoxRight: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'auto',
    },
    marginRight: 'auto',
  },
  dataBox: {
    width: '75%',
    borderRadius: 5,
    border: '1px solid',
    textAlign: 'left',
    paddingBottom: 10,
    backgroundColor: theme.palette.common.white,
    marginBottom: 10,
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  boxHeaders: {
    fontWeight: 'bold',
    paddingLeft: 20,
  },
});

export default style;
