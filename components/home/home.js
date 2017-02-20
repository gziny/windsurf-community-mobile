import React, { PropTypes, Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';


export default class Home extends Component {
  constructor(props) {
    super(props);
    
  }
  
  _onPressButton() {
    console.log("You tapped home!");
  }  

  render() {
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
                    <Button onPress={this.props.next}>
                        <Icon name='home' />
                    </Button>
                    <Button onPress={this.props.next}>
                        <Icon name='person' />
                    </Button>
                    <Button onPress={this.props.next}>
                        <Icon name='pulse' />
                    </Button>
                    <Button onPress={this.props.next}>
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
    next: PropTypes.func.isRequired,
    back: PropTypes.func.isRequired,
}
