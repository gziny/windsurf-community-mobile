import React, { PropTypes, Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';



export default class Report extends Component {
  constructor(props) {
    super(props);

    this.state = {
          selectedItem: undefined,
          selected1: 'key1',
          results: {
              items: []
          }
      }       
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
                    <Title>Report Your Session</Title>
                </Body>
                <Right />
            </Header>

            <Content>


            </Content>

            <Footer>
                <FooterTab>                                      
                    <Button onPress={this.props.back}>
                        <Icon name='home' />
                    </Button>
                    <Button onPress={this.props.back}>
                        <Icon name='person' />
                    </Button>
                    <Button onPress={this.props.back}>
                        <Icon name='pulse' />
                    </Button>
                    <Button onPress={this.props.back}>
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
