import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NeomorphBlur, Neomorph} from 'react-native-neomorph-shadows';

import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 3px 0;
  padding-bottom: 10px;
`;

const Value = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const Name = styled.Text`
  color: white;
  font-size: 18px;
  padding-left: 10px;
`;

type AttributeProps = {
  attributeName: String;
  value: String | Number;
};

const Attribute = ({attributeName, value}: AttributeProps) => {
  return (
    <Container>
      <Neomorph
        style={{
          shadowRadius: 7,
          borderRadius: 100,
          backgroundColor: '#31343C',
          height: 35,
          width: 200,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Neomorph
          inner
          style={{
            shadowRadius: 7,
            borderRadius: 70 ,
            backgroundColor: '#11A8FD',
            height: 30,
            width: 80,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Value>{value}</Value>
        </Neomorph>
        <Name>{attributeName}</Name>
      </Neomorph>
    </Container>
  );
};

export default Attribute;
