import { useState } from 'react';

const EightBall = ( { answers } ) => {
  const [message, setMessage] = useState('Think of a Question');
  const [color, setColor] = useState('black');
  const changeMsgAndCol = () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setMessage(randomAnswer.msg);
    setColor(randomAnswer.color);
  }
  return (
    <div className="EightBall" onClick={() => changeMsgAndCol()}>
      <li>message: {message}</li>
      <li>color: {color}</li>
    </div>
  )

}

export default EightBall;