import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Navigator, View, Text, Image, TouchableHighlight } from 'react-native';
import Home from './components/home/home';
import Report from './components/report/report';

export default class AwesomeProject extends Component {

  goNext(navigator){
    navigator.push({
    title: 'Report',
    index: 1,
    });
  }  

  goBack(navigator){
    navigator.pop();
  }


  goRender(route, navigator){
    let retVal;
    switch(route.index) {
        case 0:
            retVal = <Home next={() => this.goNext(navigator)} back={() => this.goBack(navigator)}></Home>;
            break;
        case 1:
            retVal = <Report next={() => this.goNext(navigator)} back={() => this.goBack(navigator)}></Report>;
            break;
        default:
            retVal = <Home next={() => this.goNext(navigator)} back={() => this.goBack(navigator)}></Home>;
    }          
    return retVal;
  }

  goRenderFree(route, navigator){
    let retVal;
    switch(route.index) {
        case 0:
            retVal = <Home></Home>;
            break;
        case 1:
            retVal = <Report></Report>;
            break;
        default:
            retVal = <Home></Home>;
    }          
    return retVal;
  }

  render() {
    return (            
      <Navigator
        initialRoute={{ title: 'Awesome Scene', index: 0 }}
        renderScene={(route, navigator) =>
          this.goRender(route, navigator)
        }
      />      
    );
  }
}

/*
      <Navigator
        initialRoute={{ title: 'Awesome Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <Home route={route} navigator={navigator}></Home>
          <View style={styles.container}>
              <Image source={require('./images/justsurf.png')} />
              <Text style={styles.welcome}>
                  Tap to start or R to reload
              </Text>
          </View>                  

*/

/*
  let retVal;
  switch(route.index) {
      case 0:
          retVal = <Home route={route} navigator={navigator}/>;
          break;
      case 1:
          retVal = <Report route={route} navigator={navigator}/>;
          break;
      default:
          retVal = <Home route={route} navigator={navigator}/>;
  }          
  return retVal;
*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    margin: 10,
  },  
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
