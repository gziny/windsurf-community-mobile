import React, { PropTypes, Component } from 'react';
import { Platform, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Thumbnail, DeckSwiper, Card, CardItem, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import DatePicker from 'react-native-datepicker'
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view'; 
import TabPage from '../tabpage/tabpage';


export default class Statistics extends Component {
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
                    <Title>Statistics</Title>
                </Body>
                <Right />
            </Header>

            <Content>

              <Container>

                <View name={this.props.index} tabLabel={this.props.index} style={styles.container}>
                    <Image source={require('../../images/logo.png')} style={styles.image}></Image>
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



/*

                    <TabPage index={1}></TabPage>
                    <TabPage index={2}></TabPage>
                    <TabPage index={3}></TabPage>


                <DatePicker
                        style={{width: 200}}
                        date={"2016-05-15"}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {console.log(date)}}
                    />

*/

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
