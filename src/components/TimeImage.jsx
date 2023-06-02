import { useState, useEffect } from 'react';
import day from '../img/day.jpg';
import night from '../img/night.jpg';

const TimeImage = ({ name }) => {
  const [date, setDate] = useState(new Date());

  const refreshClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(refreshClock, 1000);
    return () => clearInterval(timerID);
  }, []);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const rendered = date.toLocaleDateString('en-US', options);
  const timeFrame = date.toLocaleTimeString().split(':')[2].split(' ');
  // const name = 'Odo Peter';

  return (
    <div className="pt-5 full mr-16">
      <h2 className="mb-4 text-lg">
        Hey <span className="text-lg font-bold">{name.toUpperCase()}</span>,
        welcome, what are your plans for today?
      </h2>
      <div className="w-full rounded-xl h-60 shadow-img-shadow">
        <img
          src={timeFrame ? night : day}
          alt="daytime"
          className=" w-full h-full rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-col justify-center item-center mt-4 w-full h-16 bg-bg-color rounded-xl text-center shadow-time-shadow">
        <p className="font-bold pt-1">{rendered}</p>
        <p className="text-sm pt-2 tracking-widest">
          {date.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default TimeImage;
