import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 3px 0;
`;

const Circle = styled.View`
  height: 35px;
  width: 80px;
  border: 3px solid #1f7686;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Value = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const Name = styled.Text`
  color: white;
  padding-left: 5px;
`;

type AttributeProps = {
  attributeName: String;
  value: String | Number;
};

const Attribute = ({attributeName, value}: AttributeProps) => {
  return (
    <Container>
      <Circle>
        <Value>{value}</Value>
      </Circle>
      <Name>{attributeName}</Name>
    </Container>
  );
};

export default Attribute;
