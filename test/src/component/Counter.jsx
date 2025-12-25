import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="w-64 h-64 mx-aauto flex items-center justify-center bg-secondary-200 gap-16 p-16 ">
      <p className="text-primary-800">{count}</p>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
        variant="bg-primary-800"
      >
        Increment
      </Button>
    </div>
  );
};

export default Counter;
