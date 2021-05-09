import {makeStyles, createStyles} from '@material-ui/core/styles';

const useStyle = makeStyles(() =>
  createStyles({
    'card': {
      'color': 'red',
      'text-align': 'center',
      'display': 'block',
      'margin': 'auto',
      'width': '50%',
      'height': '50%',
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
