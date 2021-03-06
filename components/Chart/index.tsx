import React from 'react';
import useStyle from './style';
import GoogleChart from 'react-google-charts';
import {Button, Typography} from '@material-ui/core';
import axios from 'axios';

const Chart = (): JSX.Element => {
  const style = useStyle();
  const [pente, setPente] = React.useState(0);
  const [mot, setMot] = React.useState('');
  const [max, setMax] = React.useState(0);
  const [data, setData] = React.useState([
    ['Date', 'Value'],
    [new Date(2014, 0), 0],
    [new Date(2014, 1), 0],
    [new Date(2014, 2), 0],
    [new Date(2014, 3), 0],
    [new Date(2014, 4), 0],
    [new Date(2014, 5), 0],
    [new Date(2014, 6), 0],
    [new Date(2014, 7), 0],
    [new Date(2014, 8), 0],
    [new Date(2014, 9), 0],
    [new Date(2014, 10), 0],
    [new Date(2014, 11), 0],
  ]);

  const tendance = (array: any[]) => {
    const largeur = array.length;
    const deltaY = array[largeur-1][1] - array[1][1];
    const pente = deltaY / (largeur);
    setPente(pente);
    const max = Math.max(array[1][1]);
    console.log(array[1][1]);
    setMax(max);
    if (pente > 0 || pente < 5) {
      const mot = 'Pas de problème de sucre';
      setMot(mot);
    }
    else if (pente > 0 || pente > 5) {
      const mot = 'Attention trop de sucre';
      setMot(mot);
    }
    else if (pente < 0 || pente > -5) {
      const mot = 'Attention remettre du sucre';
      setMot(mot);
    }
  };

  const callApi = () => {
    axios('api/pull?range=30')
        .then((res: any) => {
          const tmp: any = [
            ['date', 'Value'],
          ];
          res.data.data.forEach((point: any) => {
            const d = new Date(point.x);
            tmp.push([
              d.getMinutes(),
              point.y,
            ]);
          });
          setData(tmp);
          console.log(data);
          tendance(tmp);
        })
        .catch((error: any) => {
          console.error(error);
        });
  };

  return (
    <>
      <div className={style.card}>
        <p>
          Cette interface est dôté d&#39;un graphique permettant de visualiser le taux de glucose
          contenu dans le liquide interstitiel.
          {'\n'}
        </p>
        <p>Clickez sur le bouton de mise à jour des données pour observer ces valeurs</p>
        <div className={style.button}>
          <Button onClick={callApi} color="primary" variant="outlined">
          Mise à jour des données
          </Button>
        </div>
        <GoogleChart
          width={'100%'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={data}
          options={{
            // Use the same chart area width as the control for axis alignment.
            backgroundColor: '#30363d',
            chartArea: {
              'width': '100%',
              'left': 45,
              'top': 40,
              'right': 45,
              'bottom': 50,
              'backgroundColor': {
                'fill': '#b0dfff',
                'fillOpacity': 0.5},
              'height': 500,
            },
            hAxis: {slantedText: false, title: 'time', format: '', textStyle: {color: 'white'},
              titleTextStyle: {color: 'white'}},
            vAxis: {viewWindow: {min: 0, max: 100}, title: 'mMol', textStyle: {color: 'white'},
              titleTextStyle: {color: 'white'}},
            legend: {position: 'none'},
          }}
          rootProps={{'data-testid': '8'}}
          chartPackages={['corechart', 'controls']}
          controls={[
            {
              controlType: 'ChartRangeFilter',
              options: {
                filterColumnIndex: 0,
                ui: {
                  chartType: 'LineChart',
                  chartOptions: {
                    chartArea: {
                      'width': '100%',
                      'left': 45,
                      'top': 40,
                      'right': 45,
                      'bottom': 50,
                      'backgroundColor': {
                        'fill': '#b0dfff',
                        'fillOpacity': 0.5},
                      'height': 500,
                    },
                    hAxis: {baselineColor: 'red', title: 'time', format: '',
                      textStyle: {color: 'white'},
                      titleTextStyle: {color: 'white'}},
                    backgroundColor: {'fill': '#30363d',
                      'fillOpacity': 0.1,
                    },
                  },
                },
              },
              controlPosition: 'bottom',
              controlWrapperParams: {
                state: {
                  range: {start: 1, end: 15},
                },
              },
            },
          ]}
        />
        <Typography variant="h6">
          Pente des {data.length} dernières prises de mesure: {pente.toPrecision(2)}
          {'\n'}
        </Typography>
        <Typography>
          {mot}
        </Typography>
        <Typography>
          Concentration maximum des {data.length} mesures: {max} mMol
        </Typography>
      </div>
    </>
  );
};

export default Chart;
