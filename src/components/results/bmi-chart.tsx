import React, { useContext, useState } from 'react';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
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
import { ThemeContext } from '../../context/theme-context';

export default function BmiChart() {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

  const [chartData, setChartData] = useState(data);
  const [chartOptions, setChartOptions] = useState(options);
  const [isUnitsFeet, setUnitsFeet] = useState(true);
  const {theme} = useContext(ThemeContext)

  const changeUnits = () => {
    setChartData(isUnitsFeet ? dataFt : data);
    setChartOptions(isUnitsFeet ? optionsFt : options);
    setUnitsFeet(!isUnitsFeet);
  };

  return (
    <section className={styles['bmi-chart']} title='BMI-chart'>
      {chartDataWeight.map((obj, index) => {
        return <span key={obj.bmi} className={styles[`chart-title${index}`]}>BMI {obj.bmi}</span>;
      })}
      {isUnitsFeet ? (
        <Line options={optionsFt} data={dataFt} width={'100%'} height={'85%'} 
        />
      ) : (
        <Line options={options} data={data} width={'100%'} height={'85%'} />
      )}
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked color="success" onChange={() => changeUnits()} />}
          label="kg/ibs"
          sx={{
            position: 'absolute',
            top: '91%',
            left: '5%',
            color: theme === 'dark' ? '#fff' : '',
          }}
        />
      </FormGroup>
    </section>
  );
}
