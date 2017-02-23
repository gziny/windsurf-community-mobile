import React, { PropTypes, Component } from 'react';
import { Platform, StyleSheet, View, Image, Text } from 'react-native';
import { Container, Header, Title, Thumbnail, DeckSwiper, Card, CardItem, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view'; 
import UserName from './username'
import DateSession from './datesession'
import Spot from './spot'


export default class Report extends Component {
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
                    <Title>Report Your Session</Title>
                </Body>
                <Right />
            </Header>

            <Content>

              <Container>
                <ScrollableTabView 
                    renderTabBar={() => <DefaultTabBar />}> 

                    <UserName tabLabel={'Name'}></UserName>
                    <DateSession tabLabel={'Date'}></DateSession>
                    <Spot tabLabel={'Location'}></Spot>                    
                    <UserName tabLabel={'Direction'}></UserName>
                    <DateSession tabLabel={'Speed'}></DateSession>
                    <Spot tabLabel={'Wave'}></Spot>                    
                    <UserName tabLabel={'Satisfaction'}></UserName>
                    <DateSession tabLabel={'Summary'}></DateSession>
 
                </ScrollableTabView>
              </Container>

            </Content>

            <Footer>
                <FooterTab>                                      
                    <Button onPress={this.props.goHome}>
                        <Icon name='home' />
                    </Button>
                    <Button>
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


Report.propTypes = {
    goHome: PropTypes.func.isRequired,
    goStatistics: PropTypes.func.isRequired,
    goSettings: PropTypes.func.isRequired,
}
