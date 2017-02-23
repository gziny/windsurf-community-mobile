import React, { PropTypes, Component } from 'react';
import { Platform, StyleSheet, View, Image, Text } from 'react-native';
import { Container, Header, Title, Thumbnail, DeckSwiper, Card, CardItem, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { ButtonCell,  createValidator,  emailValidator,  Form,   Section,  SwitchCell,  TextInputCell } from 'react-native-forms'

export default class Settings extends Component {
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
                    <Title>Settings</Title>
                </Body>
                <Right />
            </Header>

            <Content>

              <Container>                

                    <Form ref={(form) => this.form = form}>
                    <Section title={"Your Name"}>
                        
                        <TextInputCell
                        ref="input"
                        inputProps={{placeholder: "Input here"}}
                        />
                        <ButtonCell 
                        ref={'Submit'}
                        title={"Submit"}
                        textAlign={'center'}
                        titleColor={'red'}                        
                        ></ButtonCell>
                    </Section>
                    </Form>
                
              </Container>

            </Content>

            <Footer>
                <FooterTab>                                      
                    <Button onPress={this.props.goHome}>
                        <Icon name='home' />
                    </Button>
                    <Button onPress={this.props.goReport}>
                        <Icon name='person' />
                    </Button>
                    <Button onPress={this.props.goStatistics}>
                        <Icon name='pulse' />
                    </Button>
                    <Button>
                        <Icon name='settings' />
                    </Button>
                </FooterTab>
            </Footer>
        </Container>

    );
  }
}

const cards = [
    {
        text: 'Card One',
        name: 'One',
        image: require('../../images/logo.png'),
    },
    {
        text: 'Card Two',
        name: 'Two',
        image: require('../../images/logo.png'),
    },
    {
        text: 'Card Tree',
        name: 'Tree',
        image: require('../../images/logo.png'),
    },
];


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


Settings.propTypes = {
    goHome: PropTypes.func.isRequired,
    goReport: PropTypes.func.isRequired,
    goStatistics: PropTypes.func.isRequired,    
}
