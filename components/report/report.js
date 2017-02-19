import React, { PropTypes, Component } from 'react';
//import { Platform, StyleSheet, TouchableHighlight, View, Text, Picker } from 'react-native';
import { Platform, StyleSheet } from 'react-native';
import { Container, Content, Body, ListItem, Text, CheckBox } from 'native-base';

export default class Report extends Component {
  constructor(props) {
    super(props);
    
    //this.goHome = this.goHome.bind(this);

      /*
        <View>
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
        */    
  }
  
  _onPressButton() {
    console.log("You tapped the report!");
  } 

  render() {
    return (
        <Container>
          <Content>
              <ListItem>
                  <CheckBox checked={true} />
                  <Body>
                      <Text>Daily Stand Up</Text>
                  </Body>
              </ListItem>
              <ListItem>
                  <CheckBox checked={false} />
                  <Body>
                      <Text>Discussion with Client</Text>
                  </Body>
              </ListItem>
          </Content>
      </Container>
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
