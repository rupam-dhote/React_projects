import styled from "styled-components";

const Numberselector = ({ selectNum, setNum, error, setError }) => {
  const arraynum = [1, 2, 3, 4, 5, 6];

  function handleAndSet(value) {
    setError("");
    setNum(value);
  }

  return (
    <Numarea>
      <p className="error">{error}</p>
      <div className="flex">
        {arraynum.map((value, i) => (
          <Box
            key={i}
            onClick={() => handleAndSet(value)}
            isSelect={value === selectNum}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </Numarea>
  );
};
const Numarea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  cursor: pointer;
  gap: 1rem;
  .flex {
    display: flex;
    gap: 24px;
    padding: 0 10px;
  }
  p {
    font-size: 24px;
    font-weight: 600;
    padding: 0 10px;
  }

  .error {
    color: red;
  }
  @media (width<=720px) {
    .flex {
      display: flex;
      gap: 1rem;
    }
    p {
      font-size: 20px;
      font-weight: 600;
    }
  }
  @media (width<=370px) {
    .flex {
      display: flex;
      gap: 0.8rem;
    }
    p {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;
const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 24px;
  background: ${(props) => (props.isSelect ? "black" : "transparent")};
  color: ${(props) => (!props.isSelect ? "black" : "white")};
  @media (width<=720px) {
    width: 50px;
    height: 50px;
  }
`;
export default Numberselector;
