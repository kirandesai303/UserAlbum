import React, { Component } from 'react';
import {
  View,
  Image,ViewPagerAndroid
 
} from 'react-native';

class ImageViewer extends Component{
    render(){
        const { navigation } = this.props;
        itemId = navigation.getParam('itemId', 'NO-ID');
        ItemImage=navigation.getParam('ItemImage','Image')
        return(
            <View style={{ marginTop:120}}>
                  
                    <Image source={{uri : ItemImage }} 
                            style={{height:300,
                                    width:410,
                                    borderColor:'white',
                                    borderWidth:1,
                                  }}  ></Image>
                   
               
            </View>
         
        )
    }
}
export default ImageViewer