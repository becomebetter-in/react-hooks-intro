import React, {useState} from 'react';

function CounterWithHooks() {

  const [count, setCount] = useState(0);

  return (
    <div>
        <p>
          Clicked {count}x!
        </p>
        <p>
          <button onClick={() => setCount(count+1)}>Increment</button>
          <button onClick={() => setCount(count-1)}>Decrement</button>
        </p>
    </div>
  );
}

export default CounterWithHooks;
