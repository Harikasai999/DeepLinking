/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Linking} from 'react-native';


export default class Screen1 extends Component<Props> {
    componentDidMount(){
        Linking.getInitialURL().then(url => {
            alert("InitialURL: "+ url);
             this.navigate(url);
    
          });
    Linking.addEventListener('url', this._handleOpenURL);
    }
    
    
    componentWillUnmount() {
        Linking.removeEventListener('url', this._handleOpenURL);
     }
    
    _handleOpenURL =(event)=> {
     alert("_handleOpenURL: "+event.url);
     this.navigate(event.url);
    }
    
    
    navigate = (url) => {
         const { navigate } = this.props.navigation;
         var routeName
         if(url != null){
          console.log("Url not null:"+ url);
               const route = url.replace(/.*?:\/\//g, '');
               const id = route.match(/\/([^\/]+)\/?$/)[1];
               routeName = route.split('/')[1];
         }
    
    
         if (routeName != null ) {
           console.log("routeName: "+routeName);
           navigate(routeName)
         }
    
    
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignItems:'center',
   justifyContent:'center',
   backgroundColor:'pink'
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
