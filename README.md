# UserAlbum
set the path Java_home and android_home
npm install -g react-native-cli
Create Project
react-native init AwesomeProject
Latest version project gives the error
so install version 0.55.4
react-native init newproject --version react-native@0.55.4
cd AwesomeProject
run project
react-native run-android

-----------------------
If give some sdk error then open project in android studio,and installed it

---------------
vector-icons 
npm install react-native-vector-icons --save
---------------------

flex-
it gives the space for remaaning

--------------------

react-native init newproject --version react-native@0.55.4
-------------------------------------------
install react-native navigation package
npm install --save react-navigation

install swipeOut package
npm install --save react-native-swipeout

npm install react-native-modalbox@latest --save
npm install --save react-native-button-component


-----------------
css property
fontSize:20,
textAlign:'center'

---------------------



npm install react-native-search-filter --save




   <FlatList data={this.state.UserAlbumDetailAPI}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={() =>
                                navigate('UserList',{itemId:item.id})}>
               <CardView
                cardElevation={2}
               cardMaxElevation={2}
                cornerRadius={5}>
                  <ImageBackground
                    style={{ width: 100, height: 100,borderRadius:30}}>
                     {/* source={require('../Images/Album1.png')} */}
                    <Text style={{color:'black',marginTop:18,marginLeft:15}}>{item.title}</Text>
                  </ImageBackground>
                </CardView>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => item.id}>
        </FlatList>


  //<Text>itemId: {JSON.stringify(itemId)}</Text>    
    //   <View style={styles.BodyView}>
    //     <GridView
    //       data={this.state.UserAlbumDetailAPI}
         
    //       itemsPerRow={itemsPerRow}
    //       renderItem={(item) => {
    //     return (
    //       <View style={{ flex: 1, backgroundColor: '#8F8', borderWidth: 1 }}>
    //         <Text>{item.title}</Text>
    //       </View>
    //     );
    //   }}
    // />
    //   </View>
      // </View>









      // <View><Text>{this.props.navigation.state.params.UserDetailAPI.name}</Text>

      //   <View style={{flex: 1, flexDirection: 'row',marginLeft:40,marginTop:30}}>
      //   <View style={{width:150, height: 150, backgroundColor: 'powderblue',borderRadius:6}} >
      //     <Text>Album1</Text>
      //   </View>
      //   <View style={{flex: 1, flexDirection: 'column',marginLeft:30,marginRight:30}}>
      //       <View style={{width: 150, height:150, backgroundColor: 'skyblue',borderRadius:6}} >
      //       <Text>Album2</Text>
      //   </View>
      //   </View>
      // </View>
      // <FlatList data={this.state.UserAlbumDetailAPI}
      //     renderItem={({ item, index }) => {
      //       return (
      //         <TouchableOpacity onPress={() =>
      //                           navigate('UserList',{itemId:item.id})}>
              
      //             {/* <ImageBackground
      //               style={{ width: 100, height: 100,borderWidth:1}}
      //                 source={require('../Images/Album.jpg')} > */}
            
      //               <Text style={{color:'black',marginTop:30,marginLeft:15,marginRight:25}}>{item.title}</Text>
      //             {/* </ImageBackground> */}
              
      //         </TouchableOpacity>
      //       );
      //     }}
      //     keyExtractor={(item, index) => item.id} 
      //     numColumns = { 2 }
      //     style={styles.FlatListDesign}
      //     >
      //   </FlatList>

    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
http://prntscr.com/k9wx2q
