import './App.css';
import { useState } from 'react';


const Button = ({value, className, onClick}) => {
  return (
    <div className={`button ${className}`} onClick={() => onClick(value)}><button>{value}</button></div>
  )
}

const Panel = ({onClick}) => {
  return (
    <div className="button-panel">
      <div>
          <Button value="AC" onClick={onClick} />
          <Button value="+/-" onClick={onClick} />
          <Button value="%" onClick={onClick} />
          <Button value="÷" className="orange" onClick={onClick} />
      </div>
      <div>
          <Button value="7" onClick={onClick} />
          <Button value="8" onClick={onClick} />
          <Button value="9" onClick={onClick} />
          <Button value="x" className="orange" onClick={onClick} />
      </div>
      <div>
          <Button value="4" onClick={onClick} />
          <Button value="5" onClick={onClick} />
          <Button value="6" onClick={onClick} />
          <Button value="-" className="orange" onClick={onClick} />
      </div>
      <div>
          <Button value="1" onClick={onClick} />
          <Button value="2" onClick={onClick} />
          <Button value="3" onClick={onClick} />
          <Button value="+" className="orange" onClick={onClick} />
      </div>
      <div>
          <Button value="0" className="wide" onClick={onClick} />
          <Button value="." onClick={onClick} />
          <Button value="=" className="orange" onClick={onClick} />
      </div>
    </div>
  );
}

const Display = ({text}) => {
  return (
    <div className="display">
      <div>{text}</div>
    </div>
  );
}

function App() {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  const [result, setResult] = useState();

  const handleDot = (value) => {
    if(!displayNumber.includes(".")){
      setDisplayNumber((current) => `${current}${value}`);
    }
  }
  
  const handleClick = (value) => {
    switch (value) {
      case "AC":
        setDisplayNumber(0);
        setIsWaiting(false);
        setResult();
        break;
    
      case "+/-":
        setDisplayNumber((current) => -current);
        break;

      case "%":
        setDisplayNumber((current) => current/100);
        break;
      
      case ".":
        handleDot(value)
        break;

      case "x":
        setIsWaiting(true)
        setResult((current) => current ? current + displayNumber + '*' : displayNumber + '*')
        break;
      
      case "÷":
        setIsWaiting(true)
        setResult((current) => current ? current + displayNumber + '/' : displayNumber + '/')
        break;

      case "+":
        setIsWaiting(true)
        setResult((current) => current ? current + displayNumber + '+' : displayNumber + '+')
        break;
      
      case "-":
        setIsWaiting(true)
        setResult((current) => current ? current + displayNumber + '-' : displayNumber + '-')
        break;

      case "=":
        const expression = result + displayNumber;
        console.log(expression);
        setDisplayNumber(eval(expression).toString())
        setResult(null)
        break;

      default:
        setDisplayNumber((current) => current === 0 || isWaiting ? (setIsWaiting(false), value) : `${current}${value}`);
        break;
    }
  } 

  return (
    <div id="root">
        <div className="app">
            <Display text={displayNumber}/>
            <Panel onClick={handleClick}/>
        </div>
    </div>
  );
}

export default App;
