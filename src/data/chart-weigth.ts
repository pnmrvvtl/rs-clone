export const chartDataWeight = [
  {
    bmi: '>30',
    label: 'Healthy risk',
    values: [36, 39, 41, 43, 45.5, 48.3, 51.4, 54.2, 57, 60.2, 63.7, 68.1, 72, 77, 82],
    color: 'rgba(255, 255, 255, 0.6)',
  },
  {
    bmi: '25-30',
    label: 'Ideal weight',
    values: [50.6, 53.7, 56.7, 60.1, 63.1, 66.3, 70.1, 73.6, 77.9, 82.6, 87.5, 93, 97.5, 102.8, 108.9],
    color: 'rgba(51, 178, 28, 0.6)',
  },
  {
    bmi: '18.5-25',
    label: 'Owerweight',
    values: [62, 65.7, 70.1, 73, 77.6, 82, 86.5, 90.7, 96.1, 101, 107.3, 112.9, 118.1, 123.8, 129.6],
    color: 'rgba(228, 214, 16, 0.7)',
  },
  {
    bmi: '0-18.5',
    label: 'Obesity',
    values: [
      136.1, 136.1, 136.1, 136.1, 136.1, 136.1, 136.1, 136.1, 136.1, 136.1, 136.1, 136.1, 136.1, 136.1, 136.1,
    ],
    color: 'rgba(228, 55, 16, 0.7)',
  },
];

export const labelsCm = [
  '142',
  '147',
  '152',
  '157',
  '163',
  '168',
  '173',
  '178',
  '183',
  '188',
  '193',
  '198',
  '203',
  '208',
  '213',
];

export const labelsFt = [
  '4\'8"',
  '4\'10"',
  '5\'0"',
  '5\'2"',
  '5\'4"',
  '5\'6"',
  '5\'8"',
  '5\'10"',
  '6\'0"',
  '6\'2"',
  '6\'4"',
  '6\'6"',
  '6\'8"',
  '6\'10"',
  '7\'0"',
];

export const data = {
  labels: labelsCm,
  datasets: [
    ...chartDataWeight.map((obj) => {
      return {
        fill: true,
        label: obj.label,
        data: obj.values,
        title: {
          verticalAlign: 'center',
        },
        backgroundColor: obj.color,
        borderColor: 'rgba(255, 255, 250, 0.6)',
        borderWidth: 1,
        pointRadius: 3,
        pointHoverRadius: 5,
      };
    }),
  ],
};

export const dataFt = {
  labels: labelsFt,
  datasets: [
    ...chartDataWeight.map((obj) => {
      return {
        fill: true,
        label: obj.label,
        data: obj.values.map((value) => value * 2.2),
        title: {
          verticalAlign: 'center',
        },
        backgroundColor: obj.color,
        borderColor: 'rgba(255, 255, 250, 0.6)',
        borderWidth: 1,
        pointRadius: 3,
        pointHoverRadius: 5,
      };
    }),
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        font: {
          size: 16,
        },
      },
    },
    title: {
      display: true,
      text: 'Body Mass Index(BMI) for Adults',
      font: {
        size: 20,
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Height/cm',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Weight/kg',
      },
      max: 136.1,
      min: 36.3,
      ticks: {
        stepSize: 9.1,
      },
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
  },
};

export const optionsFt = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        font: {
          size: 16,
        },
      },
    },
    title: {
      display: true,
      text: 'Body Mass Index(BMI) for Adults',
      font: {
        size: 20,
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Height/feet',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Weight/ibs',
      },
      max: 300,
      min: 80,
      ticks: {
        stepSize: 20,
      },
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
  },
};
