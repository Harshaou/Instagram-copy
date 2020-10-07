import React from 'react';
import {View} from 'react-native';
import Stories from '../../components/stories';
import Post from '../../components/Post';

const data = {
  user: {
    profileImg:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'John',
  },
  imageUri:
    'https://images.unsplash.com/photo-1602031241936-2cfde739dc79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  caption: 'Awsome pic',
  likesCount: 3,
  postedAt: '6 min ago',
};

const Index = () => {
  return (
    <View>
      <Stories />
      <Post data={data} />
    </View>
  );
};

export default Index;
