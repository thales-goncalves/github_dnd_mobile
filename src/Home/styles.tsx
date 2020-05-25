import styled from 'styled-components/native';
// Ícones feitos por <a href="https://www.flaticon.com/br/autores/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
export const Container = styled.View`
  background: #353a40;
  font-family: 'Roboto';
  height: 100%;
`;

export const Header = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px;
  min-height: 80px;
`;

export const SearchInput = styled.TextInput`
  color: #fff;
  font-size: 20px;
  height: 60px;
  padding: 15px;
  width: 300px;
`;

export const SearchButton = styled.TouchableOpacity`
  align-items: center;
  border-radius: 30px;
  display: flex;
  height: 60px;
  justify-content: center;
  width: 60px;
`;

export const SearchIcon = styled.Image`
  width: 30px;
  height: 30px;
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

export const Repositories = styled.View`
  padding-top: 30px;
  margin: 10px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Error = styled.Text`
  font-size: 10;
  color: red;
`;

export const Title = styled.Text``;
