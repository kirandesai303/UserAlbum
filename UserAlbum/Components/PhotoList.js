import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image
 
} from 'react-native';
import {GetPhotos} from '../Data/GetPhotos'
import GridView from 'react-native-gridview';


class PhotoList extends Component{
constructor(props){
    super(props);
    this.state = ({
        PhotoAPI: [],
        itemId: '',
        itemName:''
      });
}
static navigationOptions = {
    title:'View Photos'
  }
  componentDidMount() {
    this.refreshDataFromAPI();
  }
  refreshDataFromAPI = () => {
    debugger;
    GetPhotos(itemId).then((Photos) => {
      this.setState({ PhotoAPI: Photos })
    }).catch((error) => {
      this.setState({
        PhotoAPI: [],
      });
    });
  }
  render() {
    const numColumns =2;
    const { navigation } = this.props;
    itemId = navigation.getParam('itemId', 'NO-ID');
    const { navigate } = this.props.navigation;  
    // itemName=navigation.getParam('itemName','');
    // const { navigate } = this.props.navigation;   
    return (
     <View>   
        {/* <Text>{itemId}</Text>  */}
      <GridView
      data={this.state.PhotoAPI}
       itemsPerRow={3} 
     
      renderItem={(item) => {
        return (
            <TouchableOpacity onPress={() =>
                navigate('ImageViewer',{itemId:item.id,ItemImage:item.thumbnailUrl})}>
            <Image source={{uri : item.thumbnailUrl }} style={{height:100,width:null,borderColor:'white',borderWidth:1,flex:1}}  ></Image>
            </TouchableOpacity> 
        );
      }}
    />    
    </View>
    )
  }
}

export default PhotoList