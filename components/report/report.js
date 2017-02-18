import React, { PropTypes, Component } from 'react';
import { Platform, StyleSheet, TouchableHighlight, View, Text, Picker } from 'react-native';
import {DropView} from 'react-native-drop-down';

export default class Report extends Component {
  constructor(props) {
    super(props);
    
    //this.goHome = this.goHome.bind(this);
  }
  
  _onPressButton() {
    console.log("You tapped the report!");
  } 

  render() {
    return (
        <View>
            <DropView>
            </DropView>
            <Picker selectedValue="" mode='dropdown' style={styles.picker} >
              <Picker.Item label="" value="" />
              <Picker.Item label="Gil Ziny" value="GZ" />
              <Picker.Item label="Moshe Cohen" value="MC" />
            </Picker>
            <TouchableHighlight onPress={this.props.back}>
                <Text style={styles.report}>
                    Tap to return
                </Text>
            </TouchableHighlight>
        </View>        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  picker: {
    ...Platform.select({
      ios: {
        fontSize: 25, 
        color: 'red', 
        textAlign: 'left', 
        fontWeight: 'bold',
      },
      android: {
      },
    }),
  },

  report: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    margin: 10,
  },
});


Report.propTypes = {
    next: PropTypes.func.isRequired,
    back: PropTypes.func.isRequired,
}
