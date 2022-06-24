import styled, { keyframes } from 'styled-components';
import type { labelProps } from './types';


const SButton = styled.button`
  margin-bottom: 0.8rem;
  text-align: center;
  background-color: #FCE38A;
  color: #000000;
  height: 4.5rem;
  width: 13.5rem;
  padding: 1rem 2.5rem;
  border: 0.2rem solid #EAFFD0;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 1.5rem;

  &: hover {
    background-color: #F38181;
  }
`;


const Wrapper = styled.div`
  text-align: left;
  background-color: #FCE38A;
  width: 75%;
  padding: 1em;
  padding-top: 0.4rem;
  margin: 1rem auto;
  border-radius: 2rem;
  border: 0.1rem solid #EAFFD0;

  @media (max-width: 510px) {
        width: 77%;
    }
  @media (max-width: 450px) {
        width: 80% 
    }
  @media (max-width: 390px) {
        padding: 0.5rem;
        width: 85%;
    }
  @media (max-width: 330px) {
        width: 90%;
    }
      
  @media (max-width: 275px) {
        width: 95%;

    }
`;


const Label = styled.label<labelProps>`
  color: #000000;

  ${props => {
    if (!props.submitted) { return `` }

    if (props.correct) { return 'background-color: rgb(0, 175, 0);' }
    else { return (props.selected) ? 'background-color: red;' : '' }
  }}

  @media (max-width: 390px) {
    padding: 0;
  }
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${rotate} 2s linear infinite;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

export { SButton, Wrapper, Label, Loader };