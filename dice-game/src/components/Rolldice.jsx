import styled from "styled-components";

const Rolldice = ({ currDice, rolldice }) => {
  return (
    <DiceArea>
      <div className="dice-img" onClick={rolldice}>
        <img src={`/images/dice/dice_${currDice}.png`} alt="Dice" />
      </div>
      <p>Click On Dice To Roll</p>
    </DiceArea>
  );
};

const DiceArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  p {
    font-size: 24px;
  }
  .dice-img {
    cursor: pointer;
  }
`;

export default Rolldice;
