import React from 'react';
import './FlavorItem.css';

const FlavorItem = () => {
  return (
    <div>
      <form>
        <label>Clock in/out</label>
        <input type='text'></input>
        <button className='btn'>Submit</button>
      </form>
      <form>
        <label>Lunch in/out</label>
        <input type='text'></input>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default FlavorItem;