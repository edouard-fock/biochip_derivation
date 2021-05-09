import {makeStyles, createStyles} from '@material-ui/core/styles';

const useStyle = makeStyles(() =>
  createStyles({
    'card': {
      'color': 'red',
      'backgroundColor': 'black',
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
