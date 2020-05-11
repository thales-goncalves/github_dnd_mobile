import React from 'react';

import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

const Img = styled.Image`
  background-color: #4C5972;
  height: 125px;
  width: 125px;
  border-radius: 130px;
`;

const Circle = styled.View`
  background-color: #1f7686;
  height: 140px;
  width: 140px;
  border-radius: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type AvatarProps = {
  uri: String;
};

const Avatar = ({uri}: AvatarProps) => {
  return (
    <Circle>
      <Img
        source={uri ? {uri: uri.toString()} : require('../assets/avatar.png')}
      />
    </Circle>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
});

export default Avatar;
