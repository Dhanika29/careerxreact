import React, { useState, useEffect } from 'react';
import './App.css'; 
import { isVisible } from '@testing-library/user-event/dist/utils';

function Example() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    console.log(`The visibility is now: ${isVisible ? 'Visible' : 'Hidden'}`);}, [isVisible]);
    
  return (
    <div className="first" >
      {isVisible && <h1>Hello, I am visible</h1>}
      <div>
        <button onClick={() => setIsVisible(true)} >Show</button>
        <button onClick={() => setIsVisible(false)} >Hide</button>
      </div>
    </div>
  );
}

export default Example;
