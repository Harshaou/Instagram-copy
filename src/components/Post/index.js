import React from 'react';
import {View} from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const index = ({data}) => {
  return (
    <View>
      <Header data={data} />
      <Body data={data} />
      <Footer data={data} />
    </View>
  );
};

export default index;
