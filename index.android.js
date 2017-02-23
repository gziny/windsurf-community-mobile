import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Navigator, View, Text, Image, TouchableHighlight } from 'react-native';
import Home from './components/home/home';
import Report from './components/report/report';
import Statistics from './components/statistics/statistics';
import Settings from './components/settings/settings';

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);

    this.goHome = this.goHome.bind(this);
    this.goReport = this.goReport.bind(this);
    this.goStatistics = this.goStatistics.bind(this);
    this.goSettings = this.goSettings.bind(this);    
    this.goRender = this.goRender.bind(this);    
  }

  goHome(){
      console.log('goHome');
      this.navigatorRef.resetTo({
      title: 'Home',
      index: 0,
      });
    }  

  goReport(){    
      console.log('goReport');
      this.navigatorRef.resetTo({
      title: 'Report',
      index: 1,
      });
    }  

  goStatistics(){
      console.log('goStatistics');
      this.navigatorRef.resetTo({
      title: 'Statistics',
      index: 2,
      });
    }  

  goSettings(){
      console.log('goSettings');
      this.navigatorRef.resetTo({
      title: 'Settings',
      index: 3,
      });
    }  

  goRender(){
    let retVal;
    
    console.log('goRender', this.routeRef.index);

    switch(this.routeRef.index) {
        case 0:
            retVal = <Home goReport={this.goReport} goStatistics={this.goStatistics} goSettings={this.goSettings}></Home>;
            break;
        case 1:
            retVal = <Report goHome={this.goHome} goStatistics={this.goStatistics} goSettings={this.goSettings}></Report>;
            break;
        case 2:
            retVal = <Statistics goHome={this.goHome} goReport={this.goReport} goSettings={this.goSettings}></Statistics>;
            break;
        case 3:
            retVal = <Settings goHome={this.goHome} goReport={this.goReport} goStatistics={this.goStatistics}></Settings>;
            break;
        default:
            retVal = <Home goReport={this.goReport} goStatistics={this.goStatistics} goSettings={this.goSettings}></Home>;
    }          
    return retVal;
  }

  render() {
    console.log('android render');    
    return (

      <Navigator
        initialRoute={{ title: 'Home', index: 0 }}
        renderScene={(route, navigator) => {
          console.log('renderScene -> call goRender');
          this.routeRef  = route;
          this.navigatorRef  = navigator;
          return this.goRender();
        }
        }
        />
      
    );
  }
}

/*
      <Navigator
        initialRoute={{ title: 'Home', index: 0 }}
        renderScene={(route, navigator) => {
          console.log('renderScene -> call goRender');
          this.routeRef  = route;
          this.navigatorRef  = navigator;
          return this.goRender();
        }
        }
        />
*/

Home.defaultProps = {
  routeRef: null,
  navigatorRef: null,
};
     
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
