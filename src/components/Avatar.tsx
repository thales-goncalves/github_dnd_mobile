import React from 'react';

import styled from 'styled-components/native';

import {NeomorphBlur, Neomorph} from 'react-native-neomorph-shadows';

const AvatarImg = styled.Image`
  background-color: #4c5972;
  height: 115px;
  width: 115px;
  border-radius: 130px;
`;

type AvatarProps = {
  uri: String;
};

const Avatar = ({uri}: AvatarProps) => {
  return (
    <Neomorph
      style={{
        shadowRadius: 7,
        borderRadius: 100,
        backgroundColor: '#31343C',
        width: 160,
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Neomorph
        inner
        style={{
          shadowRadius: 7,
          borderRadius: 70,
          backgroundColor: '#11A8FD',
          width: 140,
          height: 140,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <NeomorphBlur
          style={{
            shadowRadius: 7,
            borderRadius: 60,
            backgroundColor: '#005EA3',
            width: 120,
            height: 120,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AvatarImg
            source={
              uri ? {uri: uri.toString()} : require('../assets/avatar.png')
            }
          />
        </NeomorphBlur>
      </Neomorph>
    </Neomorph>
  );
};

export default Avatar;
