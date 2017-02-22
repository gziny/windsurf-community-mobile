import React, { PropTypes, Component } from 'react';
import { Platform, StyleSheet, View, Image, Text } from 'react-native';
import { Container, Header, Title, Thumbnail, DeckSwiper, Card, CardItem, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';



export default class Statistics extends Component {
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
                    <Title>Statistics</Title>
                </Body>
                <Right />
            </Header>

            <Content>

              <Container>
                <View>
                    <DeckSwiper
                        dataSource={cards}
                        renderItem={item =>
                          <Card style={{ elevation: 3 }}>
                              <CardItem>
                                  <Left>
                                      <Thumbnail source={item.image} />
                                  </Left>
                                  <Body>
                                      <Text>{item.text}</Text>
                                      <Text note>NativeBase</Text>
                                  </Body>
                              </CardItem>
                              <CardItem cardBody>
                                  <Image style={{ resizeMode: 'cover', width: null, flex: 1, height: 300 }} source={item.image} />
                              </CardItem>
                              <CardItem>
                                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                  <Text>{item.name}</Text>
                              </CardItem>
                          </Card>}
                    />
                </View>
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
                    <Button>
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


Statistics.propTypes = {
    goHome: PropTypes.func.isRequired,
    goReport: PropTypes.func.isRequired,    
    goSettings: PropTypes.func.isRequired,
}
