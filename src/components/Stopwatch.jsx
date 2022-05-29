import React from 'react';

const Stopwatch = ({stopwatch}) => {
    return (
        <div className='Stopwatch'>
            {stopwatch}s
        </div>
    );
};

export default Stopwatch;