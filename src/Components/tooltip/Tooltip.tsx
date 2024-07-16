import React from 'react';

interface TooltipProps {
  content: React.ReactNode;
  textColor?: string;
  bgColor?: string;
  arrowColor?: string;
  width?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ content, textColor = '#ffffff', bgColor = '#000000', arrowColor = '#000000', width = 'auto' }) => {
  return (
    <div className="relative inline-block">
      <div
        className="rounded-md p-2 text-center"
        style={{ color: textColor, backgroundColor: bgColor, width }}
      >
        {content}
      </div>
      <div
        className="absolute w-0 h-0"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: `8px solid ${arrowColor}`,
          bottom: '-8px',
        }}
      ></div>
    </div>
  );
};

export default Tooltip;
