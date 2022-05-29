import React, { useEffect, useRef, useState } from "react";
import Buttons from "./Buttons";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";

const GoogleTimer = () => {
  const [timer, setTimer] = useState(5);
  const [stopwatch, setStopwatch] = useState(0);
  const [timerid, setTimerid] = useState(null);
  let watchid = useRef(null);
  const [watch, setwatch] = useState(null);

  const [tabid, setTabid] = useState("timer");

  useEffect(() => {
      if(tabid==='timer'){
        const id = setInterval(() => {
            timerid === "start" && timer > 0
              ? setTimer((prev) => prev - 1)
              : timerid === "stop"
              ? clearInterval(id)
              : clearInterval(id) && setTimer(0);
          }, 1000);
          return () => {
            clearInterval(id);
          };
      }else if(tabid==='stopwatch'){
        watch==='start'?start():watch==='stop'?stop():reset();
      }
    
  }, [timerid, timer,tabid,watch]);

 
  let start = () => {
    if (!watchid.current) {
      let id = setInterval(() => {
        setStopwatch((prev) => prev + 1);
      }, 1000);
      watchid.current = id;
    }
  };
  let stop = () => {
    clearInterval(watchid.current);
    watchid.current = null;
  };

  let reset = () => {
    clearInterval(watchid.current);
    setStopwatch(0);
    watchid.current = null;
  };

  return (
    <div className="App">
      <div className="Tabbar">
        <div
          onClick={() => setTabid("timer")}
          style={
            tabid === "timer"
              ? { textDecorationLine: "underline" }
              : { textDecoration: "none" }
          }
        >
          Timer
        </div>
        <div
          onClick={() => setTabid("stopwatch")}
          style={
            tabid === "stopwatch"
              ? { textDecorationLine: "underline" }
              : { textDecoration: "none" }
          }
        >
          StopWatch
        </div>
      </div>
      <hr />
      {tabid === "timer" ? (
        <Timer timer={timer} />
      ) : (
        <Stopwatch stopwatch={stopwatch} />
      )}
      <hr />
      <Buttons
        timerid={tabid === "timer" ? timerid : watch}
        setid={tabid === "timer" ? setTimerid : setwatch}
        tab={tabid}
        setTimer={setTimer}
        setStopwatch={setStopwatch}
      />
    </div>
  );
};

export default GoogleTimer;
