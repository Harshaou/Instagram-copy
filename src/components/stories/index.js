import React from 'react';
import {View, FlatList} from 'react-native';
import Story from '../story';
import styles from './styles';

const data = [
  {
    imageUri:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'Harshad',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1502877828070-33b167ad6860?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'Anna',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1502368188434-0d1ff692629f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'Antony',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'Saleena',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'Kristy',
  },
];

const index = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        renderItem={({item}) => <Story item={item} />}
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default index;
