import React, { useEffect, useState } from 'react'

const CounterTab = ({ start, end }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const duration = 2000; // 2 seconds
      const increment = (end / (duration / 10)); // Calculate step size
  
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.ceil(start));
        }
      }, 10);
  
      return () => clearInterval(timer);
    }, []);
  
  return (
    <>{count}</>
  )
}

export default CounterTab