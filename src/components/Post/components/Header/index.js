import React from 'react';
import {Text, View} from 'react-native';
import ProfilePicture from '../../../ProfilePicture';
import styles from './styles';

const index = ({
  data: {
    user: {profileImg, name},
  },
}) => {
  return (
    <View style={styles.container}>
      <ProfilePicture uri={profileImg} size={40} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default index;
