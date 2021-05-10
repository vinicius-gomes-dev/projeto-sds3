import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccessTax } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type LabelsData = {
  categories: string[];
}

type SeriesData = {
  name: string;
  data: number[];
}

type ChartData = {
  labels: LabelsData;
  series: SeriesData[];
}


const BarChart = () => {

  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: []
    },
    series: [
      {
        name: "",
        data: []
      }
    ]

  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/success-tax-by-seller`)
      .then(response => {
        const data = response.data as SaleSuccessTax[];
        const myLabels = data.map(label => label.sellerName);
        const mySeries = data.map(series => round(100 * (series.deals / series.visited), 1));

        setChartData({
          labels: {
            categories: myLabels
          },
          series: [
            {
              name: "% Sucess",
              data: mySeries
            }
          ]
        });
      });
  }, []);




  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  };


  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );
}

export default BarChart;
