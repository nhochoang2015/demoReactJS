import React, { useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const LineWithPoints = () => {
  const [points, setPoints] = useState([
    { id: 1, x: 50, y: 50, content: 'Point 1' },
    { id: 2, x: 150, y: 100, content: 'Point 2' },
    { id: 3, x: 250, y: 150, content: 'Point 3' },
  ]);

  const handlePointClick = (pointId) => {
    ReactTooltip.show(document.getElementById(`point-${pointId}`));
  };

  return (
    <div className="relative">
      <svg className="line">
        <line x1="50" y1="50" x2="250" y2="150" stroke="black" strokeWidth="2" />
      </svg>

      {points.map((point) => (
        <div
          key={point.id}
          id={`point-${point.id}`}
          className="point"
          style={{ left: `${point.x}px`, top: `${point.y}px` }}
          onClick={() => handlePointClick(point.id)}
        >
          <ReactTooltip
            id={`point-${point.id}`}
            type="info"
            effect="solid"
            place="bottom"
            multiline={true}
          >
            {point.content}
          </ReactTooltip>
        </div>
      ))}
    </div>
  );
};

export default LineWithPoints;