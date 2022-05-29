import React from 'react';

const Buttons = ({timerid,setid,setTimer,setStopwatch,tab}) => {
    let setidfn=()=>{
        timerid==='start'?setid('stop'):timerid==='stop'?setid('start'):setid('start')
    }
    let resetfn=()=>{
        setid('reset');
        tab==='timer'?setTimer(5):setStopwatch(0);
    }
    
    return (
        <div className="Buttons">
    <button onClick={setidfn}>{timerid==='start'?'Stop':timerid==='stop'?'Start':'Start'}</button>
        <button
          onClick={resetfn }
        >
          Reset
        </button>
      </div>
    );
};

export default Buttons;