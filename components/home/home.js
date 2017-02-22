import React, { PropTypes, Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';


export default class Home extends Component {
  constructor(props) {
    super(props);   
  }
  
  _onPressButton() {
    console.log("You tapped home!");
  }  

  render() {
    console.log('Home render')
    return (
        <Container>
            <Header >
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>WindSurf Community</Title>
                </Body>
                <Right />
            </Header>

            <Content>
            </Content>

            <Footer>
                <FooterTab>                                      
                    <Button>
                        <Icon name='home' />
                    </Button>
                    <Button onPress={this.props.goReport}>
                        <Icon name='person' />
                    </Button>
                    <Button onPress={this.props.goStatistics}>
                        <Icon name='pulse' />
                    </Button>
                    <Button onPress={this.props.goSettings}>
                        <Icon name='settings' />
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
  }
}

Home.defaultProps = {
  logo: require('../../images/logo.png')
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


Home.propTypes = {
    goReport: PropTypes.func.isRequired,
    goStatistics: PropTypes.func.isRequired,
    goSettings: PropTypes.func.isRequired,
}
