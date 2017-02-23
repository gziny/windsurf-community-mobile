import React, { PropTypes, Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class TabPage extends Component {
  constructor(props) {
    super(props);

    this.getImage = this.getImage.bind(this);    
  }

  getImage(){
    let retVal;

    switch(this.props.index) {
        case 0:
            retVal = require('../../images/logo.png');
            break;
        case 1:
            retVal = require('../../images/logo.png');
            break;
        case 2:
            retVal = require('../../images/logo.png');
            break;
        default:
            retVal = require('../../images/logo.png');
    }
      
      return retVal;
  }
  
  render() {
    return (

        <View name={this.props.index} tabLabel={this.props.index} style={styles.container}>
            <Image source={require('../../images/logo.png')} style={styles.image}></Image>
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
  image: {
    width: 250,
    height: 200,
  },
});


TabPage.propTypes = {
    index: PropTypes.number.isRequired,
}
