import React from 'react';
import {NeomorphBlur, Neomorph} from 'react-native-neomorph-shadows';

const Neumorph: React.FC<{size: number}> = ({children, size}) => {
  return (
    <Neomorph
      style={{
        shadowOffset: {width: 7, height: 7},
        shadowRadius: 12,
        borderRadius: size / 2,
        backgroundColor: '#31343C',
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Neomorph
        inner
        style={{
          shadowOffset: {width: 7, height: 7},
          shadowRadius: 12,
          borderRadius: (size - 5) / 2,
          backgroundColor: '#2F353A',
          width: size - 5,
          height: size - 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <NeomorphBlur
          style={{
            shadowOffset: {width: 7, height: 7},
            shadowRadius: 12,
            borderRadius: size - 7 / 2,
            backgroundColor: '#31343C',
            width: size - 7,
            height: size - 7,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {children}
        </NeomorphBlur>
      </Neomorph>
    </Neomorph>
  );
};

export default Neumorph;
