import React, { PropTypes, Component } from 'react';
import { StyleSheet, TouchableHighlight, View, Text, Image } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    
    //this.goReport = this.goReport.bind(this);
  }
  
  _onPressButton() {
    console.log("You tapped home!");
  }  

  render() {
    return (
        <View style={styles.container}>
            <Image source={require('../../images/justsurf.png')} />            
            <TouchableHighlight onPress={this.props.next}>
              <Text style={styles.welcome}>
                  Tap to start or R to reload
              </Text>            
            </TouchableHighlight>
        </View>        
    );
  }
}

/*
            <TouchableHighlight onPress={this.goNext(this.props.navigator)}>
                <Text style={styles.welcome}>
                    Tap to start or R to reload
                </Text>
            </TouchableHighlight>
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


Home.propTypes = {
    next: PropTypes.func.isRequired,
    back: PropTypes.func.isRequired,
}
