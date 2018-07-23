
import React, { Component } from 'react';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import AlbumList from './Components/AlbumList';
import UserList from './Components/UserList';
import PhotoList from './Components/PhotoList';
import ImageViewer from './Components/ImageViewer';

const AppNavigator = createStackNavigator({
  UserList: { screen: UserList },
  AlbumList: { screen: AlbumList },
  PhotoList:{screen:PhotoList},
  ImageViewer:{screen:ImageViewer}
});
 class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

export default App