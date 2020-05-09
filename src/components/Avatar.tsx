import React from 'react';

import styled from 'styled-components/native';

const Img = styled.Image`
  background-color: red;
  height: 130px;
  width: 130px;
  border-radius: 130px;
`;

const Circle = styled.View`
  background-color: black;
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

export default Avatar;
