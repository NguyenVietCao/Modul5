import { useState, useEffect } from 'react';

// Custom Hook
function useCounter(initialValue, step) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    console.log('Component did mount (initial render)');
    return () => {
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array, so this effect runs only once during mount and unmount.

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  return {
    count,
    increment,
    decrement,
  };
}

// Component sử dụng custom hook
function Counter1() {
  const { count, increment, decrement } = useCounter(0, 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
export default Counter1;
