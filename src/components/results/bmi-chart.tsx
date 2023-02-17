import React, { useState } from 'react';
import { Switch } from '@mui/material';
import styles from '../../pages/results-page/results-page.module.scss';
import { chartDataWeight, options, data, dataFt, optionsFt } from '../../data/chart-weigth';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

export default function BmiChart() {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

  const [chartData, setChartData] = useState(data);
  const [chartOptions, setChartOptions] = useState(options);
  const [isUnitsFeet, setUnitsFeet] = useState(true);

  const changeUnits = () => {
    setChartData(isUnitsFeet ? dataFt : data);
    setChartOptions(isUnitsFeet ? optionsFt : options);
    setUnitsFeet(!isUnitsFeet);
  };

  return (
    <section className={styles['bmi-chart']}>
      {chartDataWeight.map((obj, index) => {
        return (
          <span className={styles[`chart-title${index}`]}>
            BMI {obj.bmi}
          </span>
        );
      })}
      {isUnitsFeet ? (
        <Line options={optionsFt} data={dataFt} width={'100%'} height={'85%'} />
      ) : (
        <Line options={options} data={data} width={'100%'} height={'85%'} />
      )}
      <Switch onChange={() => changeUnits()} defaultChecked color="success" />
    </section>
  );
}
