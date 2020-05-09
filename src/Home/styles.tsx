import styled from 'styled-components/native';

export const TextInput = styled.TextInput`
  font-size: 15px;
  border-width: 1px;
  border-color: black;
  width: 300px;
  text-decoration: none;
  padding-left: 15px
`;

export const WrapperInput = styled.View`
  display: flex;
`;

export const Actions = styled.View`
  flex: 1;
  border-width: 1px;
  border-color: black;
  justify-content: center;
  align-self: center;
`;

export const Header = styled.View`
  margin: 10px;
  min-height: 80px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Content = styled.View`
  margin: 10px;
  min-height: 50px;
  flex-direction: row;
  justify-content: space-around;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const Footer = styled.View`
  margin: 10px;
  min-height: 50px;
`;

export const Error = styled.Text`
  font-size: 10;
  color: red;
`;
export const Title = styled.Text``;
