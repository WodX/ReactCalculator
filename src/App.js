import logo from './logo.svg';
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
const [text, setText] = useState(0)
  return (
    <div id="root">
        <div className="app">
            <Display text={text}/>
            <Panel onClick={(value) => setText(value)}/>
        </div>
    </div>
  );
}

export default App;
