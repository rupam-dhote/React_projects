import React from "react";
import Totalscore from "./Totalscore";
import Numberselector from "./Numberselector";
import styled from "styled-components";
import Rolldice from "./Rolldice";
import { useState } from "react";
import { Button, OutlineBtn } from "../styled/Buttons";
import Rules from "./Rules";


const Gameplay = () => {
  const [currDice, setDice] = useState(1);
  const [selectNum, setNum] = useState();
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [rulesCon, setRules] = useState(false);

  const resetScore = () => {
    setScore(0);
  };
  const generateNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const rolldice = () => {
    if (!selectNum) {
      setError("You have not selected any number");
      return;
    }
    const randomnum = generateNum(1, 7);

    if (randomnum === selectNum) {
      setScore(() => score + randomnum);
    } else {
      setScore(() => score - 1);
    }
    setNum(undefined);
    setDice(randomnum);
  };

  return (
    <Mainarea>
      <div className="top-area">
        <Totalscore score={score} />
        <Numberselector
          selectNum={selectNum}
          setNum={setNum}
          error={error}
          setError={setError}
        />
      </div>
      <Rolldice currDice={currDice} rolldice={rolldice} />
      <div className="btns">
        <OutlineBtn onClick={resetScore}>Reset Score</OutlineBtn>
        <Button onClick={()=>setRules((prev)=>!prev)}>
           { rulesCon ? "Hide":"Show"} Rules
        </Button>
      </div>
       
      {rulesCon && <Rules/>}
    </Mainarea>
  );
};
const Mainarea = styled.main`
  padding-top: 40px;
  .top-area {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-top: 20px;
  }
`;
export default Gameplay;
