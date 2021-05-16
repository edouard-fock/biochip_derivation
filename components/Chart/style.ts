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
    'Button': {
      'text-align': 'center',
      'paddingTop': '5%',
    },
    'cardMedia': {
      'paddingTop': '56.25%',
    },
    'cardContent': {
      'flexGrow': 1,
      'maxHeight': '100px',
    },
    'Pente': {
      'text-align': 'center',
    },
    
  }),
);

export default useStyle;
