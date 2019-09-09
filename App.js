/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,  
} from "react-navigation";
import Screen1 from "@containers/Screen1"
import Screen2 from "@containers/Screen2"
import Screen3 from "@containers/Screen3"
const RootNavigator = StackNavigator(
  {
    Screen1: { screen: Screen1 },
    Screen2: { screen: Screen2 },
    Screen3: { screen: Screen3 }
  },
  {
    initialRouteName: "Screen1",
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }

  }
);
type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <RootNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
