import {makeStyles, createStyles} from '@material-ui/core/styles';

const useStyle = makeStyles(() =>
  createStyles({
    'card': {
      'height': '100%',
      'display': 'flex',
      'flexDirection': 'column',
    },
    'cardMedia': {
      'paddingTop': '56.25%',
    },
    'cardContent': {
      'flexGrow': 1,
      'maxHeight': '100px',
    },
  }),
);

export default useStyle;
