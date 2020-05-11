import styled from 'styled-components/native';

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#FFF',
    fontFamily: 'Roboto',
    // backgroundColor: '#02091D',
  },

  searchUser: {
    width: 300,
    color: '#FFF',
    fontSize: 15,
    borderWidth: 2,
    borderColor: '#1F7686',
    paddingLeft: 15,
    paddingTop: 8,
    paddingBottom: 8,
  },

  searchButton: {
    marginLeft: -1,
    backgroundColor: '#1F7686',
  },

  textButton: {
    color: '#FFF',
    padding: 14,
    fontWeight: 'bold',
    fontSize: 15,
  },

  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  rankRepositories: {
    marginTop: 10,
  },
});

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
