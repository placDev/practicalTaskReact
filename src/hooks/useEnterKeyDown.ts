import { useEffect, useRef } from "react";

const useEnterKeyDown = (callback: () => void) => {

    const action = useRef<() => void>(() => {});
  
    const eventName = "keydown";
    const keyCode = "Enter";

    useEffect(() => {
        action.current = callback;
    }, [callback]);
  
    useEffect(() => {
      const run = (event: KeyboardEvent) => {
        if(event.code != keyCode) return;
        action.current();
      };
  
        document.addEventListener(eventName, run);
        return () => document.removeEventListener(eventName, run);
    }, []);

}

export default useEnterKeyDown;