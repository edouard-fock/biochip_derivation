import {makeStyles, createStyles} from '@material-ui/core/styles';

const useStyle = makeStyles(() =>
  createStyles({
    'card': {
      'text-align': 'center',
      'display': 'block',
      'margin': 'auto',
      'background': '#30363d',
      'padding': '5%',
      'color': 'white',
    },
    'cardMedia': {
      'paddingTop': '56.25%',
    },
    'cardContent': {
      'flexGrow': 1,
      'maxHeight': '100px',
    },
    'button': {
      'padding': '15px',
      'background': '#30363d',
    },
  }),
);

export default useStyle;
