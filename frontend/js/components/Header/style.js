const styles = (theme) => ({
  titleToolbar: {
    borderColor: theme.palette.common.black,
    borderBottom: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navToolbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navContainerSticky: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    backgroundColor: '#fff',
    maxHeight: '10vh',
    transition: 'all .7s ease-in',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    maxHeight: '10vh',
  },
});

export default styles;
