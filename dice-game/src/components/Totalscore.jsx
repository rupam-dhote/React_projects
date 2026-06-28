import styled from "styled-components";
const Totalscore = ({ score }) => {
  return (
    <Score>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Score>
  );
};

const Score = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
  @media (width<=720px) {
    h1 {
      font-size: 60px;
      line-height: 80px;
    }
    p {
      font-size: 16px;
      font-weight: 450;
    }
  }
  @media (width<=370px) {
    h1 {
      font-size: 50px;
      line-height: 70px;
    }
    p {
      font-size: 12px;
      font-weight: 400;
    }
  }
`;
export default Totalscore;
