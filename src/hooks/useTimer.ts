import { useEffect, useRef } from "react";

const useTimer = (callback: () => void) => {

    const action = useRef<() => void>(() => {});
    const enable = useRef<boolean>(false);
  
    useEffect(() => {
        action.current = callback;
    }, [callback]);
  
    useEffect(() => {
      const tick = () => {
        if(!enable.current) return;
        action.current();
      };
  
        const interval = setInterval(tick, 1000);
        return () => {
          clearInterval(interval);
        };
    }, []);

    const stop = () => {
        enable.current = false;
    }

    const start = () => {
        enable.current = true;
    }

    return { start, stop };

}

export default useTimer;