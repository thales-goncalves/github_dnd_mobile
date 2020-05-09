import styled from 'styled-components/native';

const Button = styled.Button`
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  font-size: 15px;

  &:disabled {
    opacity: 0.6;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
