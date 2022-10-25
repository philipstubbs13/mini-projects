import styles from '../styles/Home.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

import { Line } from 'react-chartjs-2';
import { useRef } from "react";

export default function Home() {
  const lineChart = useRef(null);

  function generateYouTubeGrowthData(viewsPerDay, totalDays) {
    var totalViewsArray = [viewsPerDay]

    for (var i = 1; i < totalDays; i++) {
      // [10]
      var videoCount = i + 1;
      var totalViews = totalViewsArray[i - 1] + (videoCount * viewsPerDay) // 10 + 20
      totalViewsArray.push(totalViews);
    }

    // Return
    // [10, 30, 60, 100] 10 views per day, 4 days
    return totalViewsArray
  }

  function renderChart() {
    const chart = lineChart.current; // <Line data={currentData} />
    console.log("rendering");
    var totalDays = parseInt(document.getElementById("totalDays").value);
    var viewsPerDay = parseInt(document.getElementById("viewsPerDay").value);
    console.log("Total days: " + totalDays);
    console.log("Views Per Day: " + viewsPerDay);

    chart.data = {
      labels: [...Array(totalDays).keys()], // [0, 1, 2, 3, 4, 5, 6, ...99]
      datasets: [
        { data: generateYouTubeGrowthData(viewsPerDay, totalDays) } // [10, 30, 60, 100]
      ]
    }

    chart.update();
  }

  const options = {
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "YouTube Growth Over Time With Daily Uploads",
        color: "white",
        font: {
          size: 18
        }
      }
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 1,
        borderColor: 'lightblue',
        fill: "start",
        backgroundColor: "lightblue"
      },
      point: {
        radius: 10,
        hitRadius: 10
      }
    },
    scales: {
      x: {
        display: true,
        ticks: {
          color: "white"
        }
      },
      y: {
        display: true,
        ticks: {
          color: "white"
        }
      }
    }
  }

  var defaultData = {
    labels: [...Array(100).keys()], // [0, 1, 2, 3, 4, 5, 6, ...99]
    datasets: [
      { data: generateYouTubeGrowthData(10, 100) } // [10, 30, 60, 100]
    ]
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Line data={defaultData} width={100} height={40} options={options} ref={lineChart}></Line>
        <h3>My daily uploads will get</h3>
        <input id="viewsPerDay" type="number" defaultValue={10} onChange={renderChart} />
        <h3>views per day over</h3>
        <input id="totalDays" type="number" defaultValue={100} onChange={renderChart} />
        <h3>days</h3>
      </main>
    </div>
  )
}
