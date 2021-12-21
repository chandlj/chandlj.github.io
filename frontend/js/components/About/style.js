const style = (theme) => ({
  header: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 50,
  },
  aboutText: {
    width: '100%',
    minHeight: '100vh',
    height: 'fit-content',
    textAlign: 'center',
    padding: 10,
  },
  skillsBox: {
    // backgroundColor: theme.palette.secondary.main,
    // border: `1px solid ${theme.palette.secondary.main}`,
    // borderRadius: 20,
    width: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataBox: {
    width: '75%',
    // height: 100,
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
