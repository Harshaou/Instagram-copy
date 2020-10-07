import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const index = ({data: {caption, likesCount, postedAt}}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default index;
