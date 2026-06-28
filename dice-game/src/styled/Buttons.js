import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  border: none;
  width: 220px;
  background: #000000;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition:  0.3s background ease-in;
  border: 1px solid transparent;
  &:hover {
    background-color:var(--btncolor);
    color: black;
    border: 1px solid black;
    transition:  0.2s background ease-in;
  }
`;

export const OutlineBtn=styled(Button)`
 background-color:var(--btncolor);
 color: black;
 border: 1px solid black;
 &:hover {
    background-color:rgb(52, 52, 52);
    color: white;
    border: 1px solid rgb(52, 52, 52);
  }
`