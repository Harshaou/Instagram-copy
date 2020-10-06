import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import Styles from './styles';

const index = () => {
  return (
    <View>
      <Image
        style={styles.profileImg}
        source={{
          uri:
            'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        }}
      />
    </View>
  );
};

export default index;
