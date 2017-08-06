import React from 'react';
import PropTypes from 'prop-types';

const BreakingText = ({text}) => {
  let possibleBreakPoints = [[0]],
      str = text.split('');
  str.forEach((char, i)=>{
    if(['.', '/', '\\', '-', ':', '_'].includes(char)){
      possibleBreakPoints[possibleBreakPoints.length-1].push(i+1);
      possibleBreakPoints.push([i+1]);
    };
  });
  possibleBreakPoints[possibleBreakPoints.length-1].push(text.length);
  return (
    <span>
      {possibleBreakPoints.map((sections, i)=>(
        <span
          key={i}
        >{text.slice(sections[0],sections[1])}<wbr />
        </span>
        ))}
    </span>
  );
};

BreakingText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BreakingText;
