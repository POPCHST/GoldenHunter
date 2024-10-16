// Home.tsx
import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import './Home.css';
import { LanguageContext } from '../../context/LanguageContext';

// Register the components used in ChartJS
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const Home: React.FC = () => {
  // Define data and options for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August'],
    datasets: [
      {
        label: 'Trading Volume',
        data: [30, 45, 35, 50, 55, 60, 70, 70],
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66, 165, 245, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `Volume: ${context.raw}`;
          },
        },
      },
    },
  };
  const { language } = useContext(LanguageContext); // ใช้คอนเท็กซ์

  return (
    <section id="home" className="home">
      <div className="home-content">
        <h2>{language == "EN" ? "Welcome to My Trading Website" : "ยินดีต้อนรับสู่เว็บไซต์ของเรา"}</h2>
        <p>
          Stay updated with the latest trends and insights in the trading world.
          Our platform provides real-time data and analysis to help you make informed decisions.
        </p>
      </div>
      <div className="chart-container">
        <h3>Trading Volume Over Time</h3>
        <Line data={data} options={options} />
      </div>
    </section>
  );
};

export default Home;
