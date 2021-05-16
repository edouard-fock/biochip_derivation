import React from 'react';
import useStyle from './style';
import GoogleChart from 'react-google-charts';
import {Button, Typography} from '@material-ui/core';
import axios from 'axios';

const Chart = (): JSX.Element => {
  const style = useStyle();
  const [pente, setPente] = React.useState(0);
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
          console.log(tmp[18]);
          tendance(tmp);
        })
        .catch((error: any) => {
          console.error(error);
        });
  };

  return (
    <>
      <div className ={style.Button}>
        <Button onClick={callApi} variant="outlined">Mise à jour des données</Button>
      </div>
      <div className={style.card}>
        <GoogleChart
          width={'100%'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={data}
          options={{
            // Use the same chart area width as the control for axis alignment.
            chartArea: {height: '80%', width: '90%'},
            hAxis: {slantedText: false},
            vAxis: {viewWindow: {min: 0, max: 20}},
            legend: {position: 'none'},
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
                    chartArea: {width: '90%', height: '50%'},
                    hAxis: {baselineColor: 'none'},
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
      </div>
      <div className ={style.Pente}>
        <Typography variant="h3">
          Pente des {data.length} dernières prises de mesure: {pente.toPrecision(2)}
        </Typography>

      </div>
    </>
  );
};

export default Chart;
