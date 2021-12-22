const style = (theme) => ({
  backgroundContainer: {
    width: '100vw',
    height: '100vh',
  },
  background: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    overflow: 'visible',
    boxSizing: 'border-box',
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
