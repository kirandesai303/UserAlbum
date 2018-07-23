
import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { getUserAlbum } from '../Data/GetAlbums';

import GridView from 'react-native-gridview';

export class AlbumList extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      UserAlbumDetailAPI: [],
      itemId: '',
      itemName: ''
    });
  }
  static navigationOptions = {
    // header: null
    title:'View Album'
  }

  componentDidMount() {
    this.refreshDataFromAPI();
  }
  refreshDataFromAPI = () => {
    debugger;
    getUserAlbum(itemId).then((Albums) => {
      this.setState({ UserAlbumDetailAPI: Albums })
    }).catch((error) => {
      this.setState({
        UserAlbumDetailAPI: [],
      });
    });
  }

  render() {
    const numColumns = 2;
    const { navigation } = this.props;
    itemId = navigation.getParam('itemId', 'NO-ID');
    itemName = navigation.getParam('itemName', '');
    const { navigate } = this.props.navigation;
    return (
      <View style={{ backgroundColor: 'white' }}>

        <View>
           {/* style={styles.navBar}>
          <ImageBackground source={require('../Images/backbutton.png')}
            style={{
              width: 30,
              height: 50
            }}  

            onPress={() =>
              navigate('UserList', { name: 'Jane' })}>
          </ImageBackground> */}
          <Text style={{
            fontSize: 16,
            fontWeight: 'bold',
          }}>{itemName}</Text>
        </View>

        <GridView
          data={this.state.UserAlbumDetailAPI}
          itemsPerRow={2}
          style={{ marginLeft: 20, marginRight: 20 }}
          renderItem={(item) => {
            return (

              <TouchableOpacity onPress={() =>
                navigate('PhotoList', { itemId: item.id, itemName: item.title })}>
                <ImageBackground
                  style={{
                    flex: 1,
                    width: 150,
                    height: 100,
                    marginTop: 30,
                    marginLeft: 30,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: 'white',
                  }}
                  source={require('../Images/Albums.jpg')} >
                  <Text style={{ color: 'black', fontSize: 14, marginTop: 30, textAlign: 'center', fontWeight: 'bold' }} >{item.title}</Text>
                </ImageBackground>

              </TouchableOpacity>

            );
          }}
        />
      </View>
    )
  }
};
const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 150,
    marginTop: 30
  },
  BodyView: {
    backgroundColor: 'white'
  },
  FlatListDesign: {
    marginLeft: 30,
    marginTop: 10,
    marginRight: 30,
    borderRadius: 6,
    borderWidth: 1

  },
  navBar: {
    height: 40,
    backgroundColor: '#4caf50',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
})

export default AlbumList;
