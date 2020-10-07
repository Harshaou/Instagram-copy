import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

const index = ({data: {imageUri}}) => {
  return (
    <View>
      <Image
        style={styles.img}
        source={{
          uri: imageUri,
        }}
      />
    </View>
  );
};

export default index;
