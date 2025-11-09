
import { useState, useEffect } from "react";
import * as S from "../src/App.styles"

function App() {
    const [isRunning, setIsRunning] = useState(false);
    const [milliseconds, setMiliseconds] = useState(0);
    const [rounds, setRounds] = useState([]);
  
    const updateTimer = () => {
        setMiliseconds(prevMiliseconds => prevMiliseconds + 10);
    };
    
    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(updateTimer, 10);
        } else {
            clearInterval(interval);
        }
        
        return () => clearInterval(interval);
        }, [isRunning]);


        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        const millisecondsRest = Math.floor((milliseconds % 1000) / 10);

    const updateRounds = () => {
      if (isRunning) {
        const time = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(millisecondsRest).padStart(2, '0')}`;
        setRounds((prevRounds) => [...prevRounds, time]);
      }
      setIsRunning(!isRunning);
      };    
  
  return (
    <S.AppContainer>
      <S.Counter>
        {String(minutes).padStart(2, '0')}.
        {String(seconds).padStart(2, '0')},
        {String(millisecondsRest).padStart(2, '0')}
      </S.Counter>
      <S.ButtonContainer>
          <S.ResetButton onClick={() => {setMiliseconds(0); setRounds([]); }}>Reset</S.ResetButton>
          < S.StartStopButton onClick={updateRounds} $isRunning={isRunning} >
            {isRunning ? "Stop" : "Start"}
          </S.StartStopButton>
      </S.ButtonContainer>
      <S.RoundResults>
         <ul>
          {rounds.map((round, index) => (
            <li key={index}>{round}</li>
           ))}
         </ul>
      </S.RoundResults>
    </S.AppContainer>
  );
}

export default App;
