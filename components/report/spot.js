import React, { PropTypes, Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class Spot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

        <View style={styles.container}>
            <Text>Location:</Text>
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
});


Spot.propTypes = {
}
