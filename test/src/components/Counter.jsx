import { useEffect, useState } from "react";
import { Button } from "./Button";

export function Counter() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  console.log("i'm being reexecuted this much" + count);

  useEffect(() => {
    console.log("Effect render");
  }, [flag]);
  return (
    <div
      className="w-64 h-64 mx-auto flex items-center
     justify-center bg-secondary-200 gap-16 p-16"
    >
      <p className="text-primary-800">{count}</p>
      <Button
        onClick={() => {
          setFlag(!flag);
          setCount(count + 1);
        }}
        variant="bg-primary-800"
      >
        Incrémenter
      </Button>
    </div>
  );
}
