import {Text} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import styles from './styles';

const index = ({item}) => {
  return (
    <View>
      <ProfilePicture uri={item.imageUri} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};

export default index;
