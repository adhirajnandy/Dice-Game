import React from 'react';

const Image = (props) => {
  return (
    <div>
        <img src={`/images/dice_${props.number}.png`} alt="dice_image" />
    </div>
  )
}

export default Image