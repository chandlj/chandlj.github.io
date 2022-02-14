import computerPhoto from 'assets/computer_photo.jpg';

const style = (theme) => ({
  backgroundContainer: {
    width: '100vw',
    height: '90vh',
    marginBottom: '50px',
    '@media (max-width: 950px)': {
      height: '40vh',
    },
    '@media (max-width: 600px)': {
      height: '30vh',
    },
    '@media (max-width: 400px)': {
      height: '29vh',
    },
  },
  background: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    overflow: 'hidden',
    boxSizing: 'border-box',
    background: `url(${computerPhoto})`,
    backgroundSize: '100vw',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover',
    objectPosition: '100% 0',
    opacity: 0.8,
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
    '@media (max-width: 400px)': {
      height: '30px',
      fontSize: 15,
    },
  },
});

export default style;
