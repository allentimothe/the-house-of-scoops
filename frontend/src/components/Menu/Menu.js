import React, { useState } from 'react';
import './Clock.css';
import { Link } from 'react-router-dom';

const Clock = () => {
  const day = new Date().getDay();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[day];
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
  const date = `${new Date().getMonth()+1}/${new Date().getDate()}/${new Date().getFullYear()}`;
      const [currentDate, setCurrentDate] = useState(date);
      const UpdatedDates = () => {
        let dates = `${new Date().getMonth()+1}/${new Date().getDate()}/${new Date().getFullYear()}`;
        setCurrentDate(dates);
      }
      setInterval(UpdatedDates, 50000);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 const time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);
    const UpdatedTimes = () => {
      let times = new Date().toLocaleTimeString();
      setCurrentTime(times);
    }

    setInterval(UpdatedTimes, 1000);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <div className='clock'>
        <div className='date'>
          <h2>{dayOfWeek}</h2>
          <h1>{currentDate}</h1>
        </div>
      <div className='clock-container'>
        <div className='time'>
          <p>{currentTime}</p>
        </div>
      </div>
        {/* <div className='btn-container'> 
          <div className='btn1'>
            <Link to='/task' className='btn'>Task</Link>
          </div>
          <div className='btn2'>
            <Link to='/punch' className='btn'>Punch</Link>
          </div>
        </div> */}
    
    </div>

)
}

export default Clock;