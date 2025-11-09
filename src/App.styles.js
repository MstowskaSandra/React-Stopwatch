import styled from "styled-components";


export const AppContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
height: fit-content;
min-height: 50rem;
background-color: black;
margin: 0;

`
export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 2rem;
margin-top: 1.25rem;
`

export const ResetButton = styled.button`
width: 6.25rem;
height: 6.25rem;
border-radius: 50%;
background-color:  #7c858f;
color: white;
font-size: 1.25rem;
border: none;
cursor: pointer;
transition: background-color 0.3s;

&:hover {
  background-color: #313438ff;
}
`


export const StartStopButton = styled.button`
width: 6.25rem;
height: 6.25rem;
border-radius: 50%;
background-color: ${(props) => (props.$isRunning ? " #660707" : "#244429")};
color:  ${(props) => (props.$isRunning ? "#f31212" :  "rgb(63, 238, 39)")};
font-size: 1.25rem;
border: none;
cursor: pointer;
transition: background-color 0.3s, box-shadow 0.3s, opacity 0.3s;

&:hover {
  background-color: ${(props) => (props.$isRunning ? " #930d0dff" : "#2c6134ff")};
}
`

export const Counter = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
background-color: black;
border: none;
color: white;
width: 25%;
margin: 3rem;
font-size: 5rem;
`

export const RoundResults = styled.div`
display: flex;
justify-content: center;
font-size: 1.5rem;
border: 0.1rem solid white;
width: auto;
min-width: 15rem;
min-height: 1rem;
margin-top: 2rem;
margin-bottom: 2rem;
color: white;

ul{
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  padding: 0.25rem 0;
}
`