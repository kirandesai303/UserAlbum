
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,


} from 'react-native';
import { getUsers } from '../Data/GetUserDetails';
import SearchBar from 'react-native-e'
// class UserDetailsList extends Component {
//   render() {
//     return (
//         <View style={{ flex: 1 }}  >
//           <Text style={styles.UserListItemName}>{this.props.item.name}</Text>
//           <Text style={styles.UserListItemEmail}>{this.props.item.email}</Text>
//           <View style={{ height: 1, backgroundColor: 'black', marginLeft: 15, marginRight: 15, borderRadius: 10 }}>
//           </View>
//         </View>
//     );
//   }
// }


class UserList extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props)
    this.state = ({
      UserDetailAPI: []
    });
  }
  componentDidMount() {
    this.refreshDataFromAPI();
  }
  refreshDataFromAPI = () => {
    getUsers().then((User) => {
      this.setState({ UserDetailAPI: User })
    }).catch((error) => {
      this.setState({
        UserDetailAPI: [],
      });
    });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.input}>User Album</Text>
        </View>
        <View>
           <TextInput style={styles.searchInput}></TextInput> 
          {/* <SearchBar
            ref='searchBar'
            placeholder='Search'
          /> */}
        </View>

        <View style={styles.BodyView} >
          <FlatList data={this.state.UserDetailAPI}
            renderItem={({ item, index }) => {
              // console.warn(`item= ${JSON.stringify(item)},index =${index}`)
              return (
                <TouchableOpacity onPress={() =>
                  navigate('AlbumList', { itemId: item.id, itemName: item.name })}>
                  <View style={{ flex: 1 }} >
                    <Text style={styles.UserListItemName}>{item.name}</Text>
                    <Text style={styles.UserListItemEmail}>{item.email}</Text>
                    <View style={{ height: 1, backgroundColor: 'black', marginLeft: 15, marginRight: 15, borderRadius: 10 }}>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.toString()}>
          </FlatList>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  navBar: {
    height: 40,
    backgroundColor: '#4caf50',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 150
  },
  BodyView: {
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 10,
    marginBottom: 15,
  },
  UserListItemName: {
    color: 'black',
    fontSize: 16,
    marginLeft: 15,
    marginTop: 5
  },
  UserListItemEmail: {
    color: 'black',
    fontSize: 12,
    marginLeft: 15,
    marginTop: 5
  },
  searchInput: {
    marginHorizontal: 10,
    borderWidth: 1,
    marginBottom: 15,
    height: 40,
    marginTop: 10

  }
});

export default UserList;