import { useState } from 'react';
import './EightBall.css'

const EightBall = ( { answers } ) => {
  let randomAnswer;
  const [message, setMessage] = useState('Think of a Question');
  const [color, setColor] = useState('black');
  const changeMsgAndCol = () => {
    randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setMessage(randomAnswer.msg);
    setColor(randomAnswer.color);
  }

  return (
    <div className="EightBall" onClick={() => changeMsgAndCol()} style={{backgroundColor: color}}>
      <div className="EightBall-message">
        {message}
      </div>
    </div>
  )
}

export default EightBall;