import {makeStyles, createStyles} from '@material-ui/core/styles';

const useStyle = makeStyles(() =>
  createStyles({
    'card': {
      'text-align': 'center',
      'display': 'block',
      'margin': 'auto',
      'width': '100%',
      'height': '100%',
      'background': 'linear-gradient(90deg, #b0dfff 15%, #b0d7e8 90%)',
      'padding': '50px',
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
      'background': 'linear-gradient(30deg, #b0dfff 15%, #b0d7e8 90%)',
    },
  }),
);

export default useStyle;
