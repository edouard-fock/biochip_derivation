import React from 'react';
import useStyle from './style';
import GoogleChart from 'react-google-charts';
import {Button, Typography} from '@material-ui/core';
import axios from 'axios';

const Chart = (): JSX.Element => {
  const style = useStyle();
  const [pente, setPente] = React.useState(0);
  const [mot, setMot] = React.useState('');
  const [max, setMax] = React.useState(30);
  const [data, setData] = React.useState([
    ['Date', 'Value'],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0],
    [7, 0],
    [8, 0],
    [9, 0],
    [10, 0],
    [11, 0],
    [12, 0],
    [13, 0],
    [14, 0],
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
      const mot = 'Pas de problème de';
      setMot(mot);
    }
    else if (pente > 0 || pente > 5) {
      const mot = 'Attention trop de ';
      setMot(mot);
    }
    else if (pente < 0 || pente > -5) {
      const mot = 'Attention remettre du';
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
            tmp.push([
              point.x,
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
            chartArea: {
              width: '100%',
              left: 45,
              top: 40,
              right: 45,
              bottom: 50,
              backgroundColor: {
                fill: '#b0dfff',
                fillOpacity: 0.3},
              height: 600,
            },
            hAxis: {slantedText: false, title: 'time'},
            vAxis: {viewWindow: {min: 0, max: 100}, title: 'mMol'},
            legend: {position: 'none'},
            backgroundColor: ' #b0dfff',
          }}
          rootProps={{'data-testid': '3'}}
          chartPackages={['corechart', 'controls']}
          controls={[
            {
              controlType: 'ChartRangeFilter',
              options: {
                filterColumnIndex: 0,
                ui: {
                  chartType: 'LineChart',
                  chartOptions: {
                    chartArea: {height: '150%', width: '100%', left: 5, right: 5, bottom: 25,
                      backgroundColor: {
                        fill: '#b0dfff',
                        fillOpacity: 0.3},
                    },
                    hAxis: {baselineColor: 'red', title: 'time'},
                    backgroundColor: ' #b0dfff',
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
          {mot} sucre
        </Typography>
        <Typography>
          Concentration maximum des {data.length} mesures: {max} mMol
        </Typography>
      </div>
    </>
  );
};

export default Chart;
