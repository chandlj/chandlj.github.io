const style = (theme) => ({
  background: {
    width: '100%',
    height: '92vh',
    backgroundColor: theme.palette.primary.main,
    alignItems: 'center',
    justifyContent: 'center',
    borderPadding: 0,
    textAlign: 'center',
    padding: '200px',
  },
  titleName: {
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  subTitle: {
    color: theme.palette.common.white,
    paddingBottom: 20,
  },
  resumeButton: {
    backgroundColor: theme.palette.common.white,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 15,
    width: 150,
  },
});

export default style;
