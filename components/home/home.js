import React, { PropTypes, Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';


export default class Home extends Component {
  constructor(props) {
    super(props);   
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});


Home.propTypes = {
    goReport: PropTypes.func.isRequired,
    goStatistics: PropTypes.func.isRequired,
    goSettings: PropTypes.func.isRequired,
}
