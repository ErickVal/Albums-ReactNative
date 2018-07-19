//Import a Library to help crate a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a component
const App = () => (
  <View>
    <Header headerText={'Albums!!'} />
    <AlbumList />
  </View>
);

//Render it to Device
AppRegistry.registerComponent('albums', () => App);
