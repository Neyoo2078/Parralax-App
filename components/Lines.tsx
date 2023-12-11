import React from 'react';
import '../app/globals.css';

const Lines = () => {
  const myArray = [
    'circle',
    'x-shape',
    'circle',
    'x-shape',
    'circle',
    'x-shape',
    'circle',
    'x-shape',
    'circle',
    'x-shape',
    'circle',
    'x-shape',
    'circle',
    'x-shape',
    'circle',
    'x-shape',
    'circle',
    'x-shape',
    'circle',
    'x-shape',
    'circle',
    'x-shape',
    'circle',
    'x-shape',
  ];
  return (
    <div className="lines text-white  ">
      <div className="line-1">
        <div className="shapes">
          {myArray.map((shape, index) => (
            <div key={index} className={shape}></div>
          ))}
        </div>
      </div>
      <div className="line-2">
        <div className="shapes">
          {myArray.map((shape, index) => (
            <div key={index} className={shape}></div>
          ))}
        </div>
      </div>
      <div className="line-3">
        <div className="shapes">
          {myArray.map((shape, index) => (
            <div key={index} className={shape}></div>
          ))}
        </div>
      </div>
      <div className="line-4">
        <div className="shapes">
          {myArray.map((shape, index) => (
            <div key={index} className={shape}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lines;
