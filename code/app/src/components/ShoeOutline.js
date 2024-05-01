import React from 'react';

export const ShoeOutline = ({ circleValues, handleToggleCircle }) => {
  // Calculate the positions of rectangles based on the shoe outline

  const colors = ['black', 'yellow', 'orange', 'red'];

  const rectanglePositions = [
    { x: 50, y: 0, width: 200, height: 100 },
    { x: 50, y: 100, width: 120, height: 100 },
    { x: 160, y: 100, width: 100, height: 50 },
    { x: 160, y: 150, width: 100, height: 50 },
    { x: 50, y: 200, width: 120, height: 140 },
    { x: 160, y: 200, width: 100, height: 70 },
    { x: 160, y: 270, width: 100, height: 70 },
    { x: 150, y: 340, width: 110, height: 60 },
    { x: 150, y: 380, width: 100, height: 40 },
    { x: 50, y: 340, width: 100, height: 100 },
  ];

  return (
    <svg width="300" height="450" viewBox="0 0 300 450">
      <defs>
        {/* Define a clip path using the shoe outline */}
        <clipPath id="shoeClip">
          <path
            d="M50,100 
            C 50,70 90,20 150,20 
            C 210,20 250,70 250,100 
            L 250,380 
            C 250,400 230,420 200,420 
            L 100,420 
            C 70,420 50,400 50,380 
            Z"
          />
        </clipPath>
      </defs>
      <g transform="translate(0, 25)">
        {/* Apply the clip path to the rectangles */}
        <g clipPath="url(#shoeClip)">
          {/* Render rectangles based on rectanglePositions and change their color */}
          {rectanglePositions.map((position, index) => (
            <rect
              key={index}
              x={position.x}
              y={position.y}
              width={position.width}
              height={position.height}
              stroke="#ddd"
              strokeWidth="1"
              fill={colors[circleValues[index]]}
              onClick={() => handleToggleCircle(index)}
            />
          ))}
        </g>
        {/* Shoe outline */}
        <path
          d="M50,100 
          C 50,70 90,20 150,20 
          C 210,20 250,70 250,100 
          L 250,380 
          C 250,400 230,420 200,420 
          L 100,420 
          C 70,420 50,400 50,380 
          Z"
          fill="none"
          stroke="#000"
          strokeWidth="4"
        />
      </g>
    </svg>
  );
};
