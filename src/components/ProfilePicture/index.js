import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

const index = ({uri, size = 70}) => {
  return (
    <View style={[styles.container, {width: size + 6, height: size + 6}]}>
      <Image
        style={[styles.profileImg, {width: size, height: size}]}
        source={{
          uri: uri,
        }}
      />
    </View>
  );
};

export default index;
